const fs = require('fs');
const path = require('path');
const https = require('https');

const specificPrompts = {
  "Lollipop (3 Pieces)": "Crispy fried chicken lollipops arranged in a circle on a white round plate. The bone handles of the lollipops are wrapped in silver foil. A small white bowl of red chili dipping sauce is in the dead center of the plate. Bed of shredded green cabbage under the lollipops. Clean restaurant table background, authentic realistic food photo, shot on smartphone"
};

const menuDataPath = path.join(__dirname, 'menuData.js');
const rawMenuData = fs.readFileSync(menuDataPath, 'utf8');

const match = rawMenuData.match(/export const menuItems = (\[.*?\]);/s);
if (!match) {
  console.error("Could not parse menuItems from menuData.js");
  process.exit(1);
}

const menuItems = JSON.parse(match[1]);
const imagesDir = path.join(__dirname, '..', '..', 'public', 'images', 'menu');

const itemsToDownload = menuItems.filter(item => specificPrompts[item.name]).map(item => {
  return {
    id: item.id,
    name: item.name,
    prompt: specificPrompts[item.name]
  };
});

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Status ${response.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', err => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  console.log(`Re-downloading chicken lollipop matching the user's reference image...`);
  
  for (let i = 0; i < itemsToDownload.length; i++) {
    const item = itemsToDownload[i];
    const dest = path.join(imagesDir, `${item.id}.jpg`);
    
    let success = false;
    let attempts = 0;
    
    while (!success && attempts < 3) {
      attempts++;
      try {
        const seed = Math.floor(Math.random() * 100000);
        // Direct descriptive copy of the reference image
        const fullPrompt = `${item.prompt}, photo style, realistic texture, warm daylight, 8k resolution, no watermark, no digital rendering, no vector, clean table background ${seed}`;
        const encodedPrompt = encodeURIComponent(fullPrompt);
        const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=500&height=500&nologo=true&model=flux&seed=${seed}`;
        
        console.log(`[START] ${item.id} - ${item.name} (Attempt ${attempts})`);
        
        await new Promise(r => setTimeout(r, 4000));
        await downloadImage(url, dest);
        
        console.log(`[DONE]  ${item.id} downloaded successfully.`);
        success = true;
      } catch (err) {
        console.error(`[ERROR] ${item.id} failed:`, err.message);
        await new Promise(r => setTimeout(r, 10000));
      }
    }
  }
}

run().then(() => console.log('Finished downloading custom lollipop!'));

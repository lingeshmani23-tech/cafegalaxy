const fs = require('fs');
const path = require('path');
const https = require('https');

const searchTerms = {
  "Veg Sandwich": "Fresh Veg Sandwich India",
  "Potato Tikki Sandwich": "Aloo Tikki Sandwich India",
  "Grilled Veg Sandwich": "Grilled Vegetable Sandwich",
  "Grilled Veg Cheese Sandwich": "Grilled Cheese Veg Sandwich",
  "Chicken Sandwich": "Chicken Sandwich Cafe",
  "Chicken Cheese Sandwich": "Chicken Cheese Sandwich",
  "Grilled Chicken Sandwich": "Grilled Chicken Sandwich",
  "Grilled Chicken Cheese Sandwich": "Grilled Chicken Cheese Sandwich",
  "Corn Sandwich": "Sweet Corn Sandwich",
  "Corn Cheese Sandwich": "Corn Cheese Sandwich",
  "Club Sandwich": "Club Sandwich",
  "Veg Burger": "Veg Burger India",
  "Veg Cheese Burger": "Veg Cheese Burger",
  "Potato Tikki Burger": "Aloo Tikki Burger",
  "Twin Patty Burger": "Double Patty Burger",
  "Chicken Burger": "Crispy Chicken Burger",
  "Chicken Cheese Burger": "Chicken Cheese Burger",
  "French Fries": "French Fries",
  "Smiles": "Potato Smileys",
  "Potato Bites": "Potato Bites",
  "Cheesy Fries": "Cheese Loaded Fries",
  "Peri Peri Fries": "Peri Peri Fries",
  "Potato Wedges": "Potato Wedges",
  "Spicy Garlic Wedges": "Garlic Potato Wedges",
  "Veg Momos": "Veg Momos",
  "Paneer Momos": "Paneer Momos",
  "Corn Momos": "Corn Momos",
  "Chicken Momos": "Chicken Momos",
  "Hot & Crunchy": "Crispy Fried Chicken",
  "Hot Strips (3 Pieces)": "Chicken Strips",
  "Lollipop (3 Pieces)": "Chicken Lollipop",
  "Pop Corn Chicken": "Popcorn Chicken",
  "Vanilla Milkshake": "Vanilla Milkshake",
  "Butterscotch Milkshake": "Butterscotch Milkshake",
  "Strawberry Milkshake": "Strawberry Milkshake",
  "Blue Berry Milkshake": "Blueberry Milkshake",
  "Chocolate Milkshake": "Chocolate Milkshake",
  "Oreo Milkshake": "Oreo Milkshake",
  "Mint Mojito": "Mint Mojito",
  "Blu Bleed Mojito": "Blue Curacao Mojito Non Alcoholic",
  "Strawberry Mojito": "Strawberry Mojito",
  "Blueberry Mojito": "Blueberry Mojito",
  "Plain Tea": "Indian Tea",
  "Masala Tea": "Masala Chai",
  "Ginger Tea": "Ginger Tea",
  "Elachi Tea": "Cardamom Tea",
  "Chocolate Tea": "Chocolate Tea",
  "Nattu Shakarai Tea": "Palm Sugar Tea",
  "Karupatti Tea": "Karupatti Tea",
  "Chukku Tea": "Dry Ginger Tea",
  "Hibiscus Tea": "Hibiscus Tea",
  "Green Tea": "Green Tea",
  "Black Tea": "Black Tea",
  "Lemon Tea": "Lemon Tea",
  "Lemon Ginger Tea": "Lemon Ginger Tea",
  "Lemon Mint Tea": "Lemon Mint Tea",
  "Sulaimani Tea": "Sulaimani Tea",
  "Filter Kappi": "South Indian Filter Coffee",
  "Sukku Kappi": "Sukku Coffee",
  "Black Kappi": "Black Coffee",
  "Chocolate Kappi": "Chocolate Coffee",
  "Karupatti Kappi": "Palm Jaggery Coffee",
  "Hot Milk": "Hot Milk",
  "Badham Milk": "Badam Milk",
  "Boost": "Boost Milk Drink",
  "Veg Puff": "Veg Puff",
  "Egg Puff": "Egg Puff",
  "Masala Maggi": "Masala Maggi",
  "Veg Maggi": "Vegetable Maggi",
  "Corn Maggi": "Corn Maggi",
  "Dark Chocolate Waffle": "Dark Chocolate Waffle",
  "Chocolate Overloaded Waffle": "Chocolate Loaded Waffle",
  "KitKat Filled Waffle": "KitKat Waffle",
  "Lemon Juice": "Fresh Lemon Juice",
  "Rose Milk": "South Indian Rose Milk"
};

const rawMenu = {
  "Sandwiches": ["Veg Sandwich", "Potato Tikki Sandwich", "Grilled Veg Sandwich", "Grilled Veg Cheese Sandwich", "Chicken Sandwich", "Chicken Cheese Sandwich", "Grilled Chicken Sandwich", "Grilled Chicken Cheese Sandwich", "Corn Sandwich", "Corn Cheese Sandwich", "Club Sandwich"],
  "Fries": ["French Fries", "Smiles", "Potato Bites", "Cheesy Fries", "Peri Peri Fries", "Potato Wedges", "Spicy Garlic Wedges"],
  "Burgers": ["Veg Burger", "Veg Cheese Burger", "Potato Tikki Burger", "Twin Patty Burger", "Chicken Burger", "Chicken Cheese Burger"],
  "Milkshakes": ["Vanilla Milkshake", "Butterscotch Milkshake", "Strawberry Milkshake", "Blue Berry Milkshake", "Chocolate Milkshake", "Oreo Milkshake"],
  "Mojitos": ["Mint Mojito", "Blu Bleed Mojito", "Strawberry Mojito", "Blueberry Mojito"],
  "Fried Momos": ["Veg Momos", "Paneer Momos", "Corn Momos", "Chicken Momos"],
  "Fried Chicken": ["Hot & Crunchy", "Hot Strips (3 Pieces)", "Lollipop (3 Pieces)", "Pop Corn Chicken"],
  "Soft Drinks": ["Lemon Juice", "Rose Milk"],
  "Tea": ["Plain Tea", "Masala Tea", "Ginger Tea", "Elachi Tea", "Chocolate Tea"],
  "Daisy Tea": ["Nattu Shakarai Tea", "Karupatti Tea", "Chukku Tea", "Hibiscus Tea", "Green Tea"],
  "Black Tea": ["Black Tea", "Lemon Tea", "Lemon Ginger Tea", "Lemon Mint Tea", "Sulaimani Tea"],
  "Hot Milk": ["Hot Milk", "Badham Milk", "Boost"],
  "Kappi": ["Filter Kappi", "Sukku Kappi", "Black Kappi", "Chocolate Kappi", "Karupatti Kappi"],
  "Puffs": ["Veg Puff", "Egg Puff"],
  "Maggi": ["Masala Maggi", "Veg Maggi", "Corn Maggi"],
  "Waffles": ["Dark Chocolate Waffle", "Chocolate Overloaded Waffle", "KitKat Filled Waffle"]
};

// Flatten to id
const itemsToDownload = [];
let idCounter = 1;

for (const items of Object.values(rawMenu)) {
  for (const name of items) {
    itemsToDownload.push({
      id: `menu_${idCounter++}`,
      name: name,
      searchTerm: searchTerms[name] || name
    });
  }
}

const imagesDir = path.join(__dirname, '..', '..', 'public', 'images', 'menu');

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
  console.log(`Downloading ${itemsToDownload.length} images...`);
  
  for (let i = 0; i < itemsToDownload.length; i++) {
    const item = itemsToDownload[i];
    const dest = path.join(imagesDir, `${item.id}.jpg`);
    
    // Check if file already exists and has size > 0 to skip
    if (fs.existsSync(dest)) {
      const stats = fs.statSync(dest);
      if (stats.size > 1000) {
        console.log(`[SKIP] ${item.id} already downloaded.`);
        continue;
      }
    }

    let success = false;
    let attempts = 0;
    
    while (!success && attempts < 5) {
      attempts++;
      try {
        const seed = Math.floor(Math.random() * 100000);
        const prompt = `Hyper realistic professional food photography of ${item.searchTerm}, clean minimal background, swiggy zomato delivery app style, high resolution DSLR, perfectly plated, no text, no watermark, visually attractive premium cafe style ${seed}`;
        const encodedPrompt = encodeURIComponent(prompt);
        const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=500&height=500&nologo=true&model=flux&seed=${seed}`;
        
        console.log(`[START] ${item.id} - ${item.searchTerm} (Attempt ${attempts})`);
        
        // Add 5 second delay between requests to avoid rate limit
        await new Promise(r => setTimeout(r, 5000));
        
        await downloadImage(url, dest);
        console.log(`[DONE]  ${item.id} downloaded successfully.`);
        success = true;
      } catch (err) {
        console.error(`[ERROR] ${item.id} failed:`, err.message);
        await new Promise(r => setTimeout(r, 10000)); // wait 10s on error
      }
    }
  }
}

run().then(() => console.log('All downloads finished!'));

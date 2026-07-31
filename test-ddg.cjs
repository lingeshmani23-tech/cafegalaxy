const https = require('https');

function searchImage(query) {
  return new Promise((resolve, reject) => {
    const url = 'https://html.duckduckgo.com/html/?q=' + encodeURIComponent(query + ' unsplash');
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    };
    
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // extract first image
        const match = data.match(/<img[^>]+src="([^">]+)"/g);
        if (match && match.length > 1) {
            console.log(match[1]);
        } else {
            console.log("No images found");
        }
      });
    }).on('error', reject);
  });
}

searchImage("Professional veg sandwich photography");

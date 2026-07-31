const https = require('https');

function searchYahooImages(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://images.search.yahoo.com/search/images?p=${encodeURIComponent(query)}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = data.match(/"imgurl":"(.*?)"/g);
        if (matches) {
          const urls = matches.map(m => m.split('"')[3].replace(/\\/g, ''));
          resolve(urls[0]);
        } else {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

searchYahooImages('Fresh Veg Sandwich').then(console.log).catch(console.error);

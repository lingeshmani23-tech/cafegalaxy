const https = require('https');
const cheerio = require('cheerio');

function getUnsplashImage(query) {
    return new Promise((resolve, reject) => {
        const url = 'https://unsplash.com/s/photos/' + encodeURIComponent(query);
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        }, res => {
            let data = '';
            res.on('data', c => data += c);
            res.on('end', () => {
                // Find all image URLs that look like photo URLs
                const matches = data.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^"&\\]+/g);
                if (matches && matches.length > 0) {
                    // filter and find a good one
                    const unique = [...new Set(matches.map(m => m.split('?')[0]))];
                    if (unique.length > 0) {
                        resolve(unique[0] + '?w=800&auto=format&fit=crop&q=80');
                    } else {
                        resolve(null);
                    }
                } else {
                    resolve(null);
                }
            });
        }).on('error', reject);
    });
}

getUnsplashImage("veg sandwich").then(console.log).catch(console.error);

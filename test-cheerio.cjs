const https = require('https');
const cheerio = require('cheerio');

function searchImage(query) {
    return new Promise((resolve, reject) => {
        const url = 'https://html.duckduckgo.com/html/?q=' + encodeURIComponent(query);
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        }, res => {
            let data = '';
            res.on('data', c => data += c);
            res.on('end', () => {
                const $ = cheerio.load(data);
                const img = $('.result__image img.result__icon__img').first().attr('src');
                if (img) resolve(img.startsWith('//') ? 'https:' + img : img);
                else resolve(null);
            });
        }).on('error', reject);
    });
}

searchImage("Professional veg sandwich photography unsplash").then(console.log).catch(console.error);

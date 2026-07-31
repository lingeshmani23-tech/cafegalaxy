const https = require('https');

function getVqd(query) {
    return new Promise((resolve, reject) => {
        const url = 'https://html.duckduckgo.com/html/?q=' + encodeURIComponent(query);
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
            let data = '';
            res.on('data', c => data += c);
            res.on('end', () => {
                const match = data.match(/vqd=([\d-]+)/);
                if (match) resolve(match[1]);
                else reject('vqd not found');
            });
        }).on('error', reject);
    });
}

async function searchDDG(query) {
    const vqd = await getVqd(query);
    return new Promise((resolve, reject) => {
        const url = `https://duckduckgo.com/i.js?q=${encodeURIComponent(query)}&vqd=${vqd}&p=1&s=0`;
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
            let data = '';
            res.on('data', c => data += c);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    resolve(json.results.map(r => r.image));
                } catch(e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

searchDDG("Professional veg sandwich photography").then(res => console.log(res[0])).catch(console.error);

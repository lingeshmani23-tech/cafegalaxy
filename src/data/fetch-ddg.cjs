const https = require('https');
const fs = require('fs');

https.get('https://html.duckduckgo.com/html/?q=burger', {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('ddg.html', data);
    console.log('Saved ddg.html');
  });
});

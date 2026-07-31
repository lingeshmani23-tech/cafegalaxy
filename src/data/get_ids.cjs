const https = require('https');
https.get('https://unsplash.com/s/photos/food', (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    const parts = body.split('"id":"');
    const ids = parts.slice(1).map(p => p.split('"')[0]).filter(id => id.length === 11);
    console.log(Array.from(new Set(ids)).slice(0, 30));
  });
});

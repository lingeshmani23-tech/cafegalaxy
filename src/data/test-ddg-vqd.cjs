const https = require('https');

function testDDG() {
  https.get('https://html.duckduckgo.com/html/?q=burger', {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
  }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      // Find where vqd is defined
      const matches = data.match(/vqd[a-zA-Z0-9="'_-]+/g);
      console.log('Matches:', [...new Set(matches)]);
    });
  });
}

testDDG();

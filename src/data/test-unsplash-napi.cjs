const https = require('https');

function testUnsplashApi() {
  const url = 'https://unsplash.com/napi/search/photos?query=burger&per_page=1&page=1';
  https.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Accept': 'application/json'
    }
  }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('Status:', res.statusCode);
      if (res.statusCode === 200) {
        try {
          const json = JSON.parse(data);
          console.log('Found:', json.results[0]?.urls?.raw);
        } catch(e) {
          console.log('Parse error', e.message);
        }
      } else {
        console.log('Error:', data.substring(0, 200));
      }
    });
  });
}

testUnsplashApi();

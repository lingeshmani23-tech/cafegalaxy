const https = require('https');

function searchWiki(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=pageimages&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1&pithumbsize=2000`;
  
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        const pages = json.query?.pages;
        if (pages) {
          const pageId = Object.keys(pages)[0];
          console.log("Found:", pages[pageId].thumbnail?.source);
        } else {
          console.log("Found: null");
        }
      } catch (e) {
        console.error(e);
      }
    });
  });
}

searchWiki('chicken burger');

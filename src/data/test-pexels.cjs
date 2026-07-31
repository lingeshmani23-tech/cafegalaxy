const { chromium } = require('playwright');
const fs = require('fs');

async function testPexels() {
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  
  const query = "chicken burger";
  const url = "https://www.pexels.com/search/" + encodeURIComponent(query);
  
  console.log("Navigating to:", url);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  
  const imgUrl = await page.evaluate(() => {
    // Pexels images usually have an 'src' pointing to images.pexels.com
    const imgs = Array.from(document.querySelectorAll('img'));
    for (const img of imgs) {
      if (img.src && img.src.includes('images.pexels.com/photos/')) {
        // Return a high res version by manipulating the URL params
        let url = new URL(img.src);
        url.search = '?auto=compress&cs=tinysrgb&w=2000';
        return url.toString();
      }
    }
    return null;
  });

  console.log("Found:", imgUrl);
  await browser.close();
}

testPexels().catch(console.error);

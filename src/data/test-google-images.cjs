const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function testGoogleImages() {
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  
  const query = "Professional crispy chicken burger restaurant photography";
  const url = "https://www.google.com/search?tbm=isch&q=" + encodeURIComponent(query);
  
  console.log("Navigating to:", url);
  await page.goto(url, { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(2000);
  
  const imgUrl = await page.evaluate(() => {
    // Google Images often stores the full res url in the click handler, 
    // but the thumbnails are immediately available. 
    // Let's just try to grab any image that looks like a result.
    const imgs = Array.from(document.querySelectorAll('img'));
    for (const img of imgs) {
      if (img.width > 100 && img.height > 100 && img.src.startsWith('http')) {
        return img.src;
      }
    }
    return null;
  });

  console.log("Found:", imgUrl);
  await browser.close();
}

testGoogleImages().catch(console.error);

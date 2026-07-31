const { chromium } = require('playwright');

async function testUnsplash() {
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  
  const query = "crispy chicken burger";
  const url = "https://unsplash.com/s/photos/" + encodeURIComponent(query);
  
  console.log("Navigating to:", url);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000); // Wait for React to hydrate
  
  const imgUrl = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    for (const img of imgs) {
      if (img.src && img.src.includes('images.unsplash.com/photo-')) {
        return img.src.split('?')[0] + '?w=2000&auto=format&fit=crop&q=80';
      }
    }
    return null;
  });

  console.log("Found:", imgUrl);
  await browser.close();
}

testUnsplash().catch(console.error);

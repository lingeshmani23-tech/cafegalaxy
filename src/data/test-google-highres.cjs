const { chromium } = require('playwright');
const fs = require('fs');

async function scrapeGoogleImagesHighRes() {
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  
  const query = "Professional crispy chicken burger restaurant photography";
  const url = "https://www.google.com/search?tbm=isch&q=" + encodeURIComponent(query);
  
  console.log("Navigating to:", url);
  await page.goto(url, { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(2000);
  
  // Click the first image thumbnail
  const firstImage = await page.$('div[data-ri="0"]');
  if (firstImage) {
    await firstImage.click();
    await page.waitForTimeout(3000); // Wait for the side panel to load the high-res image
    
    const highResUrl = await page.evaluate(() => {
      // The side panel usually has an img with class 'n3VNCb' or similar, but 
      // the best way is to look for the largest img tag on the page whose src is not a data URI
      const imgs = Array.from(document.querySelectorAll('img'));
      let bestImg = null;
      let maxArea = 0;
      for (const img of imgs) {
        if (img.src && img.src.startsWith('http') && !img.src.includes('gstatic.com')) {
          const area = img.width * img.height;
          if (area > maxArea) {
            maxArea = area;
            bestImg = img.src;
          }
        }
      }
      return bestImg;
    });
    console.log("Found High Res:", highResUrl);
  } else {
    console.log("No images found.");
  }

  await browser.close();
}

scrapeGoogleImagesHighRes().catch(console.error);

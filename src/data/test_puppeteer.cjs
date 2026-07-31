const puppeteer = require('puppeteer');

async function scrapeDDG(query) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto(`https://duckduckgo.com/?q=${encodeURIComponent(query)}&iax=images&ia=images`);
  
  try {
    // Wait for images to load
    await page.waitForSelector('img.tile--img__img', { timeout: 5000 });
    
    // Extract the image URLs
    const urls = await page.evaluate(() => {
      const images = document.querySelectorAll('img.tile--img__img');
      return Array.from(images).map(img => img.src).filter(src => src.startsWith('http'));
    });
    
    console.log(urls.slice(0, 3));
  } catch(e) {
    console.error('Failed to scrape:', e.message);
  } finally {
    await browser.close();
  }
}

scrapeDDG('Fresh Veg Sandwich');

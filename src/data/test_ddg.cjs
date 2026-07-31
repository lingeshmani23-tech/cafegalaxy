const { image_search } = require('duckduckgo-images-api');

async function test() {
  try {
    const results = await image_search({ query: 'Fresh Veg Sandwich' });
    console.log(results.slice(0, 3).map(r => r.image));
  } catch(e) {
    console.error(e);
  }
}

test();

const { image_search } = require('duckduckgo-images-api');

async function test() {
    try {
        const results = await image_search({ query: "Professional veg sandwich photography", moderate: true, iterations: 1 });
        console.log(results.slice(0, 3));
    } catch (e) {
        console.error(e);
    }
}
test();

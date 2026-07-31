const google = require('googlethis');

async function test() {
  const options = {
    page: 0,
    safe: false,
    additional_params: {
      hl: 'en'
    }
  };

  try {
    const response = await google.image('Fresh Veg Sandwich food photography', options);
    console.log(response.slice(0, 3).map(r => r.url));
  } catch(e) {
    console.error(e);
  }
}

test();

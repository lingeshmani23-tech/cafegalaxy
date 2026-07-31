const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'menuData.js');
let data = fs.readFileSync(dataPath, 'utf8');

const queries = {
  "Veg Sandwich": "Professional veg sandwich photography",
  "Potato Tikki Sandwich": "Professional aloo tikki sandwich photography",
  "Grilled Veg Sandwich": "Professional grilled vegetable sandwich photography",
  "Grilled Veg Cheese Sandwich": "Professional grilled cheese vegetable sandwich photography",
  "Corn Sandwich": "Professional sweet corn sandwich photography",
  "Corn Cheese Sandwich": "Professional corn cheese sandwich photography",
  "Club Sandwich": "Professional club sandwich photography",
  "French Fries": "Professional crispy french fries photography",
  "Smiles": "Professional potato smileys photography",
  "Potato Bites": "Professional crispy potato bites photography",
  "Cheesy Fries": "Professional cheese loaded fries photography",
  "Peri Peri Fries": "Professional peri peri fries photography",
  "Potato Wedges": "Professional potato wedges photography",
  "Spicy Garlic Wedges": "Professional garlic potato wedges photography",
  "Veg Burger": "Professional veg burger photography",
  "Veg Cheese Burger": "Professional cheese veg burger photography",
  "Potato Tikki Burger": "Professional aloo tikki burger photography",
  "Twin Patty Burger": "Professional double patty burger photography",
  "Chicken Burger": "Professional crispy chicken burger photography",
  "Chicken Cheese Burger": "Professional chicken cheese burger photography",
  "Vanilla Milkshake": "Professional vanilla milkshake photography",
  "Butterscotch Milkshake": "Professional butterscotch milkshake photography",
  "Strawberry Milkshake": "Professional strawberry milkshake photography",
  "Blue Berry Milkshake": "Professional blueberry milkshake photography",
  "Chocolate Milkshake": "Professional chocolate milkshake photography",
  "Oreo Milkshake": "Professional Oreo milkshake photography",
  "Mint Mojito": "Professional mint mojito photography",
  "Blu Bleed Mojito": "Professional blue mojito photography",
  "Strawberry Mojito": "Professional strawberry mojito photography",
  "Blueberry Mojito": "Professional blueberry mojito photography",
  "Veg Momos": "Professional fried veg momos photography",
  "Mushroom Momos": "Professional mushroom momos photography",
  "Paneer Momos": "Professional paneer momos photography",
  "Fried Momos": "Professional crispy fried momos photography",
  "Hot & Crunchy": "Professional crispy fried chicken photography",
  "Hot Strips (3 Pieces)": "Professional chicken strips photography",
  "Lollipop (3 Pieces)": "Professional chicken lollipop photography",
  "Pop Corn Chicken": "Professional popcorn chicken photography",
  "Plain Tea": "Professional Indian tea photography",
  "Masala Tea": "Professional masala chai photography",
  "Ginger Tea": "Professional ginger tea photography",
  "Elachi Tea": "Professional cardamom tea photography",
  "Chocolate Tea": "Professional chocolate tea photography",
  "Nattu Shakarai Tea": "Professional palm sugar tea photography",
  "Karupatti Tea": "Professional karupatti tea photography",
  "Chukku Tea": "Professional dry ginger tea photography",
  "Hibiscus Tea": "Professional hibiscus tea photography",
  "Green Tea": "Professional green tea photography",
  "Black Tea": "Professional black tea photography",
  "Lemon Tea": "Professional lemon tea photography",
  "Lemon Ginger Tea": "Professional lemon ginger tea photography",
  "Lemon Mint Tea": "Professional lemon mint tea photography",
  "Sulaimani Tea": "Professional sulaimani tea photography",
  "Hot Milk": "Professional hot milk photography",
  "Badham Milk": "Professional badam milk photography",
  "Boost": "Professional boost milk drink photography",
  "Filter Kappi": "Professional South Indian filter coffee photography",
  "Sukku Kappi": "Professional sukku coffee photography",
  "Black Kappi": "Professional black coffee photography",
  "Chocolate Kappi": "Professional chocolate coffee photography",
  "Karupatti Kappi": "Professional karupatti coffee photography",
  "Veg Puff": "Professional vegetable puff pastry photography",
  "Egg Puff": "Professional egg puff pastry photography",
  "Mushroom Puff": "Professional mushroom puff pastry photography",
  "Masala Maggi": "Professional masala Maggi noodles photography",
  "Veg Maggi": "Professional vegetable Maggi photography",
  "Corn Maggi": "Professional corn Maggi photography",
  "Dark Chocolate Waffle": "Professional dark chocolate waffle photography",
  "Chocolate Overloaded Waffle": "Professional chocolate loaded waffle photography",
  "KitKat Filled Waffle": "Professional KitKat waffle photography"
};

for (const [name, query] of Object.entries(queries)) {
    const searchString = 'name: "' + name + '"';
    const splitData = data.split(searchString);
    if (splitData.length > 1) {
        let after = splitData[1];
        const imgUrl = 'https://image.pollinations.ai/prompt/' + encodeURIComponent(query + ' authentic DSLR food photography shallow depth of field white background no text 8k') + '?width=800&height=600&nologo=true';
        after = after.replace(/image: "[^"]*"/, 'image: "' + imgUrl + '"');
        data = splitData[0] + searchString + after;
    }
}

fs.writeFileSync(dataPath, data, 'utf8');
console.log("Images updated via Pollinations AI");

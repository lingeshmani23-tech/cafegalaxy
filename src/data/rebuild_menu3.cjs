const fs = require('fs');
const path = require('path');

const categories = [
  { id: "tea", name: "☕ Tea", value: "Tea" },
  { id: "milkshakes", name: "🥤 Milkshakes", value: "Milkshakes" },
  { id: "mojitos", name: "🍹 Mojitos", value: "Mojitos" },
  { id: "burgers", name: "🍔 Burgers", value: "Burgers" },
  { id: "sandwiches", name: "🥪 Sandwiches", value: "Sandwiches" },
  { id: "fries", name: "🍟 Fries", value: "Fries" },
  { id: "fried-chicken", name: "🍗 Fried Chicken", value: "Fried Chicken" },
  { id: "fried-momos", name: "🥟 Fried Momos", value: "Fried Momos" },
  { id: "soft-drinks", name: "🥤 Soft Drinks", value: "Soft Drinks" },
  { id: "kappi", name: "☕ Kappi", value: "Kappi" },
  { id: "hot-milk", name: "🥛 Hot Milk", value: "Hot Milk" },
  { id: "puffs", name: "🧁 Puffs", value: "Puffs" },
  { id: "maggi", name: "🍜 Maggi", value: "Maggi" },
  { id: "waffles", name: "🧇 Waffles", value: "Waffles" },
  { id: "daisy-tea", name: "🍵 Daisy Tea", value: "Daisy Tea" },
  { id: "black-tea", name: "🫖 Black Tea", value: "Black Tea" }
];

const rawMenu = {
  "Sandwiches": [
    ["Veg Sandwich", 50, "veg,sandwich"],
    ["Potato Tikki Sandwich", 60, "potato,sandwich"],
    ["Grilled Veg Sandwich", 60, "grilled,sandwich"],
    ["Grilled Veg Cheese Sandwich", 70, "cheese,sandwich"],
    ["Chicken Sandwich", 80, "chicken,sandwich"],
    ["Chicken Cheese Sandwich", 100, "chicken,cheese,sandwich"],
    ["Grilled Chicken Sandwich", 100, "grilled,chicken,sandwich"],
    ["Grilled Chicken Cheese Sandwich", 110, "chicken,sandwich"],
    ["Corn Sandwich", 80, "corn,sandwich"],
    ["Corn Cheese Sandwich", 90, "corn,cheese,sandwich"],
    ["Club Sandwich", 90, "club,sandwich"]
  ],
  "Fries": [
    ["French Fries", 60, "french,fries"],
    ["Smiles", 60, "potato,fries"],
    ["Potato Bites", 60, "potato,bites"],
    ["Cheesy Fries", 70, "cheese,fries"],
    ["Peri Peri Fries", 70, "spicy,fries"],
    ["Potato Wedges", 70, "potato,wedges"],
    ["Spicy Garlic Wedges", 80, "garlic,wedges"]
  ],
  "Burgers": [
    ["Veg Burger", 60, "veg,burger"],
    ["Veg Cheese Burger", 70, "cheese,burger"],
    ["Potato Tikki Burger", 70, "potato,burger"],
    ["Twin Patty Burger", 80, "double,burger"],
    ["Chicken Burger", 90, "chicken,burger"],
    ["Chicken Cheese Burger", 100, "chicken,cheese,burger"]
  ],
  "Milkshakes": [
    ["Vanilla Milkshake", 60, "vanilla,milkshake"],
    ["Butterscotch Milkshake", 60, "milkshake"],
    ["Strawberry Milkshake", 60, "strawberry,milkshake"],
    ["Blue Berry Milkshake", 70, "blueberry,milkshake"],
    ["Chocolate Milkshake", 70, "chocolate,milkshake"],
    ["Oreo Milkshake", 80, "oreo,milkshake"]
  ],
  "Mojitos": [
    ["Mint Mojito", 60, "mint,mojito"],
    ["Blu Bleed Mojito", 60, "blue,mojito"],
    ["Strawberry Mojito", 60, "strawberry,mojito"],
    ["Blueberry Mojito", 60, "blueberry,mojito"]
  ],
  "Fried Momos": [
    ["Veg Momos", 60, "veg,momos"],
    ["Paneer Momos", 80, "paneer,momos"],
    ["Corn Momos", 90, "corn,momos"],
    ["Chicken Momos", 100, "chicken,momos"]
  ],
  "Fried Chicken": [
    ["Hot & Crunchy", 80, "fried,chicken"],
    ["Hot Strips (3 Pieces)", 100, "chicken,strips"],
    ["Lollipop (3 Pieces)", 110, "chicken,lollipop"],
    ["Pop Corn Chicken", 110, "popcorn,chicken"]
  ],
  "Soft Drinks": [
    ["Lemon Juice", 30, "lemon,juice"],
    ["Rose Milk", 40, "rose,milk"]
  ],
  "Tea": [
    ["Plain Tea", 10, "plain,tea"],
    ["Masala Tea", 15, "masala,tea"],
    ["Ginger Tea", 15, "ginger,tea"],
    ["Elachi Tea", 15, "cardamom,tea"],
    ["Chocolate Tea", 20, "chocolate,tea"]
  ],
  "Daisy Tea": [
    ["Nattu Shakarai Tea", 15, "indian,tea"],
    ["Karupatti Tea", 20, "indian,tea"],
    ["Chukku Tea", 20, "ginger,tea"],
    ["Hibiscus Tea", 20, "hibiscus,tea"],
    ["Green Tea", 20, "green,tea"]
  ],
  "Black Tea": [
    ["Black Tea", 15, "black,tea"],
    ["Lemon Tea", 15, "lemon,tea"],
    ["Lemon Ginger Tea", 20, "lemon,ginger,tea"],
    ["Lemon Mint Tea", 20, "lemon,mint,tea"],
    ["Sulaimani Tea", 20, "indian,tea"]
  ],
  "Hot Milk": [
    ["Hot Milk", 10, "hot,milk"],
    ["Badham Milk", 20, "almond,milk"],
    ["Boost", 20, "chocolate,milk"]
  ],
  "Kappi": [
    ["Filter Kappi", 20, "indian,coffee"],
    ["Sukku Kappi", 15, "ginger,coffee"],
    ["Black Kappi", 15, "black,coffee"],
    ["Chocolate Kappi", 20, "chocolate,coffee"],
    ["Karupatti Kappi", 20, "indian,coffee"]
  ],
  "Puffs": [
    ["Veg Puff", 15, "veg,puff,pastry"],
    ["Egg Puff", 20, "egg,puff,pastry"]
  ],
  "Maggi": [
    ["Masala Maggi", 40, "noodles"],
    ["Veg Maggi", 50, "veg,noodles"],
    ["Corn Maggi", 60, "corn,noodles"]
  ],
  "Waffles": [
    ["Dark Chocolate Waffle", 110, "dark,chocolate,waffle"],
    ["Chocolate Overloaded Waffle", 130, "chocolate,waffle"],
    ["KitKat Filled Waffle", 130, "kitkat,waffle"]
  ]
};

const menuItems = [];
let idCounter = 1;
let imgLockCounter = 1000;

for (const [category, items] of Object.entries(rawMenu)) {
  for (const item of items) {
    const name = item[0];
    const price = item[1];
    const keywords = item[2];
    const isVeg = !name.toLowerCase().includes('chicken') && !name.toLowerCase().includes('egg') && name !== "Hot & Crunchy" && name !== "Hot Strips (3 Pieces)" && name !== "Lollipop (3 Pieces)" && name !== "Pop Corn Chicken";
    
    // Use LoremFlickr with a unique lock per item to ensure consistent photos
    // Appending "food" to help it pick food-related images.
    const imageUrl = `https://loremflickr.com/800/600/${keywords},food/all?lock=${imgLockCounter++}`;
    
    menuItems.push({
      id: `menu_${idCounter++}`,
      category: category,
      name: name,
      description: `Premium ${name} crafted with perfection at Cafe Galaxy.`,
      price: price,
      isVeg: isVeg,
      isPopular: false,
      image: imageUrl
    });
  }
}

const fileContent = `// Auto-generated dynamic menu data
export const menuCategories = ${JSON.stringify(categories, null, 2)};

export const menuItems = ${JSON.stringify(menuItems, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'menuData.js'), fileContent);
console.log("menuData.js rebuilt successfully with " + menuItems.length + " items using LoremFlickr real photos!");

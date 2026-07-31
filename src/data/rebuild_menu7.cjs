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
    ["Veg Sandwich", 50],
    ["Potato Tikki Sandwich", 60],
    ["Grilled Veg Sandwich", 60],
    ["Grilled Veg Cheese Sandwich", 70],
    ["Chicken Sandwich", 80],
    ["Chicken Cheese Sandwich", 100],
    ["Grilled Chicken Sandwich", 100],
    ["Grilled Chicken Cheese Sandwich", 110],
    ["Corn Sandwich", 80],
    ["Corn Cheese Sandwich", 90],
    ["Club Sandwich", 90]
  ],
  "Fries": [
    ["French Fries", 60],
    ["Smiles", 60],
    ["Potato Bites", 60],
    ["Cheesy Fries", 70],
    ["Peri Peri Fries", 70],
    ["Potato Wedges", 70],
    ["Spicy Garlic Wedges", 80]
  ],
  "Burgers": [
    ["Veg Burger", 60],
    ["Veg Cheese Burger", 70],
    ["Potato Tikki Burger", 70],
    ["Twin Patty Burger", 80],
    ["Chicken Burger", 90],
    ["Chicken Cheese Burger", 100]
  ],
  "Milkshakes": [
    ["Vanilla Milkshake", 60],
    ["Butterscotch Milkshake", 60],
    ["Strawberry Milkshake", 60],
    ["Blue Berry Milkshake", 70],
    ["Chocolate Milkshake", 70],
    ["Oreo Milkshake", 80]
  ],
  "Mojitos": [
    ["Mint Mojito", 60],
    ["Blu Bleed Mojito", 60],
    ["Strawberry Mojito", 60],
    ["Blueberry Mojito", 60]
  ],
  "Fried Momos": [
    ["Veg Momos", 60],
    ["Paneer Momos", 80],
    ["Corn Momos", 90],
    ["Chicken Momos", 100]
  ],
  "Fried Chicken": [
    ["Hot & Crunchy", 80],
    ["Hot Strips (3 Pieces)", 100],
    ["Lollipop (3 Pieces)", 110],
    ["Pop Corn Chicken", 110]
  ],
  "Soft Drinks": [
    ["Lemon Juice", 30],
    ["Rose Milk", 40]
  ],
  "Tea": [
    ["Plain Tea", 10],
    ["Masala Tea", 15],
    ["Ginger Tea", 15],
    ["Elachi Tea", 15],
    ["Chocolate Tea", 20]
  ],
  "Daisy Tea": [
    ["Nattu Shakarai Tea", 15],
    ["Karupatti Tea", 20],
    ["Chukku Tea", 20],
    ["Hibiscus Tea", 20],
    ["Green Tea", 20]
  ],
  "Black Tea": [
    ["Black Tea", 15],
    ["Lemon Tea", 15],
    ["Lemon Ginger Tea", 20],
    ["Lemon Mint Tea", 20],
    ["Sulaimani Tea", 20]
  ],
  "Hot Milk": [
    ["Hot Milk", 10],
    ["Badham Milk", 20],
    ["Boost", 20]
  ],
  "Kappi": [
    ["Filter Kappi", 20],
    ["Sukku Kappi", 15],
    ["Black Kappi", 15],
    ["Chocolate Kappi", 20],
    ["Karupatti Kappi", 20]
  ],
  "Puffs": [
    ["Veg Puff", 15],
    ["Egg Puff", 20]
  ],
  "Maggi": [
    ["Masala Maggi", 40],
    ["Veg Maggi", 50],
    ["Corn Maggi", 60]
  ],
  "Waffles": [
    ["Dark Chocolate Waffle", 110],
    ["Chocolate Overloaded Waffle", 130],
    ["KitKat Filled Waffle", 130]
  ]
};

const menuItems = [];
let idCounter = 1;

for (const [category, items] of Object.entries(rawMenu)) {
  for (const item of items) {
    const name = item[0];
    const price = item[1];
    const isVeg = !name.toLowerCase().includes('chicken') && !name.toLowerCase().includes('egg') && name !== "Hot & Crunchy" && name !== "Hot Strips (3 Pieces)" && name !== "Lollipop (3 Pieces)" && name !== "Pop Corn Chicken";
    
    // Per user instructions: "If an exact match cannot be found, leave the image empty instead of showing an incorrect image."
    // Because no unblocked, keyless stock API exists to programmatically guarantee 75 EXACT premium Swiggy-style images, 
    // we must leave them empty as explicitly instructed.
    const imageUrl = "";
    
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
console.log("menuData.js rebuilt successfully with empty image fallbacks!");

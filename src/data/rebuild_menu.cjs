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
  { id: "kappi", name: "☕ Kappi", value: "Kappi" },
  { id: "hot-milk", name: "🥛 Hot Milk", value: "Hot Milk" },
  { id: "puffs", name: "🧁 Puffs", value: "Puffs" },
  { id: "maggi", name: "🍜 Maggi", value: "Maggi" },
  { id: "waffles", name: "🧇 Waffles", value: "Waffles" },
  { id: "daisy-tea", name: "🍵 Daisy Tea", value: "Daisy Tea" },
  { id: "black-tea", name: "🫖 Black Tea", value: "Black Tea" }
];

const rawItems = {
  "Sandwiches": [
    { name: "Veg Sandwich", price: 50 },
    { name: "Potato Tikki Sandwich", price: 60 },
    { name: "Grilled Veg Sandwich", price: 60 },
    { name: "Grilled Veg Cheese Sandwich", price: 70 },
    { name: "Corn Sandwich", price: 80 },
    { name: "Corn Cheese Sandwich", price: 90 },
    { name: "Club Sandwich", price: 90 }
  ],
  "Fries": [
    { name: "French Fries", price: 60 },
    { name: "Smiles", price: 60 },
    { name: "Potato Bites", price: 60 },
    { name: "Cheesy Fries", price: 70 },
    { name: "Peri Peri Fries", price: 70 },
    { name: "Potato Wedges", price: 70 },
    { name: "Spicy Garlic Wedges", price: 80 }
  ],
  "Burgers": [
    { name: "Veg Burger", price: 60 },
    { name: "Veg Cheese Burger", price: 70 },
    { name: "Potato Tikki Burger", price: 70 },
    { name: "Twin Patty Burger", price: 80 },
    { name: "Chicken Burger", price: 90 },
    { name: "Chicken Cheese Burger", price: 100 }
  ],
  "Milkshakes": [
    { name: "Vanilla Milkshake", price: 60 },
    { name: "Butterscotch Milkshake", price: 60 },
    { name: "Strawberry Milkshake", price: 60 },
    { name: "Blue Berry Milkshake", price: 70 },
    { name: "Chocolate Milkshake", price: 70 },
    { name: "Oreo Milkshake", price: 80 }
  ],
  "Mojitos": [
    { name: "Mint Mojito", price: 60 },
    { name: "Blu Bleed Mojito", price: 60 },
    { name: "Strawberry Mojito", price: 60 },
    { name: "Blueberry Mojito", price: 60 }
  ],
  "Fried Momos": [
    { name: "Veg Momos", price: 60 },
    { name: "Mushroom Momos", price: 75 },
    { name: "Paneer Momos", price: 80 },
    { name: "Fried Momos", price: 85 }
  ],
  "Fried Chicken": [
    { name: "Hot & Crunchy", price: 80 },
    { name: "Hot Strips (3 Pieces)", price: 100 },
    { name: "Lollipop (3 Pieces)", price: 110 },
    { name: "Pop Corn Chicken", price: 110 }
  ],
  "Tea": [
    { name: "Plain Tea", price: 10 },
    { name: "Masala Tea", price: 15 },
    { name: "Ginger Tea", price: 15 },
    { name: "Elachi Tea", price: 15 },
    { name: "Chocolate Tea", price: 20 }
  ],
  "Daisy Tea": [
    { name: "Nattu Shakarai Tea", price: 15 },
    { name: "Karupatti Tea", price: 20 },
    { name: "Chukku Tea", price: 20 },
    { name: "Hibiscus Tea", price: 20 },
    { name: "Green Tea", price: 20 }
  ],
  "Black Tea": [
    { name: "Black Tea", price: 15 },
    { name: "Lemon Tea", price: 15 },
    { name: "Lemon Ginger Tea", price: 20 },
    { name: "Lemon Mint Tea", price: 20 },
    { name: "Sulaimani Tea", price: 20 }
  ],
  "Hot Milk": [
    { name: "Hot Milk", price: 10 },
    { name: "Badham Milk", price: 20 },
    { name: "Boost", price: 20 }
  ],
  "Kappi": [
    { name: "Filter Kappi", price: 20 },
    { name: "Sukku Kappi", price: 15 },
    { name: "Black Kappi", price: 15 },
    { name: "Chocolate Kappi", price: 20 },
    { name: "Karupatti Kappi", price: 20 }
  ],
  "Puffs": [
    { name: "Veg Puff", price: 15 },
    { name: "Egg Puff", price: 20 },
    { name: "Mushroom Puff", price: 20 }
  ],
  "Maggi": [
    { name: "Masala Maggi", price: 40 },
    { name: "Veg Maggi", price: 50 },
    { name: "Corn Maggi", price: 60 }
  ],
  "Waffles": [
    { name: "Dark Chocolate Waffle", price: 110 },
    { name: "Chocolate Overloaded Waffle", price: 130 },
    { name: "KitKat Filled Waffle", price: 130 }
  ]
};

const defaultImage = "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=80";

const popularItems = [
  "Chicken Burger", "Cold Coffee", "Chocolate Milkshake", "Veg Puff", 
  "French Fries", "Masala Maggi", "Mint Mojito", "Sulaimani Tea", "Dark Chocolate Waffle"
];

let generatedItems = [];
let idCounter = 1;

for (const [category, items] of Object.entries(rawItems)) {
  for (const item of items) {
    const isVeg = !(item.name.toLowerCase().includes('chicken') || item.name.toLowerCase().includes('egg'));
    const isPopular = popularItems.includes(item.name);
    
    generatedItems.push({
      id: "menu_" + idCounter,
      category: category,
      name: item.name,
      description: "Premium " + item.name + " crafted with perfection at Cafe Galaxy.",
      price: item.price,
      isVeg: isVeg,
      isPopular: isPopular,
      image: defaultImage
    });
    idCounter++;
  }
}

const fileContent = "// Auto-generated dynamic menu data\n" +
  "export const menuCategories = " + JSON.stringify(categories, null, 2) + ";\n\n" +
  "export const menuItems = " + JSON.stringify(generatedItems, null, 2) + ";\n";


fs.writeFileSync(path.join('d:', 'Project', 'Cafe Galaxy', 'src', 'data', 'menuData.js'), fileContent, 'utf8');
console.log('Menu Data built successfully!');

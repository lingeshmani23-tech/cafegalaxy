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
    ["Veg Sandwich", 50, "sandwich,veg"],
    ["Potato Tikki Sandwich", 60, "sandwich,potato"],
    ["Grilled Veg Sandwich", 60, "sandwich,grilled"],
    ["Grilled Veg Cheese Sandwich", 70, "sandwich,cheese"],
    ["Chicken Sandwich", 80, "sandwich,chicken"],
    ["Chicken Cheese Sandwich", 100, "sandwich,chicken,cheese"],
    ["Grilled Chicken Sandwich", 100, "sandwich,grilled,chicken"],
    ["Grilled Chicken Cheese Sandwich", 110, "sandwich,grilled,chicken,cheese"],
    ["Corn Sandwich", 80, "sandwich,corn"],
    ["Corn Cheese Sandwich", 90, "sandwich,corn,cheese"],
    ["Club Sandwich", 90, "sandwich,club"]
  ],
  "Fries": [
    ["French Fries", 60, "fries,potato"],
    ["Smiles", 60, "fries,potato"],
    ["Potato Bites", 60, "fries,potato"],
    ["Cheesy Fries", 70, "fries,cheese"],
    ["Peri Peri Fries", 70, "fries,spicy"],
    ["Potato Wedges", 70, "wedges,potato"],
    ["Spicy Garlic Wedges", 80, "wedges,garlic"]
  ],
  "Burgers": [
    ["Veg Burger", 60, "burger,veg"],
    ["Veg Cheese Burger", 70, "burger,cheese"],
    ["Potato Tikki Burger", 70, "burger,potato"],
    ["Twin Patty Burger", 80, "burger,double"],
    ["Chicken Burger", 90, "burger,chicken"],
    ["Chicken Cheese Burger", 100, "burger,chicken,cheese"]
  ],
  "Milkshakes": [
    ["Vanilla Milkshake", 60, "milkshake,vanilla"],
    ["Butterscotch Milkshake", 60, "milkshake"],
    ["Strawberry Milkshake", 60, "milkshake,strawberry"],
    ["Blue Berry Milkshake", 70, "milkshake,blueberry"],
    ["Chocolate Milkshake", 70, "milkshake,chocolate"],
    ["Oreo Milkshake", 80, "milkshake,oreo"]
  ],
  "Mojitos": [
    ["Mint Mojito", 60, "mojito,mint"],
    ["Blu Bleed Mojito", 60, "mojito,blue"],
    ["Strawberry Mojito", 60, "mojito,strawberry"],
    ["Blueberry Mojito", 60, "mojito,blueberry"]
  ],
  "Fried Momos": [
    ["Veg Momos", 60, "momo,veg"],
    ["Paneer Momos", 80, "momo,paneer"],
    ["Corn Momos", 90, "momo,corn"],
    ["Chicken Momos", 100, "momo,chicken"]
  ],
  "Fried Chicken": [
    ["Hot & Crunchy", 80, "fried,chicken"],
    ["Hot Strips (3 Pieces)", 100, "fried,chicken"],
    ["Lollipop (3 Pieces)", 110, "fried,chicken,lollipop"],
    ["Pop Corn Chicken", 110, "fried,chicken,popcorn"]
  ],
  "Soft Drinks": [
    ["Lemon Juice", 30, "lemon,juice"],
    ["Rose Milk", 40, "rose,milk"]
  ],
  "Tea": [
    ["Plain Tea", 10, "tea"],
    ["Masala Tea", 15, "tea,masala"],
    ["Ginger Tea", 15, "tea,ginger"],
    ["Elachi Tea", 15, "tea,cardamom"],
    ["Chocolate Tea", 20, "tea,chocolate"]
  ],
  "Daisy Tea": [
    ["Nattu Shakarai Tea", 15, "tea,brown,sugar"],
    ["Karupatti Tea", 20, "tea,palm,sugar"],
    ["Chukku Tea", 20, "tea,dry,ginger"],
    ["Hibiscus Tea", 20, "tea,hibiscus"],
    ["Green Tea", 20, "tea,green"]
  ],
  "Black Tea": [
    ["Black Tea", 15, "tea,black"],
    ["Lemon Tea", 15, "tea,lemon"],
    ["Lemon Ginger Tea", 20, "tea,lemon,ginger"],
    ["Lemon Mint Tea", 20, "tea,lemon,mint"],
    ["Sulaimani Tea", 20, "tea,spiced,black"]
  ],
  "Hot Milk": [
    ["Hot Milk", 10, "hot,milk"],
    ["Badham Milk", 20, "almond,milk"],
    ["Boost", 20, "chocolate,milk"]
  ],
  "Kappi": [
    ["Filter Kappi", 20, "filter,coffee"],
    ["Sukku Kappi", 15, "dry,ginger,coffee"],
    ["Black Kappi", 15, "black,coffee"],
    ["Chocolate Kappi", 20, "chocolate,coffee"],
    ["Karupatti Kappi", 20, "palm,sugar,coffee"]
  ],
  "Puffs": [
    ["Veg Puff", 15, "puff,pastry,veg"],
    ["Egg Puff", 20, "puff,pastry,egg"]
  ],
  "Maggi": [
    ["Masala Maggi", 40, "maggi,noodles,masala"],
    ["Veg Maggi", 50, "maggi,noodles,veg"],
    ["Corn Maggi", 60, "maggi,noodles,corn"]
  ],
  "Waffles": [
    ["Dark Chocolate Waffle", 110, "waffle,dark,chocolate"],
    ["Chocolate Overloaded Waffle", 130, "waffle,chocolate"],
    ["KitKat Filled Waffle", 130, "waffle,kitkat"]
  ]
};

const menuItems = [];
let idCounter = 1;
let imgLock = 1000;

for (const [category, items] of Object.entries(rawMenu)) {
  for (const item of items) {
    const name = item[0];
    const price = item[1];
    const keywords = item[2];
    const isVeg = !name.toLowerCase().includes('chicken') && !name.toLowerCase().includes('egg') && name !== "Hot & Crunchy" && name !== "Hot Strips (3 Pieces)" && name !== "Lollipop (3 Pieces)" && name !== "Pop Corn Chicken";
    
    // Replace broken pollinations URL with reliable loremflickr URL
    const imageUrl = `https://loremflickr.com/400/400/${keywords},food/all?lock=${imgLock++}`;
    
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
console.log("menuData.js rebuilt successfully with " + menuItems.length + " working images!");

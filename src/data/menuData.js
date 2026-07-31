// Detailed Menu Items Data for Cafe Galaxy Dindigul
// Using precise categories for exact 1-to-1 filter mapping

export const menuCategories = [
  { id: "coffee", name: "☕ Coffee", value: "Coffee" },
  { id: "milkshakes", name: "🥤 Milkshakes", value: "Milkshakes" },
  { id: "juice", name: "🍊 Fresh Juice", value: "Fresh Juice" },
  { id: "mocktails", name: "🍸 Mocktails", value: "Mocktails" },
  { id: "burger", name: "🍔 Burger", value: "Burger" },
  { id: "sandwich", name: "🌮 Sandwich", value: "Sandwich" },
  { id: "pasta", name: "🍝 Pasta", value: "Pasta" },
  { id: "fried-rice", name: "🍚 Fried Rice", value: "Fried Rice" },
  { id: "noodles", name: "🍜 Noodles", value: "Noodles" },
  { id: "pastries", name: "🧁 Pastries", value: "Pastries" },
  { id: "bun", name: "🥖 Bun", value: "Bun" },
  { id: "puffs", name: "🥐 Puffs", value: "Puffs" },
  { id: "cookies", name: "🍪 Cookies", value: "Cookies" },
  { id: "bread", name: "🍞 Bread", value: "Bread" },
  { id: "snacks", name: "🍟 Tamil Nadu Snacks", value: "Tamil Nadu Snacks" },
  { id: "desserts", name: "🍩 Desserts", value: "Desserts" },
  { id: "tea", name: "☕ Tea", value: "Tea" },
  { id: "daisy-tea", name: "🌼 Daisy Tea", value: "Daisy Tea" },
  { id: "black-tea", name: "☕ Black Tea", value: "Black Tea" },
  { id: "hot-milk", name: "🥛 Hot Milk", value: "Hot Milk" },
  { id: "kappi", name: "☕ Kappi", value: "Kappi" },
  { id: "maggi", name: "🍜 Maggi", value: "Maggi" },
  { id: "waffles", name: "🧇 Waffles", value: "Waffles" },
  { id: "fries", name: "🍟 Fries", value: "Fries" },
  { id: "mojito", name: "🍹 Mojito", value: "Mojito" },
  { id: "fried-momos", name: "🥟 Fried Momos", value: "Fried Momos" },
  { id: "fried-chicken", name: "🍗 Fried Chicken", value: "Fried Chicken" },
  ,
  { id: "soft-drinks", name: "🥤 Soft Drinks", value: "Soft Drinks" },
];

export const menuItems = [
  // --- COFFEE ---
  {
    id: "c1",
    category: "Coffee",
    name: "Espresso",
    description:
      "Rich, bold, and highly concentrated shot of pure dark roast coffee.",
    price: 90,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1510972527409-cef7e2b761c3?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "c2",
    category: "Coffee",
    name: "Cappuccino",
    description:
      "Classic espresso shot layered with steamed milk and a thick layer of creamy foam.",
    price: 130,
    isVeg: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "c3",
    category: "Coffee",
    name: "Latte",
    description:
      "Smooth espresso balanced with a generous amount of warm, silky steamed milk.",
    price: 140,
    isVeg: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "c4",
    category: "Coffee",
    name: "Americano",
    description:
      "Espresso shot diluted with hot water, yielding a smooth, full-bodied coffee taste.",
    price: 100,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1551046713-bc755f483c6f?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "c5",
    category: "Coffee",
    name: "Mocha",
    description:
      "Luxurious espresso combined with gourmet dark chocolate syrup and steamed milk.",
    price: 160,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "c6",
    category: "Coffee",
    name: "Cold Coffee",
    description:
      "Velvety blended chilled espresso, whole milk, and premium vanilla bean ice cream.",
    price: 150,
    isVeg: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80",
  },

  // --- FRESH JUICE ---
  {
    id: "j1",
    category: "Fresh Juice",
    name: "Orange Juice",
    description:
      "Freshly squeezed citrus orange juice loaded with natural Vitamin C, served cold.",
    price: 90,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "j2",
    category: "Fresh Juice",
    name: "Watermelon Juice",
    description:
      "Hydrating, sweet and refreshing fresh watermelon juice with a hint of mint.",
    price: 80,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1589733901241-5e55cd297b7f?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "j3",
    category: "Fresh Juice",
    name: "Pineapple Juice",
    description:
      "Tropical fresh pineapple extract with a touch of rock salt and sweet syrup.",
    price: 90,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "j4",
    category: "Fresh Juice",
    name: "Grape Juice",
    description:
      "Juicy, rich black grapes pressed into a sweet, refreshing chilled beverage.",
    price: 95,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1603186742880-366b5790be90?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "j5",
    category: "Fresh Juice",
    name: "Lemon Juice",
    description:
      "Zesty lemon juice served with options of sweet, salted, or mixed style.",
    price: 50,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80",
  },

  // --- MOCKTAILS ---
  {
    id: "mk1",
    category: "Mocktails",
    name: "Blue Lagoon",
    description:
      "Vibrant blue curaçao mixed with fresh lime juice, simple syrup, and fizzy sprite.",
    price: 150,
    isVeg: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "mk2",
    category: "Mocktails",
    name: "Virgin Mojito",
    description:
      "Muddled garden mint leaves, fresh lime wedges, sparkling soda, and crushed ice.",
    price: 140,
    isVeg: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "mk3",
    category: "Mocktails",
    name: "Green Apple Mocktail",
    description:
      "Crisp green apple syrup combined with freshly squeezed lime and sprite.",
    price: 150,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "mk4",
    category: "Mocktails",
    name: "Mint Cooler",
    description:
      "Refreshing cucumber, lime and mint extract blended with soda to beat the heat.",
    price: 130,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?w=500&auto=format&fit=crop&q=80",
  },

  // --- PASTA ---
  {
    id: "ps1",
    category: "Pasta",
    name: "White Sauce Pasta",
    description:
      "Penne cooked in a creamy bechamel sauce, enriched with garlic, herbs, and cheese.",
    price: 190,
    isVeg: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "ps2",
    category: "Pasta",
    name: "Red Sauce Pasta",
    description:
      "Tangy and spicy pasta tossed in fresh tomato concasse, garlic, chili, and basil leaves.",
    price: 180,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "ps3",
    category: "Pasta",
    name: "Alfredo Pasta",
    description:
      "Rich penne pasta in authentic butter, cream, and parmesan cheese sauce with broccoli.",
    price: 210,
    isVeg: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=80",
  },

  // --- FRIED RICE ---
  {
    id: "fr1",
    category: "Fried Rice",
    name: "Veg Fried Rice",
    description:
      "Fluffy basmati rice stir-fried with finely chopped farm fresh veggies and soy sauce.",
    price: 140,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1603133872878-696658d7d9f6?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "fr2",
    category: "Fried Rice",
    name: "Egg Fried Rice",
    description:
      "Fragrant stir-fried rice tossed with scrambled farm-fresh eggs, spring onions, and spices.",
    price: 160,
    isVeg: false,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1603133872878-696658d7d9f6?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "fr3",
    category: "Fried Rice",
    name: "Chicken Fried Rice",
    description:
      "Classic Indo-Chinese fried rice with seasoned chicken chunks and spring onion greens.",
    price: 190,
    isVeg: false,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1603133872878-696658d7d9f6?w=500&auto=format&fit=crop&q=80",
  },

  // --- NOODLES ---
  {
    id: "n1",
    category: "Noodles",
    name: "Veg Noodles",
    description:
      "Wok-tossed Hakka noodles with crunchy cabbage, bell peppers, carrots, and spring onions.",
    price: 140,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "n2",
    category: "Noodles",
    name: "Egg Noodles",
    description:
      "Scrumptious wok noodles tossed with scrambled eggs, soy sauce, and mild pepper.",
    price: 160,
    isVeg: false,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "n3",
    category: "Noodles",
    name: "Chicken Noodles",
    description:
      "Classic Hakka noodles tossed with roasted chicken strips, fresh veggies, and a spicy punch.",
    price: 190,
    isVeg: false,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80",
  },

  // --- PASTRIES ---
  {
    id: "pas1",
    category: "Pastries",
    name: "Vanilla Pastry",
    description:
      "Light sponge pastry layered with delicate vanilla whipped cream and white chocolate curls.",
    price: 70,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1519869325930-281384150729?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "pas2",
    category: "Pastries",
    name: "Chocolate Pastry",
    description:
      "Rich dark chocolate slice topped with a layer of chocolate ganache and hazelnut chunks.",
    price: 80,
    isVeg: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500&auto=format&fit=crop&q=80",
  },

  // --- BUN ---
  {
    id: "bun1",
    category: "Bun",
    name: "Cream Bun",
    description:
      "Classic sweet, soft bakery bun loaded with sweetened fresh cream filling.",
    price: 40,
    isVeg: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "bun2",
    category: "Bun",
    name: "Sweet Bun",
    description:
      "Soft golden bun studded with sweet candied fruits (tutti-frutti) and coconut flakes.",
    price: 30,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80",
  },

  // --- COOKIES ---
  {
    id: "coo1",
    category: "Cookies",
    name: "Butter Cookies",
    description:
      "Melt-in-your-mouth premium bakery cookies rich in butter, served in a set of 4.",
    price: 60,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "coo2",
    category: "Cookies",
    name: "Choco Cookies",
    description:
      "Crisp cookies loaded with chocolate chips and cocoa powder, served in a set of 4.",
    price: 70,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format&fit=crop&q=80",
  },

  // --- BREAD ---
  {
    id: "br1",
    category: "Bread",
    name: "White Bread",
    description:
      "Freshly baked soft white bread loaf, sliced and ready to toast.",
    price: 45,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "br2",
    category: "Bread",
    name: "Brown Bread",
    description:
      "Nutritious high-fiber whole wheat brown bread loaf, sliced fresh.",
    price: 55,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80",
  },

  // --- TAMIL NADU SNACKS ---
  {
    id: "si1",
    category: "Tamil Nadu Snacks",
    name: "Samosa",
    description:
      "Crispy fried triangular pastry filled with seasoned potatoes, peas, and coriander.",
    price: 20,
    isVeg: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "si2",
    category: "Tamil Nadu Snacks",
    name: "Veg Roll",
    description:
      "Crunchy breaded roll stuffed with seasoned spring vegetables and dry spices.",
    price: 35,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "si3",
    category: "Tamil Nadu Snacks",
    name: "Cutlet",
    description:
      "Spiced potato and veggie patties, breaded and deep fried. Crisp on the outside, soft inside.",
    price: 30,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "si4",
    category: "Tamil Nadu Snacks",
    name: "Vadai",
    description:
      "Traditional crisp and fluffy lentil fritters (Medhu Vadai) flavored with black pepper.",
    price: 20,
    isVeg: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "si5",
    category: "Tamil Nadu Snacks",
    name: "Bonda",
    description:
      "Crispy, hot chickpea batter-fried potato dumplings infused with ginger and green chilies.",
    price: 20,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "si6",
    category: "Tamil Nadu Snacks",
    name: "Mixture",
    description:
      "Savory fried snacks mix consisting of sev, boondi, peanuts, and cashews.",
    price: 40,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "si7",
    category: "Tamil Nadu Snacks",
    name: "Murukku",
    description:
      "Crunchy, spiral-shaped rice flour snack seasoned with sesame seeds.",
    price: 30,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "si8",
    category: "Tamil Nadu Snacks",
    name: "Kara Sev",
    description:
      "Crispy, spiced chickpea flour noodles flavored with ground black pepper.",
    price: 40,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80",
  },

  // --- DESSERTS ---
  {
    id: "d1",
    category: "Desserts",
    name: "Brownie",
    description:
      "Warm, dense chocolate fudge brownie loaded with walnuts, served with a splash of hot chocolate syrup.",
    price: 110,
    isVeg: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "d2",
    category: "Desserts",
    name: "Ice Cream",
    description:
      "Double scoops of your choice: Madagascar Vanilla, Belgian Chocolate, or Alphonso Mango.",
    price: 90,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1501443715944-6d4e55c5c1ec?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "d3",
    category: "Desserts",
    name: "Sundae",
    description:
      "Three scoops of premium ice cream, fresh whipped cream, nuts, maraschino cherries, and hot fudge.",
    price: 180,
    isVeg: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "d4",
    category: "Desserts",
    name: "Falooda",
    description:
      "Chilled rose milk layered with basil seeds (sabja), vermicelli, mixed nuts, and a scoop of vanilla ice cream.",
    price: 160,
    isVeg: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80",
  },

  // --- TEA ---
  {
    id: "new_1001",
    category: "Tea",
    name: "Plain Tea",
    description: "Delicious Plain Tea made fresh.",
    price: 10,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1002",
    category: "Tea",
    name: "Masala Tea",
    description: "Delicious Masala Tea made fresh.",
    price: 15,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1003",
    category: "Tea",
    name: "Ginger Tea",
    description: "Delicious Ginger Tea made fresh.",
    price: 15,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1004",
    category: "Tea",
    name: "Elachi Tea",
    description: "Delicious Elachi Tea made fresh.",
    price: 15,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1005",
    category: "Tea",
    name: "Chocolate Tea",
    description: "Delicious Chocolate Tea made fresh.",
    price: 20,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },

  // --- DAISY TEA ---
  {
    id: "new_1006",
    category: "Daisy Tea",
    name: "Nattu Shakarai Tea",
    description: "Delicious Nattu Shakarai Tea made fresh.",
    price: 15,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1007",
    category: "Daisy Tea",
    name: "Karupatti Tea",
    description: "Delicious Karupatti Tea made fresh.",
    price: 20,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1008",
    category: "Daisy Tea",
    name: "Chukku Tea",
    description: "Delicious Chukku Tea made fresh.",
    price: 20,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1009",
    category: "Daisy Tea",
    name: "Hibiscus Tea",
    description: "Delicious Hibiscus Tea made fresh.",
    price: 20,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1010",
    category: "Daisy Tea",
    name: "Green Tea",
    description: "Delicious Green Tea made fresh.",
    price: 20,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },

  // --- BLACK TEA ---
  {
    id: "new_1011",
    category: "Black Tea",
    name: "Black Tea",
    description: "Delicious Black Tea made fresh.",
    price: 15,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1012",
    category: "Black Tea",
    name: "Lemon Tea",
    description: "Delicious Lemon Tea made fresh.",
    price: 15,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1013",
    category: "Black Tea",
    name: "Lemon Ginger Tea",
    description: "Delicious Lemon Ginger Tea made fresh.",
    price: 20,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1014",
    category: "Black Tea",
    name: "Lemon Mint Tea",
    description: "Delicious Lemon Mint Tea made fresh.",
    price: 20,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1015",
    category: "Black Tea",
    name: "Sulaimani Tea",
    description: "Delicious Sulaimani Tea made fresh.",
    price: 20,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },

  // --- HOT MILK ---
  {
    id: "new_1016",
    category: "Hot Milk",
    name: "Hot Milk",
    description: "Delicious Hot Milk made fresh.",
    price: 10,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1017",
    category: "Hot Milk",
    name: "Badham Milk",
    description: "Delicious Badham Milk made fresh.",
    price: 20,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1018",
    category: "Hot Milk",
    name: "Boost",
    description: "Delicious Boost made fresh.",
    price: 20,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },

  // --- KAPPI ---
  {
    id: "new_1019",
    category: "Kappi",
    name: "Filter Kappi",
    description: "Delicious Filter Kappi made fresh.",
    price: 20,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1020",
    category: "Kappi",
    name: "Sukku Kappi",
    description: "Delicious Sukku Kappi made fresh.",
    price: 15,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1021",
    category: "Kappi",
    name: "Black Kappi",
    description: "Delicious Black Kappi made fresh.",
    price: 15,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1022",
    category: "Kappi",
    name: "Chocolate Kappi",
    description: "Delicious Chocolate Kappi made fresh.",
    price: 20,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1023",
    category: "Kappi",
    name: "Karupatti Kappi",
    description: "Delicious Karupatti Kappi made fresh.",
    price: 20,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },

  // --- PUFFS ---
  {
    id: "new_1024",
    category: "Puffs",
    name: "Veg Puff",
    description: "Delicious Veg Puff made fresh.",
    price: 15,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1025",
    category: "Puffs",
    name: "Egg Puff",
    description: "Delicious Egg Puff made fresh.",
    price: 20,
    isVeg: false,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },

  // --- MAGGI ---
  {
    id: "new_1027",
    category: "Maggi",
    name: "Masala Maggi",
    description: "Delicious Masala Maggi made fresh.",
    price: 40,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1028",
    category: "Maggi",
    name: "Veg Maggi",
    description: "Delicious Veg Maggi made fresh.",
    price: 50,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1029",
    category: "Maggi",
    name: "Corn Maggi",
    description: "Delicious Corn Maggi made fresh.",
    price: 60,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },

  // --- WAFFLES ---
  {
    id: "new_1030",
    category: "Waffles",
    name: "Dark Chocolate",
    description: "Delicious Dark Chocolate made fresh.",
    price: 110,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1031",
    category: "Waffles",
    name: "Chocolate Overloaded",
    description: "Delicious Chocolate Overloaded made fresh.",
    price: 130,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1032",
    category: "Waffles",
    name: "KitKat Filled",
    description: "Delicious KitKat Filled made fresh.",
    price: 130,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },

  // --- SANDWICH ---
  {
    id: "new_1033",
    category: "Sandwich",
    name: "Veg Sandwich",
    description: "Delicious Veg Sandwich made fresh.",
    price: 50,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1034",
    category: "Sandwich",
    name: "Potato Tikki Sandwich",
    description: "Delicious Potato Tikki Sandwich made fresh.",
    price: 60,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1035",
    category: "Sandwich",
    name: "Grilled Veg Sandwich",
    description: "Delicious Grilled Veg Sandwich made fresh.",
    price: 60,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1036",
    category: "Sandwich",
    name: "Grilled Veg Cheese Sandwich",
    description: "Delicious Grilled Veg Cheese Sandwich made fresh.",
    price: 70,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1037",
    category: "Sandwich",
    name: "Corn Sandwich",
    description: "Delicious Corn Sandwich made fresh.",
    price: 80,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1038",
    category: "Sandwich",
    name: "Corn Cheese Sandwich",
    description: "Delicious Corn Cheese Sandwich made fresh.",
    price: 90,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1039",
    category: "Sandwich",
    name: "Club Sandwich",
    description: "Delicious Club Sandwich made fresh.",
    price: 90,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },

  // --- FRIES ---
  {
    id: "new_1040",
    category: "Fries",
    name: "French Fries",
    description: "Delicious French Fries made fresh.",
    price: 60,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1041",
    category: "Fries",
    name: "Smiles",
    description: "Delicious Smiles made fresh.",
    price: 60,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1042",
    category: "Fries",
    name: "Potato Bites",
    description: "Delicious Potato Bites made fresh.",
    price: 60,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1043",
    category: "Fries",
    name: "Cheesy Fries",
    description: "Delicious Cheesy Fries made fresh.",
    price: 70,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1044",
    category: "Fries",
    name: "Peri Peri Fries",
    description: "Delicious Peri Peri Fries made fresh.",
    price: 70,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1045",
    category: "Fries",
    name: "Potato Wedges",
    description: "Delicious Potato Wedges made fresh.",
    price: 70,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1046",
    category: "Fries",
    name: "Spicy Garlic Wedges",
    description: "Delicious Spicy Garlic Wedges made fresh.",
    price: 80,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },

  // --- BURGER ---
  {
    id: "new_1047",
    category: "Burger",
    name: "Veg Burger",
    description: "Delicious Veg Burger made fresh.",
    price: 60,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1048",
    category: "Burger",
    name: "Veg Cheese Burger",
    description: "Delicious Veg Cheese Burger made fresh.",
    price: 70,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1049",
    category: "Burger",
    name: "Potato Tikki Burger",
    description: "Delicious Potato Tikki Burger made fresh.",
    price: 70,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1050",
    category: "Burger",
    name: "Twin Patty Burger",
    description: "Delicious Twin Patty Burger made fresh.",
    price: 80,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1051",
    category: "Burger",
    name: "Chicken Burger",
    description: "Delicious Chicken Burger made fresh.",
    price: 90,
    isVeg: false,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1052",
    category: "Burger",
    name: "Chicken Cheese Burger",
    description: "Delicious Chicken Cheese Burger made fresh.",
    price: 100,
    isVeg: false,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },

  // --- MILKSHAKES ---
  {
    id: "new_1053",
    category: "Milkshakes",
    name: "Vanilla Milkshake",
    description: "Delicious Vanilla Milkshake made fresh.",
    price: 60,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1054",
    category: "Milkshakes",
    name: "Butterscotch Milkshake",
    description: "Delicious Butterscotch Milkshake made fresh.",
    price: 60,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1055",
    category: "Milkshakes",
    name: "Strawberry Milkshake",
    description: "Delicious Strawberry Milkshake made fresh.",
    price: 60,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1056",
    category: "Milkshakes",
    name: "Blue berry Milkshake",
    description: "Delicious Blue berry Milkshake made fresh.",
    price: 70,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1057",
    category: "Milkshakes",
    name: "Chocolate Milkshake",
    description: "Delicious Chocolate Milkshake made fresh.",
    price: 70,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1058",
    category: "Milkshakes",
    name: "Oreo Milkshake",
    description: "Delicious Oreo Milkshake made fresh.",
    price: 80,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },

  // --- MOJITO ---
  {
    id: "new_1059",
    category: "Mojito",
    name: "Mint Mojito",
    description: "Delicious Mint Mojito made fresh.",
    price: 60,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1060",
    category: "Mojito",
    name: "Blu Bleed Mojito",
    description: "Delicious Blu Bleed Mojito made fresh.",
    price: 60,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1061",
    category: "Mojito",
    name: "Strawberry Mojito",
    description: "Delicious Strawberry Mojito made fresh.",
    price: 60,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1062",
    category: "Mojito",
    name: "Blueberry Mojito",
    description: "Delicious Blueberry Mojito made fresh.",
    price: 60,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },

  // --- FRIED MOMOS ---
  {
    id: "new_1063",
    category: "Fried Momos",
    name: "Veg Momos",
    description: "Delicious Veg Momos made fresh.",
    price: 60,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1064",
    category: "Fried Momos",
    name: "Panner Momos",
    description: "Delicious Panner Momos made fresh.",
    price: 80,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },

  // --- FRIED CHICKEN ---
  {
    id: "new_1065",
    category: "Fried Chicken",
    name: "Hot & Crunchy",
    description: "Delicious Hot & Crunchy made fresh.",
    price: 80,
    isVeg: false,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1066",
    category: "Fried Chicken",
    name: "Hot Strips (3P)",
    description: "Delicious Hot Strips (3P) made fresh.",
    price: 100,
    isVeg: false,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1067",
    category: "Fried Chicken",
    name: "Lolipop (3P)",
    description: "Delicious Lolipop (3P) made fresh.",
    price: 110,
    isVeg: false,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_1068",
    category: "Fried Chicken",
    name: "Pop Corn",
    description: "Delicious Pop Corn made fresh.",
    price: 110,
    isVeg: false,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },

  // --- NEW ADDITIONS ---
  {
    id: "new_2001",
    category: "Soft Drinks",
    name: "Lemon Juice",
    description: "Refreshing cool Lemon Juice.",
    price: 40,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_2002",
    category: "Soft Drinks",
    name: "Rose Milk",
    description: "Chilled Rose Milk with a sweet floral flavor.",
    price: 50,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_2003",
    category: "Sandwich",
    name: "Chicken Sandwich",
    description: "Juicy shredded chicken stuffed inside toasted bread.",
    price: 100,
    isVeg: false,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_2004",
    category: "Sandwich",
    name: "Chicken Cheese Sandwich",
    description: "Juicy chicken with melted cheese inside toasted bread.",
    price: 120,
    isVeg: false,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_2005",
    category: "Sandwich",
    name: "Grilled Sandwich",
    description: "Classic grilled sandwich with veggies.",
    price: 70,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "new_2006",
    category: "Sandwich",
    name: "Grilled Cheese Sandwich",
    description: "Classic grilled sandwich with rich cheese.",
    price: 90,
    isVeg: true,
    isPopular: false,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  },
];

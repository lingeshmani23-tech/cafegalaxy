// Detailed Menu Items Data for Cafe Galaxy Dindigul
// Using precise categories for exact 1-to-1 filter mapping

export const menuCategories = [
  { id: 'coffee', name: '☕ Coffee', value: 'Coffee' },
  { id: 'milkshakes', name: '🥤 Milkshakes', value: 'Milkshakes' },
  { id: 'juice', name: '🍊 Fresh Juice', value: 'Fresh Juice' },
  { id: 'mocktails', name: '🍸 Mocktails', value: 'Mocktails' },
  { id: 'pizza', name: '🍕 Pizza', value: 'Pizza' },
  { id: 'burger', name: '🍔 Burger', value: 'Burger' },
  { id: 'sandwich', name: '🌮 Sandwich', value: 'Sandwich' },
  { id: 'pasta', name: '🍝 Pasta', value: 'Pasta' },
  { id: 'fried-rice', name: '🍚 Fried Rice', value: 'Fried Rice' },
  { id: 'noodles', name: '🍜 Noodles', value: 'Noodles' },
  { id: 'cakes', name: '🍰 Cakes', value: 'Cakes' },
  { id: 'pastries', name: '🧁 Pastries', value: 'Pastries' },
  { id: 'bun', name: '🥖 Bun', value: 'Bun' },
  { id: 'puffs', name: '🥐 Puffs', value: 'Puffs' },
  { id: 'cookies', name: '🍪 Cookies', value: 'Cookies' },
  { id: 'bread', name: '🍞 Bread', value: 'Bread' },
  { id: 'snacks', name: '🍟 Tamil Nadu Snacks', value: 'Tamil Nadu Snacks' },
  { id: 'desserts', name: '🍩 Desserts', value: 'Desserts' }
];

export const menuItems = [
  // --- COFFEE ---
  {
    id: 'c1',
    category: 'Coffee',
    name: 'Espresso',
    description: 'Rich, bold, and highly concentrated shot of pure dark roast coffee.',
    price: 90,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1510972527409-cef7e2b761c3?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'c2',
    category: 'Coffee',
    name: 'Cappuccino',
    description: 'Classic espresso shot layered with steamed milk and a thick layer of creamy foam.',
    price: 130,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'c3',
    category: 'Coffee',
    name: 'Latte',
    description: 'Smooth espresso balanced with a generous amount of warm, silky steamed milk.',
    price: 140,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'c4',
    category: 'Coffee',
    name: 'Americano',
    description: 'Espresso shot diluted with hot water, yielding a smooth, full-bodied coffee taste.',
    price: 100,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1551046713-bc755f483c6f?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'c5',
    category: 'Coffee',
    name: 'Mocha',
    description: 'Luxurious espresso combined with gourmet dark chocolate syrup and steamed milk.',
    price: 160,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'c6',
    category: 'Coffee',
    name: 'Cold Coffee',
    description: 'Velvety blended chilled espresso, whole milk, and premium vanilla bean ice cream.',
    price: 150,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80'
  },

  // --- MILKSHAKES ---
  {
    id: 'm1',
    category: 'Milkshakes',
    name: 'Vanilla Milkshake',
    description: 'Creamy milkshake made with organic Madagascar vanilla pod extract and rich ice cream.',
    price: 130,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'm2',
    category: 'Milkshakes',
    name: 'Chocolate Milkshake',
    description: 'Deeply indulgent shake blended with Belgian milk chocolate and premium cocoa.',
    price: 140,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'm3',
    category: 'Milkshakes',
    name: 'Strawberry Milkshake',
    description: 'Fresh Mahabaleshwar strawberries blended into a thick, delicious cream shake.',
    price: 140,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1553787499-6f9133860275?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'm4',
    category: 'Milkshakes',
    name: 'Oreo Shake',
    description: 'Decadent cookies and cream shake loaded with crushed Oreos and chocolate drizzle.',
    price: 160,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=80'
  },

  // --- FRESH JUICE ---
  {
    id: 'j1',
    category: 'Fresh Juice',
    name: 'Orange Juice',
    description: 'Freshly squeezed citrus orange juice loaded with natural Vitamin C, served cold.',
    price: 90,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'j2',
    category: 'Fresh Juice',
    name: 'Watermelon Juice',
    description: 'Hydrating, sweet and refreshing fresh watermelon juice with a hint of mint.',
    price: 80,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1589733901241-5e55cd297b7f?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'j3',
    category: 'Fresh Juice',
    name: 'Pineapple Juice',
    description: 'Tropical fresh pineapple extract with a touch of rock salt and sweet syrup.',
    price: 90,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'j4',
    category: 'Fresh Juice',
    name: 'Grape Juice',
    description: 'Juicy, rich black grapes pressed into a sweet, refreshing chilled beverage.',
    price: 95,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1603186742880-366b5790be90?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'j5',
    category: 'Fresh Juice',
    name: 'Lemon Juice',
    description: 'Zesty lemon juice served with options of sweet, salted, or mixed style.',
    price: 50,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80'
  },

  // --- MOCKTAILS ---
  {
    id: 'mk1',
    category: 'Mocktails',
    name: 'Blue Lagoon',
    description: 'Vibrant blue curaçao mixed with fresh lime juice, simple syrup, and fizzy sprite.',
    price: 150,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'mk2',
    category: 'Mocktails',
    name: 'Virgin Mojito',
    description: 'Muddled garden mint leaves, fresh lime wedges, sparkling soda, and crushed ice.',
    price: 140,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'mk3',
    category: 'Mocktails',
    name: 'Green Apple Mocktail',
    description: 'Crisp green apple syrup combined with freshly squeezed lime and sprite.',
    price: 150,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'mk4',
    category: 'Mocktails',
    name: 'Mint Cooler',
    description: 'Refreshing cucumber, lime and mint extract blended with soda to beat the heat.',
    price: 130,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=500&auto=format&fit=crop&q=80'
  },

  // --- PIZZA ---
  {
    id: 'p1',
    category: 'Pizza',
    name: 'Margherita Pizza',
    description: 'Classic artisanal dough topped with marinara sauce, fresh basil, and fresh mozzarella cheese.',
    price: 240,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'p2',
    category: 'Pizza',
    name: 'Veg Supreme Pizza',
    description: 'Loaded with colored bell peppers, red onions, mushrooms, black olives, and sweet corn.',
    price: 320,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'p3',
    category: 'Pizza',
    name: 'Farm Fresh Pizza',
    description: 'Crispy thin crust topped with fresh farm vegetables, baby corn, and extra mozzarella.',
    price: 290,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'p4',
    category: 'Pizza',
    name: 'Chicken Pizza',
    description: 'Premium grilled chicken breast chunks, spicy BBQ sauce, red onions, and melted cheese.',
    price: 360,
    isVeg: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=80'
  },

  // --- BURGER ---
  {
    id: 'bg1',
    category: 'Burger',
    name: 'Veg Burger',
    description: 'Crispy mixed vegetable patty layered with lettuce, tomato, and creamy herb mayonnaise.',
    price: 120,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'bg2',
    category: 'Burger',
    name: 'Cheese Burger',
    description: 'Hearty veg patty topped with double melted cheddar cheese slice, pickles, and classic sauce.',
    price: 150,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'bg3',
    category: 'Burger',
    name: 'Chicken Burger',
    description: 'Golden fried chicken breast patty topped with jalapeños, leaf lettuce, and hot garlic mayo.',
    price: 180,
    isVeg: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'bg4',
    category: 'Burger',
    name: 'Double Chicken Burger',
    description: 'Two crispy chicken patties loaded with melted cheese, caramelized onions, and house sauce.',
    price: 240,
    isVeg: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80'
  },

  // --- SANDWICH ---
  {
    id: 's1',
    category: 'Sandwich',
    name: 'Veg Sandwich',
    description: 'Fresh white bread stuffed with cucumber, tomatoes, potatoes, and mint chutney.',
    price: 90,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 's2',
    category: 'Sandwich',
    name: 'Grilled Cheese Sandwich',
    description: 'Golden grilled sandwich oozing with a luxurious blend of cheddar and mozzarella cheeses.',
    price: 120,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 's3',
    category: 'Sandwich',
    name: 'Chicken Sandwich',
    description: 'Juicy shredded chicken tossed in herb mayo, stuffed inside toasted brown bread.',
    price: 150,
    isVeg: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1540713434306-5379c2439a66?w=500&auto=format&fit=crop&q=80'
  },

  // --- PASTA ---
  {
    id: 'ps1',
    category: 'Pasta',
    name: 'White Sauce Pasta',
    description: 'Penne cooked in a creamy bechamel sauce, enriched with garlic, herbs, and cheese.',
    price: 190,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'ps2',
    category: 'Pasta',
    name: 'Red Sauce Pasta',
    description: 'Tangy and spicy pasta tossed in fresh tomato concasse, garlic, chili, and basil leaves.',
    price: 180,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'ps3',
    category: 'Pasta',
    name: 'Alfredo Pasta',
    description: 'Rich penne pasta in authentic butter, cream, and parmesan cheese sauce with broccoli.',
    price: 210,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=80'
  },

  // --- FRIED RICE ---
  {
    id: 'fr1',
    category: 'Fried Rice',
    name: 'Veg Fried Rice',
    description: 'Fluffy basmati rice stir-fried with finely chopped farm fresh veggies and soy sauce.',
    price: 140,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1603133872878-696658d7d9f6?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'fr2',
    category: 'Fried Rice',
    name: 'Egg Fried Rice',
    description: 'Fragrant stir-fried rice tossed with scrambled farm-fresh eggs, spring onions, and spices.',
    price: 160,
    isVeg: false,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1603133872878-696658d7d9f6?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'fr3',
    category: 'Fried Rice',
    name: 'Chicken Fried Rice',
    description: 'Classic Indo-Chinese fried rice with seasoned chicken chunks and spring onion greens.',
    price: 190,
    isVeg: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1603133872878-696658d7d9f6?w=500&auto=format&fit=crop&q=80'
  },

  // --- NOODLES ---
  {
    id: 'n1',
    category: 'Noodles',
    name: 'Veg Noodles',
    description: 'Wok-tossed Hakka noodles with crunchy cabbage, bell peppers, carrots, and spring onions.',
    price: 140,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'n2',
    category: 'Noodles',
    name: 'Egg Noodles',
    description: 'Scrumptious wok noodles tossed with scrambled eggs, soy sauce, and mild pepper.',
    price: 160,
    isVeg: false,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'n3',
    category: 'Noodles',
    name: 'Chicken Noodles',
    description: 'Classic Hakka noodles tossed with roasted chicken strips, fresh veggies, and a spicy punch.',
    price: 190,
    isVeg: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80'
  },

  // --- CAKES ---
  {
    id: 'ck1',
    category: 'Cakes',
    name: 'Black Forest Cake',
    description: 'Rich layers of chocolate sponge cake soaked in cherry syrup, whipped cream, and chocolate flakes.',
    price: 450,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'ck2',
    category: 'Cakes',
    name: 'Chocolate Cake',
    description: 'Luxurious double chocolate truffle cake, smooth fudge layers, and chocolate glaze.',
    price: 480,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'ck3',
    category: 'Cakes',
    name: 'Red Velvet Cake',
    description: 'Vibrant red cake layers with rich hints of cocoa, stacked with velvety cream cheese frosting.',
    price: 520,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1586985289688-ca9cf49d3ad7?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'ck4',
    category: 'Cakes',
    name: 'Fruit Cake',
    description: 'Moist golden sponge cake topped with seasonal fresh fruits and apricot glaze.',
    price: 420,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=80'
  },

  // --- PASTRIES ---
  {
    id: 'pas1',
    category: 'Pastries',
    name: 'Vanilla Pastry',
    description: 'Light sponge pastry layered with delicate vanilla whipped cream and white chocolate curls.',
    price: 70,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'pas2',
    category: 'Pastries',
    name: 'Chocolate Pastry',
    description: 'Rich dark chocolate slice topped with a layer of chocolate ganache and hazelnut chunks.',
    price: 80,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500&auto=format&fit=crop&q=80'
  },

  // --- BUN ---
  {
    id: 'bun1',
    category: 'Bun',
    name: 'Cream Bun',
    description: 'Classic sweet, soft bakery bun loaded with sweetened fresh cream filling.',
    price: 40,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'bun2',
    category: 'Bun',
    name: 'Sweet Bun',
    description: 'Soft golden bun studded with sweet candied fruits (tutti-frutti) and coconut flakes.',
    price: 30,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80'
  },

  // --- PUFFS ---
  {
    id: 'puf1',
    category: 'Puffs',
    name: 'Veg Puff',
    description: 'Crispy, multi-layered puff pastry filled with spiced potato and peas mixture.',
    price: 35,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'puf2',
    category: 'Puffs',
    name: 'Chicken Puff',
    description: 'Warm flaky pastry sheet filled with a savory shredded chicken pepper masala filling.',
    price: 50,
    isVeg: false,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=500&auto=format&fit=crop&q=80'
  },

  // --- COOKIES ---
  {
    id: 'coo1',
    category: 'Cookies',
    name: 'Butter Cookies',
    description: 'Melt-in-your-mouth premium bakery cookies rich in butter, served in a set of 4.',
    price: 60,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'coo2',
    category: 'Cookies',
    name: 'Choco Cookies',
    description: 'Crisp cookies loaded with chocolate chips and cocoa powder, served in a set of 4.',
    price: 70,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format&fit=crop&q=80'
  },

  // --- BREAD ---
  {
    id: 'br1',
    category: 'Bread',
    name: 'White Bread',
    description: 'Freshly baked soft white bread loaf, sliced and ready to toast.',
    price: 45,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'br2',
    category: 'Bread',
    name: 'Brown Bread',
    description: 'Nutritious high-fiber whole wheat brown bread loaf, sliced fresh.',
    price: 55,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80'
  },

  // --- TAMIL NADU SNACKS ---
  {
    id: 'si1',
    category: 'Tamil Nadu Snacks',
    name: 'Samosa',
    description: 'Crispy fried triangular pastry filled with seasoned potatoes, peas, and coriander.',
    price: 20,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'si2',
    category: 'Tamil Nadu Snacks',
    name: 'Veg Roll',
    description: 'Crunchy breaded roll stuffed with seasoned spring vegetables and dry spices.',
    price: 35,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'si3',
    category: 'Tamil Nadu Snacks',
    name: 'Cutlet',
    description: 'Spiced potato and veggie patties, breaded and deep fried. Crisp on the outside, soft inside.',
    price: 30,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'si4',
    category: 'Tamil Nadu Snacks',
    name: 'Vadai',
    description: 'Traditional crisp and fluffy lentil fritters (Medhu Vadai) flavored with black pepper.',
    price: 20,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'si5',
    category: 'Tamil Nadu Snacks',
    name: 'Bonda',
    description: 'Crispy, hot chickpea batter-fried potato dumplings infused with ginger and green chilies.',
    price: 20,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'si6',
    category: 'Tamil Nadu Snacks',
    name: 'Mixture',
    description: 'Savory fried snacks mix consisting of sev, boondi, peanuts, and cashews.',
    price: 40,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'si7',
    category: 'Tamil Nadu Snacks',
    name: 'Murukku',
    description: 'Crunchy, spiral-shaped rice flour snack seasoned with sesame seeds.',
    price: 30,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'si8',
    category: 'Tamil Nadu Snacks',
    name: 'Kara Sev',
    description: 'Crispy, spiced chickpea flour noodles flavored with ground black pepper.',
    price: 40,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80'
  },

  // --- DESSERTS ---
  {
    id: 'd1',
    category: 'Desserts',
    name: 'Brownie',
    description: 'Warm, dense chocolate fudge brownie loaded with walnuts, served with a splash of hot chocolate syrup.',
    price: 110,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'd2',
    category: 'Desserts',
    name: 'Ice Cream',
    description: 'Double scoops of your choice: Madagascar Vanilla, Belgian Chocolate, or Alphonso Mango.',
    price: 90,
    isVeg: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1501443715944-6d4e55c5c1ec?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'd3',
    category: 'Desserts',
    name: 'Sundae',
    description: 'Three scoops of premium ice cream, fresh whipped cream, nuts, maraschino cherries, and hot fudge.',
    price: 180,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'd4',
    category: 'Desserts',
    name: 'Falooda',
    description: 'Chilled rose milk layered with basil seeds (sabja), vermicelli, mixed nuts, and a scoop of vanilla ice cream.',
    price: 160,
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80'
  }
];

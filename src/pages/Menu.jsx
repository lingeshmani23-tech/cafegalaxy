import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { menuCategories, menuItems } from '../data/menuData';
import MenuCard from '../components/MenuCard';

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dietFilter, setDietFilter] = useState('All'); // 'All' | 'Veg' | 'Non-Veg'
  const [onlyPopular, setOnlyPopular] = useState(false);

  // Filter items based on selected parameters
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // 1. Search Query filter
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      // 2. Category filter
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      // 3. Diet (Veg / Non-Veg) filter
      const matchesDiet =
        dietFilter === 'All' ||
        (dietFilter === 'Veg' && item.isVeg) ||
        (dietFilter === 'Non-Veg' && !item.isVeg);

      // 4. Popular badge filter
      const matchesPopular = !onlyPopular || item.isPopular;

      return matchesSearch && matchesCategory && matchesDiet && matchesPopular;
    });
  }, [searchQuery, selectedCategory, dietFilter, onlyPopular]);

  return (
    <div className="w-full pt-28 pb-20 bg-[#0A0A0A]">
      {/* 1. Page Header */}
      <section className="relative py-16 bg-[#161616] border-b border-[#FFC107]/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=1200&auto=format&fit=crop&q=80"
            alt="Coffee Latte Art Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-4">
          <span className="text-[#FFC107] uppercase tracking-[0.3em] text-xs font-bold">
            Gourmet Selection
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#FAFAFA]">
            Our Galaxy Menu
          </h1>
          <p className="text-xs sm:text-sm text-[#FAFAFA]/50 uppercase tracking-widest max-w-md mx-auto">
            From single-origin espresso to traditional Tamil Nadu snacks
          </p>
        </div>
      </section>

      {/* 2. Search & Filters Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
          
          {/* Search bar & Quick Toggles */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Search Input */}
            <div className="relative col-span-1 lg:col-span-2">
              <span className="absolute inset-y-0 left-4 flex items-center text-[#FFC107]">
                <Search size={18} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search coffee, pizza, desserts, burgers..."
                className="w-full bg-[#0A0A0A] text-[#FAFAFA] placeholder-[#FAFAFA]/30 pl-12 pr-4 py-3.5 rounded-2xl border border-white/10 focus:border-[#FFC107]/50 focus:outline-none transition-colors duration-300 text-sm"
              />
            </div>

            {/* Diet & Popular Controls */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 justify-between">
              {/* Veg / Non-Veg Tabs */}
              <div className="flex bg-[#0A0A0A] p-1 rounded-xl border border-white/5 w-full sm:w-auto">
                {['All', 'Veg', 'Non-Veg'].map((diet) => (
                  <button
                    key={diet}
                    onClick={() => setDietFilter(diet)}
                    className={`flex-grow sm:flex-grow-0 px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-bold cursor-pointer transition-all duration-300 ${
                      dietFilter === diet
                        ? 'bg-[#FFC107] text-[#0A0A0A] shadow-md'
                        : 'text-[#FAFAFA]/65 hover:text-white'
                    }`}
                  >
                    {diet === 'All' ? 'All Diets' : diet}
                  </button>
                ))}
              </div>

              {/* Popular Checkbox Toggle */}
              <button
                onClick={() => setOnlyPopular(!onlyPopular)}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-xs uppercase tracking-wider font-bold w-full sm:w-auto cursor-pointer transition-all duration-300 ${
                  onlyPopular
                    ? 'bg-[#FFC107]/10 text-[#FFC107] border-[#FFC107]/50'
                    : 'text-[#FAFAFA]/65 border-white/5 hover:border-white/20'
                }`}
              >
                <Sparkles size={14} className={onlyPopular ? 'text-[#FFC107]' : ''} />
                Popular
              </button>
            </div>
          </div>

          {/* Category Tabs (Scrollable on small screens) */}
          <div className="border-t border-white/5 pt-6">
            <h3 className="text-xs uppercase tracking-widest text-[#FAFAFA]/40 font-bold mb-4 flex items-center gap-2">
              <SlidersHorizontal size={12} /> Filter by Category
            </h3>
            
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent snap-x">
              {/* 'All' Category Option */}
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-5 py-3 rounded-xl text-xs uppercase tracking-widest font-bold cursor-pointer shrink-0 snap-center transition-all duration-300 border ${
                  selectedCategory === 'All'
                    ? 'bg-[#FFC107] text-[#0A0A0A] border-[#FFC107] shadow-lg'
                    : 'bg-[#0A0A0A] text-[#FAFAFA]/75 border-white/5 hover:border-[#FFC107]/30'
                }`}
              >
                ✨ All Items
              </button>

              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-5 py-3 rounded-xl text-xs uppercase tracking-widest font-bold cursor-pointer shrink-0 snap-center transition-all duration-300 border ${
                    selectedCategory === cat.value
                      ? 'bg-[#FFC107] text-[#0A0A0A] border-[#FFC107] shadow-lg'
                      : 'bg-[#0A0A0A] text-[#FAFAFA]/75 border-white/5 hover:border-[#FFC107]/30'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Menu Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Results Info */}
        <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
          <p className="text-xs text-[#FAFAFA]/45 uppercase tracking-widest">
            Showing {filteredItems.length} of {menuItems.length} dishes
          </p>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setDietFilter('All');
                setOnlyPopular(false);
              }}
              className="text-[#FFC107] hover:text-[#FAFAFA] text-xs font-bold transition-colors uppercase tracking-widest"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 glass-card rounded-3xl border border-white/5 space-y-4"
          >
            <span className="text-4xl">🌌</span>
            <h3 className="font-serif text-xl font-bold text-[#FAFAFA]">No galaxies found in this orbit</h3>
            <p className="text-sm text-[#FAFAFA]/50 font-light max-w-sm mx-auto">
              We couldn't find any menu items matching your specific filters. Try searching for something else or resetting.
            </p>
          </motion.div>
        ) : (
          /* Grid list with layout transitions */
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <MenuCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Menu;

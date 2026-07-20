import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2 } from 'lucide-react';
import ImageLightbox from '../components/ImageLightbox';

const galleryCategories = [
  'All',
  'Coffee',
  'Bakery',
  'Burger',
  'Milkshake',
  'Cafe Interior',
  'Outdoor Seating',
  'Desserts',
  'Customers',
  'Kitchen'
];

const galleryImages = [
  {
    id: 1,
    category: 'Coffee',
    title: 'Precision Espresso Pull',
    alt: 'Barista pulling espresso shot',
    src: 'https://images.unsplash.com/photo-1510972527409-cef7e2b761c3?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    category: 'Cafe Interior',
    title: 'Luxury Celestial Lighting',
    alt: 'Cafe interior with gold lighting fixtures',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    category: 'Burger',
    title: 'Double Prime Stack',
    alt: 'Double chicken burger stacked high',
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    category: 'Bakery',
    title: 'Artisanal Sourdough & Croissants',
    alt: 'Golden croissants on a cooling tray',
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 7,
    category: 'Milkshake',
    title: 'Thick Chocolate Fudge Shake',
    alt: 'Sparkling chocolate milkshake',
    src: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 8,
    category: 'Desserts',
    title: 'Sizzling Fudge Brownie',
    alt: 'Chocolate fudge brownie with ice cream scoop',
    src: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 9,
    category: 'Outdoor Seating',
    title: 'Bypass Lounge Patio',
    alt: 'Plush outdoor seating with comfortable cushions',
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 10,
    category: 'Kitchen',
    title: 'Chef Culinary Execution',
    alt: 'Chef dressing a fresh pasta plate',
    src: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 11,
    category: 'Customers',
    title: 'Shared Stories & Laughter',
    alt: 'Group of friends enjoying drinks in cafe',
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 12,
    category: 'Coffee',
    title: 'Galaxy Latte Art',
    alt: 'Beautiful detailed coffee foam pattern',
    src: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 13,
    category: 'Cafe Interior',
    title: 'Warm Coffee Counter Cozy',
    alt: 'Espresso machine counter in warm lighting',
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 14,
    category: 'Desserts',
    title: 'Royal Falooda Scoop',
    alt: 'Layered falooda with vanilla ice cream',
    src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=80'
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter images based on category
  const filteredImages = useMemo(() => {
    if (selectedCategory === 'All') return galleryImages;
    return galleryImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full pt-28 pb-20 bg-[#0A0A0A]">
      {/* Page Header */}
      <section className="relative py-16 bg-[#161616] border-b border-[#FFC107]/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=80"
            alt="Interior Cafe Design background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-4">
          <span className="text-[#FFC107] uppercase tracking-[0.3em] text-xs font-bold">
            Visual Gallery
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#FAFAFA]">
            Galactic Aesthetics
          </h1>
          <p className="text-xs sm:text-sm text-[#FAFAFA]/50 uppercase tracking-widest max-w-md mx-auto">
            Browse through our atmospheric seating, kitchens, and gourmet assets
          </p>
        </div>
      </section>

      {/* Categories Horizontal Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-2.5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent justify-start lg:justify-center">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold cursor-pointer shrink-0 transition-all duration-300 border ${
                selectedCategory === cat
                  ? 'bg-[#FFC107] text-[#0A0A0A] border-[#FFC107] shadow-lg'
                  : 'bg-transparent text-[#FAFAFA]/70 border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative rounded-2xl overflow-hidden group border border-white/5 cursor-pointer shadow-lg bg-[#161616] mb-6"
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Mask */}
                <div className="absolute inset-0 bg-[#0A0A0A]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="self-end w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#FFC107]">
                    <Maximize2 size={16} />
                  </div>
                  
                  <div>
                    <span className="text-[#FFC107] text-[9px] uppercase font-black tracking-widest flex items-center gap-1.5 mb-1">
                      <Camera size={10} /> {img.category}
                    </span>
                    <h3 className="font-serif text-[#FAFAFA] text-base font-bold tracking-wide">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Image Lightbox Component */}
      <ImageLightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default Gallery;

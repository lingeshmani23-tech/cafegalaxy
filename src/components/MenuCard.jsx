import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const MenuCard = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Category specific fallback logic
  const fallbackUrl = `https://placehold.co/600x400/222222/FFC107?text=${encodeURIComponent(item.category)}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-xl overflow-hidden flex flex-col h-full group shadow-sm hover:shadow-md transition-shadow duration-300 bg-[#161616]"
    >
      {/* Image Container with width: 100%, height: 220px */}
      <div className="relative overflow-hidden w-full h-[220px] shrink-0 bg-[#f5f5f5]">
        {/* Skeleton Loader */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-[#e0e0e0] animate-pulse"></div>
        )}
        
        <img
          src={imageError ? fallbackUrl : item.image}
          alt={item.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true); // Stop skeleton loader
          }}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0 transition-opacity duration-700'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-60"></div>
        
        {/* Popular Tag */}
        {item.isPopular && (
          <span className="absolute top-3 left-3 bg-[#FFC107] text-[#0A0A0A] text-[10px] font-extrabold tracking-widest uppercase py-1 px-2.5 rounded-lg flex items-center gap-1 shadow-sm">
            <Award size={10} /> Popular
          </span>
        )}

        {/* Veg / Non-Veg Indicator Badge */}
        <div className="absolute top-3 right-3 flex items-center justify-center bg-white/90 backdrop-blur-sm p-1.5 rounded-md border border-gray-200 shadow-sm">
          <div
            className={`w-3.5 h-3.5 border flex items-center justify-center ${
              item.isVeg ? 'border-green-600' : 'border-red-600'
            }`}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                item.isVeg ? 'bg-green-600' : 'bg-red-600'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-2 mb-1.5">
            <h3 className="font-serif text-[15px] font-bold tracking-wide text-[#FAFAFA] group-hover:text-[#FFC107] transition-colors duration-300 leading-tight">
              {item.name}
            </h3>
            <span className="font-sans font-bold text-[#FFC107] text-base shrink-0">
              ₹{item.price}
            </span>
          </div>
          
          <p className="text-xs text-[#FAFAFA]/65 font-light leading-relaxed mb-3 line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;

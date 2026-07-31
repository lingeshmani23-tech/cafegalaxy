import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const MenuCard = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-[20px] overflow-hidden flex flex-col h-full group shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#161616]"
    >
      {/* Image Container with 4:3 aspect ratio and rounded corners */}
      <div className="relative overflow-hidden aspect-[4/3] w-full shrink-0 bg-[#222]">
        {/* Skeleton Loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#333] animate-pulse"></div>
        )}
        
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60"></div>
        
        {/* Popular Tag */}
        {item.isPopular && (
          <span className="absolute top-4 left-4 bg-[#FFC107] text-[#0A0A0A] text-[10px] font-extrabold tracking-widest uppercase py-1.5 px-3 rounded-xl flex items-center gap-1.5 shadow-md">
            <Award size={12} /> Popular
          </span>
        )}

        {/* Veg / Non-Veg Indicator Badge */}
        <div className="absolute top-4 right-4 flex items-center justify-center bg-[#0A0A0A]/85 backdrop-blur-md p-1.5 rounded-lg border border-white/10 shadow-sm">
          <div
            className={`w-4 h-4 border-[1.5px] flex items-center justify-center ${
              item.isVeg ? 'border-green-500' : 'border-red-500'
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                item.isVeg ? 'bg-green-500' : 'bg-red-500'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-3 mb-2">
            <h3 className="font-serif text-lg font-bold tracking-wide text-[#FAFAFA] group-hover:text-[#FFC107] transition-colors duration-300 leading-tight">
              {item.name}
            </h3>
            <span className="font-sans font-bold text-[#FFC107] text-lg shrink-0">
              ₹{item.price}
            </span>
          </div>
          
          <p className="text-sm text-[#FAFAFA]/70 font-light leading-relaxed mb-4 line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;

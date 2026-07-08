import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check, Award } from 'lucide-react';
import RippleButton from './RippleButton';

const MenuCard = ({ item }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between h-full group"
    >
      {/* Image and badges */}
      <div className="relative overflow-hidden aspect-video bg-neutral-900 shrink-0">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70"></div>
        
        {/* Popular Tag */}
        {item.isPopular && (
          <span className="absolute top-3 left-3 bg-[#FFC107] text-[#0A0A0A] text-[9px] font-extrabold tracking-widest uppercase py-1 px-2.5 rounded-lg flex items-center gap-1 shadow-md">
            <Award size={10} /> Popular
          </span>
        )}

        {/* Veg / Non-Veg Indicator Badge */}
        <div className="absolute top-3 right-3 flex items-center justify-center bg-[#0A0A0A]/85 backdrop-blur-sm p-1.5 rounded-lg border border-white/10">
          <div
            className={`w-3.5 h-3.5 border flex items-center justify-center ${
              item.isVeg ? 'border-green-500' : 'border-red-500'
            }`}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                item.isVeg ? 'bg-green-500' : 'bg-red-500'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col justify-between bg-[#161616]">
        <div>
          <div className="flex justify-between items-start gap-2 mb-2">
            <h3 className="font-serif text-base font-bold tracking-wide text-[#FAFAFA] group-hover:text-[#FFC107] transition-colors duration-300">
              {item.name}
            </h3>
            <span className="font-sans font-bold text-[#FFC107] text-base shrink-0">
              ₹{item.price}
            </span>
          </div>
          
          <p className="text-xs text-[#FAFAFA]/65 font-light leading-relaxed mb-5 line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Add to Cart button */}
        <div className="pt-2">
          <RippleButton
            onClick={handleAdd}
            className={`w-full py-2.5 rounded-xl text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
              isAdded
                ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg'
                : 'bg-transparent text-[#FFC107] hover:bg-[#FFC107] hover:text-[#0A0A0A] border border-[#FFC107]/45 hover:border-[#FFC107]'
            }`}
          >
            <AnimatePresence mode="wait">
              {isAdded ? (
                <motion.span
                  key="added"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  className="flex items-center gap-1.5"
                >
                  <Check size={13} strokeWidth={3} /> Added!
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  className="flex items-center gap-1.5"
                >
                  <ShoppingBag size={13} /> Add to Cart
                </motion.span>
              )}
            </AnimatePresence>
          </RippleButton>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;

import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#0A0A0A]"
    >
      <div className="relative flex flex-col items-center">
        {/* Planetary Galaxy Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 rounded-full border border-dashed border-[#FFC107]/40 flex items-center justify-center"
        >
          {/* Inner Golden Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 rounded-full border-2 border-double border-[#FFB300]/50 flex items-center justify-center"
          />
        </motion.div>

        {/* Center Astronaut Logo */}
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-4 flex items-center justify-center w-24 h-24 rounded-full overflow-hidden border border-[#FFC107]/20 shadow-gold-glow"
        >
          <img
            src="/logo.jpg"
            alt="Cafe Galaxy Logo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Cafe Galaxy Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 font-serif text-3xl font-extrabold tracking-[0.2em] text-[#FFC107] uppercase text-center"
        >
          Cafe Galaxy
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-2 text-[10px] tracking-[0.3em] text-[#FAFAFA] uppercase font-semibold"
        >
          Experience Coffee Beyond The Ordinary
        </motion.p>
        
        {/* Progress Bar Loader */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full mt-6 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-[#FFC107] to-[#FFB300]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;

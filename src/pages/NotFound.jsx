import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import RippleButton from '../components/RippleButton';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] px-4 relative overflow-hidden">
      {/* Background galaxy glowing dust */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6F4E37]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center space-y-8 max-w-lg">
        {/* Floating Cosmic Cup Icon */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }}
          className="text-8xl filter drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] inline-block select-none"
        >
          ☕🚀
        </motion.div>

        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-serif text-6xl sm:text-7xl font-extrabold text-[#D4AF37]"
          >
            404
          </motion.h1>
          <h2 className="font-serif text-2xl font-bold text-[#F8F5F2]">
            Lost in the Cosmic Roast
          </h2>
          <p className="text-sm text-[#F8F5F2]/60 font-light leading-relaxed max-w-sm mx-auto">
            The page you are looking for has drifted out of our orbit. Perhaps it was sucked into a black hole or never existed.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link to="/">
            <RippleButton className="mx-auto px-8 py-3.5 bg-gradient-to-r from-[#6F4E37] to-[#D4AF37] text-[#121212] font-bold text-xs uppercase tracking-widest rounded-full hover:scale-105 hover:shadow-gold-glow flex items-center gap-2">
              <Home size={14} /> Back to Home Orbit
            </RippleButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

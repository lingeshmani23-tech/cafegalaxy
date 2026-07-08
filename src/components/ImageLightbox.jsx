import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageLightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const currentImage = currentIndex !== null ? images[currentIndex] : null;

  // Handle keyboard events (Escape, Left, Right)
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {currentIndex !== null && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X size={24} />
          </button>

          {/* Navigation - Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-6 text-[#D4AF37] hover:text-[#F8F5F2] bg-white/5 hover:bg-[#D4AF37]/10 border border-[#D4AF37]/20 p-3 rounded-full transition-all duration-300 z-50 cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative max-w-5xl max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-[75vh] object-contain rounded-xl border border-white/10 shadow-2xl"
            />
            
            {/* Caption */}
            <div className="mt-4 text-center">
              <h4 className="font-serif text-[#D4AF37] text-lg font-semibold tracking-wide">
                {currentImage.title}
              </h4>
              <p className="text-white/60 text-xs font-light mt-1 tracking-widest uppercase">
                Category: {currentImage.category}
              </p>
            </div>
          </motion.div>

          {/* Navigation - Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-6 text-[#D4AF37] hover:text-[#F8F5F2] bg-white/5 hover:bg-[#D4AF37]/10 border border-[#D4AF37]/20 p-3 rounded-full transition-all duration-300 z-50 cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: 'What are the working hours of Cafe Galaxy?',
    answer: 'We are open seven days a week. Our hours are Monday to Sunday from 06:30 AM to 10:00 PM.'
  },
  {
    question: 'Where is Cafe Galaxy located in Dindigul?',
    answer: 'We are located at Palani Road, Bypass Junction, Dindigul, Tamil Nadu 624001. We are easily accessible with ample parking spaces.'
  },
  {
    question: 'Do you offer reservations for birthday parties or private events?',
    answer: 'Yes! We have cozy lounge spaces that can be reserved for birthdays, family get-togethers, or corporate meetings. Please reach out via our contact form or call us directly to discuss event packages.'
  },
  {
    question: 'Are eggless cake and pastry options available?',
    answer: 'Absolutely. A major portion of our bakery products—including many of our signature cakes like Red Velvet, Black Forest, and vanilla pastries—are prepared eggless. You can filter for vegetarian (Veg) items on our Menu page.'
  },
  {
    question: 'Do you provide home delivery services in Dindigul?',
    answer: 'Yes, we offer direct home delivery in major zones of Dindigul. You can call our ordering channel at +91 98765 43210 or text us on WhatsApp to place your order.'
  },
  {
    question: 'Do you serve vegetarian and non-vegetarian food separately?',
    answer: 'We maintain very strict kitchen hygiene. We have dedicated preparation zones and utensils for vegetarian and non-vegetarian items to ensure absolute safety and adherence to food handling standards.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full pt-28 pb-20">
      {/* Page Header */}
      <section className="relative py-16 bg-[#1A1A1A] border-b border-[#D4AF37]/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&auto=format&fit=crop&q=80"
            alt="Warm Café Counter background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-4">
          <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-semibold">
            Inquiries
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8F5F2]">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-[#F8F5F2]/50 uppercase tracking-widest max-w-md mx-auto">
            Got questions? We have the answers gathered for you below
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card rounded-2xl border border-white/5 overflow-hidden"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle size={18} className="text-[#D4AF37] shrink-0" />
                    <span className="font-serif font-bold text-sm sm:text-base text-[#F8F5F2] group-hover:text-[#D4AF37] transition-colors duration-300">
                      {item.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#D4AF37] shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <div className="p-5 pt-0 border-t border-white/5 text-xs sm:text-sm text-[#F8F5F2]/75 leading-relaxed font-light">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FAQ;

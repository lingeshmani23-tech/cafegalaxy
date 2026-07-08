import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, CalendarDays } from 'lucide-react';
import RippleButton from './RippleButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3 shadow-premium'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#FFC107]/30 group-hover:border-[#FFC107] transition-colors duration-500 shadow-md">
                <img
                  src="/logo.jpg"
                  alt="Cafe Galaxy Logo"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:rotate-[360deg] scale-105"
                />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-black tracking-widest text-[#FAFAFA] group-hover:text-[#FFC107] transition-colors duration-300">
                GALAXY<span className="text-[#FFC107]">.</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative py-2 text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-300 hover:text-[#FFC107] ${
                      isActive ? 'text-[#FFC107]' : 'text-[#FAFAFA]/75'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavLine"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFC107] rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <RippleButton className="px-5 py-2.5 bg-gradient-to-r from-[#FFD54F] via-[#FFC107] to-[#FFB300] text-[#0A0A0A] font-bold text-xs uppercase tracking-widest rounded-xl hover:shadow-gold-glow hover:scale-105 transition-all">
                  Reserve Table <CalendarDays size={14} className="ml-1.5" />
                </RippleButton>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#FAFAFA] hover:text-[#FFC107] transition-colors focus:outline-none p-1.5"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glass-nav border-t border-white/5 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `py-3 px-4 rounded-xl text-xs uppercase tracking-[0.2em] font-bold transition-all ${
                        isActive
                          ? 'bg-[#FFC107]/10 text-[#FFC107] border-l-2 border-[#FFC107]'
                          : 'text-[#FAFAFA]/75 hover:bg-white/5 hover:text-[#FFC107]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="pt-4 px-4">
                  <Link to="/contact" className="block w-full">
                    <RippleButton className="w-full py-3 bg-gradient-to-r from-[#FFD54F] via-[#FFC107] to-[#FFB300] text-[#0A0A0A] font-extrabold text-xs uppercase tracking-widest rounded-xl">
                      Reserve Table
                    </RippleButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;

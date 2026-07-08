import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  const policyLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-[#FAFAFA] border-t-2 border-[#FFC107] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#FFC107]/30">
                <img src="/logo.jpg" alt="Cafe Galaxy Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-serif text-2xl font-black tracking-widest">
                GALAXY<span className="text-[#FFC107]">.</span>
              </span>
            </Link>
            <p className="text-xs text-[#FAFAFA]/60 font-light leading-relaxed">
              Experience the perfect harmony of premium coffee blends, gourmet bakery delights, and a celestial dining ambience.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFC107] hover:bg-[#FFC107] hover:text-[#0A0A0A] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFC107] hover:bg-[#FFC107] hover:text-[#0A0A0A] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-sm font-bold tracking-[0.15em] uppercase text-[#FFC107] mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-[#FFC107]">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-3 text-xs">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#FAFAFA]/75 hover:text-[#FFC107] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-serif text-sm font-bold tracking-[0.15em] uppercase text-[#FFC107] mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-[#FFC107]">
              Visit Us
            </h3>
            <ul className="space-y-4 text-xs text-[#FAFAFA]/75">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#FFC107] shrink-0 mt-0.5" />
                <span>
                  <strong>Cafe Galaxy</strong><br />
                  Palani Road, Bypass Junction,<br />
                  Dindigul, Tamil Nadu 624001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#FFC107] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#FFC107] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#FFC107] shrink-0" />
                <a href="mailto:info@cafegalaxy.in" className="hover:text-[#FFC107] transition-colors">
                  info@cafegalaxy.in
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-sm font-bold tracking-[0.15em] uppercase text-[#FFC107] mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-[#FFC107]">
              Opening Hours
            </h3>
            <ul className="space-y-4 text-xs text-[#FAFAFA]/75">
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#FFC107] shrink-0 mt-0.5" />
                <div>
                  <div className="flex justify-between gap-4">
                    <span className="font-semibold text-[#FAFAFA]">Monday - Friday</span>
                  </div>
                  <span className="text-[10px] text-[#FAFAFA]/50">09:00 AM - 10:30 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#FFC107] shrink-0 mt-0.5" />
                <div>
                  <div className="flex justify-between gap-4">
                    <span className="font-semibold text-[#FAFAFA]">Saturday - Sunday</span>
                  </div>
                  <span className="text-[10px] text-[#FAFAFA]/50">09:00 AM - 11:30 PM</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-[#FAFAFA]/50">
          <p>© {currentYear} Cafe Galaxy. Designed for Premium Experiences. All Rights Reserved.</p>
          <div className="flex gap-6">
            {policyLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-[#FFC107] transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

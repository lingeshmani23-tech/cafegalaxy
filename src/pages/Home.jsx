import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Coffee, ShieldCheck, Heart, Sparkles, Utensils, MessageSquare, PhoneCall, Award, CalendarClock } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import RippleButton from '../components/RippleButton';
import AnimatedCounter from '../components/AnimatedCounter';
import MenuCard from '../components/MenuCard';
import { menuItems } from '../data/menuData';

const Home = () => {
  // Filters for sub-sections
  const featuredItems = menuItems.filter(item => item.isPopular).slice(0, 6);
  const popularCoffee = menuItems.filter(item => item.category === 'Coffee').slice(0, 4);
  const bakerySpecials = menuItems.filter(item => item.category === 'Bakery' && item.isPopular).slice(0, 4);

  // Today's Special Item
  const todaysSpecial = {
    name: 'Cosmic Belgian Truffle Cake',
    description: 'Freshly baked triple layer Dutch cocoa sponge filled with creamy Belgian milk chocolate truffle ganache and gold leaf garnish.',
    price: 499,
    originalPrice: 650,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80',
    tag: 'Pastry Chef Pick'
  };

  const galleryPreviews = [
    { src: 'https://images.unsplash.com/photo-1510972527409-cef7e2b761c3?w=500&auto=format&fit=crop&q=80', alt: 'Aromatic Espresso' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=80', alt: 'Luxurious Interior' },
    { src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=80', alt: 'Premium Cakes' },
    { src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80', alt: 'Gourmet Pizza' },
    { src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80', alt: 'Juicy Burgers' },
    { src: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&auto=format&fit=crop&q=80', alt: 'Creamy Milkshakes' }
  ];

  const counters = [
    { to: '15000', suffix: '+', label: 'Cups Brewed' },
    { to: '5000', suffix: '+', label: 'Happy Customers' },
    { to: '12', suffix: '+', label: 'Years Experience' },
    { to: '40', suffix: '+', label: 'Premium Blends' }
  ];

  const features = [
    {
      icon: <Coffee className="text-[#FFC107]" size={28} />,
      title: 'Premium Coffee Beans',
      desc: '100% organic Arabica beans slow-roasted to bring out rich, stellar flavor notes.'
    },
    {
      icon: <Utensils className="text-[#FFC107]" size={28} />,
      title: 'Fresh Ingredients',
      desc: 'Bakery items baked fresh every morning from scratch, using high-quality local produce.'
    },
    {
      icon: <ShieldCheck className="text-[#FFC107]" size={28} />,
      title: 'Hygienic Kitchen',
      desc: 'Strict sanitation checks to deliver pristine quality and absolute safety.'
    },
    {
      icon: <Heart className="text-[#FFC107]" size={28} />,
      title: 'Family Friendly',
      desc: 'A futuristic, comfortable seating space designed for families to connect.'
    }
  ];

  // Helper arrays for floating background particles
  const particles = Array.from({ length: 15 });
  const floatingBeans = Array.from({ length: 6 });

  return (
    <div className="w-full bg-[#0A0A0A] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
        {/* Cinematic Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1600&auto=format&fit=crop&q=80"
            className="w-full h-full object-cover opacity-40 scale-105"
          >
            <source src="/videos/coffee.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
        </div>

        {/* Animated Background Particles */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          {particles.map((_, i) => (
            <motion.div
              key={`p-${i}`}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5 + 0.1,
                scale: Math.random() * 0.4 + 0.2
              }}
              animate={{
                y: [null, Math.random() * -100 - 50],
                opacity: [null, 0.8, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute w-2 h-2 rounded-full bg-[#FFC107]"
            />
          ))}
          {/* Floating Coffee Beans representation */}
          {floatingBeans.map((_, i) => (
            <motion.div
              key={`b-${i}`}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotate: Math.random() * 360,
                opacity: 0.15
              }}
              animate={{
                y: [0, -25, 0],
                rotate: 360
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute text-xl sm:text-2xl select-none"
            >
              ☕
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-[#FFC107]/40 shadow-gold-glow flex items-center justify-center p-1 bg-[#161616]">
              <img
                src="/logo.jpg"
                alt="Cafe Galaxy Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-[#FAFAFA] leading-tight tracking-wide uppercase"
          >
            Experience Coffee <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD54F] via-[#FFC107] to-[#FFB300] filter drop-shadow-md">Beyond the Ordinary</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-[10px] sm:text-xs lg:text-sm text-[#FAFAFA]/75 uppercase tracking-[0.25em] font-semibold"
          >
            Premium Coffee &bull; Fresh Bakery &bull; Delicious Food &bull; Cozy Ambience
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-xs sm:max-w-none"
          >
            <Link to="/menu" className="w-full sm:w-auto">
              <RippleButton className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FFD54F] via-[#FFC107] to-[#FFB300] text-[#0A0A0A] font-bold text-xs uppercase tracking-widest rounded-xl hover:scale-105 shadow-lg hover:shadow-gold-glow">
                Explore Menu
              </RippleButton>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <RippleButton className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#FFC107] hover:bg-[#FFC107] hover:text-[#0A0A0A] border border-[#FFC107]/50 hover:border-[#FFC107] font-bold text-xs uppercase tracking-widest rounded-xl hover:scale-105">
                Visit Cafe
              </RippleButton>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 opacity-70">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#FAFAFA]/40 font-semibold">Discover More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-5 bg-[#FFC107] rounded-full"
          />
        </div>
      </section>

      {/* 2. WHY CAFE GALAXY */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#FFC107] uppercase tracking-[0.25em] text-xs font-bold flex items-center justify-center gap-1.5">
            <Sparkles size={14} /> Brand Strength
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAFAFA]">
            Why Cafe Galaxy?
          </h2>
          <p className="text-sm text-[#FAFAFA]/50 font-light max-w-xl mx-auto">
            Combining state-of-the-art brewing, daily handcrafted pastry baking, and premium hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-8 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FFC107]/5 border border-[#FFC107]/15 flex items-center justify-center mb-6 shadow-sm">
                {feat.icon}
              </div>
              <h3 className="font-serif text-lg font-bold tracking-wide text-[#FAFAFA] mb-3">
                {feat.title}
              </h3>
              <p className="text-xs text-[#FAFAFA]/60 font-light leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED MENU SLIDER */}
      <section className="py-24 bg-[#161616] border-y border-[#FFC107]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-[#FFC107] uppercase tracking-[0.25em] text-xs font-bold">
                Featured Selection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAFAFA]">
                Galactic Specialties
              </h2>
            </div>
            <Link to="/menu">
              <RippleButton className="px-6 py-3 bg-[#FFC107] hover:bg-[#FFC107]/90 text-[#0A0A0A] font-bold text-xs uppercase tracking-widest rounded-xl">
                View Full Menu
              </RippleButton>
            </Link>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {featuredItems.map((item) => (
              <SwiperSlide key={item.id} className="h-full">
                <MenuCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 4. POPULAR COFFEE SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <span className="text-[#FFC107] uppercase tracking-[0.25em] text-xs font-bold">
            Specially Brewed
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#FAFAFA]">
            Popular Coffees
          </h2>
          <p className="text-xs text-[#FAFAFA]/50 uppercase tracking-widest">
            Slow roast organic single-origin Arabica blends
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCoffee.map((item) => (
            <div key={item.id} className="h-full">
              <MenuCard item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* 5. BAKERY SPECIALS */}
      <section className="py-24 bg-[#161616] border-y border-[#FFC107]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <span className="text-[#FFC107] uppercase tracking-[0.25em] text-xs font-bold">
              Baked Fresh Daily
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#FAFAFA]">
              Bakery Specials
            </h2>
            <p className="text-xs text-[#FAFAFA]/50 uppercase tracking-widest">
              From our ovens direct to your table
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bakerySpecials.map((item) => (
              <div key={item.id} className="h-full">
                <MenuCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TODAY'S SPECIAL (Highlighted Promo) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-[#FFC107]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#FFC107] text-[#0A0A0A] text-[10px] font-black uppercase tracking-widest py-2 px-6 rounded-bl-2xl shadow-md">
            Today's Special
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Promo text */}
            <div className="space-y-6">
              <span className="text-[#FFC107] uppercase tracking-[0.3em] text-xs font-bold flex items-center gap-1.5">
                <Award size={14} /> Chef's Masterpiece
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#FAFAFA] leading-tight">
                {todaysSpecial.name}
              </h2>
              <p className="text-sm text-[#FAFAFA]/75 font-light leading-relaxed">
                {todaysSpecial.description}
              </p>
              
              <div className="flex items-baseline gap-4 pt-2">
                <span className="font-sans font-black text-[#FFC107] text-3xl sm:text-4xl">
                  ₹{todaysSpecial.price}
                </span>
                <span className="font-sans text-[#FAFAFA]/40 text-lg line-through">
                  ₹{todaysSpecial.originalPrice}
                </span>
                <span className="bg-green-600/10 text-green-500 font-bold text-xs uppercase px-2.5 py-1 rounded">
                  Save 23%
                </span>
              </div>

              <div className="pt-4">
                <Link to="/menu">
                  <RippleButton className="px-8 py-4 bg-gradient-to-r from-[#FFD54F] via-[#FFC107] to-[#FFB300] text-[#0A0A0A] font-bold text-xs uppercase tracking-widest rounded-xl hover:scale-105 shadow-md">
                    Order Today's Special
                  </RippleButton>
                </Link>
              </div>
            </div>

            {/* Promo image with hover glow */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#FFC107]/10 shadow-lg">
              <img
                src={todaysSpecial.image}
                alt={todaysSpecial.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. GALLERY PREVIEW */}
      <section className="py-24 bg-[#161616] border-y border-[#FFC107]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#FFC107] uppercase tracking-[0.25em] text-xs font-bold">
              Stellar Spaces
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAFAFA]">
              Ambience Showcase
            </h2>
            <p className="text-sm text-[#FAFAFA]/50 font-light max-w-md mx-auto">
              Glance at the cozy seating layout and artisanal presentation of Cafe Galaxy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryPreviews.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="relative aspect-square rounded-2xl overflow-hidden group border border-[#FFC107]/10 cursor-pointer shadow-lg bg-neutral-900"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-serif text-[#FFC107] text-xs uppercase tracking-widest font-bold border-b border-[#FFC107] pb-1">
                    Expand Grid
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery">
              <RippleButton className="px-8 py-3.5 bg-transparent border border-[#FFC107]/40 hover:border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107]/5 font-bold text-xs uppercase tracking-widest rounded-xl">
                Open Full Gallery
              </RippleButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. STATISTICS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {counters.map((ctr, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-3xl sm:text-5xl font-black text-[#FFC107]">
                <AnimatedCounter to={ctr.to} suffix={ctr.suffix} />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#FAFAFA]/50 font-bold">
                {ctr.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. RESERVATION CTA */}
      <section className="py-24 bg-[#161616] border-y border-[#FFC107]/10 relative overflow-hidden">
        {/* Glow backdrop particles */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#FFC107]/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10 flex flex-col items-center">
          <span className="text-[#FFC107] uppercase tracking-[0.3em] text-xs font-bold flex items-center gap-1.5">
            <CalendarClock size={16} /> Table Bookings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#FAFAFA] leading-tight">
            Reserve Your Cosmic Table
          </h2>
          <p className="text-sm text-[#FAFAFA]/75 font-light leading-relaxed max-w-lg mx-auto">
            Guarantee your spot in our luxury lounge. Book your table in advance for birthdays, dates, family get-togethers, or business meetings.
          </p>
          
          <div className="pt-2">
            <Link to="/contact">
              <RippleButton className="px-8 py-4 bg-gradient-to-r from-[#FFD54F] via-[#FFC107] to-[#FFB300] text-[#0A0A0A] font-bold text-xs uppercase tracking-widest rounded-xl hover:scale-105 shadow-md">
                Secure Booking Now
              </RippleButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CONTACT PREVIEW */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#FFC107]/15">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[#FFC107] uppercase tracking-[0.25em] text-xs font-bold">
                Visit Us Today
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#FAFAFA]">
                Where Every Cup Meets The Galaxy
              </h2>
              <p className="text-sm text-[#FAFAFA]/75 font-light leading-relaxed">
                We are located in Dindigul, Tamil Nadu. Visit us for specialty coffees, fresh pizza and burgers, or south Indian snacks.
              </p>
              
              <div className="space-y-4 text-xs sm:text-sm text-[#FAFAFA]/80">
                <p>
                  <strong>Location:</strong> Bypass Junction, Palani Road, Dindigul, Tamil Nadu 624001
                </p>
                <p>
                  <strong>Opening Hours:</strong> Mon-Sun: 9:00 AM - 11:00 PM
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a href="tel:+919876543210" className="w-full sm:w-auto">
                  <RippleButton className="w-full sm:w-auto px-6 py-3 bg-[#161616] hover:bg-[#FFC107]/10 text-[#FFC107] border border-[#FFC107]/30 font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2">
                    <PhoneCall size={14} /> Call Cafe Galaxy
                  </RippleButton>
                </a>
                <Link to="/contact" className="w-full sm:w-auto">
                  <RippleButton className="w-full sm:w-auto px-6 py-3 bg-transparent text-[#FAFAFA] border border-white/10 hover:border-[#FFC107] font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2">
                    <MessageSquare size={14} /> Contact Details
                  </RippleButton>
                </Link>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-[280px] w-full rounded-2xl overflow-hidden border border-[#FFC107]/20 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.3414995304677!2d77.96229197576579!3d10.394432189732126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ab4357a79e65%3B%2sDindigul%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                allowFullScreen=""
                loading="lazy"
                title="Cafe Galaxy Bypass Junction Dindigul Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Eye, Sparkles, ChefHat, ShieldCheck, Heart, Sofa, Zap, Smile } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <ChefHat className="text-[#FFC107]" size={28} />,
      title: 'Experienced Chefs',
      desc: 'Our culinary artists bring years of experience to curate delicious, affordable flavours.'
    },
    {
      icon: <ShieldCheck className="text-[#FFC107]" size={28} />,
      title: 'Hygienic Kitchen',
      desc: 'Cleanliness is next to godliness. We maintain absolute sanitation standards across all food prep.'
    },
    {
      icon: <Sofa className="text-[#FFC107]" size={28} />,
      title: 'Comfortable Seating',
      desc: 'Sleek, ergonomic seating structures designed to let you chat, read, or work for hours in comfort.'
    },
    {
      icon: <Zap className="text-[#FFC107]" size={28} />,
      title: 'Fast Service',
      desc: 'Our service processes are finely tuned to deliver hot coffee and meals right to your table swiftly.'
    },
    {
      icon: <Heart className="text-[#FFC107]" size={28} />,
      title: 'Fresh Ingredients',
      desc: 'We source locally grown fresh vegetables and select quality coffee beans for every batch.'
    },
    {
      icon: <Smile className="text-[#FFC107]" size={28} />,
      title: 'Family-Friendly',
      desc: 'A vibrant and cozy environment fitted to ensure adults and kids alike have a stellar, warm time.'
    }
  ];

  return (
    <div className="w-full pt-28 pb-20 bg-[#0A0A0A]">
      {/* Page Header */}
      <section className="relative py-16 bg-[#161616] border-b border-[#FFC107]/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200&auto=format&fit=crop&q=80"
            alt="Café details background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-4">
          <span className="text-[#FFC107] uppercase tracking-[0.3em] text-xs font-bold">
            Since 2014
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#FAFAFA]">
            About Cafe Galaxy
          </h1>
          <p className="text-xs sm:text-sm uppercase tracking-widest max-w-lg mx-auto text-[#FAFAFA]/50 font-semibold" >
            Discover the stellar story behind Dindigul's favorite neighborhood café
          </p>
        </div>
      </section>

      {/* Story & Ambience */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80"
              alt="Cozy Cafe Seating"
              className="w-full h-[450px] object-cover rounded-3xl border border-[#FFC107]/20 shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-45 rounded-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6 text-left"
          >
            <span className="text-[#FFC107] uppercase tracking-[0.25em] text-xs font-bold flex items-center gap-1.5 font-sans" >
              <Sparkles size={14} /> The Cosmic Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#FAFAFA] leading-tight">
              Where Quality Meets Elegance
            </h2>
            <p className="text-sm text-[#FAFAFA]/75 font-light leading-relaxed">
              Founded at the heart of Dindigul, Cafe Galaxy was conceptualized to solve a single ambition: to craft a welcoming, budget-friendly space where friends, coffee lovers, and families can gather over heavenly beverages and delicious meals.
            </p>
            <p className="text-sm text-[#FAFAFA]/75 font-light leading-relaxed">
              We take pride in selecting single-origin Arabica beans, maintaining rigorous hygienic cooking policies, and baking soft fresh breads and cakes from scratch. The soft lighting, cozy seating layout, and ambient coffee scents collectively establish a cosmic sanctuary.
            </p>
            <p className="text-sm text-[#FAFAFA]/75 font-light leading-relaxed">
              Whether you are here for a quick morning double espresso, a weekend family snack outing, or custom red velvet birthday cakes, Cafe Galaxy promises warmth, great food presentation, and fast, friendly service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#161616] border-y border-[#FFC107]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 border-l-4 border-[#FFC107] space-y-4"
            >
              <div className="flex items-center gap-3 text-[#FFC107]">
                <Compass size={24} />
                <h3 className="font-serif text-xl font-bold tracking-wide">Our Mission</h3>
              </div>
              <p className="text-sm text-[#FAFAFA]/70 font-light leading-relaxed">
                To serve high-quality, ethically sourced coffee blends, hand-crafted bakery goods, and mouthwatering multi-cuisine items under stellar hygiene conditions. We aim to brighten every guest’s day, providing top-class customer support and creating a welcoming space for Dindigul's residents and visitors.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 border-l-4 border-[#FFB300] space-y-4"
            >
              <div className="flex items-center gap-3 text-[#FFB300]">
                <Eye size={24} className="text-[#FFC107]" />
                <h3 className="font-serif text-xl font-bold tracking-wide text-[#FAFAFA]">Our Vision</h3>
              </div>
              <p className="text-sm text-[#FAFAFA]/70 font-light leading-relaxed">
                To be recognized as the premier culinary destination and coffee house brand in Tamil Nadu, synonymous with cozy café ambience, culinary excellence, organic farm sourcing, and highly memorable guest services.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#FFC107] uppercase tracking-[0.3em] text-xs font-bold">
            Our Core Qualities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#FAFAFA]">
            What Defines the Galaxy Ambience
          </h2>
          <p className="text-sm text-[#FAFAFA]/50 font-light max-w-xl mx-auto">
            From ingredients to seating comfort, we design everything to exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 border border-[#FFC107]/5 hover:border-[#FFC107]/25 transition-colors duration-300"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#FFC107]/5 border border-[#FFC107]/15 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-1.5 text-left">
                  <h3 className="font-serif text-base font-bold tracking-wide text-[#FAFAFA]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FAFAFA]/60 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

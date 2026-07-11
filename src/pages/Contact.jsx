import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, MessageSquare, Send, Check, Calendar } from 'lucide-react';
import RippleButton from '../components/RippleButton';

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formType, setFormType] = useState('reserve'); // 'reserve' | 'message'
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmitForm = (data) => {
    console.log('Form submitted:', data);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      reset();
    }, 4000);
  };

  const contactInfo = [
    {
      icon: <Phone className="text-[#FFC107]" size={20} />,
      title: 'Phone Number',
      value: '+91 93601 51808',
      link: 'tel:+919360151808',
      label: 'Call us directly'
    },
    {
      icon: <Mail className="text-[#FFC107]" size={20} />,
      title: 'Email Address',
      value: 'info@cafegalaxy.in',
      link: 'mailto:info@cafegalaxy.in',
      label: 'Email our team'
    },
    {
      icon: <MapPin className="text-[#FFC107]" size={20} />,
      title: 'Our Location',
      value: '15 A, Central Rd, near water tank, Begambur, Dindigul, Tamil Nadu 624001',
      link: 'https://www.google.com/maps?q=Cafe+galaxy,+Central+Rd,+Begambur,+Dindigul,+Tamil+Nadu+624001',
      label: 'Get Directions'
    }
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/_cafe__galaxy_since_2025_', icon: <Instagram size={18} /> },
    { name: 'Facebook', url: 'https://facebook.com', icon: <Facebook size={18} /> }
  ];

  return (
    <div className="w-full pt-28 pb-20 bg-[#0A0A0A]">
      {/* Page Header */}
      <section className="relative py-16 bg-[#161616] border-b border-[#FFC107]/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&auto=format&fit=crop&q=80"
            alt="Warm Café Counter background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-4">
          <span className="text-[#FFC107] uppercase tracking-[0.3em] text-xs font-bold">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#FAFAFA]">
            Contact & Bookings
          </h1>
          <p className="text-xs sm:text-sm text-[#FAFAFA]/50 uppercase tracking-widest max-w-md mx-auto">
            Book your cosmic table, reserve birthday cakes, or leave a message
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Details */}
          <div className="space-y-10 text-left">
            <div className="space-y-4">
              <span className="text-[#FFC107] uppercase tracking-[0.25em] text-xs font-bold">
                Connect Directly
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#FAFAFA]">
                We'd Love to Welcome You
              </h2>
              <p className="text-sm text-[#FAFAFA]/75 font-light leading-relaxed">
                Whether you have an inquiry about hosting an event in our cozy seating zone, ordering a custom chocolate fudge cake, or simply sharing feedback, our celestial hospitality team is ready to assist.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.slice(0, 2).map((item, idx) => (
                <a
                  href={item.link}
                  key={idx}
                  className="glass-card rounded-2xl p-6 border border-white/5 block hover:border-[#FFC107]/25 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFC107]/5 border border-[#FFC107]/15 flex items-center justify-center mb-4 group-hover:bg-[#FFC107] group-hover:text-[#0A0A0A] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-serif text-[#FAFAFA] font-bold text-sm tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#FFC107] mt-1 font-bold">
                    {item.value}
                  </p>
                  <span className="text-[10px] uppercase text-[#FAFAFA]/40 tracking-wider mt-3 block font-light">
                    {item.label} &rarr;
                  </span>
                </a>
              ))}
            </div>

            {/* Map Pin Detail Block */}
            <div className="glass-card rounded-2xl p-6 border border-white/5 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFC107]/5 border border-[#FFC107]/15 flex items-center justify-center shrink-0">
                <MapPin className="text-[#FFC107]" size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-[#FAFAFA] font-bold text-sm">
                  Cafe Galaxy Dindigul
                </h4>
                <p className="text-xs text-[#FAFAFA]/75 leading-relaxed font-light">
                  15 A, Central Rd, near water tank, Begambur, Dindigul, Tamil Nadu 624001
                </p>
                <a
                  href="https://www.google.com/maps?q=Cafe+galaxy,+Central+Rd,+Begambur,+Dindigul,+Tamil+Nadu+624001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FFC107] hover:underline inline-block mt-2 font-bold"
                >
                  Get Directions &rarr;
                </a>
              </div>
            </div>

            {/* Hours & Socials Panel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#161616] p-6 rounded-2xl border border-white/5">
              {/* Working Hours */}
              <div className="space-y-3">
                <h4 className="font-serif text-sm font-bold text-[#FFC107] flex items-center gap-2">
                  <Clock size={16} /> Opening Hours
                </h4>
                <div className="text-xs text-[#FAFAFA]/75 space-y-1 font-light">
                  <p><strong>Mon - Sun:</strong> 6:30 AM - 10:00 PM</p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <h4 className="font-serif text-sm font-bold text-[#FFC107]">
                  Follow Our Journey
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      href={social.url}
                      key={idx}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFC107] hover:bg-[#FFC107] hover:text-[#0A0A0A] transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/919360151808?text=Hi%20Cafe%20Galaxy,%20I'd%20like%20to%20place%20an%20order!"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <RippleButton className="w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg">
                  <MessageSquare size={16} /> WhatsApp Ordering Channel
                </RippleButton>
              </a>
            </div>
          </div>

          {/* Right Column: Reservation / Messaging Form */}
          <div className="glass-card rounded-3xl p-8 border border-white/5 shadow-xl relative">
            {/* Toggle form types */}
            <div className="flex bg-[#0A0A0A] p-1.5 rounded-2xl border border-white/5 mb-8">
              <button
                type="button"
                onClick={() => setFormType('reserve')}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer transition-all duration-300 ${
                  formType === 'reserve' ? 'bg-[#FFC107] text-[#0A0A0A]' : 'text-[#FAFAFA]/65 hover:text-white'
                }`}
              >
                Book Table
              </button>
              <button
                type="button"
                onClick={() => setFormType('message')}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer transition-all duration-300 ${
                  formType === 'message' ? 'bg-[#FFC107] text-[#0A0A0A]' : 'text-[#FAFAFA]/65 hover:text-white'
                }`}
              >
                Send Message
              </button>
            </div>

            <h3 className="font-serif text-2xl font-extrabold text-[#FAFAFA] mb-6 text-left">
              {formType === 'reserve' ? 'Secure Table Reservation' : 'Send us a Query'}
            </h3>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-600/10 border border-green-600 flex items-center justify-center text-green-500 mx-auto">
                    <Check size={28} />
                  </div>
                  <h4 className="font-serif text-[#FAFAFA] text-xl font-bold">
                    {formType === 'reserve' ? 'Reservation Submitted!' : 'Message Sent!'}
                  </h4>
                  <p className="text-xs text-[#FAFAFA]/60 font-light leading-relaxed max-w-xs mx-auto">
                    {formType === 'reserve'
                      ? 'Thank you! We have logged your reservation details. Our team will call you shortly to confirm the availability.'
                      : 'Thank you for reaching out. A representative from the Cafe Galaxy team will contact you shortly.'}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key={formType}
                  onSubmit={handleSubmit(onSubmitForm)}
                  className="space-y-5 text-left"
                >
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#FAFAFA]/50 font-bold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="E.g. Senthil Kumar"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full bg-[#0A0A0A] text-xs text-[#FAFAFA] px-4 py-3.5 rounded-xl border border-white/10 focus:border-[#FFC107]/50 focus:outline-none transition-all"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Input */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase tracking-wider text-[#FAFAFA]/50 font-bold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="E.g. +91 93601 51808"
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[0-9+() -]{10,15}$/,
                            message: 'Invalid phone format'
                          }
                        })}
                        className="w-full bg-[#0A0A0A] text-xs text-[#FAFAFA] px-4 py-3.5 rounded-xl border border-white/10 focus:border-[#FFC107]/50 focus:outline-none transition-all"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 font-medium">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase tracking-wider text-[#FAFAFA]/50 font-bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="E.g. senthil@gmail.com"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full bg-[#0A0A0A] text-xs text-[#FAFAFA] px-4 py-3.5 rounded-xl border border-white/10 focus:border-[#FFC107]/50 focus:outline-none transition-all"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Reservation Specific Inputs */}
                  {formType === 'reserve' && (
                    <div className="space-y-5 border-t border-white/5 pt-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Booking Date */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] uppercase tracking-wider text-[#FAFAFA]/50 font-bold">
                            Reservation Date
                          </label>
                          <input
                            type="date"
                            {...register('date', { required: 'Date is required for reservation' })}
                            className="w-full bg-[#0A0A0A] text-xs text-[#FAFAFA] px-4 py-3.5 rounded-xl border border-white/10 focus:border-[#FFC107]/50 focus:outline-none transition-all"
                          />
                          {errors.date && (
                            <p className="text-xs text-red-500 font-medium">{errors.date.message}</p>
                          )}
                        </div>

                        {/* Booking Time */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] uppercase tracking-wider text-[#FAFAFA]/50 font-bold">
                            Reservation Time
                          </label>
                          <input
                            type="time"
                            {...register('time', { required: 'Time is required for reservation' })}
                            className="w-full bg-[#0A0A0A] text-xs text-[#FAFAFA] px-4 py-3.5 rounded-xl border border-white/10 focus:border-[#FFC107]/50 focus:outline-none transition-all"
                          />
                          {errors.time && (
                            <p className="text-xs text-red-500 font-medium">{errors.time.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Guest Count */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] uppercase tracking-wider text-[#FAFAFA]/50 font-bold">
                            Guests Count
                          </label>
                          <select
                            {...register('guests', { required: 'Select number of guests' })}
                            className="w-full bg-[#0A0A0A] text-xs text-[#FAFAFA] px-4 py-3.5 rounded-xl border border-white/10 focus:border-[#FFC107]/50 focus:outline-none transition-all"
                          >
                            <option value="2">2 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="6">6 Guests</option>
                            <option value="8">8+ Guests (Party)</option>
                          </select>
                        </div>

                        {/* Zone Preference */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] uppercase tracking-wider text-[#FAFAFA]/50 font-bold">
                            Lounge Zone
                          </label>
                          <select
                            {...register('zone')}
                            className="w-full bg-[#0A0A0A] text-xs text-[#FAFAFA] px-4 py-3.5 rounded-xl border border-white/10 focus:border-[#FFC107]/50 focus:outline-none transition-all"
                          >
                            <option value="indoor">Indoor Glass Lounge</option>
                            <option value="outdoor">Outdoor Patio Seating</option>
                            <option value="vip">Cosmic Private Booth</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#FAFAFA]/50 font-bold">
                      {formType === 'reserve' ? 'Special Requests (Allergies, Decor, Cake)' : 'Message'}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={formType === 'reserve' ? 'E.g. Need highchair for toddler, or ordering chocolate cake...' : 'Write your inquiry here...'}
                      {...register('message', { required: formType === 'message' ? 'Message is required' : false })}
                      className="w-full bg-[#0A0A0A] text-xs text-[#FAFAFA] px-4 py-3.5 rounded-xl border border-white/10 focus:border-[#FFC107]/50 focus:outline-none transition-all resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>
                    )}
                  </div>

                  <RippleButton
                    type="submit"
                    className="w-full py-4 bg-[#FFC107] hover:bg-[#FFC107]/90 text-[#0A0A0A] font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-lg mt-6"
                  >
                    {formType === 'reserve' ? 'Secure Table Reservation' : 'Send Message'} <Send size={12} />
                  </RippleButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="w-full h-[450px] border-t border-[#FFC107]/10 mt-16 overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=Cafe+galaxy,+Central+Rd,+Begambur,+Dindigul,+Tamil+Nadu+624001&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map Location Cafe Galaxy Begambur Dindigul"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;

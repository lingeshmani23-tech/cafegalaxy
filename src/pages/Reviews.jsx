import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Sparkles, Check } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import RippleButton from '../components/RippleButton';

const initialReviews = [
  {
    id: 1,
    name: 'Karthikeyan Ramasamy',
    location: 'Vl Vadagai Pathirakadai, Dindigul',
    rating: 5,
    date: '2 weeks ago',
    text: 'A fantastic spot in Dindigul! Cafe Galaxy is open early from 6:30 AM, which is perfect for my morning coffee run. The pastries are fresh and the staff is very welcoming. Definitely a 5-star experience!',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Priyadharshini G.',
    location: 'Dindigul',
    rating: 5,
    date: '1 month ago',
    text: 'We always order their honey cake and doughnuts for family get-togethers. The home delivery is prompt and the food is always fresh. It’s hard to find such quality in town!',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Senthil Kumar',
    location: 'Dindigul City',
    rating: 5,
    date: '3 weeks ago',
    text: 'Great ambiance and excellent service. I usually visit in the evenings before they close at 10 PM. Their chicken snacks and tea are a must-try. The place truly deserves its high ratings.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Meera Krishnan',
    location: 'Vl Vadagai Pathirakadai',
    rating: 5,
    date: '2 months ago',
    text: 'Beautiful decor and very clean. I love their traditional snacks alongside modern cafe items. It’s the perfect blend of local taste and western cafe style.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    name: 'Ananthakrishnan J.',
    location: 'Dindigul',
    rating: 5,
    date: '5 days ago',
    text: 'If you are looking for authentic cappuccino in Dindigul, this is the place. The baristas really know what they are doing. Cozy, quiet, and highly hygienic.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
  }
];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [formName, setFormName] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formReview, setFormReview] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!formName || !formReview) return;

    const newReviewItem = {
      id: reviews.length + 1,
      name: formName,
      location: 'Dindigul Guest',
      rating: formRating,
      date: 'Just now',
      text: formReview,
      photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
    };

    setReviews([newReviewItem, ...reviews]);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormName('');
      setFormReview('');
      setFormRating(5);
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full pt-28 pb-20 bg-[#0A0A0A]">
      {/* Page Header */}
      <section className="relative py-16 bg-[#161616] border-b border-[#FFC107]/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1200&auto=format&fit=crop&q=80"
            alt="Desserts and Sweet display"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-4">
          <span className="text-[#FFC107] uppercase tracking-[0.3em] text-xs font-bold">
            Testimonials
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#FAFAFA]">
            Cosmic Reviews
          </h1>
          <p className="text-xs sm:text-sm text-[#FAFAFA]/50 uppercase tracking-widest max-w-md mx-auto">
            Read what our wonderful guests in Dindigul say about their Cafe Galaxy experience
          </p>
        </div>
      </section>

      {/* Hero Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="pb-14"
        >
          {reviews.slice(0, 3).map((rev) => (
            <SwiperSlide key={rev.id}>
              <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#FFC107]/15 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center relative">
                {/* Quote Icon */}
                <span className="absolute top-6 right-8 text-[#FFC107]/10 pointer-events-none">
                  <Quote size={80} className="fill-current" />
                </span>

                {/* Avatar */}
                <div className="shrink-0 relative">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#FFC107]/40 scale-105 animate-pulse-slow"></div>
                  <img
                    src={rev.photo}
                    alt={rev.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border border-[#FFC107]/20 shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 text-center md:text-left flex-grow">
                  <div className="flex justify-center md:justify-start gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < rev.rating
                            ? 'text-[#FFC107] fill-[#FFC107]'
                            : 'text-[#FAFAFA]/20'
                        }
                      />
                    ))}
                  </div>
                  <p className="font-serif italic text-base sm:text-lg text-[#FAFAFA]/80 leading-relaxed font-light">
                    "{rev.text}"
                  </p>
                  <div>
                    <h4 className="font-serif text-[#FFC107] text-base font-bold tracking-wide">
                      {rev.name}
                    </h4>
                    <p className="text-xs text-[#FAFAFA]/50 tracking-wider font-light uppercase">
                      {rev.location} &bull; {rev.date}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Grid of reviews and Submission Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Review Grid Column */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#FAFAFA] border-b border-white/5 pb-3">
              Guest Feedback Feed
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((rev) => (
                <motion.div
                  layout
                  key={rev.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/5 h-full space-y-4 hover:border-[#FFC107]/15"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={
                              i < rev.rating
                                ? 'text-[#FFC107] fill-[#FFC107]'
                                : 'text-[#FAFAFA]/10'
                            }
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#FAFAFA]/40 tracking-wider">
                        {rev.date}
                      </span>
                    </div>
                    
                    <p className="text-xs text-[#FAFAFA]/70 font-light leading-relaxed">
                      {rev.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                    <img
                      src={rev.photo}
                      alt={rev.name}
                      loading="lazy"
                      className="w-8 h-8 rounded-full object-cover border border-[#FFC107]/10"
                    />
                    <div className="text-left">
                      <h4 className="text-xs font-semibold text-[#FAFAFA]">
                        {rev.name}
                      </h4>
                      <p className="text-[10px] text-[#FAFAFA]/40 font-light uppercase tracking-wider">
                        {rev.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Review form Column */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[#FFC107]/10 sticky top-28">
            <span className="text-[#FFC107] uppercase tracking-[0.25em] text-[10px] font-bold flex items-center gap-1.5 mb-2">
              <Sparkles size={12} /> Share Experience
            </span>
            <h3 className="font-serif text-xl font-bold text-[#FAFAFA] mb-6">
              Write a Review
            </h3>

            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-600/10 border border-green-600 flex items-center justify-center text-green-500 mx-auto">
                    <Check size={28} />
                  </div>
                  <h4 className="font-serif text-[#FAFAFA] text-lg font-bold">Review Shared!</h4>
                  <p className="text-xs text-[#FAFAFA]/60 font-light leading-relaxed max-w-[200px] mx-auto">
                    Thank you! Your feedback has been appended to our feed successfully.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmitReview}
                  className="space-y-4"
                >
                  {/* Name */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[11px] uppercase tracking-wider text-[#FAFAFA]/50 font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full bg-[#0A0A0A] text-xs text-[#FAFAFA] px-4 py-3 rounded-xl border border-white/10 focus:border-[#FFC107]/40 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Rating Selector */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[11px] uppercase tracking-wider text-[#FAFAFA]/50 font-bold block">
                      Rating
                    </label>
                    <div className="flex gap-2 bg-[#0A0A0A] px-4 py-2.5 rounded-xl border border-white/10 w-fit">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormRating(star)}
                          className="text-[#FFC107] focus:outline-none cursor-pointer hover:scale-115 transition-transform"
                        >
                          <Star
                            size={16}
                            className={
                              star <= formRating
                                ? 'fill-[#FFC107]'
                                : 'text-[#FAFAFA]/25'
                            }
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[11px] uppercase tracking-wider text-[#FAFAFA]/50 font-bold">
                      Review Content
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formReview}
                      onChange={(e) => setFormReview(e.target.value)}
                      placeholder="Tell us about the coffee, taste, seating, or service..."
                      className="w-full bg-[#0A0A0A] text-xs text-[#FAFAFA] px-4 py-3 rounded-xl border border-white/10 focus:border-[#FFC107]/40 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <RippleButton
                    type="submit"
                    className="w-full py-3 bg-[#FFC107] hover:bg-[#FFC107]/90 text-[#0A0A0A] font-bold text-xs uppercase tracking-widest rounded-xl mt-4"
                  >
                    Submit Review
                  </RippleButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;

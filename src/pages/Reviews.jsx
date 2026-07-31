import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Sparkles, Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import RippleButton from "../components/RippleButton";

const initialReviews = [
  {
    id: 1,
    name: "jenisan Jeyaraj",
    location: "Dindigul",
    rating: 5,
    date: "Recently",
    text: "I have tried many products in this shop and I loved it. Especially chicken wings and Sulaimani tea are very tasty and it's my favorites must try.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Pravin",
    location: "Dindigul",
    rating: 5,
    date: "7 months ago",
    text: "Cozy vibes ☕✨ Loved this small cafe near my place! Good tea, tasty snacks, and a chill atmosphere. Perfect spot to relax after a long day. Definitely coming back again ❤️",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Shanmuga Raj",
    location: "Dindigul",
    rating: 5,
    date: "7 months ago",
    text: "Ambience was very good with tasty and yummy snack Must tryable and you will love it😋🤤",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Amrish rathnakumar",
    location: "Dindigul",
    rating: 5,
    date: "7 months ago",
    text: "Quality of the food was Good and delicious, service was excellent. Time taken for preparation of food was reasonable. Ambient of the shop was wonderful.",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Vivek Ayyanathan Raja",
    location: "Dindigul",
    rating: 5,
    date: "11 months ago",
    text: "Best milk shake, burger and fries and a best service. Kid-friendliness: Lots of kids friendly menu",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Vishwa K",
    location: "Dindigul",
    rating: 5,
    date: "11 months ago",
    text: "Great cafe! Tasty food, friendly service, cozy atmosphere, and very affordable. Definitely worth visiting again.",
    photo:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "21UCOAT54 Gliffton lewis",
    location: "Dindigul",
    rating: 5,
    date: "7 months ago",
    text: "Its a worthy experience , food tastes good , especially i like chocolate tea 🤤",
    photo:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Sankari Selvaraj",
    location: "Dindigul",
    rating: 5,
    date: "a year ago",
    text: "If you are a tea lover, just visit this place. This cafe worth your time and money. Anyone will get addicted to this cafe's dishes",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    name: "Peace Hrt",
    location: "Dindigul",
    rating: 5,
    date: "a year ago",
    text: "Delivered in time , chickens are very crispy and milkshakes are very delicious and sulaimani tea is my favourite Just loved it",
    photo:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 10,
    name: "Saranya Balan",
    location: "Dindigul",
    rating: 5,
    date: "a year ago",
    text: "The place was peaceful .ambience was also good. The food was very economically affordable everything under 130₹.The food was delicious .",
    photo:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 11,
    name: "Rekha R",
    location: "Dindigul",
    rating: 5,
    date: "a year ago",
    text: "Delicious food rendered with warm service makes them unique.Excellent",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 12,
    name: "Teddy Tharun",
    location: "Dindigul",
    rating: 5,
    date: "a year ago",
    text: "Unique dishes and best cafe in Dindigul.",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 13,
    name: "sruthi meera",
    location: "Dindigul",
    rating: 5,
    date: "a year ago",
    text: "Amazing tea and a must visit if you are in that area!!",
    photo:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 14,
    name: "Laxmi Priya",
    location: "Dindigul",
    rating: 5,
    date: "a year ago",
    text: "Wonderful experience 🥰🥰 Must visit cafe❤️",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 15,
    name: "Vyshnav. T",
    location: "Dindigul",
    rating: 5,
    date: "a year ago",
    text: "Affordable spot and worth visiting",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 16,
    name: "Senthil Kumar",
    location: "Dindigul",
    rating: 5,
    date: "a year ago",
    text: "Very Hot and spicy tease",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 17,
    name: "Mohammed Asif",
    location: "Dindigul",
    rating: 5,
    date: "6 months ago",
    text: "Good",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 18,
    name: "Vaishnavi S",
    location: "Dindigul",
    rating: 5,
    date: "a year ago",
    text: "A Hidden Gem with Heartwarming Vibes!",
    photo:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 19,
    name: "nagavinothi nagavinothini",
    location: "Dindigul",
    rating: 5,
    date: "a year ago",
    text: "Very tasty and healthy",
    photo:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 20,
    name: "Bourna Bala",
    location: "Dindigul",
    rating: 5,
    date: "a year ago",
    text: "Nice place to enjoy with yummy food",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 21,
    name: "Annapoorani M",
    location: "Dindigul",
    rating: 5,
    date: "a year ago",
    text: "Coffee super nice place",
    photo:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 22,
    name: "Vaishnavi",
    location: "Dindigul",
    rating: 5,
    date: "a year ago",
    text: "Best in taste",
    photo:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 23,
    name: "RAJA THALAMUTHU",
    location: "Dindigul",
    rating: 5,
    date: "a year ago",
    text: "A nice hangout spot",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [formName, setFormName] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [formReview, setFormReview] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!formName || !formReview) return;

    const newReviewItem = {
      id: reviews.length + 1,
      name: formName,
      location: "Dindigul Guest",
      rating: formRating,
      date: "Just now",
      text: formReview,
      photo:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    };

    setReviews([newReviewItem, ...reviews]);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormName("");
      setFormReview("");
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
            Read what our wonderful guests in Dindigul say about their Cafe
            Galaxy experience
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
                            ? "text-[#FFC107] fill-[#FFC107]"
                            : "text-[#FAFAFA]/20"
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
                                ? "text-[#FFC107] fill-[#FFC107]"
                                : "text-[#FAFAFA]/10"
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
                  <h4 className="font-serif text-[#FAFAFA] text-lg font-bold">
                    Review Shared!
                  </h4>
                  <p className="text-xs text-[#FAFAFA]/60 font-light leading-relaxed max-w-[200px] mx-auto">
                    Thank you! Your feedback has been appended to our feed
                    successfully.
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
                                ? "fill-[#FFC107]"
                                : "text-[#FAFAFA]/25"
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

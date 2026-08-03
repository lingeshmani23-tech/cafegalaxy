import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Sparkles, Check, Loader2, AlertCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import RippleButton from "../components/RippleButton";
import InitialsAvatar from "../components/InitialsAvatar";
import { formatReviewDate } from "../utils/formatDate";

const initialReviews = [
  {
    id: 1,
    name: "jenisan Jeyaraj",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-08-03T20:45:00Z",
    text: "I have tried many products in this shop and I loved it. Especially chicken wings and Sulaimani tea are very tasty and it's my favorites must try."
  },
  {
    id: 2,
    name: "Pravin",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-08-02T18:30:00Z",
    text: "Cozy vibes ☕✨ Loved this small cafe near my place! Good tea, tasty snacks, and a chill atmosphere. Perfect spot to relax after a long day. Definitely coming back again ❤️"
  },
  {
    id: 3,
    name: "Shanmuga Raj",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-07-28T14:15:00Z",
    text: "Ambience was very good with tasty and yummy snack Must tryable and you will love it😋🤤"
  },
  {
    id: 4,
    name: "Amrish rathnakumar",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-07-20T11:20:00Z",
    text: "Quality of the food was Good and delicious, service was excellent. Time taken for preparation of food was reasonable. Ambient of the shop was wonderful."
  },
  {
    id: 5,
    name: "Vivek Ayyanathan Raja",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-07-15T16:40:00Z",
    text: "Best milk shake, burger and fries and a best service. Kid-friendliness: Lots of kids friendly menu"
  },
  {
    id: 6,
    name: "Vishwa K",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-07-02T09:10:00Z",
    text: "Great cafe! Tasty food, friendly service, cozy atmosphere, and very affordable. Definitely worth visiting again."
  },
  {
    id: 7,
    name: "21UCOAT54 Gliffton lewis",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-06-25T19:50:00Z",
    text: "Its a worthy experience , food tastes good , especially i like chocolate tea 🤤"
  },
  {
    id: 8,
    name: "Sankari Selvaraj",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-06-18T13:05:00Z",
    text: "If you are a tea lover, just visit this place. This cafe worth your time and money. Anyone will get addicted to this cafe's dishes"
  },
  {
    id: 9,
    name: "Peace Hrt",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-06-10T17:30:00Z",
    text: "Delivered in time , chickens are very crispy and milkshakes are very delicious and sulaimani tea is my favourite Just loved it"
  },
  {
    id: 10,
    name: "Saranya Balan",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-05-29T12:45:00Z",
    text: "The place was peaceful .ambience was also good. The food was very economically affordable everything under 130₹.The food was delicious ."
  },
  {
    id: 11,
    name: "Rekha R",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-05-14T10:00:00Z",
    text: "Delicious food rendered with warm service makes them unique.Excellent"
  },
  {
    id: 12,
    name: "Teddy Tharun",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-05-01T15:20:00Z",
    text: "Unique dishes and best cafe in Dindigul."
  },
  {
    id: 13,
    name: "sruthi meera",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-04-20T18:15:00Z",
    text: "Amazing tea and a must visit if you are in that area!!"
  },
  {
    id: 14,
    name: "Laxmi Priya",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-04-10T11:30:00Z",
    text: "Wonderful experience 🥰🥰 Must visit cafe❤️"
  },
  {
    id: 15,
    name: "Vyshnav. T",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-03-28T16:00:00Z",
    text: "Affordable spot and worth visiting"
  },
  {
    id: 16,
    name: "Senthil Kumar",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-03-15T08:45:00Z",
    text: "Very Hot and spicy tease"
  },
  {
    id: 17,
    name: "Mohammed Asif",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-03-02T19:25:00Z",
    text: "Good"
  },
  {
    id: 18,
    name: "Vaishnavi S",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-02-18T14:10:00Z",
    text: "A Hidden Gem with Heartwarming Vibes!"
  },
  {
    id: 19,
    name: "nagavinothi nagavinothini",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-02-05T17:50:00Z",
    text: "Very tasty and healthy"
  },
  {
    id: 20,
    name: "Bourna Bala",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-01-22T12:35:00Z",
    text: "Nice place to enjoy with yummy food"
  },
  {
    id: 21,
    name: "Annapoorani M",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-01-10T09:40:00Z",
    text: "Coffee super nice place"
  },
  {
    id: 22,
    name: "Vaishnavi",
    location: "Dindigul",
    rating: 5,
    createdAt: "2025-12-28T16:15:00Z",
    text: "Best in taste"
  },
  {
    id: 23,
    name: "RAJA THALAMUTHU",
    location: "Dindigul",
    rating: 5,
    createdAt: "2025-12-15T11:00:00Z",
    text: "A nice hangout spot"
  }
];

const Reviews = () => {
  // Persist reviews so they are not lost after a page refresh
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem("galaxy_reviews");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item, idx) => ({
            ...item,
            createdAt: item.createdAt || initialReviews[idx]?.createdAt || new Date().toISOString()
          }));
        }
      }
    } catch (e) {
      console.error("Failed to parse reviews from local storage");
    }
    return initialReviews;
  });

  const [formName, setFormName] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [formReview, setFormReview] = useState("");
  
  // Loading and Error States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({ type: null, message: "" });

  // Sync state to local storage automatically
  useEffect(() => {
    localStorage.setItem("galaxy_reviews", JSON.stringify(reviews));
  }, [reviews]);

  // Sort reviews by newest first
  const sortedReviews = useMemo(() => {
    return [...reviews].sort((a, b) => {
      const timeA = new Date(a.createdAt || 0).getTime();
      const timeB = new Date(b.createdAt || 0).getTime();
      return timeB - timeA;
    });
  }, [reviews]);

  // Calculations for average and distribution
  const stats = useMemo(() => {
    const total = sortedReviews.length;
    const avg = total > 0 ? (sortedReviews.reduce((acc, rev) => acc + rev.rating, 0) / total).toFixed(1) : 0;
    const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    sortedReviews.forEach(rev => { dist[rev.rating] = (dist[rev.rating] || 0) + 1; });
    return { total, avg, dist };
  }, [sortedReviews]);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setSubmitState({ type: null, message: "" });

    const trimmedName = formName.trim();
    const trimmedReview = formReview.trim();

    // Prevent empty reviews
    if (!trimmedName || !trimmedReview) {
      setSubmitState({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    // Prevent duplicate submissions
    const isDuplicate = reviews.some(
      (rev) => rev.name.toLowerCase() === trimmedName.toLowerCase() && rev.text.toLowerCase() === trimmedReview.toLowerCase()
    );

    if (isDuplicate) {
      setSubmitState({ type: "error", message: "You have already submitted this exact review." });
      return;
    }

    // Loading state
    setIsSubmitting(true);

    // Simulate network delay
    setTimeout(() => {
      try {
        const newReviewItem = {
          id: Date.now(),
          name: trimmedName,
          location: "Dindigul Guest",
          rating: formRating,
          createdAt: new Date().toISOString(),
          text: trimmedReview,
        };

        // Display the newest reviews at the top
        setReviews([newReviewItem, ...reviews]);
        
        // Show appropriate success message
        setSubmitState({ type: "success", message: "Review shared successfully!" });
        
        // Clear the form after a successful submission
        setFormName("");
        setFormReview("");
        setFormRating(5);
        
        setTimeout(() => setSubmitState({ type: null, message: "" }), 4000);
      } catch (err) {
        setSubmitState({ type: "error", message: "Failed to post review. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    }, 1200);
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
          {sortedReviews.slice(0, 3).map((rev) => (
            <SwiperSlide key={rev.id}>
              <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#FFC107]/15 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center relative">
                {/* Quote Icon */}
                <span className="absolute top-6 right-8 text-[#FFC107]/10 pointer-events-none">
                  <Quote size={80} className="fill-current" />
                </span>

                {/* Avatar */}
                <div className="shrink-0 relative">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#FFC107]/40 scale-105 animate-pulse-slow"></div>
                  <InitialsAvatar
                    name={rev.name}
                    className="!w-24 !h-24 sm:!w-28 sm:!h-28 !text-3xl sm:!text-4xl shadow-lg border border-[#FFC107]/30"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 text-center md:text-left flex-grow w-full">
                  <div className="flex justify-between items-center w-full gap-4">
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
                    <span className="text-[12px] font-medium text-[#9CA3AF] shrink-0">
                      {formatReviewDate(rev.createdAt || rev.date)}
                    </span>
                  </div>
                  <p className="font-serif italic text-base sm:text-lg text-[#FAFAFA]/80 leading-relaxed font-light">
                    "{rev.text}"
                  </p>
                  <div>
                    <h4 className="font-serif text-[#FFC107] text-base font-bold tracking-wide">
                      {rev.name}
                    </h4>
                    <p className="text-xs text-[#FAFAFA]/50 tracking-wider font-light uppercase">
                      {rev.location}
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
          <div className="lg:col-span-2 space-y-8">
            
            {/* Rating Summary Header */}
            <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/5 flex flex-col md:flex-row gap-8 items-center md:items-start justify-between shadow-lg">
              <div className="text-center md:text-left space-y-2">
                <h2 className="text-5xl sm:text-6xl font-black text-[#FAFAFA] font-serif tracking-tight">{stats.avg}</h2>
                <div className="flex gap-1 justify-center md:justify-start">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className={i < Math.round(stats.avg) ? "text-[#FFC107] fill-[#FFC107]" : "text-[#FAFAFA]/20"} />
                  ))}
                </div>
                <p className="text-xs text-[#FAFAFA]/50 uppercase tracking-widest font-bold">Based on {stats.total} reviews</p>
              </div>
              
              <div className="flex-1 w-full max-w-sm space-y-2.5">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-3">
                    <span className="text-xs font-bold tracking-widest text-[#FAFAFA]/70 w-12">{star} Star</span>
                    <div className="flex-1 h-2.5 bg-[#1a1a1a] rounded-full overflow-hidden border border-white/5 relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(stats.dist[star] / stats.total) * 100}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full bg-[#FFC107] rounded-full" 
                      />
                    </div>
                    <span className="text-xs text-[#FAFAFA]/50 w-8 text-right font-mono">{stats.dist[star]}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#FAFAFA] border-b border-white/5 pb-3">
              Guest Feedback Feed
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence>
                {sortedReviews.map((rev) => (
                  <motion.div
                    layout
                    key={rev.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/5 h-full space-y-4 hover:border-[#FFC107]/15 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="space-y-3">
                      {/* Top Header: 5 Stars on Left, Formatted Timestamp on Right */}
                      <div className="flex justify-between items-center gap-2">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={
                                i < rev.rating
                                  ? "text-[#FFC107] fill-[#FFC107]"
                                  : "text-[#FAFAFA]/10"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-[12px] font-medium text-[#9CA3AF] tracking-wide shrink-0">
                          {formatReviewDate(rev.createdAt || rev.date)}
                        </span>
                      </div>

                      {/* Review Text Body */}
                      <p className="text-xs text-[#FAFAFA]/70 font-light leading-relaxed">
                        {rev.text}
                      </p>
                    </div>

                    {/* Bottom Reviewer Info: Initials Avatar + Name + Location */}
                    <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                      <InitialsAvatar name={rev.name} />
                      <div className="text-left">
                        <h4 className="text-xs font-bold text-[#FAFAFA]">
                          {rev.name}
                        </h4>
                        <p className="text-[10px] text-[#FAFAFA]/40 font-light uppercase tracking-wider">
                          {rev.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
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

            {/* Success/Error Message display */}
            <AnimatePresence mode="wait">
              {submitState.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`mb-6 p-4 rounded-xl border ${
                    submitState.type === 'success' 
                    ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                    : 'bg-red-500/10 border-red-500/30 text-red-400'
                  } flex flex-col items-center justify-center text-center space-y-2`}
                >
                  {submitState.type === 'success' ? <Check size={20} /> : <AlertCircle size={20} />}
                  <p className="text-xs font-medium leading-relaxed">{submitState.message}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.form
              layout
              onSubmit={handleSubmitReview}
              className="space-y-4"
            >
              {/* Name */}
              <div className="space-y-1.5 text-left">
                <label className="text-[11px] uppercase tracking-wider text-[#FAFAFA]/50 font-bold">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-[#0A0A0A] text-xs text-[#FAFAFA] px-4 py-3 rounded-xl border border-white/10 focus:border-[#FFC107]/40 focus:outline-none transition-all disabled:opacity-50"
                />
              </div>

              {/* Rating Selector */}
              <div className="space-y-1.5 text-left">
                <label className="text-[11px] uppercase tracking-wider text-[#FAFAFA]/50 font-bold block">
                  Rating <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2 bg-[#0A0A0A] px-4 py-2.5 rounded-xl border border-white/10 w-fit">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => setFormRating(star)}
                      className="text-[#FFC107] focus:outline-none cursor-pointer hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
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
                  Review Content <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  disabled={isSubmitting}
                  value={formReview}
                  onChange={(e) => setFormReview(e.target.value)}
                  placeholder="Tell us about the coffee, taste, seating, or service..."
                  className="w-full bg-[#0A0A0A] text-xs text-[#FAFAFA] px-4 py-3 rounded-xl border border-white/10 focus:border-[#FFC107]/40 focus:outline-none transition-all resize-none disabled:opacity-50"
                />
              </div>

              <RippleButton
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#FFC107] hover:bg-[#FFC107]/90 text-[#0A0A0A] font-bold text-xs uppercase tracking-widest rounded-xl mt-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Review"
                )}
              </RippleButton>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;

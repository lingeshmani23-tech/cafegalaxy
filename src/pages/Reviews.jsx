import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Sparkles, Check, Loader2, AlertCircle, Cloud, ExternalLink, ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import RippleButton from "../components/RippleButton";
import InitialsAvatar from "../components/InitialsAvatar";
import GoogleIcon from "../components/GoogleIcon";
import ReviewCard from "../components/ReviewCard";
import ReviewSkeleton from "../components/ReviewSkeleton";
import { formatReviewDate } from "../utils/formatDate";
import {
  subscribeToCloudReviews,
  postCloudReview,
  fetchMoreCloudReviews,
  verifyFirebaseEnv
} from "../services/reviewsService";
import { fetchGooglePlacesReviews, GOOGLE_MAPS_BUSINESS_URL } from "../services/googleReviewsService";

const seedReviewsFallback = [
  {
    id: "seed_1",
    name: "jenisan Jeyaraj",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-08-03T20:45:00Z",
    text: "I have tried many products in this shop and I loved it. Especially chicken wings and Sulaimani tea are very tasty and it's my favorites must try."
  },
  {
    id: "seed_2",
    name: "Pravin",
    location: "Dindigul",
    rating: 5,
    createdAt: "2026-08-02T18:30:00Z",
    text: "Cozy vibes ☕✨ Loved this small cafe near my place! Good tea, tasty snacks, and a chill atmosphere. Perfect spot to relax after a long day. Definitely coming back again ❤️"
  }
];

const INITIAL_VISIBLE_COUNT = 10;

const Reviews = () => {
  // State variables - ALL data is synced directly with Firebase Firestore Cloud Database
  const [cloudReviews, setCloudReviews] = useState([]);
  const [googleData, setGoogleData] = useState({
    rating: 4.9,
    userRatingsTotal: 48,
    googleUrl: GOOGLE_MAPS_BUSINESS_URL,
    reviews: []
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [lastDocState, setLastDocState] = useState(null);
  const [hasMoreCloud, setHasMoreCloud] = useState(true);
  const [visibleLimit, setVisibleLimit] = useState(INITIAL_VISIBLE_COUNT);
  
  const [activeTab, setActiveTab] = useState("all"); // 'all' | 'google' | 'community'

  const [formName, setFormName] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [formReview, setFormReview] = useState("");
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({ type: null, message: "" });
  const [firestorePermissionError, setFirestorePermissionError] = useState(null);

  // 1. Verify Environment Variables & Fetch Google Places API Reviews
  useEffect(() => {
    let isMounted = true;
    verifyFirebaseEnv();
    const loadGoogleReviews = async () => {
      try {
        const data = await fetchGooglePlacesReviews();
        if (isMounted && data) {
          setGoogleData(data);
        }
      } catch (err) {
        console.warn("Failed to load Google Places reviews:", err);
      }
    };
    loadGoogleReviews();
    return () => { isMounted = false; };
  }, []);

  // 2. Real-time Cloud Database Listener (Firestore onSnapshot)
  // Ensures every visitor on every device sees identical live updates
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    console.log("Subscribing to Firestore Cloud Database onSnapshot...");

    const unsubscribe = subscribeToCloudReviews(
      (fetchedCloudReviews, lastDoc) => {
        if (!isMounted) return;
        console.log(`Loaded ${fetchedCloudReviews.length} reviews from Firestore`);
        setCloudReviews(fetchedCloudReviews);
        setLastDocState(lastDoc);
        setFirestorePermissionError(null);
        setIsLoading(false);
      },
      (error) => {
        console.error("Cloud DB Connection Error:", error);
        if (error?.code === "permission-denied" || error?.message?.includes("PERMISSION_DENIED")) {
          setFirestorePermissionError("Firestore Security Rules PERMISSION_DENIED: Please allow public read/create rules on 'reviews' collection.");
        }
        if (!cloudReviews.length) {
          setCloudReviews(seedReviewsFallback);
        }
        setIsLoading(false);
      },
      seedReviewsFallback,
      50
    );

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  // 3. Combined & Filtered Reviews List
  const displayedReviews = useMemo(() => {
    const googleReviewsList = (googleData.reviews || []).map(r => ({ ...r, isGoogle: true }));
    const communityReviewsList = cloudReviews.map(r => ({ ...r, isGoogle: false }));

    let combined = [];
    if (activeTab === "google") {
      combined = googleReviewsList;
    } else if (activeTab === "community") {
      combined = communityReviewsList;
    } else {
      combined = [...googleReviewsList, ...communityReviewsList];
    }

    return combined.sort((a, b) => {
      const timeA = new Date(a.createdAt || 0).getTime();
      const timeB = new Date(b.createdAt || 0).getTime();
      return timeB - timeA;
    });
  }, [googleData.reviews, cloudReviews, activeTab]);

  // Paginated slice for smooth rendering
  const paginatedReviews = useMemo(() => {
    return displayedReviews.slice(0, visibleLimit);
  }, [displayedReviews, visibleLimit]);

  // Total stats computation
  const stats = useMemo(() => {
    const totalCount = (googleData.reviews?.length || 0) + cloudReviews.length;
    const avgRating = googleData.rating || 4.9;
    const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    [...(googleData.reviews || []), ...cloudReviews].forEach(rev => {
      const r = Math.round(rev.rating) || 5;
      dist[r] = (dist[r] || 0) + 1;
    });
    return { totalCount, avgRating, dist };
  }, [googleData, cloudReviews]);

  // Load More Handler (Cursor-based pagination from Firestore)
  const handleLoadMore = useCallback(async () => {
    if (visibleLimit < displayedReviews.length) {
      setVisibleLimit(prev => prev + 10);
      return;
    }

    if (lastDocState && hasMoreCloud) {
      setIsLoadingMore(true);
      const { reviews: newItems, lastDoc, hasMore } = await fetchMoreCloudReviews(lastDocState, 10);
      if (newItems.length > 0) {
        setCloudReviews(prev => [...prev, ...newItems]);
        setLastDocState(lastDoc);
        setHasMoreCloud(hasMore);
        setVisibleLimit(prev => prev + newItems.length);
      } else {
        setHasMoreCloud(false);
      }
      setIsLoadingMore(false);
    }
  }, [visibleLimit, displayedReviews.length, lastDocState, hasMoreCloud]);

  // Direct Cloud Database Write Handler
  // Saves to Firebase Cloud Database first, then displays write confirmation
  const handleSubmitReview = useCallback(async (e) => {
    e.preventDefault();
    setSubmitState({ type: null, message: "" });

    const trimmedName = formName.trim();
    const trimmedReview = formReview.trim();

    if (!trimmedName || !trimmedReview) {
      setSubmitState({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    const isDuplicate = cloudReviews.some(
      (rev) => rev.name.toLowerCase() === trimmedName.toLowerCase() && (rev.text || rev.review || "").toLowerCase() === trimmedReview.toLowerCase()
    );

    if (isDuplicate) {
      setSubmitState({ type: "error", message: "You have already submitted this exact review." });
      return;
    }

    setIsSubmitting(true);
    console.log("Submitting review...");

    try {
      // 1. Post to Firebase Firestore Cloud Database first
      const savedResult = await postCloudReview({
        name: trimmedName,
        text: trimmedReview,
        rating: formRating,
        location: "Dindigul Guest"
      });

      console.log("Generated document ID:", savedResult.id);

      // 2. Database write confirmed
      setSubmitState({ type: "success", message: `Review saved to Cloud Database! Doc ID: ${savedResult.id}` });
      setFormName("");
      setFormReview("");
      setFormRating(5);
      setTimeout(() => setSubmitState({ type: null, message: "" }), 6000);
    } catch (err) {
      console.error("Firestore database write error:", err.code, err.message, err);
      setSubmitState({ type: "error", message: `Failed to save review: ${err.message || "Permission Denied"}` });
    } finally {
      setIsSubmitting(false);
    }
  }, [formName, formReview, formRating, cloudReviews]);

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
          <span className="text-[#FFC107] uppercase tracking-[0.3em] text-xs font-bold flex items-center justify-center gap-2">
            <GoogleIcon size={16} /> Multi-Device Cloud Database Sync
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#FAFAFA]">
            Cosmic Reviews
          </h1>
          <p className="text-xs sm:text-sm text-[#FAFAFA]/50 uppercase tracking-widest max-w-md mx-auto">
            Live reviews stored in central cloud database & synchronized across all devices
          </p>
        </div>
      </section>

      {/* Hero Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isLoading && !displayedReviews.length ? (
          <div className="glass-card rounded-3xl p-12 text-center border border-white/5 flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto">
            <Loader2 size={36} className="animate-spin text-[#FFC107]" />
            <p className="text-xs text-[#FAFAFA]/60 font-medium tracking-wider uppercase">Loading live reviews from Cloud Database...</p>
          </div>
        ) : (
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="pb-14"
          >
            {displayedReviews.slice(0, 3).map((rev) => (
              <SwiperSlide key={rev.id}>
                <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#FFC107]/15 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center relative">
                  {/* Quote Icon */}
                  <span className="absolute top-6 right-8 text-[#FFC107]/10 pointer-events-none">
                    <Quote size={80} className="fill-current" />
                  </span>

                  {/* Initials Avatar */}
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
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">
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
                        {rev.isGoogle && (
                          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            <GoogleIcon size={12} /> Verified Google Review
                          </span>
                        )}
                      </div>
                      <span className="text-[12px] font-medium text-[#9CA3AF] shrink-0">
                        {formatReviewDate(rev.createdAt || rev.relativeTime)}
                      </span>
                    </div>

                    <p className="font-serif italic text-base sm:text-lg text-[#FAFAFA]/80 leading-relaxed font-light">
                      "{rev.text || rev.review}"
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
        )}
      </section>

      {/* Main Grid: Reviews & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {firestorePermissionError && (
          <div className="mb-8 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 space-y-2">
            <h4 className="font-bold flex items-center gap-2 text-sm"><AlertCircle size={18} /> Firestore Security Rules Configuration Notice</h4>
            <p className="text-xs leading-relaxed text-amber-200/90">
              Firebase returned <code>PERMISSION_DENIED</code>. Update the Firestore Security Rules in the Firebase Console to allow public read/write access:
            </p>
            <pre className="bg-black/60 p-3 rounded-lg text-[11px] text-amber-400 font-mono overflow-x-auto">
{`service cloud.firestore {
  match /databases/{database}/documents {
    match /reviews/{document} {
      allow read: if true;
      allow create: if true;
    }
  }
}`}
            </pre>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Column: Google Header & Feed */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Google Business Rating Summary Card */}
            <div className="glass-card rounded-3xl p-6 md:p-8 border border-[#FFC107]/20 flex flex-col md:flex-row gap-8 items-center justify-between shadow-xl relative overflow-hidden bg-gradient-to-br from-[#161616] via-[#0A0A0A] to-[#1A1408]">
              <div className="space-y-3 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold">
                  <GoogleIcon size={14} /> Official Google Business Profile
                </div>
                
                <div className="flex items-baseline justify-center md:justify-start gap-3">
                  <h2 className="text-5xl sm:text-6xl font-black text-[#FAFAFA] font-serif tracking-tight">
                    {googleData.rating || "4.9"}
                  </h2>
                  <div className="space-y-1">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={18} className="text-[#FFC107] fill-[#FFC107]" />
                      ))}
                    </div>
                    <p className="text-xs text-[#FAFAFA]/60 font-medium">
                      out of 5 stars
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#FAFAFA]/50 uppercase tracking-widest font-bold">
                  Based on {googleData.userRatingsTotal || 48}+ Verified Google Reviews
                </p>
              </div>

              {/* Action Button */}
              <div className="flex flex-col items-center md:items-end space-y-3 w-full md:w-auto">
                <a
                  href={googleData.googleUrl || GOOGLE_MAPS_BUSINESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <RippleButton className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-md">
                    <GoogleIcon size={16} /> View All On Google <ExternalLink size={14} />
                  </RippleButton>
                </a>
                <span className="text-[10px] text-[#FAFAFA]/40 font-light">Refreshed automatically every 24h</span>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-between border-b border-white/5 pb-4 gap-4">
              <div className="flex gap-2 bg-[#161616] p-1.5 rounded-2xl border border-white/10">
                <button
                  onClick={() => { setActiveTab("all"); setVisibleLimit(INITIAL_VISIBLE_COUNT); }}
                  className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all ${
                    activeTab === "all"
                      ? "bg-[#FFC107] text-[#0A0A0A] shadow-md"
                      : "text-[#FAFAFA]/60 hover:text-white"
                  }`}
                >
                  ✨ All ({stats.totalCount})
                </button>
                <button
                  onClick={() => { setActiveTab("google"); setVisibleLimit(INITIAL_VISIBLE_COUNT); }}
                  className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 ${
                    activeTab === "google"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-[#FAFAFA]/60 hover:text-white"
                  }`}
                >
                  <GoogleIcon size={14} /> Google ({googleData.reviews?.length || 10})
                </button>
                <button
                  onClick={() => { setActiveTab("community"); setVisibleLimit(INITIAL_VISIBLE_COUNT); }}
                  className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 ${
                    activeTab === "community"
                      ? "bg-[#FFC107] text-[#0A0A0A] shadow-md"
                      : "text-[#FAFAFA]/60 hover:text-white"
                  }`}
                >
                  <Cloud size={14} /> Community ({cloudReviews.length})
                </button>
              </div>

              <span className="text-xs text-[#FAFAFA]/40 font-light">
                Showing {paginatedReviews.length} of {displayedReviews.length} reviews
              </span>
            </div>

            {/* Review Cards Feed Grid with Skeleton Loaders */}
            {isLoading && !displayedReviews.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map(i => <ReviewSkeleton key={i} />)}
              </div>
            ) : displayedReviews.length === 0 ? (
              <div className="text-center py-16 glass-card rounded-2xl border border-white/5 space-y-3">
                <Cloud size={36} className="text-[#FFC107] mx-auto opacity-80" />
                <h4 className="font-serif text-lg font-bold text-[#FAFAFA]">No reviews found in this category</h4>
                <p className="text-xs text-[#FAFAFA]/50 font-light max-w-sm mx-auto">
                  Be the first guest to share your Cafe Galaxy experience! Write a review using the form on the right.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AnimatePresence mode="popLayout">
                    {paginatedReviews.map((rev) => (
                      <ReviewCard key={rev.id} rev={rev} />
                    ))}
                  </AnimatePresence>
                </div>

                {/* Load More Button */}
                {(visibleLimit < displayedReviews.length || (hasMoreCloud && lastDocState)) && (
                  <div className="text-center pt-4">
                    <button
                      onClick={handleLoadMore}
                      disabled={isLoadingMore}
                      className="px-8 py-3.5 bg-[#161616] hover:bg-[#FFC107]/10 text-[#FFC107] border border-[#FFC107]/30 hover:border-[#FFC107] font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 mx-auto disabled:opacity-50 cursor-pointer shadow-md"
                    >
                      {isLoadingMore ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Loading More...
                        </>
                      ) : (
                        <>
                          Load More Reviews <ChevronDown size={14} />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Review Submission Form */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[#FFC107]/10 sticky top-28">
            <span className="text-[#FFC107] uppercase tracking-[0.25em] text-[10px] font-bold flex items-center gap-1.5 mb-2">
              <Sparkles size={12} /> Share Experience
            </span>
            <h3 className="font-serif text-xl font-bold text-[#FAFAFA] mb-6">
              Write a Review
            </h3>

            {/* Form Response Notification */}
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

            <form onSubmit={handleSubmitReview} className="space-y-4">
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
                    Saving to Cloud DB...
                  </>
                ) : (
                  "Submit Review"
                )}
              </RippleButton>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;

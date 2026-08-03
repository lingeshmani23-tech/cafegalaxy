import React from 'react';
import { motion } from 'framer-motion';
import { Star, Cloud } from 'lucide-react';
import InitialsAvatar from './InitialsAvatar';
import GoogleIcon from './GoogleIcon';
import { formatReviewDate } from '../utils/formatDate';

const ReviewCard = React.memo(({ rev }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/5 h-full space-y-4 hover:border-[#FFC107]/20 hover:shadow-xl transition-all duration-300 relative group ${
        rev.isOptimistic ? "opacity-75 border-amber-500/40" : ""
      }`}
    >
      <div className="space-y-3">
        {/* Top Header: Rating (Left), Timestamp (Right) */}
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
            {rev.isOptimistic ? "Posting..." : formatReviewDate(rev.createdAt || rev.relativeTime)}
          </span>
        </div>

        {/* Review Badge */}
        <div>
          {rev.isGoogle ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <GoogleIcon size={12} /> Verified Google Review
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#FFC107]/10 text-[#FFC107] border border-[#FFC107]/20">
              <Cloud size={12} /> {rev.isOptimistic ? "Posting to Cloud..." : "Website Guest Review"}
            </span>
          )}
        </div>

        {/* Review Body */}
        <p className="text-xs text-[#FAFAFA]/75 font-light leading-relaxed">
          "{rev.text}"
        </p>
      </div>

      {/* Bottom Author Row: Initials Avatar + Name + Location */}
      <div className="flex items-center gap-3 border-t border-white/5 pt-3">
        <InitialsAvatar name={rev.name} />
        <div className="text-left">
          <h4 className="text-xs font-bold text-[#FAFAFA]">
            {rev.name}
          </h4>
          <p className="text-[10px] text-[#FAFAFA]/40 font-light uppercase tracking-wider">
            {rev.location || "Dindigul"}
          </p>
        </div>
      </div>
    </motion.div>
  );
});

ReviewCard.displayName = "ReviewCard";

export default ReviewCard;

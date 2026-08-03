import React from 'react';

export const ReviewSkeleton = () => {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/5 h-48 space-y-4 animate-pulse">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-3.5 h-3.5 rounded-full bg-white/10" />
            ))}
          </div>
          <div className="w-24 h-3 bg-white/10 rounded-full" />
        </div>
        <div className="w-20 h-4 bg-white/10 rounded-full" />
        <div className="space-y-1.5 pt-1">
          <div className="w-full h-3 bg-white/10 rounded-full" />
          <div className="w-4/5 h-3 bg-white/10 rounded-full" />
        </div>
      </div>
      <div className="flex items-center gap-3 border-t border-white/5 pt-3">
        <div className="w-11 h-11 rounded-full bg-white/15 shrink-0" />
        <div className="space-y-1.5 flex-1">
          <div className="w-28 h-3.5 bg-white/15 rounded-full" />
          <div className="w-16 h-2.5 bg-white/10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;

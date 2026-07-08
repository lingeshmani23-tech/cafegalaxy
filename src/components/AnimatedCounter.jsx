import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to, duration = 1.5, suffix = '' }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  // Trigger animation when 20% of the counter is in viewport
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = from;
    const end = parseInt(to, 10);
    if (isNaN(end) || start === end) return;

    const startTime = performance.now();

    const updateCount = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing out quadratic function
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * (end - start) + start);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="font-sans font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;

import React, { useState, useEffect } from 'react';

const RippleButton = ({ children, onClick, className = '', ...props }) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      const timer = setTimeout(() => setIsRippling(false), 600);
      return () => clearTimeout(timer);
    } else {
      setIsRippling(false);
    }
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
    if (onClick) onClick(e);
  };

  return (
    <button
      className={`relative overflow-hidden cursor-pointer transition-all duration-300 active:scale-95 ${className}`}
      onClick={handleClick}
      {...props}
    >
      {isRippling && (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};

export default RippleButton;

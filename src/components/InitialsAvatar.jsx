import React from 'react';

/**
 * Helper to extract uppercase initials from a name string.
 * - Multi-word: First letter of first name + First letter of last name (e.g., Jenisan Jeyaraj -> JJ)
 * - Single-word: First letter of single name (e.g., John -> J)
 */
export const getInitials = (name) => {
  if (!name) return '?';
  
  // Clean special characters and trim extra whitespace
  const cleanName = name.replace(/[^a-zA-Z0-9\s]/g, '').trim();
  const words = cleanName.split(/\s+/).filter(Boolean);
  
  // Filter for words starting with alphabetic characters if available
  const alphaWords = words.filter((w) => /^[a-zA-Z]/.test(w));
  const validWords = alphaWords.length > 0 ? alphaWords : words;
  
  if (validWords.length === 0) return '?';
  if (validWords.length === 1) {
    return validWords[0][0].toUpperCase();
  }
  
  const firstInitial = validWords[0][0].toUpperCase();
  const lastInitial = validWords[validWords.length - 1][0].toUpperCase();
  return `${firstInitial}${lastInitial}`;
};

const InitialsAvatar = ({ name, className = "" }) => {
  const initials = getInitials(name);

  return (
    <div
      className={`w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-gradient-to-br from-[#D49000] via-[#FFC107] to-[#8B5A00] text-white font-bold text-[18px] flex items-center justify-center shrink-0 shadow-md border border-[#FFC107]/30 select-none ${className}`}
      aria-label={name}
      title={name}
    >
      {initials}
    </div>
  );
};

export default InitialsAvatar;

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "919360151808"; // Premium number
  const message = encodeURIComponent("Hello Cafe Galaxy, I'd like to reserve a table or place an order!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulse Rings */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:bg-[#D4AF37]"></span>
      
      <MessageCircle size={28} className="fill-current animate-pulse-slow" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-[#1A1A1A] text-[#F8F5F2] text-xs font-medium px-3 py-1.5 rounded-lg border border-[#D4AF37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;

import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <div className="w-full pt-28 pb-20">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="border-b border-[#D4AF37]/20 pb-6">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F5F2]">
              Terms & Conditions
            </h1>
            <p className="text-xs text-[#D4AF37] mt-2 tracking-widest uppercase">
              Last Updated: July 2026
            </p>
          </div>

          <div className="text-sm text-[#F8F5F2]/80 leading-relaxed space-y-6 font-light">
            <p>
              By accessing and browsing this website or placing orders through our digital channels, you agree to comply with and be bound by the following Terms and Conditions of <strong>Cafe Galaxy</strong>, Dindigul, Tamil Nadu.
            </p>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37] mt-8">
              1. Menu Offerings and Pricing
            </h2>
            <p>
              We make every effort to display correct prices, ingredient details, and veg/non-veg statuses on our digital menu. However:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prices are in Indian Rupees (₹) and are subject to change without prior notice.</li>
              <li>Availability of specific items (like seasonal fresh juices or custom bakery cakes) depends on ingredient availability.</li>
              <li>Visuals shown are for representation. The actual food presentation might vary slightly.</li>
            </ul>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37] mt-8">
              2. Reservations & Event Bookings
            </h2>
            <p>
              When booking seating space or reserving a birthday cake, please supply accurate phone, email, and name details. Any cancellation or rescheduling must be communicated at least 24 hours in advance.
            </p>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37] mt-8">
              3. Home Delivery Conditions
            </h2>
            <p>
              Cafe Galaxy provides home delivery within select zones of Dindigul. While we strive for fast service, delivery times might vary due to traffic, weather conditions, or peak hours.
            </p>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37] mt-8">
              4. Code of Conduct at Our Venue
            </h2>
            <p>
              To maintain the premium, family-friendly atmosphere at Cafe Galaxy:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Guests are requested to cooperate with our staff and treat others with respect.</li>
              <li>Outside food and beverages are strictly prohibited.</li>
              <li>Wastage of food and misuse of cafe seating assets should be avoided.</li>
            </ul>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37] mt-8">
              5. Intellectual Property
            </h2>
            <p>
              All logo assets (including the Cafe Galaxy branding and favicon), text descriptions, design components, and custom illustrations on this site belong to Cafe Galaxy and cannot be reproduced without explicit written consent.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TermsConditions;

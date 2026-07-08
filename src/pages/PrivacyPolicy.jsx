import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xs text-[#D4AF37] mt-2 tracking-widest uppercase">
              Last Updated: July 2026
            </p>
          </div>

          <div className="text-sm text-[#F8F5F2]/80 leading-relaxed space-y-6 font-light">
            <p>
              Welcome to the website of <strong>Cafe Galaxy</strong> ("we," "our," or "us"), located in Dindigul, Tamil Nadu. We value the privacy of our visitors and customers. This Privacy Policy details the types of information we collect, how we process it, and your legal rights.
            </p>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37] mt-8">
              1. Information We Collect
            </h2>
            <p>
              When you interact with our website, we may collect the following details:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact Information:</strong> Name, phone number, email address, and messages when you fill out our contact or review forms.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about your browser type, IP address, page views, and time spent on our site, gathered via cookies.
              </li>
            </ul>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37] mt-8">
              2. How We Use Your Information
            </h2>
            <p>
              The information we collect is utilized strictly for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To answer questions or handle reservations submitted via our Contact page.</li>
              <li>To publish verified reviews that you submit on our Testimonials page.</li>
              <li>To improve our website speed, responsive layout, and menu offerings.</li>
              <li>To comply with regulatory guidelines in Tamil Nadu, India.</li>
            </ul>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37] mt-8">
              3. Data Security
            </h2>
            <p>
              We implement industry-standard secure storage methods to protect your details from unauthorized access, modification, or exposure. Your contact form submissions are transmitted securely and are never sold or rented to third-party marketing entities.
            </p>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37] mt-8">
              4. Cookies Policy
            </h2>
            <p>
              We use small cookies on your local device to remember your preferences (like the veg/non-veg filter selection on the menu page) and analyze site traffic to deliver a superior user experience. You can turn off cookies via your browser configurations if you choose.
            </p>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37] mt-8">
              5. Contact Us
            </h2>
            <p>
              If you have any inquiries regarding this policy or our data handling practices, feel free to contact us:
            </p>
            <p>
              <strong>Cafe Galaxy</strong><br />
              Bypass Junction, Palani Road, Dindigul, Tamil Nadu 624001<br />
              Email: <a href="mailto:info@cafegalaxy.in" className="text-[#D4AF37] hover:underline">info@cafegalaxy.in</a><br />
              Phone: +91 98765 43210
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

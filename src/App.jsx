import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import CursorGlow from './components/CursorGlow';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

// Navigation scroll-to-top handler
const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Route wrapper for page fade-in/out transitions
const AnimatedPages = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4 }}
        className="flex-grow flex flex-col justify-start"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Premium loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTopOnNavigate />
        
        {/* SEO Global Metadata Configuration */}
        <Helmet>
          <title>Cafe Galaxy | Premium Café & Bakery in Dindigul, Tamil Nadu</title>
          <meta name="description" content="Savor premium coffees, delicious multi-cuisine pizza, burgers, cakes, bakery and Tamil Nadu snacks at Cafe Galaxy in Dindigul." />
          <meta name="keywords" content="Cafe Galaxy, Dindigul, Cafe, Coffee Shop Dindigul, Tamil Nadu, Restaurant, Pizza, Burgers, Bakery, Samosa, South Indian Snacks" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Cafe Galaxy - Where Every Cup Meets the Galaxy" />
          <meta property="og:description" content="Discover premium roasted coffee, fresh hand-baked goods, and comfortable lounge seating in Dindigul, Tamil Nadu." />
          <meta property="og:url" content="https://cafegalaxy.in" />
          <meta property="og:image" content="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&auto=format&fit=crop&q=80" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Cafe Galaxy Dindigul" />
          <meta name="twitter:description" content="Premium roasted coffee and gourmet foods at Dindigul's luxury cafe destination." />
          <meta name="twitter:image" content="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&auto=format&fit=crop&q=80" />

          {/* JSON-LD Structured Data Schema */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Restaurant",
                "name": "Cafe Galaxy",
                "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&auto=format&fit=crop&q=80",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "15 A, Central Rd, near water tank, Begambur",
                  "addressLocality": "Dindigul",
                  "addressRegion": "Tamil Nadu",
                  "postalCode": "624001",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 10.394432,
                  "longitude": 77.962292
                },
                "telephone": "+919360151808",
                "priceRange": "$$",
                "servesCuisine": "Coffee, Bakery, Fast Food, South Indian Snacks",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": "06:30",
                    "closes": "22:00"
                  }
                ]
              }
            `}
          </script>
        </Helmet>

        {/* Loading Overlay */}
        <AnimatePresence>
          {isLoading && <LoadingScreen key="loader" />}
        </AnimatePresence>

        {/* Global Page Layout wrapper */}
        <div className="flex flex-col min-h-screen relative bg-[#0A0A0A] overflow-hidden text-[#FAFAFA]">
          <CursorGlow />
          <ScrollProgress />
          <Navbar />
          
          <main className="flex-grow flex flex-col justify-start">
            <AnimatedPages />
          </main>
          
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;

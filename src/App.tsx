import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import GridBackground from './components/GridBackground';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import TradeHub from './pages/TradeHub';
import { useEffect } from 'react';

// Scroll to top on page transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          } 
        />
        <Route 
          path="/solutions" 
          element={
            <PageWrapper>
              <Solutions />
            </PageWrapper>
          } 
        />
        <Route 
          path="/tradehub" 
          element={
            <PageWrapper>
              <TradeHub />
            </PageWrapper>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex-grow flex flex-col"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#030712] text-gray-100 flex flex-col overflow-hidden">
        {/* Animated grid and ambient glow orbs */}
        <GridBackground />
        
        {/* Core Layout */}
        <Navbar />
        
        <main className="flex-grow relative z-10">
          <AnimatedRoutes />
        </main>
        
        <ContactSection />
        <Footer />
      </div>
    </Router>
  );
}

import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import { pageTransition } from './lib/animations';

const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const NotFound = lazy(() => import('./components/NotFound'));

function SectionFallback() {
  return (
    <div className="min-h-[400px] bg-base flex items-center justify-center" aria-hidden="true">
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={
            <>
              <Hero />
              <Suspense fallback={<SectionFallback />}><Skills /></Suspense>
              <Suspense fallback={<SectionFallback />}><Experience /></Suspense>
              <Suspense fallback={<SectionFallback />}><Projects /></Suspense>
              <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
            </>
          } />
          <Route path="*" element={
            <Suspense fallback={<SectionFallback />}><NotFound /></Suspense>
          } />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <BrowserRouter>
      <SEO />
      <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-base">
        <ScrollProgressBar />
        <CustomCursor />
        <Navbar />
        <ErrorBoundary>
          <main id="main-content">
            <AnimatedRoutes />
          </main>
        </ErrorBoundary>
        <Footer />
      </div>
      </MotionConfig>
    </BrowserRouter>
  );
}

export default App;

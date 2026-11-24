import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import MobileIndexNav from './components/MobileIndexNav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import { pageTransition } from './lib/animations';

const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));
const Experience = lazy(() => import('./components/Experience'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const NotFound = lazy(() => import('./components/NotFound'));

function SectionFallback() {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center" aria-hidden="true">
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
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
          <Route path="/" element={<Hero />} />
          <Route
            path="/a-propos"
            element={
              <Suspense fallback={<SectionFallback />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/competences"
            element={
              <Suspense fallback={<SectionFallback />}>
                <Skills />
              </Suspense>
            }
          />
          <Route
            path="/experiences"
            element={
              <Suspense fallback={<SectionFallback />}>
                <Experience />
              </Suspense>
            }
          />
          <Route
            path="/projets"
            element={
              <Suspense fallback={<SectionFallback />}>
                <Projects />
              </Suspense>
            }
          />
          <Route
            path="/projets/:slug"
            element={
              <Suspense fallback={<SectionFallback />}>
                <ProjectDetail />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<SectionFallback />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<SectionFallback />}>
                <NotFound />
              </Suspense>
            }
          />
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
      <ScrollToTop />
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-base flex flex-col justify-between">
          <div>
            <ScrollProgressBar />
            <CustomCursor />
            <Navbar />
            <MobileIndexNav />
            <ErrorBoundary>
              <main id="main-content">
                <AnimatedRoutes />
              </main>
            </ErrorBoundary>
          </div>
          <Footer />
        </div>
      </MotionConfig>
    </BrowserRouter>
  );
}

export default App;

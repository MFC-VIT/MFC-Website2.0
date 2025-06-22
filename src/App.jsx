import React from 'react';
import { useEffect, useState, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from './sections/Hero';
import { Footer } from './sections/Footer';
import Loader from './components/Loader';

import { useCallback } from 'react';

const AboutUs = lazy(() => import('./sections/AboutUs'));
const Projects = lazy(() => import('./sections/Projects'));
const Events = lazy(() => import('./sections/Event'));
const BlogsSection = lazy(() => import('./sections/Blogs'));
const Newsletters = lazy(() => import('./sections/NewsLetter'));
const Team = lazy(() => import('./sections/Team'));
const Form = lazy(() =>
  import('./sections/Form').then((module) => ({ default: module.Form })),
);
const EventsModal = lazy(() => import('./sections/EventsModal'));
const Domains = lazy(() => import('./sections/Domains'));
const firefoxColors = {
  primary: '#FF9500',
  secondary: '#0060DF',
  accent: '#9059FF',
  dark: '#20123A',
  light: '#FFFFFF',
};

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMouse, setIsMouse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark"
        >
          <Loader size="lg" onLoadComplete={() => console.log('🔥 Ready!')} />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="bg-dark relative"
        >
          <div
            className="hidden md:block fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
            style={{
              background: `radial-gradient(circle, ${firefoxColors.primary} 0%, ${firefoxColors.accent} 100%)`,
              opacity: 0.5,
              transform: `translate(${cursorPosition.x - 3}px, ${
                cursorPosition.y - 3
              }px)`,
              transition: 'transform 0.05s linear',
            }}
          />

          <motion.div
            className="fixed top-0 left-0 right-0 h-1 z-40"
            style={{
              background: `linear-gradient(90deg, ${firefoxColors.primary} 0%, ${firefoxColors.accent} 100%)`,
              width: `${scrollProgress}%`,
              transformOrigin: 'left',
            }}
          />

          <div className="flex flex-col relative z-10">
            <Hero />

            <Suspense
              fallback={
                <div className="h-screen flex items-center justify-center">
                  <Loader colors={firefoxColors} size="sm" />
                </div>
              }
            >
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                className="section-container"
              >
                <AboutUs />
              </motion.section>

              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                className="section-container"
              >
                <Projects />
              </motion.section>

              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                className="section-container"
              >
                <Domains />
              </motion.section>

              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                className="section-container"
              >
                <Events />
              </motion.section>

              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                className="section-container"
              >
                <BlogsSection />
              </motion.section>

              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                className="section-container"
              >
                <Newsletters />
              </motion.section>

              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
                className="section-container"
              >
                <Team />
              </motion.section>

              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                className="section-container"
              >
                <Form />
              </motion.section>

              <Footer />
              <EventsModal />
            </Suspense>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;

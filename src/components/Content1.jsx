import { useRef, useEffect, useState, useMemo } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import React from 'react';

export default function Content1() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimationControls();
  const titleControls = useAnimationControls();
  const subtitleControls = useAnimationControls();
  const [itemWidth, setItemWidth] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const carouselItems = useMemo(() => ["Open Minds", "Open Ideas", "Open Source"], []);
  const titleText = "MOZILLA FIREFOX";
  const subtitleText = "Firefox Answers To No One But To You";


  useEffect(() => {
    if (isInView && !typingComplete) {
      const typingInterval = setInterval(() => {
        if (currentCharIndex < titleText.length) {
          setCurrentCharIndex(prev => prev + 1);
        } else {
          clearInterval(typingInterval);
          setTypingComplete(true);
          
          subtitleControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
          });
          
          setTimeout(() => {
            startCarouselAnimation();
          }, 400);
        }
      }, 80);
      
      return () => clearInterval(typingInterval);
    }
  }, [isInView, currentCharIndex, typingComplete]);

  useEffect(() => {
    if (isInView && !isLoaded) {
      titleControls.start({
        opacity: 1,
        transition: { duration: 0.5 }
      });
      setIsLoaded(true);
    }
  }, [isInView, isLoaded, titleControls]);

  const startCarouselAnimation = () => {
    if (!carouselRef.current) return;

    const firstItem = carouselRef.current.querySelector(".carousel-item");
    if (!firstItem) return;

    const singleItemWidth = firstItem.offsetWidth;
    setItemWidth(singleItemWidth);

    const totalWidth = singleItemWidth * carouselItems.length;

    controls.start({
      x: [0, -totalWidth],
      transition: {
        duration: totalWidth / 40,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  useEffect(() => {
    const calculateAnimation = () => {
      if (typingComplete) {
        startCarouselAnimation();
      }
    };

    window.addEventListener("resize", calculateAnimation);
    return () => {
      window.removeEventListener("resize", calculateAnimation);
      controls.stop();
    };
  }, [controls, typingComplete]);

  const cloneCount = useMemo(() => {
    return Math.ceil((typeof window !== 'undefined' ? window.innerWidth : 1200) / (itemWidth || 200));
  }, [itemWidth]);

  const allItems = useMemo(() => {
    const clonedStart = carouselItems.slice(-cloneCount).map((item, index) => ({
      item,
      id: `start-clone-${index}`,
    }));
    const clonedEnd = carouselItems.slice(0, cloneCount).map((item, index) => ({
      item,
      id: `end-clone-${index}`,
    }));

    return [...clonedStart, ...carouselItems.map((item, index) => ({ item, id: `original-${index}` })), ...clonedEnd];
  }, [carouselItems, cloneCount]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollY = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const offset = scrollY - sectionTop;
      
      if (offset > -500 && offset < 500) {
        sectionRef.current.style.transform = `translateY(${offset * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="pt-52 pb-32 relative min-h-min z-20 flex flex-col items-center overflow-hidden"
      style={{ 
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(229, 62, 62, 0.05) 0%, transparent 70%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-orange-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <motion.h1 
        className="text-stone-300 text-[8.5vh] sm:ml-0 font-normal lg:text-[16.2275600505689vh] font-apex text-center md:text-[12.5vh] relative"
        initial={{ opacity: 0 }}
        animate={titleControls}
      >
        <span className="relative">
          {titleText.substring(0, currentCharIndex)}
          <motion.span 
            className="inline-block w-[0.05em] h-[1.1em] bg-stone-300 absolute -right-[0.25em] top-[0.05em]"
            animate={{ 
              opacity: typingComplete ? 0 : [1, 0],
            }}
            transition={{
              repeat: typingComplete ? 0 : Infinity,
              duration: 0.8,
            }}
          />
        </span>
        
        {typingComplete && (
          <motion.div 
            className="absolute inset-0 bg-red-500/10 filter blur-xl rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0.8, 1.05, 1]
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        )}
      </motion.h1>
      
      <motion.p 
        className="text-stone-300 font-bold text-[3.3vw] lg:text-[2vw] font-yoshiro_b text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={subtitleControls}
        transition={{ duration: 0.1 }}
      >
        {subtitleText}
      </motion.p>

      <motion.div 
        className="w-full overflow-hidden mt-6 bg-gradient-to-r from-[#0a0807]/30 via-[#0a0807]/50 to-[#0a0807]/30 backdrop-blur-sm py-4 border-y border-stone-700/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: typingComplete ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          ref={carouselRef}
          className="flex items-center whitespace-nowrap"
          animate={controls}
        >
          {allItems.map(({ item, id }) => (
            <div
              key={id}
              className="carousel-item inline-flex items-center mx-8 text-[#E8DED5] font-teko text-xl md:text-4xl"
            >
              <motion.span 
                className="h-3 w-3 rounded-full bg-[#E8DED5] mr-3 flex-shrink-0"
                whileInView={{ 
                  scale: [1, 1.2, 1],
                  backgroundColor: ["#E8DED5", "#ff4f38", "#E8DED5"]
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {item}
            </div>
          ))}
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center mt-12 pointer-events-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: typingComplete ? 1 : 0,
          y: typingComplete ? 0 : 20
        }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {/* <motion.div 
          className="w-8 h-8 border-2 border-stone-300/50 rounded-full flex items-center justify-center cursor-pointer"
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.1, borderColor: "rgba(232, 222, 213, 0.8)" }}
        >
          <motion.span 
            className="block w-1 h-4 bg-stone-300/50 rounded-full"
            animate={{ 
              height: [16, 8, 16],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        {/* <span className="text-stone-300/50 text-xs mt-2 font-light">Scroll Down</span> */}
      </motion.div>
    </section>
  );
}
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const AboutUs = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef(null);
    const sliderRef = useRef(null);

    const slides = [
        {
            id: 1,
            image: 'https://res.cloudinary.com/abhi-server/image/upload/v1744721073/WhatsApp_Image_2025-04-15_at_18.13.42_5e6e68d7_xfsros.jpg',
            alt: 'Team members collaborating on digital projects',
            caption: 'Our team working on open source initiatives'
        },
        {
            id: 2,
            image: 'https://res.cloudinary.com/abhi-server/image/upload/v1744722058/WhatsApp_Image_2025-04-15_at_18.29.35_998d584c_hqeydz.jpg',
            alt: 'Community event with diverse participants',
            caption: 'Annual Mozilla Firefox Club hackathon'
        },
        {
            id: 3,
            image: 'https://res.cloudinary.com/abhi-server/image/upload/v1744720703/WhatsApp_Image_2025-04-15_at_18.07.24_dc477423_q23lyf.jpg',
            alt: 'Educational workshop session',
            caption: 'Teaching web technologies to new members'
        }
    ];

    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
            }, 5000);
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isAutoPlaying, slides.length]);

    const pauseAutoPlay = () => {
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const nextSlide = () => {
        pauseAutoPlay();
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        pauseAutoPlay();
        setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        pauseAutoPlay();
        setCurrentSlide(index);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    useEffect(() => {
        let touchStartX = 0;
        let touchEndX = 0;

        const handleTouchStart = (e) => {
            touchStartX = e.touches[0].clientX;
        };

        const handleTouchEnd = (e) => {
            touchEndX = e.changedTouches[0].clientX;
            handleSwipe();
        };

        const handleSwipe = () => {
            const swipeThreshold = 50;
            if (touchStartX - touchEndX > swipeThreshold) {
                nextSlide();
            } else if (touchEndX - touchStartX > swipeThreshold) {
                prevSlide();
            }
        };

        const sliderElement = sliderRef.current;
        if (sliderElement) {
            sliderElement.addEventListener('touchstart', handleTouchStart);
            sliderElement.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            if (sliderElement) {
                sliderElement.removeEventListener('touchstart', handleTouchStart);
                sliderElement.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, [nextSlide, prevSlide]);

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-4 py-12 overflow-hidden">

            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl mb-16 font-apex text-stone-300 tracking-widest uppercase text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                > 
                    <span className="inline-block">A</span>
                    <span className="inline-block">B</span>
                    <span className="inline-block">O</span>
                    <span className="inline-block">U</span>
                    <span className="inline-block">T</span>
                    <span className="inline-block ml-4">U</span>
                    <span className="inline-block">S</span>
                    <div className="h-1 w-24 bg-primary mt-3 mx-auto rounded-full"></div> 
                </motion.h1>

                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10">
                    <motion.div
                        className="lg:w-1/2 text-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                        <p className="text-lg md:text-2xl leading-relaxed font-yoshiro font-extralight text-center">
                            At the <span className=" text-orange-400">Mozilla Firefox Club</span>, we empower
                            members to explore the vast possibilities of
                            the digital world. Join us to fuel your
                            curiosity, drive innovation, and create a more
                            open and inclusive internet. Together, we blaze
                            new trails in technology and make a positive
                            impact on the web.
                        </p>

                        <motion.button
                            className="mt-8 px-8 py-3  bg-transparent border-2 border-orange-500 text-orange-400 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e)=>{window.open("https://www.linkedin.com/company/mfcvit/", "_blank")}}
                        >
                            Join Our Community
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="lg:w-1/2 relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        ref={sliderRef}
                    >
                        <div className="relative w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <img
                                        src={slides[currentSlide].image}
                                        alt={slides[currentSlide].alt}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                </motion.div>
                            </AnimatePresence>

                            <div className="absolute bottom-0 left-0 right-0 p-4 text-right">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={currentSlide}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-sm md:text-base italic text-gray-200"
                                    >
                                        {slides[currentSlide].caption}
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${currentSlide === index
                                                ? 'bg-orange-500 scale-125'
                                                : 'bg-gray-400 hover:bg-gray-300'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <motion.button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm border border-orange-500 hidden lg:flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Previous slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>

                        <motion.button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm border border-orange-500 hidden lg:flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Next slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>

                        {/* Auto-play toggle
                        <button
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className={`absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 z-10`}
                            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                        >
                            {isAutoPlaying ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )}
                        </button> */}
                    </motion.div>
                </div>

                {/* Stats section */}
                <motion.div
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    <div className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                        <motion.span
                            className="block text-4xl font-bold text-orange-400 mb-2"
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                        >
                            500+
                        </motion.span>
                        <p className="text-gray-300">Active Members</p>
                    </div>

                    <div className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                        <motion.span
                            className="block text-4xl font-bold text-orange-400 mb-2"
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        />
                        <motion.span
                            className="block text-4xl font-bold text-orange-400 mb-2"
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        >
                            50+
                        </motion.span>
                        <p className="text-gray-300">Projects Launched</p>
                    </div>

                    <div className="text-center p-6 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                        <motion.span
                            className="block text-4xl font-bold text-orange-400 mb-2"
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                        >
                            12
                        </motion.span>
                        <p className="text-gray-300">Years of Innovation</p>
                    </div>
                </motion.div>

                {/* Mission statement
                <motion.div
                    className="mt-20 text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-3xl font-light mb-6">Our <span className="text-orange-400 font-medium">Mission</span></h2>
                    <p className="text-gray-300 leading-relaxed">
                        To create a global community that champions digital literacy, privacy, and open-source technology.
                        We believe in a web that is accessible to all, respects user privacy, and fosters innovation through
                        collaboration.
                    </p>
                </motion.div> */}
            </div>
        </section>
    );
};

const SkipToContent = () => {
    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-500 focus:text-black focus:rounded-md"
        >
            Skip to main content
        </a>
    );
};

const AboutUsPage = () => {
    return (
        <>
            <SkipToContent />
            <main id="main-content">
                <AboutUs />
            </main>
        </>
    );
};

export default AboutUsPage;
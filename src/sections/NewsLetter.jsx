import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';
import axios from "axios";

const NewsletterShowcase = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [animationDirection, setAnimationDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNewsletter, setSelectedNewsletter] = useState(null);
  // const [isHovering, setIsHovering] = useState(false);
  // const autoplayRef = useRef(null);
  const carouselRef = useRef(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_URL}/api/v1/newsLetter/getAllNewsLetters`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        const processedNewsletters = result.data
          .map(newsletter => ({
            ...newsletter,
            title: newsletter.title.replace(/^"|"$/g, ''),
            formattedDate: formatDate(newsletter.uploadDate)
          }))
          .sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));

        setNewsletters(processedNewsletters);
      } catch (err) {
        console.error("Error fetching newsletters:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewsletters();
  }, []);


  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const sideCardVariants = {
    hidden: (direction) => ({
      opacity: 0.4,
      scale: 0.7,
      x: direction * 300,
      rotateY: direction * 45
    }),
    visible: (isLeft) => ({
      opacity: 0.7,
      scale: 0.85,
      x: isLeft ? -200 : 200,
      rotateY: isLeft ? 15 : -15,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    })
  };
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return format(date, 'MMMM yyyy');
    } catch (error) {
      console.error("Date formatting error:", error);
      return "Unknown date";
    }
  };

  // useEffect(() => {
  //   if (isHovering) return;

  //   autoplayRef.current = setInterval(() => {
  //     handleNext();
  //   }, 5000);

  //   return () => {
  //     if (autoplayRef.current) {
  //       clearInterval(autoplayRef.current);
  //     }
  //   };
  // }, [activeIndex, isHovering, newsletters.length]);

const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const SubmitEmail = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(`${API_URL}/v1/newsLetter/subscribeNewsletter`, {
      email: email.trim(),
    });

    setMessage(response.data.message);
    setEmail("");
    setTimeout(() => setMessage(''), 3000);
  } catch (error) {
    if (error.response) {
      setMessage(error.response.data.message || "Something went wrong.");
    } else {
      setMessage("Network error. Please try again.");
    }
  }
};


  const handlePrev = () => {
    setAnimationDirection(-1);
    setActiveIndex(prev => (prev - 1 + newsletters.length) % newsletters.length);
  };

  const handleNext = () => {
    setAnimationDirection(1);
    setActiveIndex(prev => (prev + 1) % newsletters.length);
  };

  const handleDotClick = (index) => {
    setAnimationDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const openNewsletter = (newsletter) => {
    setSelectedNewsletter(newsletter);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'visible';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) {
        if (e.key === 'Escape') closeModal();
        return;
      }

      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, handlePrev, handleNext]);

  if (isLoading) {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
        <div className="w-16 h-16 relative">
          <div className="w-full h-full rounded-full border-4 border-orange-500/20 border-t-orange-500 animate-spin"></div>
        </div>
        <p className="mt-4 text-orange-500 font-medium">Loading newsletters...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
        <div className="w-16 h-16 mb-4 text-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-orange-500 mb-2">Unable to Load Newsletters</h3>
        <p className="text-white/70 text-center max-w-md">We encountered a problem while loading the newsletters. Please try again later.</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
        >
          Retry
        </button>
      </div>
    );
  }

  if (newsletters.length === 0) {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
        <div className="w-16 h-16 mb-4 text-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-orange-500 mb-2">No Newsletters Available</h3>
        <p className="text-white/70 text-center max-w-md">Check back soon for our upcoming newsletters.</p>
      </div>
    );
  }

  const activeNewsletter = newsletters[activeIndex];
  const prevIndex = (activeIndex - 1 + newsletters.length) % newsletters.length;
  const nextIndex = (activeIndex + 1) % newsletters.length;

  return (
    <section id="newsletter" className="bg-black min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-[150px] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <div className="w-full max-w-4xl mx-auto h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-8"></div>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 uppercase tracking-wider">
            Our <span className="text-orange-500">Newsletter</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Stay informed with our latest insights, updates, and industry news.
          </p>
          <div className="w-full max-w-4xl mx-auto h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-8"></div>
        </div>

        <div
          {...swipeHandlers}
          ref={carouselRef}
          className="relative max-w-7xl mx-auto"
        >
          <div className="flex items-center justify-center h-[600px] perspective">
            <motion.div
              variants={sideCardVariants}
              initial="hidden"
              animate="visible"
              custom={true}
              className="absolute left-0 md:left-10 z-10 cursor-pointer"
              onClick={handlePrev}
            >
              <NewsletterCard newsletter={newsletters[prevIndex]} isActive={false} />
              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                <span className="sr-only">Previous</span>
              </div>
            </motion.div>

            <AnimatePresence mode="wait" custom={animationDirection}>
              <motion.div
                key={activeIndex}
                custom={animationDirection}
                initial={(direction) => ({
                  opacity: 0,
                  rotateY: direction * 45,
                  scale: 0.8,
                  z: -200
                })}
                animate={{
                  opacity: 1,
                  rotateY: 0,
                  scale: 1,
                  z: 0
                }}
                exit={(direction) => ({
                  opacity: 0,
                  rotateY: direction * -45,
                  scale: 0.8,
                  z: -200
                })}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 1.2
                }}
                className="relative z-20 cursor-pointer transform scale-110 backface-hidden"
                onClick={() => openNewsletter(activeNewsletter)}
              >
                <NewsletterCard newsletter={activeNewsletter} isActive={true} />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-bold">View Details</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              variants={sideCardVariants}
              initial="hidden"
              animate="visible"
              custom={false}
              className="absolute right-0 md:right-10 z-10 cursor-pointer"
              onClick={handleNext}
            >
              <NewsletterCard newsletter={newsletters[nextIndex]} isActive={false} />
              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                <span className="sr-only">Next</span>
              </div>
            </motion.div>
          </div>


          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 
              w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-orange-500/30
              flex items-center justify-center text-white hover:bg-orange-600 
              transition-all focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Previous newsletter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 
              w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-orange-500/30
              flex items-center justify-center text-white hover:bg-orange-600 
              transition-all focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Next newsletter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>


          <div className="flex justify-center mt-8 space-x-2">
            {newsletters.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${index === activeIndex
                  ? 'bg-orange-500 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
                  }`}
                aria-label={`Go to newsletter ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <h2 className="text-white text-2xl font-bold mb-2 tracking-wide">
              {activeNewsletter.title}
            </h2>
            <p className="text-orange-500 font-medium">
              {activeNewsletter.formattedDate} • Edition {activeIndex + 1}
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedNewsletter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{
                opacity: 0,
                rotateY: 90,
                originX: 0
              }}
              animate={{
                opacity: 1,
                rotateY: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 100
                }
              }}
              exit={{
                opacity: 0,
                rotateY: -90,
                originX: 1,
                transition: {
                  duration: 0.3
                }
              }}
              className="relative bg-black border border-orange-500/30 rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] md:max-h-[90vh] overflow-hidden perspective-container"
              style={{ maxWidth: '95vw' }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row max-h-[90vh] overflow-hidden">
                {/* Newsletter Cover - Smaller on mobile */}
                <div className="w-full md:w-1/2 bg-gradient-to-b from-orange-900/20 to-black p-4 md:p-8 flex items-center justify-center max-h-[40vh] md:max-h-none">
                  <div className="relative max-w-[200px] md:max-w-sm w-full">
                    <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-xl"></div>
                    <div className="relative bg-white border-2 border-orange-600 rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-300">
                      <div className="relative">
                        <img
                          src={selectedNewsletter.cover_url}
                          alt={selectedNewsletter.title}
                          className="w-full h-auto object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-orange-600 text-white text-center py-1">
                          <span className="text-xs font-bold">
                            EDITION {activeIndex + 1}
                          </span>
                        </div>
                      </div>
                      <div className="p-3 bg-white">
                        <h3 className="text-sm font-semibold text-gray-800 text-center">
                          {selectedNewsletter.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
                  <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">
                    {selectedNewsletter.title}
                  </h2>

                  <div className="mb-4 md:mb-6 flex items-center space-x-4">
                    <div className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm">
                      {selectedNewsletter.formattedDate}
                    </div>
                    <div className="text-white/60 text-sm">Edition {activeIndex + 1}</div>
                  </div>

                  <div className="prose prose-invert prose-orange mb-6 overflow-y-auto pr-2 custom-scrollbar">
                    <p className="text-white/80 leading-relaxed">
                      This newsletter covers the latest updates, insights, and developments in our field.
                      Browse through the publication to discover valuable information and stay informed
                      about recent trends and innovations.
                    </p>

                    <h3 className="text-orange-500 mt-4 md:mt-6 mb-1 md:mb-2 text-sm md:text-base">What&apos;s Inside</h3>
                    <ul className="text-white/80 space-y-1 md:space-y-2 text-sm md:text-base">
                      <li className="flex items-start">
                        <svg className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mr-1 md:mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Latest industry trends and developments</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Expert insights and analysis</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Upcoming events and opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Featured stories and case studies</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <a
                      href={selectedNewsletter.pdf_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-orange-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-medium flex items-center justify-center hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black text-sm md:text-base"
                    >

                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Open PDF Newsletter
                    </a>

                    <div className="mt-4 md:mt-auto text-center">
                      <button
                        onClick={closeModal}
                        className="text-white/60 hover:text-white transition-colors text-sm"
                      >
                        Back to newsletters
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-900/30 via-orange-800/20 to-orange-900/30 rounded-xl p-8 border border-orange-500/30 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h2 className="text-white text-3xl font-bold mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-white/70">Get the latest editions delivered directly to your inbox</p>
          </div>

          <form className="flex flex-col md:flex-row gap-4" onSubmit={SubmitEmail}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={ email }
              className="flex-grow px-4 py-3 rounded-lg bg-black/50 border border-orange-500/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              Subscribe
            </button>
          </form>

          <p className="text-white/50 text-sm text-center mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>

          {message && (
            <p className="text-white/50 text-sm text-center mt-4">
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

const NewsletterCard = ({ newsletter, isActive }) => {
  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.15,
      transition: {
        duration: 0.6
      }
    }
  };
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className={`
        bg-black rounded-lg shadow-2xl overflow-hidden
        ${isActive ? 'border-2 border-orange-500' : 'border border-orange-500/30'}
      `}
      style={{
        width: '320px',
        height: '460px',
      }}
    >
      <div className="h-full flex flex-col">
        <div className="relative flex-grow overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 ${isActive ? 'opacity-30' : 'opacity-50'}`}></div>
          <motion.img
            variants={imageVariants}
            src={newsletter.cover_url}
            alt={newsletter.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute top-4 right-4 z-10">
            <div className="px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-bold">
              {newsletter.formattedDate}
            </div>
          </div>
        </div>

        <div className="p-4 bg-gradient-to-t from-black to-black/90 border-t border-orange-500/30">
          <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
            {newsletter.title}
          </h3>

          <div className="flex items-center justify-between">
            <span className="text-orange-400 text-sm">
              Read Now
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};



NewsletterCard.propTypes = {
  newsletter: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover_url: PropTypes.string.isRequired,
    pdf_link: PropTypes.string.isRequired,
    uploadDate: PropTypes.string.isRequired,
    formattedDate: PropTypes.string.isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired
};

NewsletterCard.defaultProps = {
  isActive: false
};

NewsletterShowcase.propTypes = {
  apiUrl: PropTypes.string,
  // autoplayInterval: PropTypes.number,
  theme: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    background: PropTypes.string,
    text: PropTypes.string
  })
};

NewsletterShowcase.defaultProps = {
  apiUrl: import.meta.env.VITE_API_URL,
  // autoplayInterval: 5000,
  theme: {
    primary: 'rgb(249, 115, 22)',
    secondary: 'rgb(194, 65, 12)',
    background: 'rgb(0, 0, 0)',
    text: 'rgb(255, 255, 255)'
  }
};
export default NewsletterShowcase;
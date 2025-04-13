import React, { useEffect, useState } from 'react';

const NewsletterCarousel = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL

  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        const response = await fetch(`${API_URL}/api/v1/newsLetter/getAllNewsLetters`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        // Remove quotes from titles and sort by upload date
        const processedNewsletters = result.data.map(newsletter => ({
          ...newsletter,
          title: newsletter.title.replace(/^"|"$/g, '')
        })).sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
        
        setNewsletters(processedNewsletters);
        console.log('Fetched newsletters:', processedNewsletters);
      } catch (err) {
        console.error("Error fetching newsletters:", err);
        setError(err.message);
      }
    };

    fetchNewsletters();
  }, []);

  const scrollLeft = () => {
    setActiveIndex(prev => (prev - 1 + newsletters.length) % newsletters.length);
  };

  const scrollRight = () => {
    setActiveIndex(prev => (prev + 1) % newsletters.length);
  };

  const openPdf = (pdfLink) => {
    window.open(pdfLink, '_blank');
  };

  if (error) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <p>Error loading newsletters: {error}</p>
      </div>
    );
  }

  if (newsletters.length === 0) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <p>Loading newsletters...</p>
      </div>
    );
  }

  // Create a circular buffer of newsletters
  const displayNewsletters = [
    newsletters[(activeIndex - 1 + newsletters.length) % newsletters.length],
    newsletters[activeIndex],
    newsletters[(activeIndex + 1) % newsletters.length]
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-8 relative">
      <div 
  className="absolute w-[600px] h-[600px] bg-orange-500/30 rounded-full blur-[100px] -z-10"
  style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(249, 115, 22, 0.3)',
    borderRadius: '50%',
    filter: 'blur(100px)',
    zIndex: 1
  }}
></div>
        <div className="w-full max-w-6xl h-0.5 bg-orange-500 mb-8"></div>
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-12 uppercase">Newsletter</h1>
      <div className="w-full max-w-6xl h-0.5 bg-orange-500 mb-8"></div>
      <div className="relative w-full max-w-6xl flex items-center justify-center">
        {/* Left Navigation Arrow */}
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
            text-4xl md:text-5xl text-white/50 hover:text-white 
            transition-all"
        >
          ←
        </button>

        {/* Newsletter Carousel */}
        <div 
          className="flex items-center justify-center space-x-4 md:space-x-8 w-full"
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
            zIndex: 3,
          }}
        >
          {displayNewsletters.map((newsletter, index) => {
            const transformStyles = {
              0: 'rotateY(0deg) scale(0.9)', 
              1: 'rotateY(0deg) scale(1.1)',   
              2: 'rotateY(0deg) scale(0.9)' 
            };

            return (
              <div 
                key={newsletter._id}
                className={`
                  transition-all duration-20000 ease-in-out transform
                  ${index === 1 
                    ? 'opacity-100 z-20' 
                    : 'opacity-70 z-10'}
                  cursor-pointer w-1/3 md:w-auto
                `}
                style={{
                  transform: transformStyles[index],
                  transformOrigin: 'center center'
                }}
                onClick={() => openPdf(newsletter.pdf_link)}
              >
                <div 
                  className="bg-black p-4 rounded-lg shadow-2xl flex items-center justify-center"
                  style={{
                    width: '300px',
                    height: '400px',
                    overflow: 'hidden'
                  }}
                >
                  <div className="bg-white border-2 border-orange-600 rounded-lg overflow-hidden max-w-full max-h-full">
                    <div className="relative">
                      <img 
                        src={newsletter.cover_url} 
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-orange-600 text-white text-center py-1">
                        <span className="text-xs font-bold">
                          EDITION-1, VOLUME 1
                        </span>
                      </div>
                    </div>
                    <div className="p-2 bg-white">
                      <h3 className="text-sm font-semibold text-gray-800 text-center truncate">
                        {newsletter.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Navigation Arrow */}
        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
            text-4xl md:text-5xl text-white/50 hover:text-white 
            transition-all"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default NewsletterCarousel;
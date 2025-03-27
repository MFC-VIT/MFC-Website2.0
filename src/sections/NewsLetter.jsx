import React, { useEffect, useState } from 'react';

const NewsletterCarousel = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/newsLetter/getAllNewsLetters');
        
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
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-white text-4xl md:text-6xl font-bold mb-12 uppercase">Newsletter</h1>
      
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
            transformStyle: 'preserve-3d'
          }}
        >
          {displayNewsletters.map((newsletter, index) => {
            // Define rotation and scale based on index
            const transformStyles = {
              0: 'rotateY(30deg) scale(0.9)',   // Left newsletter
              1: 'rotateY(0deg) scale(1.1)',    // Center newsletter
              2: 'rotateY(-30deg) scale(0.9)'   // Right newsletter
            };

            return (
              <div 
                key={newsletter._id}
                className={`
                  transition-all duration-500 ease-in-out transform
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
                <div className="relative">
                  <img 
                    src={newsletter.cover_url} 
                    alt={`Newsletter ${newsletter.title}`}
                    className="w-full max-w-xs h-auto object-cover rounded-xl shadow-2xl"
                  />
                  <div className="absolute inset-0 border-4 border-orange-500 rounded-xl pointer-events-none"></div>
                </div>
                <p className="text-white text-center mt-4 text-sm md:text-lg truncate">
                  {newsletter.title}
                </p>
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
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types'; 
import { BsWindowSidebar } from 'react-icons/bs';
import React from 'react';


const useIntersectionObserver = (options = {}) => {
  const [entries, setEntries] = useState([]);
  const [elements, setElements] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options);

    elements.forEach(element => {
      observer.current.observe(element);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elements, options]);

  const observe = useCallback((element) => {
    if (element && !elements.includes(element)) {
      setElements(prevElements => [...prevElements, element]);
    }
  }, [elements]);

  return [observe, entries];
};

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};


const generateBlurDataURL = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#1f2937';
  ctx.fillRect(0, 0, width, height);

  return canvas.toDataURL();
};

const fetchBlogPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'blog-001',
          slug: 'nikhil-on-top-future-of-ai',
          title: 'Red Teaming: The Golden Ticket Attack',
          subtitle: 'Simulating the Ultimate Breach in Modern Red Teaming',
          image: 'https://res.cloudinary.com/abhi-server/image/upload/v1744620695/1_xtMTiQmgvYOUthu8Ly1O2w_vrnuo0.webp',
          blurDataURL: generateBlurDataURL(40, 50),
          excerpt: 'The world of cybersecurity is constantly evolving, with new threats emerging regularly. To stay ahead of these ever-growing risks, organizations need to prepare proactively. One of the most effective ways to achieve this is through red teaming. This approach simulates real-world cyberattacks to evaluate an organization’s defenses, response strategies, and overall resilience. In this blog, we’ll delve into red teaming and focus on one of its most advanced techniques: the Golden Ticket Attack.',
          readTime: '4 min read',
          author: {
            name: 'Utkarsh Tyagi',
            avatar: 'https://source.unsplash.com/random/100x100?portrait',
          },
          publishDate: '2024-12-28',
          categories: ['Technology', 'Security'],
          featured: true,
        },
        {
          id: 'blog-002',
          slug: 'windows-directory-structure-and-file-systems',
          title: 'Understanding the Windows Directory System',
          subtitle: 'Hierarchy',
          image: 'https://miro.medium.com/v2/resize:fit:750/format:webp/0*zXWbKdXQ2QEQria8.png',
          blurDataURL: generateBlurDataURL(40, 50),
          excerpt: 'Ever wondered how your computer organizes files? The Windows directory hierarchy structures everything—from file paths to seamless folder navigation.',
          readTime: '10 min read',
          author: {
            name: 'Yathaartha Srivastava',
            avatar: 'https://source.unsplash.com/random/100x100?portrait',
          },
          publishDate: '2024-12-08',
          categories: ['Technology', 'File Management'],
          featured: false,
        },
        {
          id: 'blog-003',
          slug: 'nikhil-on-top-cybersecurity',
          title: 'Algorithmic Secrets of Viral Content',
          subtitle: 'Cybersecurity Trends',
          image: 'https://res.cloudinary.com/abhi-server/image/upload/v1744621198/1_hpa6rNYRX524A2djnDHToQ_qrtdi4.webp',
          blurDataURL: generateBlurDataURL(40, 50),
          excerpt: 'Have you ever wondered why random content like meme templates, catchy songs, or viral dance moves suddenly dominate social media feeds?',
          readTime: '9 min read',
          author: {
            name: 'Sujaa Shri',
            avatar: 'https://source.unsplash.com/random/100x100?portrait',
          },
          publishDate: '2024-11-11',
          categories: ['Technology', 'Cybersecurity'],
          featured: false,
        },
        {
          id: 'blog-004',
          slug: 'ai-powered-code-generation-tools',
          title: 'The Rise of AI Powered Code Generation',
          subtitle: 'Automation',
          image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*5-GQBqSzRsVDmdlH.jpeg',
          blurDataURL: generateBlurDataURL(40, 50),
          excerpt: 'AI tools like Copilot and Codex enhance coding by generating code and offering smart suggestions, boosting speed, accuracy, and creativity.',
          readTime: '4 min read',
          author: {
            name: 'Vajran Kannadasan',
            avatar: 'https://source.unsplash.com/random/100x100?portrait',
          },
          publishDate: '2024-10-31',
          categories: ['Technology', 'Artificial Intelligence'],
          featured: false,
        },
        {
          id: 'blog-005',
          slug: 'introduction-to-ethical-hacking',
          title: 'Cybersecurity',
          subtitle: 'Uncovering the role of ethical hackers in protecting data and privacy',
          image: 'https://miro.medium.com/v2/resize:fit:786/format:webp/1*Ljrnz5soI_spqUm6EKPMiQ.png',
          blurDataURL: generateBlurDataURL(40, 50),
          excerpt: 'Ethical hacking helps protect digital data as cybersecurity experts use their skills to secure systems for both businesses and individuals.',
          readTime: '6 min read',
          author: {
            name: 'Utkarsh Tyagi',
            avatar: 'https://source.unsplash.com/random/100x100?portrait',
          },
          publishDate: '2024-05-31',
          categories: ['Technology', 'Cybersecurity'],
          featured: false,
        },
        {
          id: 'blog-006',
          slug: 'nikhil-on-top-quantum-computing',
          title: 'NIKHIL ON TOP',
          subtitle: 'Quantum Computing',
          image: 'https://source.unsplash.com/random/800x1000?quantum,tech',
          blurDataURL: generateBlurDataURL(40, 50),
          excerpt: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
          readTime: '8 min read',
          author: {
            name: 'Nikhil',
            avatar: 'https://source.unsplash.com/random/100x100?portrait',
          },
          publishDate: '2025-02-28',
          categories: ['Quantum', 'Technology'],
          featured: false,
        },
      ]);
    }, 600);
  });
};

const BlogCard = ({ blog, index, priority }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [observe, entries] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px 0px 100px 0px'
  });

  const isVisible = useMemo(() => {
    if (!entries.length) return false;
    return entries.some(entry => entry.target === cardRef.current && entry.isIntersecting);
  }, [entries]);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isFlipped) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 5; 
    const rotateX = ((centerY - y) / centerY) * 5; 

    setTilt({ x: rotateX, y: rotateY });
    //card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const resetCardTransform = () => {
    if (!cardRef.current || isFlipped) return;
    setTilt({ x: 0, y: 0 });
    //cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  useEffect(() => {
    if (cardRef.current) {
      observe(cardRef.current);
    }
  }, [observe]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  const formattedDate = new Date(blog.publishDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover="hover"
      variants={variants}
      className="relative h-[500px] w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetCardTransform();
      }}
      onMouseMove={handleMouseMove}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isFlipped}
      aria-label={`Blog post: ${blog.title} - ${blog.subtitle}. Press enter to read more.`}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        willChange: "transform",
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: isHovered ? "transform 0.15s cubic-bezier(.22,1,.36,1)" : "transform 0.5s cubic-bezier(.22,1,.36,1)",
      }}
    >
      <div className={`relative w-full h-full rounded-xl overflow-hidden transition-all duration-700 ${isFlipped ? 'shadow-2xl shadow-orange-500/30' : 'shadow-lg'}`}>
        <div className={`absolute inset-0 rounded-xl border border-orange-500 ${isHovered ? 'opacity-100' : 'opacity-70'} transition-opacity duration-300 z-10 pointer-events-none`}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-0"></div>
        <div className={`absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-purple-500/5 to-blue-500/10 z-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

        <div className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out transform-gpu backface-hidden ${isFlipped ? 'rotate-y-180 opacity-0' : 'opacity-100'}`}>
          <div className="relative w-full h-full overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center blur-xl scale-105 opacity-50 transition-opacity duration-500"
              style={{ backgroundImage: `url(${blog.blurDataURL})` }}
            ></div>

            <img
              src={blog.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500"
              loading={priority ? "eager" : "lazy"}
              style={{ transform: isHovered && !isFlipped ? 'scale(1.05)' : 'scale(1)' }}
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 z-10">
              <div className={`transform transition-transform duration-500 ${isHovered ? 'translate-y-[-10px]' : ''}`}>
                <h2 className="text-white text-4xl font-bold text-center leading-tight tracking-wider">
                  {blog.title.split(' ').map((word, i) => (
                    <div key={i} className="block">{word}</div>
                  ))}
                </h2>

                <div
                  className={`overflow-hidden transition-all duration-500 pointer-events-none ${
                    isHovered ? 'h-8 mt-4 opacity-100' : 'h-0 opacity-0'
                  }`}
                >
                  <p className="text-orange-300 text-center text-lg font-medium">
                    {blog.subtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
              {blog.categories.map((category, i) => (
                <span
                  key={i}
                  className="bg-black bg-opacity-70 text-orange-400 text-xs px-2 py-1 rounded backdrop-blur-sm"
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-80 backdrop-blur-sm flex items-center justify-between z-20">
              <div className="flex items-center">
                {/* <div className="w-9 h-9 rounded-full bg-white overflow-hidden flex items-center justify-center">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23f97316'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='20' text-anchor='middle' dominant-baseline='middle' fill='white'%3E${blog.author.name.charAt(0)}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </div> */}
                <div className="hidden sm:block">
                  <span className="text-gray-300 text-xs">{blog.readTime}</span>
                  <p className="text-white text-sm font-medium">{blog.author.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-300 text-xs hidden sm:inline-block">{formattedDate}</span>
                <div className="relative group">
                  <button
                    className="text-white bg-orange-600 hover:bg-orange-500 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 transform group-hover:scale-105"
                    aria-label="Read more about this post"
                  >
                    Read
                  </button>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Read more</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out transform-gpu backface-hidden ${isFlipped ? 'opacity-100' : 'rotate-y-180 opacity-0'}`}>
          <div className="relative w-full h-full bg-gray-900 p-6 flex flex-col">
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="mb-6 relative z-10">
              <h2 className="text-white text-2xl font-bold tracking-wide">
                {blog.title}
              </h2>
              <p className="text-orange-400 text-lg mt-1">{blog.subtitle}</p>
            </div>
            <div className="w-16 h-1 bg-orange-500 mb-4 relative z-10"></div>

            <div className="bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-lg p-5 mb-4 relative z-10 flex-grow">
              <p className="text-white leading-relaxed">{blog.excerpt}</p>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-orange-400 text-sm">
                  Continue reading this article about {blog.categories.join(' and ')}...
                </p>
              </div>
            </div>

            <div className="mt-auto relative z-10">
              <div className="bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {/* <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img
                      src={blog.author.avatar}
                      alt={blog.author.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23f97316'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='20' text-anchor='middle' dominant-baseline='middle' fill='white'%3E${blog.author.name.charAt(0)}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div> */}
                  <div>
                    <p className="text-white text-sm font-medium">{blog.author.name}</p>
                    <p className="text-gray-400 text-xs">{formattedDate} · {blog.readTime}</p>
                  </div>
                </div>
                <button
                  className="text-orange-500 hover:text-orange-400 transition-colors flex items-center space-x-1"
                  aria-label="Read full article" 
                  onClick={()=>{window.open("https://medium.com/mozilla-firefox-club", "_blank")}}
                >
                  <span>Full Article</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className="absolute top-3 right-3 bg-gray-800 bg-opacity-70 text-white rounded-full p-1 hover:bg-opacity-100 transition-all z-20"
              aria-label="Close preview"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedBlog = ({ blog }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="col-span-full lg:col-span-2 h-[400px] md:h-[500px] relative rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 rounded-xl border-2 border-orange-500 z-10 pointer-events-none"></div>

      <div className="absolute inset-0 overflow-hidden">
        <img
          src={blog.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-10000 ease-out"
          style={{ transform: `scale(${isHovered ? 1.1 : 1.05}) translate3d(0, ${isHovered ? -5 : 0}px, 0)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="relative h-full w-full flex flex-col justify-end p-6 md:p-10 z-10">
        <div className="max-w-2xl">
          <div className="mb-3">
            <span className="bg-orange-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">Featured</span>
          </div>

          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-wide">
            {blog.title}
          </h2>

          <p className="text-orange-300 text-xl md:text-2xl mb-6">{blog.subtitle}</p>

          <p className="text-gray-300 mb-8 max-w-xl line-clamp-3 md:line-clamp-none">
            {blog.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-3">
              {/* <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-full h-full object-cover"
                />
              </div> */}
              <div>
                <p className="text-white text-sm">{blog.author.name}</p>
                <p className="text-gray-400 text-xs">{new Date(blog.publishDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}</p>
              </div>
            </div>

            <button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-full flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-1" onClick={()=>{window.open("https://medium.com/mozilla-firefox-club", "_blank")}}>
              <span>Read Article</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <button
        onClick={() => setActiveCategory(null)}
        className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${activeCategory === null
            ? 'bg-orange-600 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${activeCategory === category
              ? 'bg-orange-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative max-w-md mx-auto mb-12">
      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-5 py-3 pl-12 bg-gray-800 border border-gray-700 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
      />
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      {searchQuery && (
        <button
          onClick={() => setSearchQuery('')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          aria-label="Clear search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(4);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const allCategories = useMemo(() => {
    if (!blogs.length) return [];
    const categories = new Set();
    blogs.forEach(blog => {
      blog.categories.forEach(category => {
        categories.add(category);
      });
    });
    return Array.from(categories);
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesCategory = !activeCategory || blog.categories.includes(activeCategory);

      const query = searchQuery.toLowerCase();
      const matchesSearch = !query ||
        blog.title.toLowerCase().includes(query) ||
        blog.subtitle.toLowerCase().includes(query)
      blog.subtitle.toLowerCase().includes(query) ||
        blog.categories.some(cat => cat.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [blogs, activeCategory, searchQuery]);

  const featuredBlog = useMemo(() => {
    return filteredBlogs.find(blog => blog.featured);
  }, [filteredBlogs]);

  const regularBlogs = useMemo(() => {
    return filteredBlogs.filter(blog => !blog.featured);
  }, [filteredBlogs]);

  useEffect(() => {
    const loadBlogs = async () => {
      setIsLoading(true);
      try {
        const data = await fetchBlogPosts();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const loadMoreBlogs = () => {
    setIsLoading(true);
    // setTimeout(() => {
    //   setVisibleBlogs(prevVisible =>
    //     Math.min(prevVisible + 3, regularBlogs.length)
    //   );
    //   setIsLoading(false);
    // }, 800);
    setTimeout(() => {
      setIsLoading(false);
      window.open('https://medium.com/mozilla-firefox-club', '_blank');
    })
  };

  return (
    <div id="blogs" className="w-full bg-gray-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-orange-600/10 via-purple-600/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-600/10 via-indigo-600/5 to-transparent rounded-full blur-3xl"></div>

        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)" />
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-stone-300 font-apex text-5xl md:text-7xl font-bold tracking-wider inline-block relative">
            BLOGS
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-2 rounded-lg left-0 w-full h-1 bg-orange-500 origin-left"
            ></motion.span>
          </h1>
        </motion.div>

        {/* <div className="mb-12">
          {isMobile && (
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>{isSearchOpen ? 'Hide Search' : 'Search Articles'}</span>
              </button>
            </div>
          )}

          <AnimatePresence>
            {(!isMobile || isSearchOpen) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              </motion.div>
            )}
          </AnimatePresence>

          <CategoryFilter
            categories={allCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div> */}

        {/* {isLoading && blogs.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-gray-700 border-t-orange-500 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-400 text-lg">Loading amazing content...</p>
          </div>
        )}

        {!isLoading && filteredBlogs.length === 0 && (
          <div className="text-center py-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-white text-xl font-bold mb-2">No matching articles found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search or filter to find what you&aposre looking for.</p>
            <button
              onClick={() => {
                setActiveCategory(null);
                setSearchQuery('');
              }}
              className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-full transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )} */}

        {!isLoading && filteredBlogs.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredBlog && visibleBlogs <= 4 && (
              <FeaturedBlog blog={featuredBlog} />
            )}

            {regularBlogs.slice(0, visibleBlogs).map((blog, index) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                index={index}
                priority={index < 3}
              />
            ))}
          </div>
        )}

        {!isLoading && visibleBlogs < regularBlogs.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={loadMoreBlogs}
              disabled={isLoading}
              className="group relative bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-12 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

              <span className="relative flex items-center justify-center">
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                  </>
                ) : (
                  <>
                    More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </motion.div>
        )}

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallDots" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="5" cy="5" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#smallDots)" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Stay Updated With Our Latest Articles</h2>
              <p className="text-gray-300 mb-8">Get notified when we publish new content. No spam, just quality insights delivered to your inbox.</p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-5 py-3 bg-gray-800 border border-gray-700 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  aria-label="Email address"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-gray-400 text-sm mt-4">By subscribing, you agree to our Privacy Policy.</p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    blurDataURL: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    }).isRequired,
    publishDate: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    featured: PropTypes.bool.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  priority: PropTypes.bool
};

BlogCard.defaultProps = {
  priority: false
};

FeaturedBlog.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    }).isRequired,
    publishDate: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string,
  setActiveCategory: PropTypes.func.isRequired
};

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired
};

export default BlogSection;
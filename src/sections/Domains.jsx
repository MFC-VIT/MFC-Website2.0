import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import "../styles/Domains.css";

const domains = [
  {
    name: 'DESIGN',
    description: 'This domain promotes curiosity and interest in graphics and media design, enriching the club\'s creativity. Our team crafts visually impactful media and intuitive UI/UX designs, ensuring engaging and seamless user experiences.',
    imageSrc: require('../assets/images/design.webp'),
  },
  {
    name: 'TECHNICAL',
    description: 'This domain provides students with a platform where they are encouraged to discover, explore and learn more about technology.',
    imageSrc: require('../assets/images/technical.webp'),
  },
  {
    name: 'MANAGEMENT',
    description: 'The members of this domain specialize in maintaining smooth and effective functioning of the club essentially maintaining the cohesive working environment between the rest of the Domains',
    imageSrc: require('../assets/images/management.webp'),
  },
];

const DomainBox = ({ domain, onHover, isActive, onClick }) => {
  return (
    <div
      className={`relative main-box p-4 flex justify-center items-center ${
        isActive ? 'border-orange-500' : 'border-gray-700'
      }`}
      onMouseEnter={() => onHover(domain)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(domain)}
    >
      <img src={domain.imageSrc} alt={domain.name} className="img w-full h-auto object-contain " />
      <div className="domain-box">{domain.name}</div>
    </div>
  );
};

const Domains = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);
  
  const descriptionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDomainHover = (domain) => {
    setSelectedDomain(domain);
  };

  const handleDomainClick = (domain) => {
    if (isMobile) {
      alert(domain.description);
    }
  };

  useEffect(() => {
    if (descriptionRef.current) {
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3 }
      );
    }
  }, [selectedDomain]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative text-white p-5 layout-container">
      {isLoading && (
        <div className="text-2xl font-bold">Loading...</div>
      )}

      {!isLoading && (
        <div>
          {}
          <div className="section-container flex justify-center relative">
            <DomainBox
              domain={domains[1]}
              onHover={handleDomainHover}
              isActive={selectedDomain === domains[1]}
              onClick={handleDomainClick}
            />
          </div>

          {}
          <div className="section-container relative our-domains-box p-4">
            <div className="our-domains-font text-[#F97316]">
              OUR DOMAINS
            </div>
          </div>

          {}
          <div className={`section-container ${isMobile ? 'flex-col gap-20' : 'flex-row'}`}>
            <DomainBox
              domain={domains[0]}
              onHover={handleDomainHover}
              isActive={selectedDomain === domains[0]}
              onClick={handleDomainClick}
            />

            {}
            {!isMobile && (
              <p
                ref={descriptionRef}
                className="text-lg text-center mx-4"
              >
                {selectedDomain
                  ? selectedDomain.description
                  : 'Dive into the World of Domains. Our Mozilla Firefox Club is built on three dynamic, innovative, and engaging core domains.'}
              </p>
            )}

            <DomainBox
              domain={domains[2]}
              onHover={handleDomainHover}
              isActive={selectedDomain === domains[2]}
              onClick={handleDomainClick}
            />
          </div>

          {}
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
          <div className="line line-5"></div>
          <div className="line line-6"></div>
          <div className="line line-7"></div>

          <div className="rectangle rectangle-1"></div>
          <div className="rectangle rectangle-2"></div>
          <div className="rectangle rectangle-3"></div>
          <div className="rectangle rectangle-4"></div>
          <div className="rectangle rectangle-5"></div>
          <div className="rectangle rectangle-6"></div>
        </div>
      )}
    </div>
  );
};

export default Domains;

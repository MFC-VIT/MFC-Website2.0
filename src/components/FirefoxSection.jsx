// components/FirefoxSection.jsx
import React, { useRef, useState, useEffect } from 'react';
import { FirefoxBackground, FirefoxOrbs } from './FireFoxBackground';

export const FirefoxSection = ({ 
  children, 
  id,
  className = '',
  variant = 'default',
  parallax = true,
  showHeader = false,
  headerTitle = '',
  headerSubtitle = '',
  headerBadge = '',
  ...props 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!parallax) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [parallax]);

  const parallaxOffset = parallax ? {
    x: (mousePosition.x - window.innerWidth / 2) * 0.02,
    y: (mousePosition.y - window.innerHeight / 2) * 0.02
  } : { x: 0, y: 0 };

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`firefox-section ${className}`}
      {...props}
    >
      <FirefoxBackground />
      <FirefoxOrbs variant={variant} />
      
      {showHeader && (
        <div 
          className="firefox-section-header"
          style={{
            transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`
          }}
        >
          {headerBadge && (
            <div className="header-badge">
              <span className="badge-text">{headerBadge}</span>
            </div>
          )}
          {headerTitle && (
            <h2 className="section-title">
              {headerTitle}
            </h2>
          )}
          {headerSubtitle && (
            <p className="section-subtitle">{headerSubtitle}</p>
          )}
          <div className="decorative-line">
            <div className="line-segment" />
            <div className="line-dot" />
            <div className="line-segment" />
          </div>
        </div>
      )}
      
      <div className="firefox-section-content">
        {children}
      </div>
    </section>
  );
};
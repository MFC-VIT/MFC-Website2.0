//
import React, { useState, useEffect, useRef, useMemo } from 'react';
import '../styles/Domains.css';
import technicalIcon from '../assets/images/tech_1.png';
import designIcon from '../assets/images/Group.png';
import managementIcon from '../assets/images/mang.png';

const DOMAIN_DATA = [
  {
    key: 'technical',
    title: 'Technical',
    icon: technicalIcon,
    gradient: 'from-orange-500 to-red-600',
    accentColor: '#FF6611',
    description: 'Build the open web with cutting-edge technologies',
    subs: [
      { name: 'AI/ML', icon: '🤖', description: 'Machine learning & artificial intelligence' },
      { name: 'Backend', icon: '⚙️', description: 'Server-side development & APIs' },
      { name: 'Frontend', icon: '🎨', description: 'User interface development' },
      { name: 'Fullstack', icon: '🔧', description: 'End-to-end application development' },
      { name: 'Competitive Programming', icon: '🏆', description: 'Algorithmic problem solving' }
    ],
    stats: { members: 150, projects: 45, growth: '+23%' }
  },
  {
    key: 'design',
    title: 'Design',
    icon: designIcon,
    gradient: 'from-purple-500 to-pink-600',
    accentColor: '#7542E5',
    description: 'Craft beautiful experiences for the modern web',
    subs: [
      { name: 'UI/UX', icon: '✨', description: 'User interface & experience design' },
      { name: 'Graphic Design', icon: '🖼️', description: 'Visual communication & branding' },
      { name: 'Video Editing', icon: '🎬', description: 'Motion graphics & video production' }
    ],
    stats: { members: 80, projects: 30, growth: '+18%' }
  },
  {
    key: 'management',
    title: 'Management',
    icon: managementIcon,
    gradient: 'from-blue-500 to-cyan-600',
    accentColor: '#0090ED',
    description: 'Lead and organize our community initiatives',
    subs: [
      { name: 'Editorial', icon: '📝', description: 'Content creation & curation' },
      { name: 'Publicity', icon: '📢', description: 'Marketing & communications' },
      { name: 'Outreach', icon: '🤝', description: 'Community engagement' },
      { name: 'PR', icon: '🎤', description: 'Public relations & media' },
      { name: 'Finance', icon: '💰', description: 'Budget & resource management' }
    ],
    stats: { members: 60, projects: 25, growth: '+15%' }
  }
];

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

const FirefoxBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const particles = [];
    const particleCount = 50;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#FF6611';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      resizeCanvas();
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="firefox-background" />;
};

const DomainCard = ({ domain, index, isActive, onActivate }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [hoveredSub, setHoveredSub] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}%`);
    cardRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <div
      ref={ref}
      className={`domain-card-enhanced ${isVisible ? 'visible' : ''} ${isActive ? 'active' : ''}`}
      style={{
        '--delay': `${index * 0.1}s`,
        '--accent': domain.accentColor
      }}
      onMouseMove={handleMouseMove}
      onClick={() => onActivate(domain.key)}
    >
      <div ref={cardRef} className="card-inner">
        <div className={`card-gradient bg-gradient-to-br ${domain.gradient}`} />
        
        <div className="card-glow" />
        
        <div className="card-header">
          <div className="icon-wrapper">
            <div className="icon-container">
              <img 
                src={domain.icon} 
                alt={`${domain.title} icon`}
                className={`domain-icon ${imageLoaded ? 'loaded' : ''}`}
                onLoad={() => setImageLoaded(true)}
              />
              <div className="icon-glow-effect" />
            </div>
            <div className="icon-pulse" />
          </div>
          <h3 className="domain-title">{domain.title}</h3>
          <p className="domain-description">{domain.description}</p>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-value">{domain.stats.members}</span>
            <span className="stat-label">Members</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{domain.stats.projects}</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-value growth">{domain.stats.growth}</span>
            <span className="stat-label">Growth</span>
          </div>
        </div>

        <div className="subdomains-section">
          <h4 className="subdomains-title">Focus Areas</h4>
          <ul className="subdomains-list">
            {domain.subs.map((sub, subIndex) => (
              <li
                key={sub.name}
                className={`subdomain-item ${hoveredSub === subIndex ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredSub(subIndex)}
                onMouseLeave={() => setHoveredSub(null)}
                style={{ '--sub-delay': `${subIndex * 0.05}s` }}
              >
                <span className="sub-icon">{sub.icon}</span>
                <div className="sub-content">
                  <span className="sub-name">{sub.name}</span>
                  {hoveredSub === subIndex && (
                    <span className="sub-description">{sub.description}</span>
                  )}
                </div>
                <div className="sub-indicator" />
              </li>
            ))}
          </ul>
        </div>

        <button className="explore-button">
          <span>Explore {domain.title}</span>
          <svg className="button-arrow" viewBox="0 0 24 24" width="20" height="20">
            <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function Domains() {
  const [activeDomain, setActiveDomain] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxOffset = useMemo(() => {
    if (!sectionRef.current) return { x: 0, y: 0 };
    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    return {
      x: (mousePosition.x - centerX) * 0.02,
      y: (mousePosition.y - centerY) * 0.02
    };
  }, [mousePosition]);

  return (
    <section id="domains" className="domains-section-enhanced" ref={sectionRef}>
      <FirefoxBackground />
      
      <div className="background-elements">
        <div className="firefox-orb orb-1" />
        <div className="firefox-orb orb-2" />
        <div className="firefox-orb orb-3" />
      </div>

      <div 
        className="section-header"
        
      >
        <h2 className="section-title">
          <span className="title-word">Our</span>
          <span className="title-word highlight">Domains</span>
        </h2>
        <p className="section-subtitle">
          Join our vibrant community of developers, designers, and leaders building the future of the open web
        </p>
        
        <div className="decorative-line">
          <div className="line-segment" />
          <div className="line-dot" />
          <div className="line-segment" />
        </div>
      </div>

      <div className="domains-grid-enhanced">
        {DOMAIN_DATA.map((domain, index) => (
          <DomainCard
            key={domain.key}
            domain={domain}
            index={index}
            isActive={activeDomain === domain.key}
            onActivate={setActiveDomain}
          />
        ))}
      </div>

      <div className="section-footer">
        <div className="footer-pattern">
          <svg viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M0,10 Q25,0 50,10 T100,10 L100,20 L0,20 Z" fill="url(#firefox-gradient)" />
            <defs>
              <linearGradient id="firefox-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6611" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#FF9500" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#FF6611" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
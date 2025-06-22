import React, { useEffect, useRef } from 'react';
import '../styles/FirefoxBackground.css';

export const FirefoxBackground = ({ 
  particleCount = 50, 
  particleColor = '#FF6611',
  opacity = 0.6,
  speed = 0.5 
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const particles = [];

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
        this.speedX = (Math.random() - 0.5) * speed;
        this.speedY = (Math.random() - 0.5) * speed;
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
        ctx.fillStyle = particleColor;
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
  }, [particleCount, particleColor, speed]);

  return <canvas ref={canvasRef} className="firefox-background-canvas" style={{ opacity }} />;
};

// Animated orbs component
export const FirefoxOrbs = ({ variant = 'default' }) => {
  const orbConfigs = {
    default: [
      { size: 600, color: 'rgba(255, 102, 17, 0.3)', position: { top: '-200px', left: '-200px' }, delay: '0s' },
      { size: 400, color: 'rgba(117, 66, 229, 0.3)', position: { bottom: '-100px', right: '-100px' }, delay: '-7s' },
      { size: 500, color: 'rgba(0, 144, 237, 0.3)', position: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }, delay: '-14s' }
    ],
    purple: [
      { size: 500, color: 'rgba(117, 66, 229, 0.4)', position: { top: '-150px', right: '-150px' }, delay: '0s' },
      { size: 600, color: 'rgba(171, 113, 255, 0.3)', position: { bottom: '-200px', left: '-100px' }, delay: '-5s' },
      { size: 400, color: 'rgba(117, 66, 229, 0.3)', position: { top: '40%', left: '60%' }, delay: '-10s' }
    ],
    blue: [
      { size: 550, color: 'rgba(0, 144, 237, 0.4)', position: { top: '-100px', left: '20%' }, delay: '0s' },
      { size: 450, color: 'rgba(0, 212, 255, 0.3)', position: { bottom: '-150px', right: '10%' }, delay: '-8s' },
      { size: 500, color: 'rgba(0, 144, 237, 0.3)', position: { top: '60%', right: '30%' }, delay: '-4s' }
    ]
  };

  const orbs = orbConfigs[variant] || orbConfigs.default;

  return (
    <div className="firefox-orbs-container">
      {orbs.map((orb, index) => (
        <div
          key={index}
          className="firefox-orb"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            animationDelay: orb.delay,
            ...orb.position
          }}
        />
      ))}
    </div>
  );
};

// Complete Firefox background wrapper
export const FirefoxBackgroundWrapper = ({ 
  children, 
  variant = 'default',
  showParticles = true,
  showOrbs = true,
  particleProps = {},
  className = ''
}) => {
  return (
    <div className={`firefox-bg-wrapper ${className}`}>
      {showParticles && <FirefoxBackground {...particleProps} />}
      {showOrbs && <FirefoxOrbs variant={variant} />}
      <div className="firefox-bg-content">
        {children}
      </div>
    </div>
  );
};
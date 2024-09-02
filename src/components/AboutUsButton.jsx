import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import "../styles/AboutUsButton.css";

function AboutUsButton({ onClick, buttonRef }) {
    useEffect(() => {
        const button = buttonRef.current;

        const hoverTimeline = gsap.timeline({
            paused: true,
            defaults: { duration: 0.3, ease: 'power2.in' }
        })
            .to(button, { yPercent: -10 })
            .to(button, { yPercent: 0 });

        const handleMouseEnter = () => hoverTimeline.play(0);
        const handleMouseLeave = () => hoverTimeline.reverse();

        button.addEventListener('mouseenter', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mouseenter', handleMouseEnter);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [buttonRef]);

    const handleClick = () => {
        gsap.to(buttonRef.current, {
            duration: 0.7,
            scale: 4,
            opacity: 0,
            ease: 'power2.inOut',
            onComplete: onClick
        });
    };

    return (
        <button ref={buttonRef} className="about-button" onClick={handleClick}>
            About Us
        </button>
    );
}

export default AboutUsButton;



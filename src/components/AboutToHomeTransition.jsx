import { gsap } from 'gsap';

const AboutToHomeTransition = (homePageRef, aboutUsPageRef, buttonRef) => {
    gsap.timeline()
        .to(aboutUsPageRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.5,
            onComplete: () => {
                aboutUsPageRef.current.style.display = 'none';
                homePageRef.current.style.display = 'flex';
            }
        })
        .fromTo(homePageRef.current, {
            opacity: 0,
            scale: 0.95
        }, {
            opacity: 1,
            scale: 1,
            duration: 0.5
        })
        .fromTo(buttonRef.current, {
            scale: 1.5,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.inOut'
        });
};

export default AboutToHomeTransition;

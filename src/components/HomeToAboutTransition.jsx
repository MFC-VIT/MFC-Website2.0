import { gsap } from 'gsap';
import React from 'react';

const HomeToAboutTransition = (homePageRef, aboutUsPageRef) => {
    gsap.timeline()
        .to(homePageRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.5,
            onComplete: () => {
                homePageRef.current.style.display = 'none';
                aboutUsPageRef.current.style.display = 'flex';
            }
        })
        .fromTo(aboutUsPageRef.current, {
            opacity: 0,
            scale: 0.95
        }, {
            opacity: 1,
            scale: 1,
            duration: 0.5
        });
};

export default HomeToAboutTransition;
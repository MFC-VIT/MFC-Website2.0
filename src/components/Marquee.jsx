import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import DraggableMarquee from './drag';
import MarqueeItem from './MarqueeItem';
import "../styles/Marquee.css";

const Marquee = () => {
    const marqueeRef = useRef(null);
    const marqueeContentRef = useRef(null);
    const [tween, setTween] = useState(null); // Manage GSAP tween state
    const [dragStartX, setDragStartX] = useState(0); // Track the starting X position of the drag

    useEffect(() => {

        const marqueeElement = marqueeRef.current;
        const marqueeContent = marqueeContentRef.current;


        if (!marqueeElement || !marqueeContent) return;

        const contentWidth = marqueeContent.scrollWidth;
        const clone = marqueeContent.cloneNode(true);
        marqueeElement.appendChild(clone);

        const newTween = gsap.to(marqueeElement, {
            x: `-${contentWidth}px`,
            duration: 60, // Adjust the duration for speed
            ease: 'linear',
            repeat: -1,
            paused: false,
        });

        setTween(newTween); // Save the tween instance

        return () => {
            newTween.kill(); // Clean up on unmount
        };
    }, []);

    const handleStart = (e, data) => {
        setDragStartX(data.x); // Save the starting X position
        if (tween) {
            tween.pause(); // Pause GSAP animation while dragging
        }
    };

    const handleDrag = (e, data) => {
        const deltaX = data.x - dragStartX; // Calculate the change in X position
        gsap.set(marqueeRef.current, { x: `+=${deltaX}` }); // Adjust the position based on the delta
        setDragStartX(data.x); // Update the starting X position for the next drag event
    };

    const handleStop = () => {
        const contentWidth = marqueeContentRef.current.scrollWidth;

        if (tween) {
            tween.kill(); // Kill the old tween
            const newTween = gsap.to(marqueeRef.current, {
                x: `-=${contentWidth}px`,
                duration: 10, // Adjust the duration for speed
                ease: 'linear',
                repeat: -1,
                paused: false,
                modifiers: {
                    x: gsap.utils.unitize((x) => parseFloat(x) % contentWidth) // Ensure continuous looping
                }
            });
            setTween(newTween); // Save the new tween instance
        }
    };

    return (
        <DraggableMarquee
            marqueeRef={marqueeRef}
            marqueeContentRef={marqueeContentRef}
            onStart={handleStart}
            onDrag={handleDrag}
            onStop={handleStop}
        >
            <div className="marquee-content" ref={marqueeRef}>
                <div className="marquee-inner" ref={marqueeContentRef}>
                    <MarqueeItem
                        image="https://via.placeholder.com/150"
                        name="Name"
                        designation="Text 1"
                    />
                    <MarqueeItem
                        image="https://via.placeholder.com/150"
                        name="Name"
                        designation="Text 2"
                    />
                    <MarqueeItem
                        image="https://via.placeholder.com/150"
                        name="Name"
                        designation="Text 3"
                    />
                    <MarqueeItem
                        image="https://via.placeholder.com/150"
                        name="Name"
                        designation="Text 4"
                    />
                    <MarqueeItem
                        image="https://via.placeholder.com/150"
                        name="Name"
                        designation="Text 5"
                    />
                    <MarqueeItem
                        image="https://via.placeholder.com/150"
                        name="Name"
                        designation="Text 6"
                    />
                    <MarqueeItem
                        image="https://via.placeholder.com/150"
                        name="Name"
                        designation="Text 7"
                    />
                    <MarqueeItem
                        image="https://via.placeholder.com/150"
                        name="Name"
                        designation="Text 8"
                    />
                    <MarqueeItem
                        image="https://via.placeholder.com/150"
                        name="Name"
                        designation="Text 9"
                    />
                    <MarqueeItem
                        image="https://via.placeholder.com/150"
                        name="Name"
                        designation="Text 10"
                    />
                    <MarqueeItem
                        image="https://via.placeholder.com/150"
                        name="Name"
                        designation="Text 11"
                    />
                    <MarqueeItem
                        image="https://via.placeholder.com/150"
                        name="Name"
                        designation="Text 12"
                    />
                    <MarqueeItem
                        image="https://via.placeholder.com/150"
                        name="Name"
                        designation="Text 13"
                    />
                    <MarqueeItem
                        image="https://via.placeholder.com/150"
                        name="Name"
                        designation="Text 14"
                    />
                    <MarqueeItem
                        image="https://via.placeholder.com/150"
                        name="Name"
                        designation="Text 15"
                    />
                    <MarqueeItem
                        image="https://via.placeholder.com/150"
                        name="Name"
                        designation="Text 16"
                    />
                </div>
            </div>
        </DraggableMarquee>
    );
};

export default Marquee;

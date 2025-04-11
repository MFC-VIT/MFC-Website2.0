// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { Draggable } from 'gsap/Draggable';

// gsap.registerPlugin(Draggable);

// function DraggableMarquee({ children }) {
//     const containerRef = useRef(null);
//     const marqueeRef = useRef(null);
//     const timelineRef = useRef(null);

//     useEffect(() => {
//         const container = containerRef.current;
//         const content = marqueeRef.current;

//         if (!container || !content) return;

//         const clone = content.cloneNode(true);
//         container.appendChild(clone);

//         const contentWidth = content.scrollWidth;
//         const containerWidth = container.offsetWidth;

//         const createTimeline = () =>
//             gsap.timeline({
//                 repeat: -1,
//                 paused: false,
//                 ease: 'none'
//             }).to(content, {
//                 x: -contentWidth,
//                 duration: contentWidth / 100,
//                 ease: 'linear',
//                 onComplete: () => gsap.set(content, { x: 0 })
//             });

//         timelineRef.current = createTimeline();

//         Draggable.create(content, {
//             type: 'x',
//             bounds: { minX: -contentWidth, maxX: 0 },
//             onDragStart: () => {
//                 timelineRef.current.pause();
//             },
//             onDrag: ({ target }) => {
//                 gsap.set(target, { x: `+=${gsap.getProperty(target, 'x')}` });
//             },
//             onDragEnd: () => {
//                 timelineRef.current.kill();
//                 timelineRef.current = createTimeline();
//             }
//         });

//         return () => {
//             timelineRef.current.kill();
//             Draggable.get(content)?.kill();
//         };
//     }, []);

//     return (
//         <div className="marquee-container" ref={containerRef}>
//             <div className="marquee-content" ref={marqueeRef}>
//                 {children}
//             </div>
//         </div>
//     );
// }

// export default DraggableMarquee;
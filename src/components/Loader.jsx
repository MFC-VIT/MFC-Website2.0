// components/Loader.jsx
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// ...existing code...
const Loader = ({ colors, size = "lg" }) => {
  const circleSize = size === "sm" ? "w-8 h-8" : "w-24 h-24";
  const innerSize = size === "sm" ? "w-4 h-4" : "w-12 h-12";
  
  return (
    <div className="relative flex flex-col items-center"> {/* Added flex flex-col items-center */}
      <motion.div
        className={`${circleSize} rounded-full relative`}
        style={{ background: `linear-gradient(45deg, ${colors.primary}, ${colors.accent})` }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <motion.div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${innerSize} rounded-full bg-dark`}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </motion.div>
      
      <motion.div 
        className="mt-4 text-center text-white font-mozilla font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        MOZILLA FIREFOX CLUB
      </motion.div>
    </div>
  );
};


Loader.propTypes = {
    colors: PropTypes.object,
    size: PropTypes.oneOf(['sm', 'lg']),
};

export default Loader;

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
// import firefoxLogo from '../assets/images/fflogo.svg';
// import PropTypes from 'prop-types';

// const  FirefoxLoader = ({
//   colors = {
//     primary: '#FF9500',
//     secondary: '#0060DF',
//     accent: '#9059FF',
//     earth: '#2B3B4E',
//     white: '#FFFFFF',
//     dark: '#0C0C0D'
//   },
//   size = "lg",
//   message = "Initializing Open Source Environment",
//   theme = "quantum",
//   showProgress = true,
//   customMessages = []
// }) => {
//   const flameColors = colors.flame || ['#FF0039', '#FF9500', '#9059FF'];
  
//   const scale = size === "sm" ? 0.5 : size === "md" ? 0.75 : 1;
//   const baseSize = Math.round(320 * scale);
  
//   const containerRef = useRef(null);
//   const progressRef = useRef(null);
//   const codeContainerRef = useRef(null);
  
//   const [loadingPhase, setLoadingPhase] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [codeSnippets] = useState([
//     '/* Mozilla Firefox Club */',
//     'function createOpenSource() {',
//     '  return innovation.share()',
//     '    .then(collaborate)',
//     '    .catch(fixBugs);',
//     '}',
//     'const freedom = web.open();',
//     'firefox.quantum.activate();'
//   ]);
//   const [messages] = useState(
//     customMessages.length > 0 
//       ? customMessages 
//       : [
//           'Initializing Open Source Environment',
//           'Compiling  Engine',
//           'Connecting to Mozilla Network',
//           'Optimizing Web Standards',
//           'Launching Mozilla Firefox Club'
//         ]
//   );
  
//   const controls = useAnimation();
//   const earthControls = useAnimation();
//   const foxControls = useAnimation();
//   const codeControls = useAnimation();
//   const flameControls = useAnimation();
//   const messageControls = useAnimation();
  
//   const progress = useMotionValue(0);
//   const progressPercent = useTransform(progress, [0, 100], [0, 100]);
//   const rotation = useMotionValue(0);
//   const hoverScale = useMotionValue(1);
  
//   const flameParticles = Array.from({ length: 20 }).map((_, i) => ({
//     id: i,
//     size: 2 + Math.random() * 6 * scale,
//     x: Math.random() * 20 - 10,
//     y: Math.random() * 20 - 10,
//     delay: Math.random() * 0.5,
//     duration: 0.8 + Math.random() * 0.7,
//     color: flameColors[Math.floor(Math.random() * flameColors.length)]
//   }));
  
//   const codeLines = Array.from({ length: 8 }).map((_, i) => ({
//     id: i,
//     width: 40 + Math.random() * 60 * scale,
//     y: -20 + (i * 6),
//     delay: 0.1 + i * 0.15,
//     color: i % 2 ? colors.primary : colors.accent
//   }));
  
//   const gridLines = Array.from({ length: 8 }).map((_, i) => ({
//     id: i,
//     rotation: i * 22.5
//   }));
  
//   const handleMouseMove = (e) => {
//     if (!containerRef.current) return;
    
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width;
//     const y = (e.clientY - rect.top) / rect.height;
    
//     setMousePosition({ x, y });
    
//     const tiltX = (y - 0.5) * 20;
//     const tiltY = (x - 0.5) * -20;
//     foxControls.start({
//       rotateX: tiltX,
//       rotateY: tiltY,
//       transition: { type: 'spring', stiffness: 300, damping: 30 }
//     });
//   };
  
//   useEffect(() => {
//     earthControls.start({
//       rotate: 360,
//       transition: { duration: 60, ease: "linear", repeat: Infinity }
//     });
    
//     codeControls.start({
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.3 }
//     });
    
//     foxControls.start({
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut", delay: 0.5 }
//     });
    
//     flameControls.start({
//       scale: [1, 1.2, 1],
//       transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
//     });
    
//     let interval;
//     const animateProgress = () => {
//       interval = setInterval(() => {
//         const currentProgress = progress.get();
        
//         if (currentProgress >= 100) {
//           clearInterval(interval);
//           setLoadingPhase(messages.length - 1);
          
//           messageControls.start({
//             scale: [1, 1.05, 1],
//             color: [colors.white, colors.primary, colors.white],
//             transition: { duration: 1.5, times: [0, 0.5, 1] }
//           });
          
//           return;
//         }
        
//         progress.set(currentProgress + 0.5);
        
//         const newPhase = Math.min(
//           Math.floor((currentProgress / 100) * messages.length),
//           messages.length - 1
//         );
        
//         if (newPhase !== loadingPhase) {
//           setLoadingPhase(newPhase);
          
//           messageControls.start({
//             opacity: [1, 0, 1],
//             y: [0, -10, 0],
//             transition: { duration: 0.5, times: [0, 0.4, 1] }
//           });
//         }
//       }, 30);
//     };
    
//     animateProgress();
    
//     return () => {
//       if (interval) clearInterval(interval);
//     };
//   }, [
//     earthControls, 
//     codeControls, 
//     foxControls, 
//     flameControls, 
//     messageControls, 
//     progress, 
//     loadingPhase, 
//     messages,
//     colors.primary,
//     colors.white
//   ]);
  
//   const svgFilters = (
//     <svg width="0" height="0" style={{ position: 'absolute' }}>
//       <defs>
//         <filter id="firefox-glow" x="-50%" y="-50%" width="200%" height="200%">
//           <feGaussianBlur stdDeviation="6" result="blur" />
//           <feFlood floodColor={colors.primary} floodOpacity="0.7" result="color" />
//           <feComposite in="color" in2="blur" operator="in" result="glow" />
//           <feComposite in="SourceGraphic" in2="glow" operator="over" />
//         </filter>
        
//         <filter id="flame-bloom" x="-50%" y="-50%" width="200%" height="200%">
//           <feGaussianBlur stdDeviation="2.5" result="blur" />
//           <feFlood floodColor="#FF9500" floodOpacity="1" result="color" />
//           <feComposite in="color" in2="blur" operator="in" result="bloom" />
//           <feComposite in="SourceGraphic" in2="bloom" operator="over" />
//         </filter>
        
//         <filter id="noise" x="0%" y="0%" width="100%" height="100%">
//           <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise" />
//           <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.05 0" in="noise" result="noiseFinal" />
//           <feComposite operator="in" in="SourceGraphic" in2="noiseFinal" />
//         </filter>
        
//         <filter id="holographic" x="-10%" y="-10%" width="120%" height="120%">
//           <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="1" seed="1" result="noise" />
//           <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
//           <feColorMatrix type="hueRotate" values="0">
//             <animate attributeName="values" from="0" to="360" dur="10s" repeatCount="indefinite" />
//           </feColorMatrix>
//         </filter>
//       </defs>
//     </svg>
//   );

//   return (
//     <div 
//       ref={containerRef}
//       className="relative flex items-center justify-center "
//       style={{ 
//         width: baseSize, 
//         height: baseSize,
//         overflow: 'visible',
//         perspective: '1000'
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => {
//         setIsHovering(false);
//         foxControls.start({ rotateX: 0, rotateY: 0 });
//       }}
//     >
//       {svgFilters}
      
//       <motion.div
//         className="absolute w-full h-full rounded-full opacity-20"
//         style={{
//           background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
//           filter: 'blur(30px)'
//         }}
//         animate={{
//           scale: [1, 1.1, 1],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           repeatType: "reverse"
//         }}
//       />
      
//       <motion.div
//         className="absolute top-1/2 left-1/2 rounded-full overflow-hidden"
//         style={{ 
//           width: baseSize * 0.5,
//           height: baseSize * 0.5,
//           x: -baseSize * 0.25,
//           y: -baseSize * 0.25,
//           background: `radial-gradient(circle, ${colors.earth} 0%, ${colors.dark} 100%)`,
//           boxShadow: `0 0 30px rgba(0,0,0,0.5), inset 0 0 50px rgba(0,96,223,0.2)`,
//           filter: 'url(#noise)'
//         }}
//         animate={earthControls}
//       >
//         {gridLines.map(line => (
//           <motion.div 
//             key={`grid-${line.id}`}
//             className="absolute top-0 left-0 w-full h-full rounded-full"
//             style={{ 
//               border: `1px solid rgba(255,255,255,0.1)`,
//               rotate: line.rotation,
//               transformOrigin: 'center center'
//             }}
//           />
//         ))}
        
//         <motion.div 
//           ref={codeContainerRef}
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//           initial={{ opacity: 0 }}
//           animate={codeControls}
//         >
//           {codeLines.map(line => (
//             <motion.div
//               key={`code-${line.id}`}
//               className="rounded-sm my-1"
//               style={{ 
//                 height: 3 * scale,
//                 width: 0,
//                 y: line.y,
//                 background: line.color,
//                 filter: 'url(#holographic)'
//               }}
//               initial={{ width: 0, x: -20, opacity: 0 }}
//               animate={{ 
//                 width: line.width, 
//                 x: 0,
//                 opacity: 0.8
//               }}
//               transition={{
//                 delay: line.delay,
//                 duration: 0.6,
//                 ease: "easeOut"
//               }}
//             />
//           ))}
//         </motion.div>
        
//         {Array.from({ length: 15 }).map((_, i) => (
//           <motion.div
//             key={`data-point-${i}`}
//             className="absolute rounded-full"
//             style={{
//               width: (2 + Math.random() * 2) * scale,
//               height: (2 + Math.random() * 2) * scale,
//               background: i % 2 ? colors.primary : colors.accent,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               boxShadow: `0 0 4px ${i % 2 ? colors.primary : colors.accent}`
//             }}
//             animate={{
//               opacity: [0, 1, 0],
//               scale: [0, 1, 0]
//             }}
//             transition={{
//               duration: 1 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               repeatDelay: Math.random() * 3
//             }}
//           />
//         ))}
//       </motion.div>
      
//          <motion.div
//       className="absolute z-10 preserve-3d"
//       style={{ 
//         width: baseSize * 0.4,
//         height: baseSize * 0.4,
//         x: baseSize * 0.05,
//         y: -baseSize * 0.05,
//         filter: 'url(#firefox-glow)',
//         transformStyle: 'preserve-3d'
//       }}
//       initial={{ opacity: 0, scale: 0.8, y: 20 }}
//       animate={foxControls}
//       whileHover={{ scale: 1.05 }}
//     >
//       <img 
//         src={firefoxLogo} 
//         alt="Firefox Logo" 
//         className="w-full h-full"
//       />
//     </motion.div>
      
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
//         {Array.from({ length: 8 }).map((_, i) => (
//           <motion.div
//             key={`stream-${i}`}
//             className="absolute rounded-full"
//             style={{
//               width: 1.5 * scale,
//               height: Math.random() * 30 * scale,
//               background: i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.accent,
//               left: `${Math.random() * 100}%`,
//               top: 0,
//               opacity: 0.7
//             }}
//             animate={{
//               y: ['-100%', '100%'],
//               opacity: [0, 0.7, 0]
//             }}
//             transition={{
//               duration: 2 + Math.random() * 3,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "linear"
//             }}
//           />
//         ))}
//       </div>
      
//       <div 
//         className="absolute bottom-0 right-0 text-xs text-right opacity-60 overflow-hidden"
//         style={{ 
//           width: baseSize * 0.5,
//           height: baseSize * 0.3,
//           fontSize: 10 * scale
//         }}
//       >
//         <AnimatePresence>
//           {codeSnippets.map((snippet, index) => {
//             const shouldShow = (index / codeSnippets.length) * 100 <= progressPercent.get();
            
//             return shouldShow && (
//               <motion.div
//                 key={`snippet-${index}`}
//                 className="font-mono text-right mb-1"
//                 style={{ color: colors.white }}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 0.8, x: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ 
//                   duration: 0.3, 
//                   delay: index * 0.2 
//                 }}
//               >
//                 {snippet}
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </div>
      
//       {showProgress && (
//         <svg
//           className="absolute top-0 left-0 w-full h-full"
//           viewBox="0 0 100 100"
//           style={{ transform: 'rotate(-90deg)' }}
//         >
//           <motion.circle
//             cx="50"
//             cy="50"
//             r="45"
//             fill="none"
//             stroke={colors.dark}
//             strokeWidth="2"
//             strokeDasharray="283"
//             strokeDashoffset="0"
//             style={{ opacity: 0.3 }}
//           />
//           <motion.circle
//             cx="50"
//             cy="50"
//             r="45"
//             fill="none"
//             stroke={colors.primary}
//             strokeWidth="2"
//             strokeDasharray="283"
//             strokeLinecap="round"
//             strokeDashoffset={useTransform(
//               progressPercent, 
//               [0, 100], 
//               [283, 0]
//             )}
//           />
          
//           {[0, 25, 50, 75].map(marker => (
//             <motion.circle
//               key={`marker-${marker}`}
//               cx="50"
//               cy="50"
//               r="45"
//               fill="none"
//               stroke={colors.accent}
//               strokeWidth="4"
//               strokeDasharray="3 280"
//               strokeDashoffset={283 - (283 * marker / 100)}
//               initial={{ opacity: 0.3 }}
//               animate={{ 
//                 opacity: progressPercent.get() >= marker ? 0.8 : 0.3,
//                 scale: progressPercent.get() >= marker ? [1, 1.05, 1] : 1
//               }}
//               transition={{ 
//                 duration: 0.5, 
//                 repeat: progressPercent.get() >= marker ? 0 : false
//               }}
//             />
//           ))}
//         </svg>
//       )}
      
//       <motion.div 
//         className="absolute bottom-10 font-mozilla tracking-wider text-center w-full"
//         style={{ 
//           fontSize: 14 * scale,
//           color: colors.white,
//           fontVariantNumeric: 'tabular-nums'
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//       >
//         <motion.div
//           animate={messageControls}
//           className="relative h-6"
//         >
//           {messages[loadingPhase]}
          
//           <motion.span 
//             animate={{
//               opacity: [0, 1, 0]
//             }}
//             transition={{
//               duration: 1.2,
//               repeat: Infinity,
//               repeatType: "loop",
//               ease: "easeInOut"
//             }}
//           >
//             <span className="inline-block mx-0.5">.</span>
//             <span className="inline-block mx-0.5">.</span>
//             <span className="inline-block mx-0.5">.</span>
//           </motion.span>
//         </motion.div>
        
//         {showProgress && (
//           <motion.div 
//             className="mt-2 font-bold"
//             style={{ color: colors.primary }}
//           >
//             {Math.round(progressPercent.get())}%
//           </motion.div>
//         )}
//       </motion.div>
      
//       <motion.div
//         className="absolute bottom-2 text-xs opacity-60 w-full text-center"
//         style={{ 
//           fontSize: 10 * scale,
//           color: colors.white,
//           letterSpacing: '0.1em'
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.6 }}
//         transition={{ delay: 1 }}
//       >
//         MOZILLA FIREFOX CLUB
//       </motion.div>
      
//       {isHovering && (
//         <motion.div
//           className="absolute top-5 right-5 text-xs"
//           style={{ color: colors.white, fontSize: 9 * scale }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.7 }}
//         >
//           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="inline-block mr-1">
//             <path d="M12 16L12 8M12 8L8 12M12 8L16 12" stroke={colors.white} strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//           INTERACTIVE
//         </motion.div>
//       )}
      
//       {theme === "quantum" && (
//         <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//           {Array.from({ length: 12 }).map((_, i) => (
//             <motion.div
//               key={`quantum-${i}`}
//               className="absolute rounded-full"
//               style={{
//                 width: (2 + Math.random() * 3) * scale,
//                 height: (2 + Math.random() * 3) * scale,
//                 background: i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.accent,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 boxShadow: `0 0 8px ${i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.accent}`
//               }}
//               animate={{
//                 x: [
//                   Math.random() * 20 - 10, 
//                   Math.random() * 20 - 10, 
//                   Math.random() * 20 - 10
//                 ],
//                 y: [
//                   Math.random() * 20 - 10, 
//                   Math.random() * 20 - 10, 
//                   Math.random() * 20 - 10
//                 ],
//                 opacity: [0.2, 0.8, 0.2],
//                 scale: [0.8, 1.2, 0.8]
//               }}
//               transition={{
//                 duration: 3 + Math.random() * 5,
//                 repeat: Infinity,
//                 times: [0, 0.5, 1],
//                 ease: "easeInOut"
//               }}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

//  FirefoxLoader.propTypes = {
//   colors: PropTypes.shape({
//     primary: PropTypes.string,
//     secondary: PropTypes.string,
//     accent: PropTypes.string,
//     earth: PropTypes.string,
//     white: PropTypes.string,
//     dark: PropTypes.string,
//     flame: PropTypes.arrayOf(PropTypes.string)
//   }),
//   size: PropTypes.oneOf(['sm', 'md', 'lg']),
//   message: PropTypes.string,
//   theme: PropTypes.oneOf(['standard', 'quantum', 'developer']),
//   showProgress: PropTypes.bool,
//   customMessages: PropTypes.arrayOf(PropTypes.string)
// };

// export default  FirefoxLoader;


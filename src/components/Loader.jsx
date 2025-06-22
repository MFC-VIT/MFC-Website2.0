// import React from 'react';
// import { motion } from 'framer-motion';
// import PropTypes from 'prop-types';

// const Loader = ({ colors, size = "lg" }) => {
//   const circleSize = size === "sm" ? "w-8 h-8" : "w-24 h-24";
//   const innerSize = size === "sm" ? "w-4 h-4" : "w-12 h-12";

//   return (
//     <div className="relative flex flex-col items-center"> {/* Added flex flex-col items-center */}
//       <motion.div
//         className={`${circleSize} rounded-full relative`}
//         style={{ background: `linear-gradient(45deg, ${colors.primary}, ${colors.accent})` }}
//         animate={{
//           rotate: 360,
//         }}
//         transition={{
//           duration: 2,
//           ease: "linear",
//           repeat: Infinity,
//         }}
//       >
//         <motion.div
//           className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${innerSize} rounded-full bg-dark`}
//           animate={{
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//           }}
//         />
//       </motion.div>

//       <motion.div
//         className="mt-4 text-center text-white font-mozilla font-bold"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//       >
//         MOZILLA FIREFOX CLUB - VIT VELLORE
//       </motion.div>
//     </div>
//   );
// };

// Loader.propTypes = {
//     colors: PropTypes.object,
//     size: PropTypes.oneOf(['sm', 'lg']),
// };

// export default Loader;

/* ──────────────────────────────────────────────────────────────────────────
   Firefox-Inspired Loader – “Aurora” Edition
   ------------------------------------------------------------------------- */
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  memo,
} from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import PropTypes from 'prop-types';

const SIZE = {
  sm: {
    RADIUS: 64, // main container radius   (px)
    CORE: 36, // hexagon dia             (px)
    ORBIT: 50,
    PARTICLE: 3,
    SPACING: 22,
    TEXT_CLASS: 'text-xs',
    BAR_CLASS: 'h-1',
    GLOW_CLASS: 'blur-md',
  },
  lg: {
    RADIUS: 100,
    CORE: 125,
    ORBIT: 200,
    PARTICLE: 10,
    SPACING: 80,
    TEXT_CLASS: 'text-xs',
    BAR_CLASS: 'h-2',
    GLOW_CLASS: 'blur-4xl',
  },
};

const DEFAULT_COLOURS = {
  primary: '#FF9500', // orange
  accent: '#FF6B35', // tangerine
  extra: '#FF3366', // pink
};

const mulberry32 = (seed) => {
  let t = seed;
  return () => {
    t |= 0;
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296; // 0 – 1
  };
};

const useAnimationClock = (cb) => {
  const rafRef = useRef(null);
  const callback = useRef(cb);
  callback.current = cb;

  const loop = useCallback((t) => {
    callback.current(t);
    rafRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    const start = () => (rafRef.current = requestAnimationFrame(loop));
    const stop = () => rafRef.current && cancelAnimationFrame(rafRef.current);

    start();

    window.addEventListener('visibilitychange', () =>
      document.hidden ? stop() : start(),
    );
    return () => {
      stop();
      window.removeEventListener('visibilitychange', stop);
    };
  }, [loop]);
};

/* 2.3  prefers-reduced-motion utility */
const useSafeMotion = () => !useReducedMotion();

const Loader = ({
  size = 'lg',
  colours = DEFAULT_COLOURS,
  onLoadComplete = () => {},
  duration = 2750, // ms for full progress
  seed = 1337, // change → different particle constellation
  label = 'Loading Mozilla Firefox Club resources…',
}) => {
  const M = SIZE[size];
  const allowMotion = useSafeMotion();

  const [progress, setProgress] = useState(0); // 0 – 100
  const [flameIdx, setFlameIdx] = useState(0); // 0 / 1 / 2
  const startTimeRef = useRef(null);

  useAnimationClock((t) => {
    if (!startTimeRef.current) startTimeRef.current = t;
    const elapsed = t - startTimeRef.current;

    const pct = Math.min(
      100,
      100 * (elapsed / duration) ** (1 / 3) /* cubic-root easing */,
    );
    setProgress(Math.round(pct));

    setFlameIdx(Math.floor(elapsed / 750) % 3);

    if (pct === 100) {
      setTimeout(onLoadComplete, 400);
    }
  });

  const particleBlueprint = useMemo(() => {
    const rand = mulberry32(seed);
    return Array.from({ length: 10 }, () => ({
      xShift: (rand() - 0.5) * M.SPACING * 1.6,
      delay: rand() * 2,
      huePick: rand() > 0.5,
    }));
  }, [M.SPACING, seed]);

  const Hexagon = memo(() => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="hex-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colours.primary} />
          <stop offset="50%" stopColor={colours.accent} />
          <stop offset="100%" stopColor={colours.extra} />
        </linearGradient>
        <filter id="gBlur">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.polygon
        points="50,10 85,30 85,70 50,90 15,70 15,30"
        fill="url(#hex-grad)"
        filter="url(#gBlur)"
        animate={allowMotion ? { scale: [1, 1.08, 1] } : false}
        transition={
          allowMotion
            ? { repeat: Infinity, duration: 3, ease: 'easeInOut' }
            : {}
        }
      />
    </svg>
  ));

  const FlamePetal = memo(({ deg, active, colour }) => (
    <motion.div
      className="absolute top-1/2 left-1/2 w-full h-full"
      style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }}
      animate={
        allowMotion
          ? active
            ? { scale: [1, 1.25, 1], opacity: [0.65, 1, 0.65] }
            : { opacity: 0.35 }
          : false
      }
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50,20 L65,50 L50,45 L35,50 Z" fill={colour} opacity="0.85" />
      </svg>
    </motion.div>
  ));

  const Particles = memo(() =>
    particleBlueprint.map(({ xShift, delay, huePick }, i) => (
      <motion.div
        key={i}
        className="absolute top-1/2 left-1/2"
        initial={{ scale: 0 }}
        animate={
          allowMotion
            ? {
                x: [0, xShift],
                y: [0, -M.SPACING * 1.5],
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }
            : { opacity: 0 }
        }
        transition={
          allowMotion
            ? {
                repeat: Infinity,
                duration: 2.3,
                delay,
                ease: 'easeOut',
              }
            : {}
        }
      >
        <div
          style={{
            width: M.PARTICLE,
            height: M.PARTICLE,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${
              huePick ? colours.accent : colours.primary
            } 0%, transparent 70%)`,
            boxShadow: `0 0 6px ${huePick ? colours.accent : colours.primary}`,
          }}
        />
      </motion.div>
    )),
  );

  const OrbitWave = memo(({ idx }) => (
    <motion.div
      className="absolute"
      style={{
        width: M.ORBIT + idx * 24,
        height: M.ORBIT + idx * 24,
        top: '50%',
        left: '50%',
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
      }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <motion.path
          d="M100,40 Q140,100 100,160 Q60,100 100,40"
          fill="none"
          stroke={[colours.primary, colours.accent, colours.extra][idx]}
          strokeWidth="2"
          strokeOpacity="0.35"
          animate={allowMotion ? { rotate: 360, scale: [1, 1.14, 1] } : false}
          transition={
            allowMotion
              ? { repeat: Infinity, duration: 14 + idx * 2, ease: 'linear' }
              : {}
          }
          style={{ transformOrigin: 'center' }}
        />
      </svg>
    </motion.div>
  ));

  return (
    <section
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      aria-label={label}
      className="flex flex-col items-center justify-center"
    >
      <div
        className="relative select-none"
        style={{
          width: M.RADIUS * 2,
          height: M.RADIUS * 2,
        }}
      >
        <motion.div
          className={`absolute inset-0 rounded-full ${M.GLOW_CLASS}`}
          style={{
            background: `radial-gradient(circle, ${colours.primary}33 0%, transparent 70%)`,
          }}
          animate={allowMotion ? { scale: [0.9, 1.1, 0.9] } : false}
          transition={
            allowMotion
              ? { repeat: Infinity, duration: 6, ease: 'easeInOut' }
              : {}
          }
        />

        {[0, 1, 2].map((i) => (
          <OrbitWave idx={i} key={i} />
        ))}

        <motion.div
          className="absolute top-1/2 left-1/2"
          style={{
            translateX: '-50%',
            translateY: '-50%',
            width: M.CORE,
            height: M.CORE,
          }}
          animate={allowMotion ? { rotate: 360 } : false}
          transition={
            allowMotion
              ? { repeat: Infinity, duration: 22, ease: 'linear' }
              : {}
          }
        >
          <Hexagon />

          {[0, 120, 240].map((deg, i) => (
            <FlamePetal
              key={deg}
              deg={deg}
              active={flameIdx === i}
              colour={[colours.primary, colours.accent, colours.extra][i]}
            />
          ))}
        </motion.div>

        <Particles />
      </div>

      <div className="w-full max-w-xs mt-6 space-y-3">
        <h2
          className={`text-center font-bold tracking-wide uppercase ${M.TEXT_CLASS}`}
          style={{
            background: `linear-gradient(135deg, ${colours.primary}, ${colours.accent}, ${colours.extra})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Mozilla Firefox Club
        </h2>

        <p className={`text-center text-gray-400 ${M.TEXT_CLASS}`}>
          VIT Vellore
        </p>

        {/* bar */}
        <div
          className={`w-full bg-gray-800/40 rounded-full overflow-hidden ${M.BAR_CLASS}`}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${colours.primary}, ${colours.accent})`,
            }}
            initial={{ width: 0 }} 
            animate={{ width: `${progress}%` }} 
            transition={{ duration: 0.2, ease: 'linear' }}
          />
        </div>

        <div className="flex justify-between items-center">
          <span
            className={`${M.TEXT_CLASS} text-gray-300 font-mono tabular-nums`}
          >
            {progress}%
          </span>
          <span className={`${M.TEXT_CLASS} text-gray-400`}>
            {progress < 100 ? 'Loading…' : 'Complete'}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={
              progress < 30
                ? 'early'
                : progress < 60
                ? 'mid'
                : progress < 90
                ? 'late'
                : 'done'
            }
            className={`text-center text-gray-500 italic ${M.TEXT_CLASS}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25 }}
          >
            {progress < 30
              ? 'Igniting engines…'
              : progress < 60
              ? 'Compiling modules…'
              : progress < 90
              ? 'Almost ready…'
              : 'Let’s blaze!'}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf(['sm', 'lg']),
  colours: PropTypes.shape({
    primary: PropTypes.string,
    accent: PropTypes.string,
    extra: PropTypes.string,
  }),
  onLoadComplete: PropTypes.func,
  duration: PropTypes.number,
  seed: PropTypes.number,
  label: PropTypes.string,
  zoom: PropTypes.number, 
};

Loader.defaultProps = {
  size: 'lg',
  colours: DEFAULT_COLOURS,
  onLoadComplete: undefined,
  duration: 2750,
  seed: 1337,
  label: 'Loading…',
  zoom: 1,
};

export default Loader;

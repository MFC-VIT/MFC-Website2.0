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
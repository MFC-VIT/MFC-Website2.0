import { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

export default function Content1() {
  const carouselRef = useRef(null);
  const controls = useAnimationControls();
  const [itemWidth, setItemWidth] = useState(0);
  const [animationDistance, setAnimationDistance] = useState(0); // Store the animation distance

  const carouselItems = ["Open Minds", "Open Ideas", "Open Source"];

  useEffect(() => {
    const calculateAnimation = () => {
      if (!carouselRef.current) return;

      const firstItem = carouselRef.current.querySelector(".carousel-item");
      if (!firstItem) return;

      const singleItemWidth = firstItem.offsetWidth;
      setItemWidth(singleItemWidth);

      const totalOriginalWidth = singleItemWidth * carouselItems.length;
      setAnimationDistance(totalOriginalWidth); 

      controls.start({
        x: [0, -totalOriginalWidth], 
        transition: {
          duration: totalOriginalWidth / 50,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    calculateAnimation();
    window.addEventListener("resize", calculateAnimation);
    return () => {
      window.removeEventListener("resize", calculateAnimation);
      controls.stop();
    };
  }, [controls, carouselItems.length, itemWidth, animationDistance]);

  const cloneCount = Math.ceil(window.innerWidth / (itemWidth || 1)); 
  const clonedStart = carouselItems.slice(-cloneCount).map((item, index) => ({
    item,
    id: `start-clone-${index}`,
  }));
  const clonedEnd = carouselItems.slice(0, cloneCount).map((item, index) => ({
    item,
    id: `end-clone-${index}`,
  }));

  const allItems = [...clonedStart, ...carouselItems.map((item,index) => ({item, id: `original-${index}`})), ...clonedEnd];

  return (
    <span className="relative min-h-min pointer-events-none top-20 z-20 flex flex-col items-center">
      <h1 className="text-stone-300 text-[5vh] sm:ml-0 font-normal lg:text-[16.2275600505689vh] font-apex text-center md:text-[12.5vh]">
        MOZILLA FIREFOX
      </h1>
      <p className="text-stone-300 font-bold text-[3.3739583333333335vw] lg:text-[2vw] font-yoshiro_b text-center mb-8">
        Firefox Answers To No One But To You
      </p>

      <div className="w-full overflow-hidden mt-6 bg-[#0a0807]/50 backdrop-blur-sm py-4">
        <motion.div
          ref={carouselRef}
          className="flex items-center whitespace-nowrap"
          style={{ x: -(itemWidth * cloneCount) }}
          animate={controls}
        >
          {allItems.map(({item, id}) => (
            <div
              key={id} 
              className="carousel-item inline-flex items-center mx-8 text-[#E8DED5] font-teko text-xl md:text-4xl"
            >
              <span className="h-3 w-3 rounded-full bg-[#E8DED5] mr-3 flex-shrink-0"></span>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </span>
  );
}
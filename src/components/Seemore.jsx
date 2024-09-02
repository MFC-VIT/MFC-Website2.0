import React from 'react';
import arrow from "../assets/images/arrowIcon.svg";

const Seemore = ({ className }) => {
  return (
    <div className={`flex flex-col rounded-[25px] items-center justify-center gap-4 sm:gap-6 border-2 border-[#F7813F] h-full ${className}`}>
      <img src={arrow} alt="Arrow Icon" className="w-[18%] sm:w-[22%] sm:h-[22%] h-[18%]" />
      <div className='font-yoshiro_b text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white'>See More</div>
    </div>
  );
}

export default Seemore;
import React from 'react';
import final from '../assets/images/finallogo2.svg';

export default function Navbar1() {
  return (
    <div className='flex bg-gradient-to-r from-lighter-brown to-darker-brown w-[65vw] md:w-[45vw] lg:w-[50vw] h-[10vh] lg:h-[12vh] rounded-md absolute mt-[5vh] justify-center left-[50%] transform -translate-x-1/2 items-center px-[1.5vw]'>
      <img className='cursor-pointer lg:h-[8vh] lg:w-[2.5vw] md:h-[8vh] md:w-[2.5vw] h-[4vh] mt-[0.5vh] lg:mt-[0.5vh] lg:mr-[1vw]' src={final} />
      
      <button className='img11 text-[#E8DED5] text-[1.5vh] ml-[2vw] md:text-[2.0vh] lg:text-[2.3vh] font-teko leading-[6vh]'>ABOUT</button>
      <button className='img11 text-[#E8DED5] text-[1.5vh] ml-[2vw] md:text-[2.0vh] lg:text-[2.3vh] font-teko leading-[6vh]'>DOMAINS</button>
      <button className='img11 text-[#E8DED5] text-[1.5vh] ml-[2vw] md:text-[2.0vh] lg:text-[2.3vh] font-teko leading-[6vh]'>WORK</button>
      <button className='img11 text-[#E8DED5] text-[1.5vh] ml-[2vw] md:text-[2.0vh] lg:text-[2.3vh] font-teko leading-[6vh]'>FAQS</button>
      <button className='img11 text-[#E8DED5] text-[1.5vh] ml-[2vw] md:text-[2.0vh] lg:text-[2.3vh] font-teko leading-[6vh] mr-[2vw]'>BLOG</button>
      <button className='text-[#0a0807] font-semibold font-teko h-[40px] w-[120px] bg-[#FF6D00] rounded-lg min-w-[150px] text-[2.0vh] md:text-[2.3vh] lg:text-[2.5vh] leading-[6vh] mx-2'>GET IN TOUCH</button>
    </div>
  );
}
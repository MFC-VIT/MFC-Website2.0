import React from 'react'
import final from '../assets/images/finallogo2.svg';

export default function Navbar1() {
  return (
    <div className='flex bg-gradient-to-r from-lighter-brown to-darker-brown w-[70vw] md:w-[50vw] lg:w-[55vw] h-[8vh] lg:h-[10vh] rounded-md absolute mt-[5vh] justify-center left-[50%] transform -translate-x-1/2 '>
     
        <img className='cursor-pointer lg:h-[7.585335018963337vh] lg:w-[2.2252604166666665vw] md:h-[7.585335018963337vh] md:w-[2.2252604166666665vw] md:mt-[0.2vh] h-[4vh] mt-[2vh] lg:mt-[1vh] lg:mr-[0]' src={final}/>
        <button className='img11 text-[#E8DED5] text-[1.5vh] ml-[2.5vw] md:text-[2.7vh] lg:text-[3.236409608091024vh] font-teko md:ml-[2.75vw] lg:ml -[3.7760416666666665vw]'>ABOUT</button>
        <button className='img11 text-[#E8DED5] text-[1.5vh] ml-[2.5vw] md:text-[2.7vh] lg:text-[3.236409608091024vh] font-teko md:ml-[2.75vw] lg:ml-[3.7760416666666665vw] '>DOMAINS</button>
        <button className='img11 text-[#E8DED5] text-[1.5vh] ml-[2.5vw] md:text-[2.7vh] lg:text-[3.236409608091024vh] font-teko md:ml-[2.75vw] lg:ml-[3.7760416666666665vw]'>WORK</button>
        <button className='img11 text-[#E8DED5] text-[1.5vh] ml-[2.5vw] md:text-[2.7vh] lg:text-[3.236409608091024vh] font-teko md:ml-[2.75vw] lg:ml-[3.7760416666666665vw]'>FAQS</button>
        <button className='img11 text-[#E8DED5] text-[1.5vh] ml-[2.5vw] md:text-[2.7vh] lg:text-[3.236409608091024vh] font-teko md:ml-[2.75vw] lg:ml-[3.7760416666666665vw]'>BLOG</button>
        <button className='md:ml-[3vw] md:text-[2vh] ml-[1.8vw] lg:ml-[3.7760416666666665vw] text-[#0a0807] font-semibold font-teko lg:text-[3.236409608091024vh] h-11 bg-[#FF6D00] mt-[1.7vh] md:mt-[1.2vh] lg:mt-[2vh] rounded-xl pl-[0.5vw] pr-[0.5vw]'>GET IN TOUCH</button>
    </div>
  ) 
}
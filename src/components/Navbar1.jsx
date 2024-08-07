import React from 'react'
import final from '../assets/images/finallogo2.svg';

export default function Navbar1() {
  return (
    <div className='flex bg-gradient-to-r from-lighter-brown to-darker-brown w-[50.5vw] h-[10vh] rounded-md absolute mt-[5vh] ml-[25vw]'>
      <div></div>
        <img className='cursor-pointer ml-[1.5vw] h-[7.585335018963337vh] w-[3.2252604166666665vw] mt-[1.5vh]' src={final}/>
        <button className='img11 text-[#E8DED5] text-[3.236409608091024vh] font-teko ml-[3.7760416666666665vw]'>ABOUT</button>
        <button className='img11 text-[#E8DED5] text-[3.236409608091024vh] font-teko ml-[3.7760416666666665vw] '>DOMAINS</button>
        <button className='img11 text-[#E8DED5] text-[3.236409608091024vh] font-teko ml-[3.7760416666666665vw]'>WORK</button>
        <button className='img11 text-[#E8DED5] text-[3.236409608091024vh] font-teko ml-[3.7760416666666665vw]'>FAQS</button>
        <button className='img11 text-[#E8DED5] text-[3.236409608091024vh] font-teko ml-[3.7760416666666665vw]'>BLOG</button>
        <button className='ml-[3.7760416666666665vw] text-[#0a0807] font-semibold font-teko text-[3.236409608091024vh] h-11 bg-[#FF6D00] mt-[2vh] rounded-xl pl-[0.5vw] pr-[0.5vw]'>GET IN TOUCH</button>
    </div>
  ) 
}

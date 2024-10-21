import { useEffect } from 'react';
import facebook from '../assets/images/Vector-2.svg';
import instagram from '../assets/images/Vector-3.svg';
import youtube from '../assets/images/Vector-4.svg';
import github from '../assets/images/Vector-5.svg';
import linkedin from '../assets/images/Vector-6.svg';
import twitter from '../assets/images/Vector-7.svg';
import medium from '../assets/images/Vector-1.svg'

const useDynamicText = (id)=>{
  useEffect(()=>{
    const textElement = document.getElementById(id);

    const handleMouseMove = (e)=>{
      const { offsetX, target } = e;
      const width = target.offsetWidth;

      const percentage = (offsetX/width)*100;
      textElement.style.background = `linear-gradient(to right, #ff6d00 ${percentage}%, #e8ded5 ${percentage}%)`;
      textElement.style.backgroundClip = "text";
      textElement.style.color = "transparent";
    }

    const handleMouseLeave = ()=>{
      textElement.style.background = "none";         
      textElement.style.backgroundClip = "unset";   
      textElement.style.color = "#e8ded5";   
    }

    textElement.addEventListener('mousemove', handleMouseMove);
    textElement.addEventListener('mouseleave', handleMouseLeave);

    return ()=>{
      textElement.removeEventListener('mousemove', handleMouseMove);
      textElement.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [id])
}

export const Footer = () => {
  useDynamicText("firefox")
  return (
      <div className='relative w-full h-full'>
        <div className='flex justify-center space-x-2 py-4 absolute -top-2 max-lg:-top-8 max-sm:-top-10 left-0 right-0 mt-2'>
          <a href='https://www.facebook.com/mfcvit/' target='_blank' className='h-fit'>
            <img src={facebook} className='md:size-8 size-6 transition-all duration-200 hover:scale-150 max-md:hover:scale-125 hover:mx-2 max-md:hover:mx-1' />
          </a>
          <a href='https://www.instagram.com/mfc_vit/' target='_blank' className='h-fit'>
            <img src={instagram} className='md:size-8 size-6 transition-all duration-200 hover:scale-150 max-md:hover:scale-125 hover:mx-2 max-md:hover:mx-1' />
          </a>
          <a href='https://www.youtube.com/c/MozillaFirefoxClubVIT' target='_blank' className='h-fit'>
            <img src={youtube} className='md:size-8 size-6 transition-all duration-200 hover:scale-150 max-md:hover:scale-125 hover:mx-2 max-md:hover:mx-1' />
          </a>
          <a href='https://github.com/MFC-VIT' target='_blank' className='h-fit'>
            <img src={github} className='md:size-8 size-6 transition-all duration-200 hover:scale-150 max-md:hover:scale-125 hover:mx-2 max-md:hover:mx-1' />
          </a>
          <a href='https://www.linkedin.com/company/mfcvit/mycompany/' target='_blank' className='h-fit'>
            <img src={linkedin} className='md:size-8 size-6 transition-all duration-200 hover:scale-150 max-md:hover:scale-125 hover:mx-2 max-md:hover:mx-1' />
          </a>
          <a href='https://x.com/mfc_vit' target='_blank' className='h-fit'>
            <img src={twitter} className='md:size-8 size-6 transition-all duration-200 hover:scale-150 max-md:hover:scale-125 hover:mx-2 max-md:hover:mx-1' />
          </a>
          <a href='https://medium.com/mozilla-firefox-club/tagged/mfcvit' target='_blank' className='h-fit'>
            <img src={medium} className='md:size-8 size-6 transition-all duration-200 hover:scale-150 max-md:hover:scale-125 hover:mx-2 max-md:hover:mx-1' />
          </a>
        </div>
        <div className='text-center text-[22vw] p-0 m-0 leading-none font-apex text-[#E8DED5] cursor-e-resize' id="firefox">
          FIREFOX
        </div>
        <div className='flex justify-around px-4 text-sm text-[#E8DED5] py-2'>
          <p className='max-sm:text-[1vh] text-[1.75vh] md:text-[2vh] hover:underline hover:underline-offset-2'>© 2024 Mozilla Firefox Club. All Rights Reserved</p>
          <p className='max-sm:text-[1vh] text-[1.75vh] md:text-[2vh] cursor-pointer hover:underline hover:underline-offset-2'>Privacy Policy</p>
          <p className='max-sm:text-[1vh] text-[1.75vh] md:text-[2vh] hover:underline hover:underline-offset-2'>Mozilla Foundation</p>
        </div>
      </div>
  );
};

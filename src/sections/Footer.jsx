import React from 'react';
import Vector1 from '../assets/images/Vector-1.svg';
import Vector2 from '../assets/images/Vector-2.svg';
import Vector3 from '../assets/images/Vector-3.svg';
import Vector4 from '../assets/images/Vector-4.svg';
import Vector5 from '../assets/images/Vector-5.svg';
import Vector6 from '../assets/images/Vector-6.svg';
import Vector7 from '../assets/images/Vector-7.svg';

export const Footer = () => {
  return (
    <div className='relative min-h-screen bg-black h-screen'>
       {/*<p className='text-white absolute top-0 left-0 z-40 ml-4'>FORM CODE LIKE THIS </p>*/}
      <div className='absolute bottom-0 w-full bg-black h-screen text-[#E8DED5]'>
        <div className='flex justify-center space-x-2 py-4 mt-[40vh] lg:mt-[0] absolute top-[40vh] left-[50%] transform -translate-x-1/2 z-10 md:mt-[20vh]'>
          <button
            className='w-8 h-8 bg-[url(../assets/images/Vector-2.svg)] bg-no-repeat bg-center bg-contain cursor-pointer'
            aria-label="Vector Image 2"
          />
          <button
            className='w-8 h-8 bg-[url(../assets/images/Vector-3.svg)] bg-no-repeat bg-center bg-contain cursor-pointer'
            aria-label="Vector Image 3"
          />
          <button
            className='w-8 h-8 bg-[url(../assets/images/Vector-4.svg)] bg-no-repeat bg-center bg-contain cursor-pointer'
            aria-label="Vector Image 4"
          />
          <button
            className='w-8 h-8 bg-[url(../assets/images/Vector-5.svg)] bg-no-repeat bg-center bg-contain cursor-pointer'
            aria-label="Vector Image 5"
          />
          <button
            className='w-8 h-8 bg-[url(../assets/images/Vector-6.svg)] bg-no-repeat bg-center bg-contain cursor-pointer'
            aria-label="Vector Image 6"
          />
          <button
            className='w-8 h-8 bg-[url(../assets/images/Vector-7.svg)] bg-no-repeat bg-center bg-contain cursor-pointer'
            aria-label="Vector Image 7"
          />
          <button
            className='w-8 h-8 bg-[url(../assets/images/Vector-1.svg)] bg-no-repeat bg-center bg-contain cursor-pointer'
            aria-label="Vector Image 1"
          />
        </div>
        <div className='text-center mt-[55vh] lg:mt-[0vh] text-[6rem] md:mt-[28vh] md:text-[15rem] lg:text-[21.34rem] font-apex absolute top-[26.2vh] left-[50%] transform -translate-x-1/2 z-40'>
          FIREFOX
        </div>
        <div className='flex absolute bg-black z-30 justify-between mt-[90vh] px-4 py-2 text-sm'>
        <p className='lg:ml-[3vw] lg:text-[2vh] lg:mt-[0vh]  text-[1vh] ml-[0.5vw] mt-[5vh] md:text-[1.75vh] md:ml-[0.5vh] md:mt-[2vh]'>© 2024 Mozilla Firefox Club. All Rights Reserved</p>
        <p className='lg:ml-[30vw] lg:text-[2vh] lg:mt-[0vh] text-[1vh] ml-[3vh] mt-[5vh] md:text-[1.75vh] md:ml-[17.5vw] md:mt-[2vh]'>Privacy Policy</p>
        <p className='lg:ml-[25vw] lg:text-[2vh] lg:mt-[0vh] text-[1vh] ml-[3vh] mt-[5vh] md:text-[1.75vh] md:ml-[19.5vw] md:mt-[2vh]'>Mozilla Foundation</p>
      </div>
    </div>
  </div>
);
};

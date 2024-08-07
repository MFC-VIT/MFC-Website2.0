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
        <div className='flex justify-center space-x-2 py-4 absolute top-[40vh] left-[50%] transform -translate-x-1/2 z-10'>
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
        <div className='text-center text-[24.34rem] font-apex absolute top-[26.2vh] left-[50%] transform -translate-x-1/2 z-20'>
          FIREFOX
        </div>
        <div className='flex absolute bg-black z-30 justify-between mt-[90vh] px-4 py-2 text-sm'>
        
        <p className='ml-[3vw]'>© 2024 Mozilla Firefox Club. All Rights Reserved</p>
        <p className='ml-[30vw]'>Privacy Policy</p>
        <p className='ml-[25vw]'>Mozilla Foundation</p>
      </div>
    </div>
  </div>
);
};

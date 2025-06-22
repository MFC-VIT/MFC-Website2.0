import React from 'react';
import Content1 from "../components/Content1";
import Navbar1 from "../components/Navbar1";

export const Hero = () => {
  return (
    <>
      <div className=" relative  w-full smooth-scroll">
        <div className="w-[90vw] h-[5vh] bg-primary blur-[80px] rounded-b-full absolute left-1/2 -translate-x-1/2 top-0 z-[10]"></div>
        <Navbar1 />
        <Content1 />
      </div>
    </>
  );
};

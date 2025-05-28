import { useEffect } from "react";
import { socials } from "../constants";
import React from 'react';

const useDynamicText = (id) => {
  useEffect(() => {
    const textElement = document.getElementById(id);

    const handleMouseMove = (e) => {
      const { offsetX, target } = e;
      const width = target.offsetWidth;

      const percentage = (offsetX / width) * 100;
      textElement.style.background = `linear-gradient(to right, #ff6d00 ${percentage}%, #e8ded5 ${percentage}%)`;
      textElement.style.backgroundClip = "text";
      textElement.style.color = "transparent";
    };

    const handleMouseLeave = () => {
      textElement.style.background = "none";
      textElement.style.backgroundClip = "unset";
      textElement.style.color = "#e8ded5";
    };

    textElement.addEventListener("mousemove", handleMouseMove);
    textElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      textElement.removeEventListener("mousemove", handleMouseMove);
      textElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [id]);
};

export const Footer = () => {
  useDynamicText("firefox");
  return (
    <div className="relative w-full h-full mt-2 z">
      <div className="flex z-[99999] justify-center space-x-12 py-4 absolute -top-2 max-lg:-top-8 max-sm:-top-10 left-0 right-0 mt-2">
        {socials.map((social, index) => (
          <a href={social.href} target="_blank" className="h-fit" key={index}>
            <img
              src={social.src}
              className="md:size-8 size-6 transition-all duration-200 hover:scale-150 max-md:hover:scale-125 hover:mx-2 max-md:hover:mx-1 active:scale-100"
              alt=""
            />
          </a>
        ))}
      </div>
      <div
        className="text-center relative z-[20] text-[22vw] tracking-wider p-0 m-0 leading-none font-apex text-[#E8DED5]"
        id="firefox"
      >
        FIREFOX
      </div>
      <div className="w-[70vw] h-[80vh] bg-gradient-to-t from-primary/70 to-transparent  blur-[300px]  rounded-t-full absolute bottom-0 left-1/2 -translate-x-1/2 z-[0]"></div>
      <div className="flex justify-around px-4 text-sm text-[#E8DED5] py-2 relative z-20">
        <p className="max-sm:text-[1vh] text-[1.75vh] md:text-[2vh] hover:underline hover:underline-offset-2">
          © 2025 Mozilla Firefox Club. All Rights Reserved
        </p>
        <p className="max-sm:text-[1vh] text-[1.75vh] md:text-[2vh] cursor-pointer hover:underline hover:underline-offset-2">
          Privacy Policy
        </p>
        <p className="max-sm:text-[1vh] text-[1.75vh] md:text-[2vh] hover:underline hover:underline-offset-2">
          Mozilla Foundation
        </p>
      </div>
    </div>
  );
};

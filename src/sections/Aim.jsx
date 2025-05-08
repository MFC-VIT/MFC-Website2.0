import React, { useEffect } from "react";
import "../styles/index.css";

export const Aim = () => {
  // const modal = document.querySelector('modal')
  //   const cardbtn = document.querySelector('card__product')

  //   const modalcard = document.querySelector("modal__card")

  // let activemodal = (modalclick) => {
  //   modal[modalclick].classList.add('active-modal')

  // }

  // cardbtn.forEach((cardbtn, i ) => {
  //   cardbtn.addEventListener('click', ()=>{
  //     activemodal(i)
  //   })
  // })

  return (
    <>
      <div className="text-[#E8DED5]">
        <div className="text-center py-16">
          <h1 className="font-apex text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal py-12">
            OUR AIM
          </h1>
        </div>

        <div className="flex flex-col md:flex-row bg-[#121110]">
          <div className="border border-[#ff6d00] flex-1 box p-4 md:p-6 m-0 ml-5px">
            <div className="px-4 hover:shadow-lg hover:shadow-[#ff6d00] transition-shadow duration-300" >
              <div className="flex items-center">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#ff6d00] flex-shrink-0">
                  01
                </h1>
                <div className="ml-4">
                  <h2 className="text-lg sm:text-xl font-bold text-[#ff6d00] mt-4">
                    Open-source Advocacy
                  </h2>
                  <div className="relative mt-1">
                    <hr className="border border-[#ff6d00] absolute w-full" />
                  </div>
                </div>
              </div>
              <p
                className="text-white mt-4"
                style={{
                  fontFamily: "CA YoshiroTRIAL",
                  lineHeight: "45px",
                  fontSize: "20px",
                  
                }}
              >
                Empowering the VIT community with the knowledge and tools to
                contribute to the world of open-source technology and software
                development.
              </p>
              <br></br>
              <br></br>
            </div>
            
          
            <div className="px-4 hover:shadow-lg hover:shadow-[#ff6d00] transition-shadow duration-300">
              <div className="flex items-center ">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#ff6d00] flex-shrink-0">
                  02
                </h1>
                <div className="ml-4">
                  <h2 className="text-lg sm:text-xl font-bold text-[#ff6d00] mt-4">
                    WebDev Mastery
                  </h2>
                  <div className="relative mt-1">
                    <hr className="border border-[#ff6d00] absolute w-full" />
                  </div>
                </div>
              </div>
              <p
                className="text-white mt-4"
                style={{
                  fontFamily: "CA YoshiroTRIAL",
                  lineHeight: "45px",
                  fontSize: "20px",
                }}
              >
                Equipping students with practical experience and expertise in
                web development to thrive in the digital age. Our programs focus
                on real-world projects and industry best practices.
              </p>
            </div>
          </div>

          <div className="border border-[#ff6d00] flex-1 box p-4 md:p-6 m-0 md:ml-0 mr-5px">
            <div className="px-4 hover:shadow-lg hover:shadow-[#ff6d00] transition-shadow duration-300">
              <div className="flex items-center">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#ff6d00] flex-shrink-0">
                  03
                </h1>
                <div className="ml-4">
                  <h2 className="text-lg sm:text-xl font-bold text-[#ff6d00] mt-4">
                    Collaborative Learning Hub
                  </h2>
                  <div className="relative mt-1">
                    <hr className="border border-[#ff6d00] absolute w-full" />
                  </div>
                </div>
              </div>
              <p
                className="text-white mt-4"
                style={{
                  fontFamily: "CA YoshiroTRIAL",
                  lineHeight: "45px",
                  fontSize: "20px",
                }}
              >
                Cultivating a culture of knowledge-sharing and teamwork among
                members to drive innovation. We encourage collaboration and
                support each other in exploring new ideas and technologies.
              </p>
            </div>

            <div className="px-4 hover:shadow-lg hover:shadow-[#ff6d00] transition-shadow duration-300">
              <div className="flex items-center">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#ff6d00] flex-shrink-0 font-Bebas Neue">
                  04
                </h1>
                <div className="ml-4">
                  <h2 className="text-lg sm:text-xl font-bold text-[#ff6d00] mt-4">
                    Tech Leadership
                  </h2>
                  <div className="relative mt-1">
                    <hr className="border border-[#ff6d00] absolute w-full" />
                  </div>
                </div>
              </div>
              <p
                className="text-white mt-4"
                style={{
                  fontFamily: "CA YoshiroTRIAL",
                  lineHeight: "45px",
                  fontSize: "20px",
                }}
              >
                Guiding our members to become future technology leaders by
                honing their skills, fostering creativity, and instilling a
                passion for innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

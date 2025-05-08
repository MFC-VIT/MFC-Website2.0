import images from "../assets/images/MEET.webp";
import React from 'react';

const Toplayout = () => {
  return (
    <>
      <div className="text-[#E8DED5]">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center mt-5 md:mt-10 lg:mt-16">
            <img
              className="max-w-[250px] h-[300px] object-cover shadow-md filter grayscale(50%) rounded-lg"
              src={images}
              alt="Team Member Image"
            />
          </div>

          <div className="flex flex-col items-center mt-3 md:mt-5 lg:mt-8">
            <h1 className="font-apex text-xl md:text-2xl lg:text-3xl">
              MR. JAYAKUMAR S
            </h1>
            <h1 className="text-orange-500 font-CAYoshiroTRIAL text-lg md:text-xl lg:text-2xl">
              Faculty Coordinator
            </h1>
          </div>

          <div className="mt-3 md:mt-4 lg:mt-5 text-center font-CAYoshiroTRIAL text-sm md:text-base lg:text-lg">
            <p>
              Jayakumar Sadhasivam is an Assistant Professor Senior Grade 1 at
              Vellore Institute of Technology (VIT) in <br /> the School of
              Computer Science and Engineering (SCOPE). Jayakumar's areas of
              expertise include Open <br /> Source Programming, Network
              Security, Storage Technologies, and Machine Learning. His research{" "}
              <br /> interests are in the use of technology in education and
              developing open-source software that takes into <br /> consideration
              the unique needs of learners. <br />
            </p>
          </div>
          <h1 className="text-center font-apex font-normal leading-12 md:text-5xl lg:text-6xl">
            MEET <br /> OUR TEAM
          </h1>

        </div>
      </div>
    </>
  );
};

export default Toplayout;

import images from "../assets/images/MEET.webp";

const Toplayout = () => {
  return (
    <>
      <div className="text-[#E8DED5]">
        {/* for the top part */}
        <div className="flex flex-col items-center">
          <h1 className="text-center font-apex font-normal leading-12 md:text-6xl lg:text-8xl">
            MEET <br></br> OUR TEAM
          </h1>

          <div className="flex justify-center items-center mt-10 md:mt-20 lg:mt-32">
            <img
              className="max-w-full h-auto object-cover rounded-md shadow-md filter grayscale(50%)"
              src={images}
              alt="Team Member Image"
            />
          </div>

          <div className="flex flex-col items-center mt-5 md:mt-10 lg:mt-16">
            <h1 className="font-apex text-2xl md:text-3xl lg:text-4xl">
              MR. JAYAKUMAR S
            </h1>
            <h1 className="text-orange-500 font-CAYoshiroTRIAL text-xl md:text-2xl lg:text-3xl">
              Faculty Coordinator
            </h1>
          </div>

          <div className="mt-5 md:mt-10 lg:mt-16 text-center font-CAYoshiroTRIAL text-sm md:text-base lg:text-lg">
            <p>
              Jayakumar Sadhasivam is an Assistant Professor Senior Grade 1 at
              Vellore Institute of Technology (VIT) in <br></br>the School of
              Computer Science and Engineering (SCOPE). Jayakumar's areas of
              expertise include Open <br></br> Source Programming, Network
              Security, Storage Technologies, and Machine Learning. His research{" "}
              <br></br> interests are in the use of technology in education and
              developing open-source software that takes into <br></br>{" "}
              <div className="text-center">
                consideration the unique needs of learners
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Toplayout;

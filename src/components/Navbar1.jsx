import final from "../assets/images/finallogo2.svg";

export default function Navbar1() {
  return (
    <div className="flex  w-[65vw] md:w-[45vw] lg:w-[50vw] h-[10vh] lg:h-[10vh] rounded-none absolute mt-[5vh] justify-around left-[50%] transform -translate-x-1/2 items-center px-6 z-20">
      <img
        className="cursor-pointer lg:h-[8vh] lg:w-[2.5vw] md:h-[8vh] md:w-[2.5vw] h-[4vh] mt-[0.5vh] lg:mt-[0.5vh] lg:mr-[1vw]"
        src={final}
      />
      <div className="nav-items w-full flex items-center justify-between">
        <button className="img11 text-[#E8DED5] text-lg md:text-xl lg:text-2xl w-full  font-teko leading-[6vh]">
          ABOUT
        </button>
        <button className="img11 text-[#E8DED5] text-lg md:text-xl lg:text-2xl w-full  font-teko leading-[6vh]">
          DOMAINS
        </button>
        <button className="img11 text-[#E8DED5] text-lg md:text-xl lg:text-2xl w-full  font-teko leading-[6vh]">
          WORK
        </button>
        <button className="img11 text-[#E8DED5] text-lg md:text-xl lg:text-2xl w-full  font-teko leading-[6vh]">
          FAQS
        </button>
        <button className="img11 text-[#E8DED5] text-lg md:text-xl lg:text-2xl w-full  font-teko leading-[6vh] mr-[2vw]">
          BLOG
        </button>
      </div>
      <button className="text-[#0a0807] font-semibold font-teko py-2 bg-[#FF6D00] rounded-sm text-lg lg:text-xl text-nowrap tracking-wide px-8">
        GET IN TOUCH
      </button>
    </div>
  );
}

import Content1 from "../components/Content1";
// import Landing3D from "../components/Landing3D";
import Navbar1 from "../components/Navbar1";

export const Hero = () => {
  return (
    <>
      <div className=" relative  w-full ">
        <div className="w-[90vw] h-[5vh] bg-primary blur-[80px] rounded-b-full absolute left-1/2 -translate-x-1/2 top-0 z-[10]"></div>
        {/* <span className=" w-full absolute z-0 top-16">
          <Landing3D />
        </span> */}
        <Navbar1 />
        <Content1 />
      </div>
    </>
  );
};

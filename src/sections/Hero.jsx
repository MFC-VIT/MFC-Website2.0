import Content1 from "../components/Content1";
import Landing3D from "../components/Landing3D";
import Navbar1 from "../components/Navbar1";

export const Hero = () => {
  return (
    <>
      <div className=" relative  w-full h-screen">
        <span className=" w-full absolute z-0 ">
          <Landing3D />
        </span>
        <span>
          <Navbar1 />
          <Content1 />
        </span>
      </div>
    </>
  );
};

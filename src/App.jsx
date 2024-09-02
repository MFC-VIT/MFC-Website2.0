import images from "./constants/images";
import { Form } from "./sections/Form";
import Projects from "./sections/Projects";
import { Hero } from "./sections/Hero";
import { Footer } from "./sections/Footer";


function App() {
  return (
    <>
      <Hero/>
    <Projects/>
      <Blogs/>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-2">
        <img src={images.reactLogo} alt="" />
        <h1 className=" font-apex text-4xl text-primary">DEV MODE</h1>
        <p className="text-main font-yoshiro">Sample Test</p>
      </div>
    <Form />
      <Footer/>
    </>
}

export default App;
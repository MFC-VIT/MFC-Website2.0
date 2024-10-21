import images from "./constants/images";
import { Form } from "./sections/Form";
import Projects from "./sections/Projects";
import { Hero } from "./sections/Hero";
import { Footer } from "./sections/Footer";
import Blogs from "./sections/Blogs";
function App() {
  return (
    <div className="bg-dark">
      <Hero />
      <Projects />
      <Blogs />
      <Form />
      <Footer />
    </div>
  );
}

export default App;

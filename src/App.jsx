// import images from "./constants/images";
import { Form } from "./sections/Form";
import Projects from "./sections/Projects";
import { Hero } from "./sections/Hero";
import { Footer } from "./sections/Footer";
import BlogsSection from "./sections/Blogs";
import Events from "./sections/Event";
import EventsModal from "./sections/EventsModal";
import Domains from "./sections/Domains";
import Team from "./sections/Team";
import Newsletters from "./sections/NewsLetter";
import AboutUs from "./sections/AboutUs";
// import Sponsor from "./sections/Sponsor";
function App() {
  return (
    <div className="bg-dark flex flex-col gap-28">
      <Hero />
      <AboutUs />
      {/* <Domains /> */}
      <Projects />
      <Events />
      <BlogsSection />
      <Newsletters />
      {/* <Sponsor /> */}
      <Team />
      <Form />
      <Footer />
      <EventsModal />
    </div>
  );
}

export default App;

// import images from "./constants/images";
import { Form } from "./sections/Form";
import Projects from "./sections/Projects";
import { Hero } from "./sections/Hero";
import { Footer } from "./sections/Footer";
import Blogs from "./sections/Blogs";
import Events from "./sections/Event";
import EventsModal from "./sections/EventsModal";
import Domains from "./sections/Domains";

function App() {
  return (
    <div className="bg-dark flex flex-col gap-5">
      <Hero />
      <Domains />
      <Projects />
      <Events />
      <Blogs />
      <Form />
      <Footer />
      <EventsModal />
    </div>
  );
}

export default App;

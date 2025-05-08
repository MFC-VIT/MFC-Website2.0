import "../styles/About.css";
import React from 'react';
import AboutUsButton from "../components/AboutUsButton"

function About({ onAboutUsClick, buttonRef }) {
  return (
    <div className="section">
      <h2 className='heading'>WHAT WE DO</h2>
      <hr className="divider" />
      <p className="text">
        At the Mozilla Firefox Club, we empower members to explore the vast possibilities of the digital world. Join
        us to fuel your curiosity, drive innovation, and create a more open and inclusive internet. Together, we
        blaze new trails in technology and make a positive impact on the web.
      </p>
      <AboutUsButton onClick={onAboutUsClick} buttonRef={buttonRef} />
    </div>
  )
}

export default About;


//App.jsx
// import React, { useState, useRef, useEffect } from 'react';
// import "./styles/App.css";
// import About from "./sections/About.jsx";
// import AboutUs from "./sections/AboutUs.jsx";
// import AboutToHomeTransition from "./components/AboutToHomeTransition.jsx";
// import HomeToAboutTransition from "./components/HomeToAboutTransition.jsx";
// function App() {
//   export default App;
// const [showAboutUs, setShowAboutUs] = useState(false);
//     const homePageRef = useRef(null);
//     const aboutUsPageRef = useRef(null);
//     const buttonRef = useRef(null);
//     useEffect(() => {
//       showAboutUs
//         ? HomeToAboutTransition(homePageRef, aboutUsPageRef)
//         : AboutToHomeTransition(homePageRef, aboutUsPageRef, buttonRef);
//     }, [showAboutUs]);
//     return (
//       <main className="min-h-screen h-fit w-full bg-dark">
//         <div className="app-container">
//           <div ref={homePageRef} className={`page ${showAboutUs && 'hide'}`}>
//             <About onAboutUsClick={() => setShowAboutUs(true)} buttonRef={buttonRef} />
//           </div>
//           <div ref={aboutUsPageRef} className={`page ${!showAboutUs && 'hide'}`}>
//             <AboutUs onBackClick={() => setShowAboutUs(false)} />
//           </div>
//         </div>
//       </main>
//     );
// }
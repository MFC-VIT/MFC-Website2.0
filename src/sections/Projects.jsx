import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Fox from "../assets/images/fox.png";


const Projects = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const projectRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    projects.forEach((_, index) => {
      const contentRef = projectRefs.current[index]?.querySelector(".content");
      if (!contentRef) return;

      if (hoveredProjectId === index + 1) {
        gsap.to(contentRef, {
          y: 20,
          color: "#ff6d00",
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(imageRefs.current[index], {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          onStart: () => {
            imageRefs.current[index].style.display = "block";
          },
        });
      } else {
        gsap.to(contentRef, {
          y: 0,
          color: "#e8ded5",
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(imageRefs.current[index], {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            imageRefs.current[index].style.display = "none";
          },
        });
      }
      
      
    });
  }, [hoveredProjectId]);

  return (
    <div id = "projects" className="min-h-screen h-fit w-full flex flex-col pt-32 pb-28 relative">
      <div className="flex items-center justify-center flex-col text-main font-apex w-full sm:tracking-wider sm:text-3xl mb-12">
        <p className="text-5xl text-center">FEATURED PROJECTS</p>
        <p className="text-5xl">AND RESEARCH</p>
      </div>

      <div className="bg-opacity-[40%] w-[20vw] aspect-square bg-orange-600 blur-[400px] rounded-full absolute top-1/2 -translate-y-1/2 left-0 "></div>

      <div className="w-full flex items-start justify-center flex-grow gap-6 px-4 md:px-10">
        {/* Left Projects Section */}
        <div className="sm:w-full md:w-[70%]">
          {projects.map((item, index) => (
            <div
              key={item.id}
              className="w-full border-y-[2px] border-secondary relative"
              onMouseEnter={() => setHoveredProjectId(item.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              ref={(el) => (projectRefs.current[index] = el)}
            >
              <div className="flex items-center justify-between">
                <div className="w-full">
                  <a
                    href={item.projectLink}
                    className="content flex items-center py-[22px] sm:px-7 overflow-x-hidden gap-2 bg-clip-text text-transparent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="font-yoshiro md:tracking-wide overflow-x-hidden">
                      {`{${item.projectNumber}}`}
                    </p>
                    <p className="font-apex md:text-5xl sm:text-5xl text-3xl tracking-wider md:ml-4">
                      {item.projectName}
                    </p>
                  </a>
                  <div
                    className="image-container transition-all duration-300 ease-in-out"
                    style={{
                      opacity: 0,
                      transform: "translateY(-10px)",
                    }}
                    ref={(el) => (imageRefs.current[index] = el)}
                  >
                    <img
                      src={item.projectImage}
                      alt={item.projectName}
                      className="mt-4 w-full max-w-md object-contain rounded-md shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex pt-16 opacity-50 w-[30%] h-full justify-center items-center">
          <img
            src={Fox}
            alt="Right Section Visual"
            className="w-[80%] h-auto max-h-[600px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

const projects = [
  {
    id: 1,
    projectNumber: "1",
    projectName: "Roommate-Dhoondo",
    projectLink: "https://roommate-dhoondo.mfcvit.in",
    projectImage:
      "https://res.cloudinary.com/abhi-server/image/upload/v1744722884/Screenshot_2025-04-15_184405_bbuq2r.png",
  },
  {
    id: 2,
    projectNumber: "2",
    projectName: "Enrollment Portal",
    projectLink: "https://enrollments.mfcvit.in/",
    projectImage:
      "https://res.cloudinary.com/abhi-server/image/upload/v1744723075/Screenshot_2025-04-15_184737_htgyro.png",
  },
  {
    id: 3,
    projectNumber: "3",
    projectName: "Tech Wars",
    projectLink: "https://www.mozillavit.in/",
    projectImage:
      "https://images.unsplash.com/photo-1541356665065-22676f35dd40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    projectNumber: "4",
    projectName: "PARALLEX VIEW",
    projectLink: "https://www.mozillavit.in/",
    projectImage:
      "https://images.unsplash.com/photo-1481966115753-963394378f23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFic3RyYWN0fGVufDB8fDB8fHww",
  },
  {
    id: 5,
    projectNumber: "5",
    projectName: "VISION OF FUTURE",
    projectLink: "https://www.mozillavit.in/",
    projectImage:
      "https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFic3RyYWN0fGVufDB8fDB8fHww",
  },
];
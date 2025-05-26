import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import FoxFallbackImage from "../assets/images/fox.png";
const Projects = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  const projectListRefs = useRef([]);
  projectListRefs.current = [];

  const previewImageRef = useRef(null);
  const previewTitleRef = useRef(null);
  const previewDescRef = useRef(null);
  const previewLinkRef = useRef(null);
  const previewTagsRef = useRef(null);
  const previewNumberRef = useRef(null);
  const previewPaneRef = useRef(null);

  const foxImageRef = useRef(null);
  const foxTextLine1Ref = useRef(null);
  const foxTextLine2Ref = useRef(null);

  const isInitialLoadRef = useRef(true);

  const projectDetailElementRefs = React.useMemo(
    () => [
      previewImageRef,
      previewNumberRef,
      previewTitleRef,
      previewDescRef,
      previewTagsRef,
      previewLinkRef,
    ],
    []
  );
  const foxFallbackElementRefs = React.useMemo(
    () => [foxImageRef, foxTextLine1Ref, foxTextLine2Ref],
    []
  );

  const getNonNullRefs = (refsArray) =>
    refsArray.map((ref) => ref.current).filter(Boolean);

  const addToRefs = (el) => {
    if (el && !projectListRefs.current.includes(el)) {
      projectListRefs.current.push(el);
    }
  };

  useEffect(() => {
    projectListRefs.current.forEach((el) => {
      const projectId = parseInt(el.dataset.projectId, 10);
      const content = el.querySelector(".project-content");
      const number = el.querySelector(".project-number");
      const name = el.querySelector(".project-name");

      if (!content || !number || !name) return;

      const isSelected = selectedProjectId === projectId;
      const isHovered = hoveredProjectId === projectId;

      gsap.killTweensOf([content, number, name]);

      if (isSelected || isHovered) {
        gsap.to(content, { x: 20, duration: 0.3, ease: "power3.out" });
        gsap.to(number, {
          color: "#ff6d00",
          duration: 0.3,
          ease: "power3.out",
        }); // brand-orange
        gsap.to(name, {
          color: isSelected ? "#ff9a00" : "#ffeadb",
          duration: 0.3,
          ease: "power3.out",
        }); // brand-orange-light
        el.classList.add("is-active-item");
      } else {
        gsap.to(content, { x: 0, duration: 0.3, ease: "power3.out" });
        gsap.to(number, {
          color: "#a39e9a",
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to(name, { color: "#e8ded5", duration: 0.3, ease: "power3.out" });
        el.classList.remove("is-active-item");
      }
    });
  }, [hoveredProjectId, selectedProjectId, projects]);

  useEffect(() => {
    let newTargetProjectObj = null;
    if (selectedProjectId) {
      newTargetProjectObj = projects.find((p) => p.id === selectedProjectId);
    } else if (hoveredProjectId) {
      newTargetProjectObj = projects.find((p) => p.id === hoveredProjectId);
    }

    const currentProjectDetails = getNonNullRefs(projectDetailElementRefs);
    const currentFoxFallbacks = getNonNullRefs(foxFallbackElementRefs);

    if (activeProject === newTargetProjectObj) return;

    const outComplete = () => setActiveProject(newTargetProjectObj);

    gsap.killTweensOf([...currentProjectDetails, ...currentFoxFallbacks]);

    if (activeProject) {
      if (currentProjectDetails.length > 0) {
        gsap.to(currentProjectDetails, {
          autoAlpha: 0,
          y: 20,
          scale: 0.98,
          duration: 0.25,
          stagger: 0.03,
          ease: "power2.in",
          onComplete: outComplete,
        });
      } else {
        outComplete();
      }
    } else {
      if (newTargetProjectObj && currentFoxFallbacks.length > 0) {
        gsap.to(currentFoxFallbacks, {
          autoAlpha: 0,
          y: 20,
          duration: 0.25,
          ease: "power2.in",
          onComplete: outComplete,
        });
      } else {
        outComplete();
      }
    }
  }, [hoveredProjectId, selectedProjectId]);

  useEffect(() => {
    const currentProjectDetails = getNonNullRefs(projectDetailElementRefs);
    const currentFoxFallbacks = getNonNullRefs(foxFallbackElementRefs);

    gsap.killTweensOf([...currentProjectDetails, ...currentFoxFallbacks]);

    if (activeProject) {
      gsap.set(currentFoxFallbacks, { autoAlpha: 0 });

      if (previewNumberRef.current)
        previewNumberRef.current.textContent = activeProject.projectNumber;
      if (previewTitleRef.current)
        previewTitleRef.current.textContent = activeProject.projectName;
      if (previewDescRef.current)
        previewDescRef.current.textContent = activeProject.description;

      if (previewImageRef.current && activeProject.projectImage) {
        const img = new Image();
        img.src = activeProject.projectImage;
        img.onload = () => {
          gsap.set(previewImageRef.current, {
            backgroundImage: `url(${activeProject.projectImage})`,
          });
          if (currentProjectDetails.length > 0) {
            gsap.fromTo(
              currentProjectDetails,
              { autoAlpha: 0, y: -20, scale: 1.02 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                stagger: 0.05,
                ease: "power3.out",
                delay: 0.05,
              }
            );
          }
        };
        img.onerror = () => {
          gsap.set(previewImageRef.current, {
            backgroundImage: `url(${FoxFallbackImage})`,
          });
          const otherDetails = currentProjectDetails.filter(
            (el) => el !== previewImageRef.current
          );
          if (otherDetails.length > 0) {
            gsap.fromTo(
              otherDetails,
              { autoAlpha: 0, y: -20, scale: 1.02 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                stagger: 0.05,
                ease: "power3.out",
                delay: 0.05,
              }
            );
          }
        };
      } else if (currentProjectDetails.length > 0) {
        gsap.fromTo(
          currentProjectDetails,
          { autoAlpha: 0, y: -20, scale: 1.02 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: "power3.out",
            delay: 0.05,
          }
        );
      }
    } else {
      gsap.set(currentProjectDetails, { autoAlpha: 0 });
      if (currentFoxFallbacks.length > 0) {
        gsap.fromTo(
          currentFoxFallbacks,
          { autoAlpha: 0, y: -20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power3.out",
            delay: isInitialLoadRef.current ? 0.4 : 0.1,
            onComplete: () => {
              isInitialLoadRef.current = false;
            },
          }
        );
      }
    }
  }, [activeProject, projectDetailElementRefs, foxFallbackElementRefs]);

  useEffect(() => {
    const allElements = [
      ...getNonNullRefs(projectDetailElementRefs),
      ...getNonNullRefs(foxFallbackElementRefs),
    ];
    gsap.set(allElements, { autoAlpha: 0 });
    if (!selectedProjectId && !hoveredProjectId) {
      setActiveProject(null);
    }
  }, []);

  const handleProjectClick = (e, projectId) => {
    e.preventDefault();
    if (selectedProjectId === projectId) {
      setSelectedProjectId(null);
    } else {
      setSelectedProjectId(projectId);
    }
  };

  const handlePreviewPaneClick = (e) => {
    if (e.target === previewPaneRef.current && selectedProjectId !== null) {
      setSelectedProjectId(null);
    }
  };

  return (
    <div
      id="projects"
      className="min-h-screen h-fit w-full flex flex-col pt-24 md:pt-32 pb-20 md:pb-28 relative bg-black text-main"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <p className="font-apex text-4xl sm:text-5xl md:text-6xl tracking-wider text-main uppercase">
            Featured Projects
          </p>
          <p className="font-yoshiro text-xl sm:text-2xl text-primary/80 mt-2">
            A Glimpse into Our Digital Craftsmanship
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <div className="w-full md:w-[45%] lg:w-[40%] space-y-0">
            {projects.map((item) => (
              <div
                key={item.id}
                data-project-id={item.id}
                className={`project-item-wrapper border-b border-neutral-700 
                            transition-all duration-300 ease-in-out relative group
                            ${
                              selectedProjectId === item.id
                                ? "bg-neutral-800/70 border-l-4 border-orange-500"
                                : "hover:bg-neutral-800/50"
                            }`}
                onMouseEnter={() => setHoveredProjectId(item.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                ref={addToRefs}
              >
                <div
                  className={`absolute top-0 left-0 h-full w-1 
                                bg-gradient-to-b from-orange-500/0 via-orange-500/60 to-orange-500/0
                                transition-opacity duration-300 opacity-0 
                                group-[.is-active-item]:opacity-100 
                                ${
                                  selectedProjectId === item.id
                                    ? "!opacity-100 !via-orange-500"
                                    : ""
                                }`}
                ></div>

                <a
                  href={item.projectLink}
                  onClick={(e) => handleProjectClick(e, item.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 md:p-6 project-content"
                >
                  <div className="flex items-start gap-4">
                    <p className="project-number font-yoshiro text-3xl md:text-4xl text-secondary/60 pt-1">
                      {item.projectNumber}
                    </p>
                    <div className="flex-grow">
                      <h3 className="project-name font-apex text-2xl sm:text-3xl md:text-4xl tracking-wide text-main">
                        {item.projectName}
                      </h3>
                      <p className="text-sm font-light text-primary/60 mt-1 md:mt-2">
                        {item.tagline}
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-secondary/50 self-center transition-transform duration-300 group-hover:translate-x-1 group-[.is-active-item]:text-orange-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="w-full md:w-[55%] lg:w-[60%] md:sticky md:top-24 h-[60vh] md:h-auto md:max-h-[70vh] mt-8 md:mt-0">
            <div
              ref={previewPaneRef}
              onClick={handlePreviewPaneClick}
              className="bg-neutral-900 rounded-xl shadow-2xl h-full flex flex-col 
                         p-6 md:p-8 relative overflow-hidden border border-neutral-700/50
                         transition-all duration-300 ease-in-out
                         hover:border-neutral-600"
            >
              <div
                ref={previewImageRef}
                className="w-full h-48 sm:h-64 md:h-1/2 lg:h-[55%] bg-cover bg-center rounded-lg mb-4 md:mb-6 shadow-lg border border-neutral-700"
              ></div>
              <div className="flex-grow flex flex-col">
                <p
                  ref={previewNumberRef}
                  className="font-yoshiro text-5xl md:text-7xl text-orange-500/40 absolute top-5 right-7 md:top-7 md:right-9"
                ></p>
                <h2
                  ref={previewTitleRef}
                  className="font-apex text-2xl md:text-3xl lg:text-4xl text-main mb-2"
                ></h2>
                <p
                  ref={previewDescRef}
                  className="text-primary/80 text-sm md:text-base leading-relaxed mb-3 md:mb-4 flex-grow"
                ></p>
                <div ref={previewTagsRef} className="mb-4 md:mb-6">
                  {activeProject?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-orange-600/20 text-orange-400 text-xs font-semibold mr-2 mb-2 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {activeProject && (
                  <a
                    ref={previewLinkRef}
                    href={activeProject.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-apex text-orange-500 hover:text-orange-400 transition-colors duration-300 group self-start text-base"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                )}
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <img
                  ref={foxImageRef}
                  src={FoxFallbackImage}
                  alt="Project Preview Area"
                  className="w-1/2 max-w-[200px] md:max-w-[250px] h-auto mb-6 opacity-75"
                />
                <p
                  ref={foxTextLine1Ref}
                  className="font-apex text-2xl text-secondary/60"
                >
                  Hover or Click a project
                </p>
                <p ref={foxTextLine2Ref} className="text-secondary/50">
                  to see details here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

const projects = [
  {
    id: 1,
    projectNumber: "01",
    projectName: "Roommate-Dhoondo",
    tagline: "Seamlessly find your next roommate.",
    description:
      "A MERN stack platform connecting individuals seeking compatible roommates, featuring advanced search, profiles, and messaging.",
    projectLink: "https://roommate-dhoondo.mfcvit.in",
    projectImage:
      "https://res.cloudinary.com/abhi-server/image/upload/v1744722884/Screenshot_2025-04-15_184405_bbuq2r.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 2,
    projectNumber: "02",
    projectName: "Enrollment Portal",
    tagline: "Streamlined student enrollment system.",
    description:
      "Digitizes MFC VIT's student enrollment for clubs, managing applications and communication efficiently.",
    projectLink: "https://enrollments.mfcvit.in/",
    projectImage:
      "https://res.cloudinary.com/abhi-server/image/upload/v1744723075/Screenshot_2025-04-15_184737_htgyro.png",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "Node.js", "Express"],
  },
  {
    id: 3,
    projectNumber: "03",
    projectName: "Tech Wars",
    tagline: "Engaging platform for competitive tech events.",
    description:
      "Mozilla VIT's flagship event website with schedules, registration, and real-time updates. Designed for high traffic.",
    projectLink: "https://github.com/MFC-VIT/TechWars-Frontend.git",
    projectImage:
      "https://res.cloudinary.com/abhi-server/image/upload/v1747631791/Screenshot_2025-05-19_104614_vhm9ye.png",
    tags: ["React", "Gatsby", "CMS", "Events", "MongoDB", "Express"],
  },
  {
    id: 4,
    projectNumber: "04",
    projectName: "SOTY",
    tagline: "Immersive scrolling experiences.",
    description:
      "An exploration of parallax scrolling for dynamic web narratives, showcasing advanced CSS and JavaScript for visual storytelling.",
    projectLink: "https://github.com/SuvidhJ/SOTY",
    projectImage:
      "https://res.cloudinary.com/abhi-server/image/upload/v1747631030/Screenshot_2025-05-19_103257_yz4waw.png",
    tags: ["React", "GSAP", "UI/UX", "Web Design", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 5,
    projectNumber: "05",
    projectName: "CODE TO SURVIVE",
    tagline: "Conceptualizing tomorrow's digital interfaces.",
    description:
      "A design-driven project on futuristic UI/UX concepts, featuring interactive prototypes that push interface boundaries.",
    projectLink: "https://github.com/MFC-VIT/CTS-Frontend.git",
    projectImage:
      "https://res.cloudinary.com/abhi-server/image/upload/v1747631613/Screenshot_2025-05-19_104318_ghngz0.png",
    tags: ["UI Design", "UX Research", "Prototyping", "Figma", "Next.js", "Golang", "MongoDB"],
  },
];

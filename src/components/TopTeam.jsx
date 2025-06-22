// import images from "../assets/images/MEET.webp";
// import React from 'react';

// const Toplayout = () => {
//   return (
//     <>
//       <div className="text-[#E8DED5]">
//         <div className="flex flex-col items-center">
//           <div className="flex justify-center items-center mt-5 md:mt-10 lg:mt-16">
//             <img
//               className="max-w-[250px] h-[300px] object-cover shadow-md filter grayscale(50%) rounded-lg"
//               src={"/images/board/25-26/jayakumarSir.webp"}
//               alt="Team Member Image"
//             />
//           </div>

//           <div className="flex flex-col items-center mt-3 md:mt-5 lg:mt-8">
//             <h1 className="font-apex text-xl md:text-2xl lg:text-3xl">
//               MR. JAYAKUMAR S
//             </h1>
//             <h1 className="text-orange-500 font-CAYoshiroTRIAL text-lg md:text-xl lg:text-2xl">
//               Faculty Coordinator
//             </h1>
//               <div className="social-links">
//                 <a
//                   href={"https://www.linkedin.com/in/iamjayakumars/"}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fab fa-linkedin-in text-orange-500"></i>
//                 </a>
//                 <a
//                   href={"https://github.com/iamjayakumars"}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fab fa-github text-orange-500"></i>
//                 </a>
//                 <a
//                   href={"http://www.jayakumars.in/"}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fa-solid fa-globe text-orange-500"></i>
//                 </a>
//               </div>
//           </div>

//           <div className="mt-3 md:mt-4 lg:mt-5 text-justify md:text-center font-CAYoshiroTRIAL text-sm md:text-base lg:text-lg">
//           <p>
//             Jayakumar Sadhasivam is an Associate Professor Grade 1 at
//             Vellore Institute of Technology (VIT) in <br /> the School of
//             Computer Science and Engineering (SCOPE). Jayakumar's areas of
//             expertise include Open <br /> Source Programming, Network
//             Security, Storage Technologies, and Machine Learning. His research{" "}
//             <br /> interests are in the use of technology in education and
//             developing open-source software that takes into <br /> consideration
//             the unique needs of learners. <br />
//           </p>
//         </div>

//           <h1 className="text-5xl text-center font-apex font-normal leading-12 md:text-5xl lg:text-6xl">
//             MEET <br /> OUR TEAM
//           </h1>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Toplayout;

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const Toplayout = () => {
  const [activeSection, setActiveSection] = useState('bio');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const colors = {
    primary: '#FF9500', 
    secondary: '#FFB366', 
    accent: '#FFD23F', 
    darkCard: '#0A0A0A', 
    cardBorder: '#1A1A1A',
    text: '#E8E8E8',
    mutedText: '#A0A0A0', 
    background: '#000000',
    gradient: 'linear-gradient(135deg, #FF9500 0%, #FF6B35 100%)',
    darkGradient: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)',
    glowOrange: 'rgba(255, 149, 0, 0.5)',
    glowYellow: 'rgba(255, 210, 63, 0.3)'
  };

  const professionalInfo = {
    bio: {
      title: "Biography",
      icon: "fas fa-user-tie",
      content: "Jayakumar Sadhasivam serves as an Associate Professor Grade 1 at the prestigious Vellore Institute of Technology (VIT), where he contributes to the School of Computer Science and Engineering (SCOPE). With years of academic excellence and industry experience, he has established himself as a respected educator and researcher in the field of computer science."
    },
    expertise: {
      title: "Areas of Expertise",
      icon: "fas fa-graduation-cap",
      content: "Professor Jayakumar specializes in Open Source Programming, Network Security, Storage Technologies, and Machine Learning. His comprehensive knowledge in these domains enables him to guide students through complex technological concepts while fostering innovation and critical thinking."
    },
    research: {
      title: "Research Interests",
      icon: "fas fa-microscope",
      content: "His research focuses on the intersection of technology and education, with particular emphasis on developing open-source software solutions that address the unique needs of learners. Professor Jayakumar is committed to making technology more accessible and effective in educational contexts."
    },
    contribution: {
      title: "Academic Contribution",
      icon: "fas fa-award",
      content: "As Faculty Coordinator, Professor Jayakumar plays a pivotal role in shaping the academic journey of countless students. His dedication to excellence in teaching and mentorship has made a lasting impact on the institution and its community."
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full filter blur-[128px]"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(${colors.primary}20 1px, transparent 1px),
            linear-gradient(90deg, ${colors.primary}20 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <motion.div 
              className="mx-4 p-3 rounded-full bg-gradient-to-br from-orange-900/20 to-orange-800/20 border border-orange-800/30"
              whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${colors.glowOrange}` }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className="fab fa-firefox-browser text-2xl text-orange-500"></i>
            </motion.div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent via-orange-500 to-transparent"></div>
          </div>
          <h1 className="text-sm uppercase tracking-wider text-gray-500 font-medium">
            Vellore Institute of Technology
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-b from-gray-900/50 to-black border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm"
          style={{
            boxShadow: `0 0 50px ${colors.glowOrange}20`
          }}
        >
          <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 h-1"></div>
          
          <div className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl transform rotate-3 opacity-80"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl opacity-30 blur-md"></div>
                  <img
                    className="relative w-48 h-56 md:w-56 md:h-64 object-cover rounded-2xl shadow-2xl border border-gray-800"
                    src="/images/board/25-26/jayakumarSir.webp"
                    alt="Professor Jayakumar S"
                    style={{
                      filter: 'brightness(0.9) contrast(1.1)'
                    }}
                  />
                  <div className="absolute -bottom-4 -right-4 bg-black border border-orange-500 rounded-full p-3 shadow-lg">
                    <i className="fas fa-check-circle text-2xl text-orange-500"></i>
                  </div>
                </div>
              </motion.div>

              <div className="flex-1 text-center lg:text-left">
                <motion.h1 
                  className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Professor Jayakumar S
                </motion.h1>
                
                <motion.h2 
                  className="text-xl text-orange-500 font-semibold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Faculty Coordinator
                </motion.h2>
                
                <motion.p 
                  className="text-gray-400 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Associate Professor Grade 1<br />
                  School of Computer Science and Engineering (SCOPE)
                </motion.p>

                <motion.div 
                  className="flex justify-center lg:justify-start gap-4 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <a
                    href="https://www.linkedin.com/in/iamjayakumars/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-md"></div>
                    <div className="relative px-4 py-2 border border-gray-700 rounded-lg flex items-center gap-2 group-hover:border-blue-500 transition-all bg-black/50">
                      <i className="fab fa-linkedin text-blue-400"></i>
                      <span className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors">LinkedIn</span>
                    </div>
                  </a>
                  
                  <a
                    href="https://github.com/iamjayakumars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-md"></div>
                    <div className="relative px-4 py-2 border border-gray-700 rounded-lg flex items-center gap-2 group-hover:border-purple-500 transition-all bg-black/50">
                      <i className="fab fa-github text-purple-400"></i>
                      <span className="text-sm text-gray-300 group-hover:text-purple-400 transition-colors">GitHub</span>
                    </div>
                  </a>
                  
                  <a
                    href="http://www.jayakumars.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-orange-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-md"></div>
                    <div className="relative px-4 py-2 border border-gray-700 rounded-lg flex items-center gap-2 group-hover:border-orange-500 transition-all bg-black/50">
                      <i className="fas fa-globe text-orange-400"></i>
                      <span className="text-sm text-gray-300 group-hover:text-orange-400 transition-colors">Website</span>
                    </div>
                  </a>
                </motion.div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {Object.keys(professionalInfo).map((section, index) => (
                    <motion.button
                      key={section}
                      onClick={() => setActiveSection(section)}
                      className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all overflow-hidden ${
                        activeSection === section
                          ? 'text-black'
                          : 'text-gray-400 hover:text-gray-200'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      {activeSection === section && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg"
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center">
                        <i className={`${professionalInfo[section].icon} mr-2`}></i>
                        {professionalInfo[section].title}
                      </span>
                      {activeSection !== section && (
                        <div className="absolute inset-0 bg-gray-800/50 rounded-lg -z-10"></div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 p-6 bg-gray-900/30 border border-gray-800 rounded-xl backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
                  <i className={`${professionalInfo[activeSection].icon} text-orange-400 text-lg`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-2">
                    {professionalInfo[activeSection].title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {professionalInfo[activeSection].content}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
            >
          <div className="inline-block">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400">
                Meet Our Team
              </span>
            </motion.h2>
            <motion.div 
              className="h-1 w-32 mx-auto bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            />
          </div>
          <motion.p 
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Discover the dedicated professionals who make our institution a center of excellence in education and research.
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 opacity-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-transparent rounded-full filter blur-3xl"></div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-0 w-48 h-48 opacity-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500 to-transparent rounded-full filter blur-3xl"></div>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .glow-animation {
          animation: glow 3s ease-in-out infinite;
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        /* Custom scrollbar for dark theme */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
        }

        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default Toplayout;
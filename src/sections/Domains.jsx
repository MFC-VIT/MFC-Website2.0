import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import "../styles/Domains.css";
import designImage from '../assets/images/design.webp';
import technicalImage from '../assets/images/technical.webp';
import managementImage from '../assets/images/management.webp';
import DragCloseDrawer from '../components/DragCloseDrawer';

const domains = [
  {
    name: 'DESIGN',
    description: 'This domain promotes curiosity and interest in graphics and media design, enriching the club\'s creativity. Our team crafts visually impactful media and intuitive UI/UX designs, ensuring engaging and seamless user experiences.',
    imageSrc: designImage,
  },
  {
    name: 'TECHNICAL',
    description: 'This domain provides students with a platform where they are encouraged to discover, explore and learn more about technology.',
    imageSrc: technicalImage,
  },
  {
    name: 'MANAGEMENT',
    description: 'The members of this domain specialize in maintaining smooth and effective functioning of the club, essentially maintaining the cohesive working environment between the rest of the Domains.',
    imageSrc: managementImage,
  },
];

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const DomainBox = ({ domain, onHover, isActive, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    onHover(domain); 
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ transformStyle: "preserve-3d", transform }}
      className={`relative main-box p-4 flex flex-col justify-center items-center bg-dark ${isActive ? 'border-orange-500' : 'border-gray-700'}`}
      onClick={() => onClick(domain)}
    >
      <img src={domain.imageSrc} alt={domain.name} className="img w-full h-auto object-contain" />
      <div className="domain-box">{domain.name}</div>
    </motion.div>
  );
};

const Domains = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [hoveredDomain, setHoveredDomain] = useState(null);
  const descriptionRef = useRef(null);
  const textRef = useRef(null); 

  const initialText = 'Dive into the World of Domains. Our Mozilla Firefox Club is built on three dynamic, innovative, and engaging core domains.';
  const drawerTexts = {
    DESIGN: (
      <>
        The Design domain fosters a deep curiosity and passion for graphics and media design, significantly enriching the creativity within the club. Our talented team focuses on crafting visually impactful media and creating intuitive UI/UX designs that prioritize user engagement. We believe that every design element should contribute to a seamless and enjoyable user experience, making our projects not only aesthetically pleasing but also functional and accessible.
        <br /><br />
        Subdomains:
        <br />
        - <strong>Graphic Design</strong>: This involves creating visual content to communicate messages. It encompasses everything from logos to posters and advertisements.
        <br />
        - <strong>UI/UX</strong>: User Interface and User Experience design focus on optimizing the interaction between users and products, ensuring that the design is not only attractive but also user-friendly.
        <br />
        - <strong>3D Design</strong>: This includes the creation of three-dimensional models and animations, which can be used in various applications such as games, films, and simulations.
        <br />
        - <strong>Videography/Photography</strong>: This subdomain captures moments and visuals through video and photography, enhancing the storytelling aspect of our projects.
      </>
    ),
    TECHNICAL: (
      <>
        The Technical domain provides students with a dynamic platform that encourages them to discover, explore, and deepen their understanding of technology. This domain empowers members to engage with various technological disciplines, fostering innovation and practical skills. Our projects aim to integrate cutting-edge technology, providing real-world applications and experiences.
        <br /><br />
        Subdomains:
        <br />
        - <strong>Front End</strong>: This focuses on the client-side of applications, dealing with everything that users see and interact with, ensuring a responsive and engaging interface.
        <br />
        - <strong>Back End</strong>: This involves server-side development, focusing on databases, server logic, and application architecture to support the front-end functionality.
        <br />
        - <strong>Full Stack</strong>: This encompasses both front-end and back-end development, equipping members with the skills to manage and develop comprehensive web applications.
        <br />
        - <strong>AI/ML</strong>: Artificial Intelligence and Machine Learning are explored in this subdomain, where students delve into algorithms and models that enable machines to learn from data.
        <br />
        - <strong>Game Development</strong>: This subdomain focuses on designing and developing interactive games across various platforms, enhancing creativity and technical skills.
        <br />
        - <strong>App Development</strong>: This involves creating mobile and web applications, allowing students to bring their ideas to life in user-friendly formats.
      </>
    ),
    MANAGEMENT: (
      <>
        The Management domain consists of members who specialize in maintaining the smooth and effective functioning of the club. They play a crucial role in ensuring cohesive collaboration among the different domains, facilitating communication and operational efficiency. This domain is vital for the club's overall success, handling various aspects of organization and strategy.
        <br /><br />
        Subdomains:
        <br />
        - <strong>Outreach</strong>: This focuses on building relationships with external organizations, sponsors, and the community to promote the club and its activities.
        <br />
        - <strong>Finance</strong>: This subdomain manages the club's budget, funding, and financial planning to ensure sustainability and resource allocation.
        <br />
        - <strong>Editorial</strong>: This involves creating and managing content for the club’s publications, including newsletters, blogs, and social media, ensuring consistent messaging and engagement.
        <br />
        - <strong>General Ops</strong>: This encompasses the overall operations of the club, including event planning, logistics, and member management.
        <br />
        - <strong>Publicity</strong>: This subdomain is responsible for marketing the club's events and initiatives, utilizing various platforms to reach a wider audience and attract new members.
      </>
    ),
  };
  

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDomainHover = (domain) => {
    setHoveredDomain(domain);
    setSelectedDomain(domain);
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3 }
      );
    }
  };

  const handleHoverOverDomainsText = () => {
    setHoveredDomain(null); 
    setSelectedDomain({ name: 'OUR DOMAINS', description: initialText });
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3 }
      );
    }
  };

  const handleDomainClick = (domain) => {
    if (isMobile) {
      alert(domain.description);
    }
  };

  const handleMoreInfoClick = () => {
    setOpenDrawer(true);
  };

  useEffect(() => {
    if (descriptionRef.current) {
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3 }
      );
    }
  }, [selectedDomain]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative bg-dark text-white p-5 layout-container">
      {isLoading && (
        <div className="text-2xl font-bold">Loading...</div>
      )}

      {!isLoading && (
        <div>
          <div className="section-container flex justify-center relative">
            <DomainBox
              domain={domains[1]}
              onHover={handleDomainHover}
              isActive={selectedDomain === domains[1]}
              onClick={handleDomainClick}
            />
          </div>

          <div className="section-container relative our-domains-box p-4">
            <div
              className="our-domains-font text-[#E8DED5] cursor-pointer"
              onMouseEnter={handleHoverOverDomainsText}
            >
              OUR DOMAINS
            </div>
          </div>

          <div className={`section-container ${isMobile ? 'flex-col gap-20' : 'flex-row'}`}>
            <DomainBox
              domain={domains[0]}
              onHover={handleDomainHover}
              isActive={selectedDomain === domains[0]}
              onClick={handleDomainClick}
            />

            {!isMobile && (
              <p
                ref={textRef}
                className="text-center mx-4"
              >
                {selectedDomain
                  ? selectedDomain.description
                  : initialText}
              </p>
            )}

            <DomainBox
              domain={domains[2]}
              onHover={handleDomainHover}
              isActive={selectedDomain === domains[2]}
              onClick={handleDomainClick}
            />
          </div>
          {hoveredDomain && (
            <div className="flex justify-center">
              <button
                onClick={handleMoreInfoClick}
                style={{ marginTop: '-30px', backgroundColor: '#FF6D00' }} 
                className="rounded px-4 py-2 text-white hover:bg-orange-600" 
              >
                More Info
              </button>
            </div>
          )}
          {openDrawer && (
            <DragCloseDrawer open={openDrawer} setOpen={setOpenDrawer} domainContent={{ title: selectedDomain.name, description: drawerTexts[selectedDomain.name] }}>
              <h2 className="text-2xl font-bold text-neutral-200">{selectedDomain.name} Details</h2>
              <p>{drawerTexts[selectedDomain.name]}</p>
            </DragCloseDrawer>
          )}
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="rectangle"></div>
        </div>
      )}
    </div>
  );
};

export default Domains;

import React from "react";
import PropTypes from "prop-types";
import { BsArrowUpRightCircle, BsCalendarEvent } from "react-icons/bs";
import { events } from "../constants/events";
import { links } from "../constants";
import { useContext, useState, useEffect } from "react";
import { ModalContext } from "../components/Modal";
import { motion } from "framer-motion";

const truncate = (text, length) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};

const Events = () => {
  const { setIsOpen } = useContext(ModalContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleEvents, setVisibleEvents] = useState(4);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("events");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-[90%] max-w-7xl mx-auto flex flex-col gap-14 items-center my-12 relative"
      id="events"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={isInView ? { y: 0 } : { y: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <h2 className="text-main text-6xl max-md:text-5xl max-sm:text-4xl font-apex">
          Events at MFC
        </h2>
        <div className="h-1 w-24 bg-primary mt-3 mx-auto rounded-full"></div>
      </motion.div>

      <div className="w-[25vw] aspect-square bg-primary blur-[300px] opacity-30 rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[10] animate-pulse"></div>

      <div className="grid grid-cols-2 grid-rows-auto gap-12 max-md:gap-8 max-md:p-5 max-md:px-10 max-sm:px-6 max-lg:grid-cols-1 z-20 w-full">
        {events.slice(0, visibleEvents).map((event, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Event
                {...event}
                isHovered={hoveredIndex === index}
                link={event.link || "#events"}
              />
            </motion.div>
          );
        })}
      </div>

      {events.length > visibleEvents ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <SeeMore
            link={links.instagram}
            onClick={() => {
              if (visibleEvents < events.length) {
                setVisibleEvents((prev) => prev + 4);
              } else {
                setIsOpen(true);
              }
            }}
            text={
              visibleEvents < events.length
                ? "Load more events"
                : "Explore all events"
            }
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <SeeMore
            link={links.instagram}
            onClick={() => setIsOpen(true)}
            text="Explore all events"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export const Event = ({ title, description, doe, image, link, isHovered }) => {
  return (
    <div
      id="events"
      className={`flex max-sm:flex-col justify-between max-sm:justify-center border-[3px] ${
        isHovered ? "border-primary/70" : "border-primary/30"
      } rounded-2xl p-6 px-7 min-h-[280px] gap-5 max-sm:gap-3 bg-black/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:shadow-primary/20 cursor-pointer sm:hover:scale-[1.02] group`}
    >
      {image && (
        <div className="flex justify-center items-center">
          <div className="overflow-hidden rounded-xl group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-300">
            <img
              src={image}
              className="min-h-40 min-w-40 max-sm:min-h-24 max-sm:min-w-24 object-cover transition-all duration-500 group-hover:scale-110"
              alt={title}
            />
          </div>
        </div>
      )}
      <div className="text-white gap-3 max-sm:gap-2 flex flex-col relative flex-1 p-2">
        <div className="font-yoshiro mb-1 tracking-wider text-primary font-bold text-3xl max-md:text-2xl group-hover:text-orange-400 transition-colors duration-300">
          {title}
          <div className="h-[1px] bg-primary rounded-full"></div>
        </div>

        <div className="font-yoshiro text-main/90 text-lg max-md:text-base tracking-wide leading-relaxed">
          {truncate(description, 180)}
        </div>

        <div className="font-yoshiro text-stone-300 mb-8 flex items-center gap-2">
          <BsCalendarEvent className="text-orange-400" />
          <span className="group-hover:text-orange-300 transition-colors duration-300">
            {doe}
          </span>
        </div>

        <div className="w-full flex justify-end absolute bottom-0 right-0">
          <Link
            link={link}
            text="Explore"
            textClass={"text-lg font-yoshiro tracking-wider"}
          />
        </div>
      </div>
    </div>
  );
};

Event.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  doe: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  isHovered: PropTypes.bool,
};

const Link = ({ link, text, textClass }) => {
  return (
    <a
      href={link}
      className={`w-fit border-2 border-[#F7813F] bg-gradient-to-b from-neutral-800 via-neutral-900 to-black hover:bg-gradient-to-b hover:from-orange-500 hover:via-orange-400 hover:to-orange-500 border-x-orange-600 border-t-orange-500 border-y-orange-700 hover:border-none transition-all duration-300 hover:shadow-md hover:sm:shadow-orange-700/50 hover:sm:-translate-x-1 hover:sm:-translate-y-1 active:sm:translate-x-0 active:sm:translate-y-0 active:shadow-none py-2 px-4 sm:px-5 rounded-full flex items-center font-apex gap-1 sm:gap-2 group ${textClass}`}
    >
      <span className="text-main text-sm max-sm:text-xs pl-2 tracking-wider group-hover:text-white transition-colors duration-300">
        {text}
      </span>
       <span className="overflow-hidden text-justify max-w-0 opacity-0 group-hover:max-w-[20px] group-hover:opacity-100 transition-all duration-300">
        <BsArrowUpRightCircle className="text-base text-[#F7813F] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-white pl-0" />
      </span>
    </a>
  );
};

Link.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  textClass: PropTypes.string,
};

const SeeMore = ({ link, onClick, text = "Explore all events" }) => {
  return (
    <button
      onClick={onClick}
      className="w-fit border-2 border-[#F7813F] bg-gradient-to-b from-neutral-800 via-neutral-900 to-black hover:bg-gradient-to-b hover:from-orange-500 hover:via-orange-400 hover:to-orange-500 border-x-orange-600 border-t-orange-500 border-y-orange-700 hover:border-none transition-all duration-300 hover:shadow-lg hover:shadow-orange-700/30 hover:-translate-y-1 active:translate-y-0 active:shadow-none py-3 px-6 rounded-full flex items-center font-apex gap-2 sm:gap-3 group mt-4"
    >
      <span className="text-orange-100 text-base max-sm:text-sm tracking-wider group-hover:text-white text-justify  block">
        {text}
      </span>
       <span className="overflow-hidden max-w-0 opacity-0 group-hover:max-w-[20px] group-hover:opacity-100 transition-all duration-300">
        <BsArrowUpRightCircle className="text-[#F7813F] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-white size-5" />
      </span>
    </button>
  );
};

SeeMore.propTypes = {
  link: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Events;

import PropTypes from "prop-types";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { events } from "../constants/events";
import { links } from "../constants";
import { useContext } from "react";
import { ModalContext } from "../components/Modal";

const truncate = (text, length) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};

const Events = () => {
  const { setIsOpen } = useContext(ModalContext);
  return (
    <div
      className="w-[85%] mx-auto flex flex-col gap-12 items-center my-5 relative"
      id="events"
    >
      <div className="text-main text-6xl max-md:text-5xl max-sm:text-4xl font-apex">
        Events at MFC
      </div>
      <div className="w-[20vw] aspect-square bg-primary blur-[250px] rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[10]"></div>
      <div className="grid grid-cols-2 grid-rows-2 gap-10 max-md:gap-6  max-md:p-5 max-md:px-10 max-sm:px-6 max-lg:flex max-lg:flex-col z-20">
        {events.slice(0, 4).map((event, index) => {
          return (
            <Event
              {...events[index]}
              key={index}
              link={events[index].link || "#events"}
            />
          );
        })}
      </div>
      <SeeMore link={links.instagram} onClick={() => setIsOpen(true)} />
    </div>
  );
};

export const Event = ({ title, description, doe, image, link }) => {
  return (
    <div className="flex max-sm:flex-col justify-between max-sm:justify-center border-[3px] border-primary/30 rounded-2xl p-4 px-5 min-h-64 gap-5 max-sm:gap-1 bg-black hover:shadow-md transition-all duration-300 hover:sm:shadow-primary/30 cursor-pointer sm:hover:scale-105">
      {image && (
        <div className="flex justify-center items-center">
          <img
            src={image}
            className="min-h-36 min-w-36 max-sm:max-h-14 max-sm:max-w-14"
          />
        </div>
      )}
      <div className="text-white gap-1 max-sm:gap-0 flex flex-col relative">
        <div className="font-apex mb-1 tracking-wider text-primary font-bold text-3xl max-md:text-2xl">
          {title}
        </div>
        <div className="font-yoshiro text-main text-lg max-md:text-base tracking-wide text-ellipsis">
          {truncate(description, 200)}
        </div>
        <div className="font-yoshiro text-orange-500 mb-3">{doe}</div>
        <div className="w-full flex justify-end absolute bottom-0">
          <Link link={link} text="Explore" textClass={"text-lg"} />
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
};

const Link = ({ link, text }) => {
  return (
    <a
      href={link}
      className="w-fit border-2 border-[#F7813F] bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 hover:bg-gradient-to-b hover:from-orange-500 hover:via-orange-400 hover:to-orange-500 border-x-orange-600 border-t-orange-500 border-y-orange-700 hover:border-none transition-all duration-300 hover:shadow-md hover:sm:shadow-orange-700 hover:sm:-translate-x-1 hover:sm:-translate-y-1 active:sm:translate-x-0 active:sm:translate-y-0 active:shadow-none py-2 px-3 sm:px-4 rounded-full flex items-center font-apex gap-1 sm:gap-2 group"
    >
      <span className="text-main text-sm max-sm:text-xs tracking-wider group-hover:text-white">
        {text}
      </span>
      <BsArrowUpRightCircle className="text-base text-[#F7813F] hidden group-hover:block transition-all duration-300 group-hover:text-white" />
    </a>
  );
};

Link.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};

const SeeMore = ({ link, onClick }) => {
  return (
    <div
      href={link}
      onClick={onClick}
      className="w-fit border-2 border-[#F7813F] bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 hover:bg-gradient-to-b hover:from-orange-500 hover:via-orange-400 hover:to-orange-500 border-x-orange-600 border-t-orange-500 border-y-orange-700 hover:border-none transition-all duration-300 hover:shadow-md hover:sm:shadow-orange-700 hover:sm:-translate-x-1 hover:sm:-translate-y-1 active:sm:translate-x-0 active:sm:translate-y-0 active:shadow-none py-2 px-3 sm:px-4 rounded-full flex items-center font-apex gap-1 sm:gap-2 group -mt-4"
    >
      <span className="text-orange-100 text-base max-sm:text-sm tracking-wider group-hover:text-white">
        {"Explore all events"}
      </span>
      <BsArrowUpRightCircle className="text-base text-[#F7813F] hidden group-hover:block transition-all duration-300 group-hover:text-white size-5" />
    </div>
  );
};

SeeMore.propTypes = {
  link: PropTypes.string,
  onClick: PropTypes.func,
};

export default Events;

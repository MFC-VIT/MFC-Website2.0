import PropTypes from "prop-types"
import { BsArrowUpRightCircle } from "react-icons/bs";
import { events } from "../constants/events";
import { links } from "../constants";

const Events = () => {
  return (  
    <div className="flex flex-col items-center" id="events">
      <div className="text-main text-6xl max-md:text-5xl max-sm:text-4xl font-apex">Events at MFC</div>
      <div className="grid grid-cols-2 grid-rows-2 gap-10 max-md:gap-6 p-10 max-md:p-5 max-sm:px-3 max-lg:flex max-lg:flex-col">
        {events.slice(0, 4).map((event, index)=>{
          return (
            <Event {...events[index]} key={index} link={events[index].link || '#events'} />
          )
        })}
      </div>
      <SeeMore link={links.instagram} />
    </div>
  );
}

const Event = ({
  title, description, doe, image, link
}) => {
  return (
    <div className="flex max-sm:flex-col justify-between border-[3px] border-primary rounded-2xl p-4 gap-5 max-sm:gap-1 bg-black">
      <div className="flex justify-center items-center"><img src={image} className="min-h-36 min-w-36 max-sm:max-h-14 max-sm:max-w-14" /></div>
      <div className="text-white gap-1 max-sm:gap-0 flex flex-col">
        <div className="font-apex mb-1 tracking-wider text-primary font-bold text-3xl max-md:text-2xl">{title}</div>
        <div className="font-yoshiro text-main text-lg max-md:text-base tracking-wide text-ellipsis mb-1">{description}</div>
        <div className="font-yoshiro text-orange-500">{doe}</div>
        <div className="w-full flex justify-end">
        <Link link={link} text="Explore" textClass={"text-lg"} />
        </div>
      </div>
    </div>
  )
}

Event.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  doe: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string
}

const Link = ({link, text})=>{
  
  return (
    <a
      href={link}
      className="w-fit bg-[#0A0807] border-2 border-[#F7813F] hover:bg-[#F7813F] hover:text-white py-2 px-3 sm:px-4 rounded-full flex items-center font-apex gap-1 sm:gap-2 group"
    >
      <span className="text-main text-sm max-sm:text-xs tracking-wider">{text}</span>
      <BsArrowUpRightCircle className="text-base text-[#F7813F] group-hover:text-white" />
    </a>
  )
}

Link.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
}

const SeeMore = ({link})=>{
  
  return (
    <a
      href={link}
      className="w-fit bg-[#0A0807] border-2 border-[#F7813F] hover:bg-[#F7813F] hover:text-white py-2 px-3 sm:px-4 rounded-full flex items-center font-apex gap-1 sm:gap-2 group"
    >
      <span className="text-main text-base max-sm:text-sm tracking-wider">{"See More"}</span>
      <BsArrowUpRightCircle className="text-base text-[#F7813F] group-hover:text-white" />
    </a>
  )
}

SeeMore.propTypes = {
  link: PropTypes.string,
}
 
export default Events;
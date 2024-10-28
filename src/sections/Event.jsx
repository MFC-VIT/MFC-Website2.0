import PropTypes from "prop-types"
import { BsArrowUpRightCircle } from "react-icons/bs";
import { events } from "../constants/events";

const Events = () => {
  return (  
    <div className="flex flex-col items-center">
      <div className="text-main text-6xl font-apex">Events at MFC</div>
      <div className="grid grid-cols-2 grid-rows-2 gap-10 p-10 max-lg:flex max-lg:flex-col">
        {events.slice(0, 4).map((event, index)=>{
          return (
            <Event {...events[index]} key={index} />
          )
        })}
      </div>
      <Link text="See More" />
    </div>
  );
}

const Event = ({
  title, description, doe, image, link
}) => {
  return (
    <div className="flex justify-between border-[3px] border-primary rounded-lg p-4 gap-5 bg-black">
      <div className="flex justify-center items-center"><img src={image} /></div>
      <div className="text-white gap-1 flex flex-col">
        <div className="font-yoshiro text-primary font-bold text-xl">{title}</div>
        <div className="font-yoshiro text-main">{description}</div>
        <div className="font-yoshiro text-secondary">{doe}</div>
        <div className="w-full flex justify-end">
        <Link link={link} text="Explore" />
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
      target="_blank"
      className="w-fit bg-[#0A0807] border-2 border-[#F7813F] hover:bg-[#F7813F] hover:text-white py-2 px-3 sm:px-4 rounded-full flex items-center font-apex text-xs gap-1 sm:gap-2 group"
    >
      <span className="hidden sm:inline text-main">{text}</span>
      <BsArrowUpRightCircle className="text-base text-[#F7813F] group-hover:text-white" />
    </a>
  )
}

Link.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string
}
 
export default Events;
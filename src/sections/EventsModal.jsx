import { useContext } from "react";
import { Modal, ModalContext } from "../components/Modal";
import { events } from "../constants/events";
import { Event } from "./Event";
import { IoClose } from "react-icons/io5";

const EventsModal = ()=>{
  const {isOpen, setIsOpen} = useContext(ModalContext);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
    <div className="rounded-lg w-full z-50 h-full absolute p-10 max-md:px-6 max-w-[90rem]">
      <div className="grid grid-cols-2 grid-rows-2 gap-10 max-md:gap-6 px-5 max-md:px-0 pb-5 max-lg:flex max-lg:flex-col">
        {events.map((event, index) => {
          return (
            <Event
            {...event}
            key={index}
            link={event.link || "#events"}
            />
          );
        })}
      </div>
    </div>
    <div className="fixed md:top-5 max-md:bottom-5 right-3 max-md:right-1 max-md:bottom-3 rounded-full bg-neutral-900 border-2 border-neutral-800 shadow-md shadow-neutral-950 hover:scale-105 active:scale-100 active:shadow-none transition-all duration-200 p-2 max-md:p-1.5 size-fit group hover:border-orange-500">
      <IoClose className="transition-all duration-200 text-neutral-300 group-hover:text-orange-500 text-2xl max-md:text-xl cursor-pointer" onClick={()=>setIsOpen(false)} />
    </div>
  </Modal>
  )
}

export default EventsModal;
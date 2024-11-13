import axios from "axios";
import images from "../constants/images";
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from "react";
import { MAIL_ENDPOINT } from "../constants";

export const Form = () => {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");

  const handleSendMail = async ()=>{
    const text = `Name:- ${name}\n\n` + `Message:-${message}`;
    try {
      const response = await axios.post(MAIL_ENDPOINT, { email, message: text });
      if (response.status != 200 || !response.data.success){
        alert("Message could not be sent!!!");
        return;
      }
      alert("Message Sent Successfully!!!");
    } catch(error){
      alert("An error occurred while sending the message. Please try again.");
    }
  }
  
  const autoResize = (event)=>{
    const inputBox = event.target;
    inputBox.style.height = "auto";
    inputBox.style.height = inputBox.scrollHeight < 100 ? `${inputBox.scrollHeight}px` : '100px'
  }

  useEffect(()=>{
    const messageBox = document.querySelector('#message-box');
    if (messageBox) messageBox.addEventListener("input", autoResize);
    return ()=>{
      messageBox.removeEventListener("input", autoResize);
    }
  }, [])

  return (
    <section className="w-full min-h-screen flex justify-center my-5">
      <main className='lg:w-[60%] lg:min-w-[800px] flex flex-col items-center p-8 max-sm:py-2 max-sm:px-5 relative'>
          <div className='lg:text-7xl md:text-6xl sm:text-5xl text-[38px] font-apex text-main text-center'>
              CONNECT WITH FIREFOX
          </div>
          <div className='lg:text-2xl md:text-xl sm:text-lg text-base text-center text-main lg:mt-7 md:mt-5 sm:mt-3 mb-4 mt-2 lg:my-7 md:my-5 mx-10 max-sm:mx-0 px-10'>
              Get in touch with us today and let us help you with any question and inquiries you may have.
          </div>
          <div className="text-main p-1.5 px-4 rounded-full bg-amber-950 flex items-center gap-2">
            <img src={images.gmailIcon} className="size-4" alt="" />
            <span className="text-xs font-yoshiro text-main">{"pr.mozillavit@gmail.com"}</span>
          </div>
          <FormElement onNameChange={(name)=>setName(name)} onEmailChange={(email)=>setEmail(email)} onMessageChange={(message)=>setMessage(message)} />
          <SubmitButton handleSubmit={handleSendMail} />
      </main>
    </section>
  ) 
};

const FormElement = ({ onNameChange, onEmailChange, onMessageChange })=>{
  return (
    <div className="relative w-[90%] max-w-[680px] max-sm:w-full md:min-h-[275px] border border-primary mt-10 bg-gray-500 bg-opacity-10
    after:content-[''] after:absolute after:w-1 after:h-2 after:-start-[2.5px] after:z-10 after:top-[40%] after:bg-primary
    ">
      <div className="w-full h-full relative flex flex-col justify-around p-10 max-sm:px-5 max-sm:py-8 gap-10
      after:content-[''] after:absolute after:w-2 after:h-1 after:start-[30%] after:z-10 after:-bottom-[2.5px] after:bg-primary
      ">
        <div className="sm:flex max-sm:flex-col sm:justify-around gap-10 max-sm:space-y-8">
          <InputElement title="Full Name" type="input" handleChange={onNameChange} />
          <InputElement title="Your Email" type="email" handleChange={onEmailChange} />
        </div>
        <div>
          <InputElement title="Your Message" id="message-box" type="textarea" handleChange={onMessageChange} />
        </div>
      </div>
    </div>
  )
}

FormElement.propTypes = {
  onNameChange: PropTypes.func,
  onEmailChange: PropTypes.func,
  onMessageChange: PropTypes.func,
}

const InputElement = ({title, id, type, handleChange})=>{
  const textElement = useRef(null);
  return (
    <div className="flex flex-col w-full gap-1 max-sm:gap-[2px]">
      <label className="font-yoshiro_b text-main text-2xl max-sm:text-xl" onClick={()=>textElement.current.focus()}>{title}</label>
      {type == "textarea" 
        ? (
          <textarea className="pr-2 max-sm:pr-2 bg-transparent outline-none border-b border-primary placeholder:text-orange-400 focus:placeholder-transparent caret-primary text-orange-400 font-yoshiro max-sm:text-sm resize-none" placeholder="Type here" rows={1} id={id} ref={textElement} onChange={()=>handleChange(textElement.current.value)} />
        ) : (
          <input className="pr-2 bg-transparent outline-none border-b border-primary placeholder:text-orange-400 focus:placeholder-transparent caret-primary text-orange-400 font-yoshiro max-sm:text-sm" placeholder="Type here" id={id} ref={textElement} type={type} onChange={()=>handleChange(textElement.current.value)} />
        )
      }
    </div>
  )
}

InputElement.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.oneOf(['textarea', 'input', 'email']),
  handleChange: PropTypes.func,
}

const SubmitButton = ({ handleSubmit })=>{
  return (
    <button className="text-main mt-10 max-md:mt-8 border border-primary py-[14px] max-sm:py-3 max-md:py-[12px] px-10 rounded-3xl text-2xl max-md:text-xl font-apex tracking-wider shadow-[inset_3px_5px_6px_rgba(0,0,0,0.1),inset_-2px_-0.5px_6px_rgba(0,0,0,0.08)] shadow-orange-600  active:translate-y-0.5" onClick={handleSubmit}>
      Submit
    </button>
  )
}

SubmitButton.propTypes = {
  handleSubmit: PropTypes.func,
}


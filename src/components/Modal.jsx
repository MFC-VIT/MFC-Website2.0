import React from 'react'
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const Modal = ({ children, isOpen, setIsOpen }) => {
  useEffect(() => {

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className={`w-full h-screen fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg ${isOpen ? "flex" : "hidden"} justify-center items-center px-5`} onClick={()=>setIsOpen(false)}>
      <div className="relative size-full overflow-y-auto no-scrollbar">{children}</div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
}

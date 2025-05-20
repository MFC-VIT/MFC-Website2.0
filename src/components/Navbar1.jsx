import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import final from "../assets/images/finallogo2.svg";
import React from 'react';

export default function EnhancedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "ABOUT", id: "main-content" },
    { name: "PROJECTS", id: "projects" },
    { name: "DOMAINS", id: "domains" },
    { name: "WORKS", id: "events" },
    { name: "BLOG", id: "blogs" },
    { name: "NEWSLETTER", id: "newsletter" },
    { name: "MEET THE TEAM", id: "team" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 smooth-scroll ${
        isScrolled
          ? "bg-[#0a0807]/90 backdrop-blur-md py-2 shadow-lg"
          : "py-5 mt-[2vh]"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between smooth-scroll">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <a href="/" aria-label="Home">
            <img
              src={final}
              alt="Brand Logo"
              className="h-10 md:h-12 w-auto"
            />
          </a>
        </motion.div>

        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={`#${item.id}`}
              className={`img11 relative px-4 py-2 text-xl font-teko tracking-wide ${
                activeItem === item.name
                  ? "text-[#FF6D00]"
                  : "text-[#E8DED5] hover:text-[#FF6D00]"
              } transition-colors duration-300`}
              onMouseEnter={() => setActiveItem(item.name)}
              onMouseLeave={() => setActiveItem(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                const section = document.getElementById(item.id);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {item.name}
              {activeItem === item.name && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#FF8C40" }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block text-[#0a0807] font-semibold font-teko py-2 bg-[#FF6D00] rounded-sm text-lg lg:text-xl text-nowrap tracking-wide px-8"
          onClick={() => {
            document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          GET IN TOUCH
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-[#E8DED5] focus:outline-none"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <IoClose size={28} />
          ) : (
            <HiOutlineMenuAlt3 size={28} />
          )}
        </motion.button>
      </div>


      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0807]/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={`#${item.id}`}
                    className="img11 text-[#E8DED5] hover:text-[#FF6D00] font-teko text-2xl py-2 border-b border-gray-800 transition-colors duration-300"
                    whileHover={{ x: 10, color: "#FF6D00" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#FF8C40" }}
                  whileTap={{ scale: 0.98 }}
                  className="text-[#0a0807] font-semibold font-teko py-3 bg-[#FF6D00] rounded-sm text-xl text-nowrap tracking-wide px-8 mt-2"
                >
                  GET IN TOUCH
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
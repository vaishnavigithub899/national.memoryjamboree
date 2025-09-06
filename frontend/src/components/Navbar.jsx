import { useState, useEffect } from "react";
import { Menu, X, Home, BookOpen, Award, Phone } from "lucide-react"; // icons
import whiteforest from "../assets/img/whiteforest.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#hero", icon: <Home size={18} /> },
    { name: "Categories", href: "#about", icon: <BookOpen size={18} /> },
    { name: "Disciplines", href: "#services", icon: <Award size={18} /> },
    { name: "Contact Us", href: "#contact", icon: <Phone size={18} /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-[#FFF5E6] via-[#FFFFFF] to-[#E6F7E6] shadow-md py-3"
          : "bg-gradient-to-r from-[#FFF5E6] via-[#FFFFFF] to-[#E6F7E6] py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between transition-all duration-500">
        {/* 🔹 Left: Logo */}
        <div>
          <img src={whiteforest} alt="Whiteforest Logo" className="h-15 w-auto" />
        </div>

        {/* 🔹 Center: Menu */}
        <nav className="hidden md:flex space-x-10 text-gray-800 font-semibold text-lg">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="relative flex items-center gap-2 group"
            >
              <span className="opacity-80 group-hover:opacity-100 transition-transform transform group-hover:-translate-y-0.5">
                {item.icon}
              </span>
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF6600] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* 🔹 Right: Register */}
        <div className="hidden md:flex items-center">
          <a href="/register">
            <button className="bg-sky-950 text-white font-semibold px-9 py-4 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden">
              <span className="relative z-10">Register</span>
              <span className="absolute inset-0 rounded-full bg-sky-950 opacity-30 blur-md animate-ping"></span>
            </button>
          </a>
        </div>

        {/* 🔹 Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#FFF5E6] via-[#FFFFFF] to-[#E6F7E6] transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-gray-800 font-semibold text-xl">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              onClick={toggleMenu}
              href={item.href}
              className="flex items-center gap-3 group"
            >
              <span className="transform group-hover:scale-125 transition text-[#FF6600]">
                {item.icon}
              </span>
              {item.name}
            </a>
          ))}

          <a href="/register" onClick={toggleMenu}>
            <button className="mt-6 bg-[#000080] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition relative">
              <span className="relative z-10">Register Now</span>
              <span className="absolute inset-0 rounded-full bg-[#000080] opacity-30 blur-md animate-ping"></span>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

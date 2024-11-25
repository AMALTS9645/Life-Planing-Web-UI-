import React, { useState } from "react";
import { Link } from "react-scroll"; // For smooth scrolling
import logo from "D:/PROJECTS/MERN - STACK/Intern_Sample_Web/lyf-planning/src/assets/LogoS/LG1.png";

const sections = [
  { id: "Home",label: "Home" },
  { id: "Plans",label: "Plans" },
  { id: "About",label: "About" },
  { id: "Contact",label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-gray-50 to-gray-100 shadow-md fixed w-full z-50">
      {/* Logo Section */}
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={() => document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Go to Home"
        role="button"
      >
        <img
          src={logo}
          alt="Future Focus Logo"
          className="h-10 w-10 md:h-12 md:w-12 object-contain shadow-md rounded-full hover:scale-110 transition-transform duration-300"
        />
        <span className="text-2xl md:text-3xl font-extrabold text-gray-900 hover:text-blue-600 transition duration-300 tracking-wide">
          Future Focus
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-lg font-medium">
        {sections.map((section, index) => (
          <Link
            key={index}
            to={section.id.toLowerCase()}
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-800 hover:text-blue-600 transition duration-300"
          >
            {section.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Icon */}
      <div
        className="text-gray-800 text-xl md:hidden cursor-pointer hover:text-blue-600 transition duration-300"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Mobile Menu"
        role="button"
      >
        ☰
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-gray-50 shadow-md z-40 flex flex-col items-center gap-6 py-4 text-lg font-medium transition-all duration-300 ease-in-out ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
        >
          {sections.map((section, index) => (
            <Link
              key={index}
              to={section.id.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 hover:text-blue-600 transition duration-300"
              onClick={() => setMenuOpen(false)} // Close menu after navigation
            >
              {section.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

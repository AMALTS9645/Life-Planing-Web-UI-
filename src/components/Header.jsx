import React, { useState } from "react";
import logo from "D:/PROJECTS/MERN - STACK/Intern_Sample_Web/lyf-planning/src/assets/LogoS/LG1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-gray-50 to-gray-100 shadow-md sticky top-0 z-50">
      {/* Logo Section */}
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={() => document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" })}
      >
        <img
          src={logo}
          alt="Future Focus Logo"
          className="h-12 w-12 object-contain shadow-md rounded-full"
        />
        <span className="text-3xl font-extrabold text-gray-900 hover:text-blue-600 transition duration-300 tracking-wide">
          Future Focus
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-lg font-medium">
        {[
          { label: "Home", target: "#hero" },
          { label: "Plans", target: "#plans" },
          { label: "About Us", target: "#about" },
          { label: "Contact Us", target: "#contact" },
        ].map((item, index) => (
          <button
            key={index}
            className="text-gray-800 hover:text-blue-600 transition duration-300"
            onClick={() => document.querySelector(item.target)?.scrollIntoView({ behavior: "smooth" })}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Icon */}
      <div
        className="text-gray-800 text-xl md:hidden cursor-pointer hover:text-blue-600 transition duration-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-50 shadow-md z-40">
          <nav className="flex flex-col items-center gap-6 py-4 text-lg font-medium">
            {[
              { label: "Home", target: "#hero" },
              { label: "Plans", target: "#plans" },
              { label: "About Us", target: "#about" },
              { label: "Contact Us", target: "#contact" },
            ].map((item, index) => (
              <button
                key={index}
                className="text-gray-800 hover:text-blue-600 transition duration-300"
                onClick={() => {
                  document.querySelector(item.target)?.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false); // Close menu after navigation
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

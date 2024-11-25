import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-400 py-8">
    <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      {/* Contact Us Section */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-lg font-semibold text-gray-300 mb-2">Contact Us</h3>
        <p className="text-sm text-gray-400 mb-2">
          Have questions? We're here to help!
        </p>
        <a
          href="mailto:info@futurefocus.com"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          info@futurefocus.com
        </a>
      </div>

      {/* Links Section */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
        <a
          href="/terms"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          Terms Policy
        </a>
        <a
          href="/customer-story"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          Customer Story
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition duration-300"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition duration-300"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>

    {/* Footer Bottom Section */}
    <div className="mt-6 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
      © {new Date().getFullYear()} Future Focus. All rights reserved.
    </div>
  </footer>
);

export default Footer;
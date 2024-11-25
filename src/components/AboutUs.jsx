import React from "react";
import aboutImage from "../assets/AboutUs/3.webp"; 
import { FaRegLightbulb, FaRegHandshake } from 'react-icons/fa'; 

const AboutUs = () => (
  <section
    id="about"
    className="py-16 px-8 bg-gradient-to-r from-blue-300 to-green-400 text-gray-800"
  >
    <div className="max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-Black leading-relaxed">
          Your Future, Planned<br />
          <span className="font-medium">With Confidence and Care</span>
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={aboutImage}
            alt="About Future Focus"
            className="rounded-lg shadow-2xl w-full transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaRegLightbulb className="text-blue-500 text-3xl mr-2" />
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-lg leading-relaxed">
              At <span className="font-semibold text-blue-700">Future Focus</span>, we believe that every dream deserves a plan. With our tailored life plans, we bring your aspirations closer to reality. Whether it’s financial stability, career goals, or personal milestones, we ensure you move forward with confidence and care.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaRegHandshake className="text-blue-500 text-3xl mr-2" />
              <h3 className="text-xl font-semibold">Our Commitment</h3>
            </div>
            <p className="text-lg leading-relaxed">
              Our team is dedicated to helping you design a future that aligns with your values, aspirations, and dreams. Together, we can craft a roadmap that empowers you to achieve your goals effortlessly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <button
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:from-purple-700 hover:to-blue-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </button>
            <button
              className="px-6 py-3 bg-white border border-blue-500 text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => document.querySelector("#plans")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
       
// In Background.jsx
import React from "react";
import backgroundImage from "../assets/Bckgrounds/BKG1.jpg"; 

const Background = ({ children }) => (
  <div
    className="bg-cover bg-center h-screen"
    style={{
      backgroundImage: `url(${backgroundImage})`, 
    }}
  >
    {children}
  </div>
);

export default Background;

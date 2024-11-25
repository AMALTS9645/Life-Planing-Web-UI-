import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import FeaturedPlans from "./components/FeaturedPlans";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Background from "./components/Background";

const App = () => (
  <div>
    <Header />
    <Background>
      <Home />
      <FeaturedPlans />
      <AboutUs />
      <Footer />
    </Background>
  </div>
);

export default App;

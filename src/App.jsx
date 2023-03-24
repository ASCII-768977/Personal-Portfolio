import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Mottos,
  Home,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  ExpandCard,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div
          className="bg-home-pattern bg-cover bg-no-repeat bg-center"
          id="home"
        >
          <Navbar />
          <Home />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <ExpandCard />
        <Mottos />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

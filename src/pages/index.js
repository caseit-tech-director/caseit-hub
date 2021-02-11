import React from "react";
import Chair from "../components/sections/Chair";
import Navigation from "../components/navigation";
import SectionMarker from "../components/navigation/SectionMarker";
import Letters from "../components/sections/Letters";
import About from "../components/about/About";
import Overview from "../components/sections/Overview";
import Structure from "../components/sections/Structure";
import Tech from "../components/sections/Tech";
import Meet from "../components/meet/Meet";
import Sponsor from "../components/sections/Sponsor";

import "@styles/main.scss";
import WelcomePopup from "@components/welcomePopup/";
import { NavigationContextProvider } from "@components/navigation/NavigationContext";

const Home = () => {
  return (
    <WelcomePopup>
      <NavigationContextProvider>
        <div className="main-grid center-column">
          <div className="main-grid__nav">
            <Navigation />
          </div>
          <div className="main-grid__content">
            {/* dummy content for now */}
            <Letters />
            <Chair />
            <About />
            <Overview />
            <Structure />
            <Tech />
            <Meet />
            <Sponsor />
            <SectionMarker label="fdsa" hash="fdsafdsa" group="Test Group 2">
              <div>test</div>
            </SectionMarker>
          </div>
        </div>
      </NavigationContextProvider>
    </WelcomePopup>
  );
};

export default Home;

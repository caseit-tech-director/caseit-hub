import React from "react";
import Chair from "../components/chairWelcome/Chair";
import Navigation from "../components/navigation";
import SectionMarker from "../components/navigation/SectionMarker";
import Letters from "../components/letters/Letters";
import About from "../components/about/About";
import Overview from "../components/overview/Overview";
import Structure from "../components/structure/Structure";

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
            <SectionMarker label="test" hash="test" group="Test Group">
              <div>test</div>
            </SectionMarker>
            <SectionMarker label="test2" hash="test2" group="Test Group">
              <div>test</div>
            </SectionMarker>
            <Letters/>
            <Chair />
            <About/>
            <Overview/>
            <Structure/>
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

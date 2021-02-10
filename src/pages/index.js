import React from "react";
import Chair from "../components/chairWelcome/Chair";
import Navigation from "../components/navigation";
import SectionMarker from "../components/navigation/SectionMarker";

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
            <Chair />
            <Chair />
            <Chair />
            <Chair />
            <Chair />
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

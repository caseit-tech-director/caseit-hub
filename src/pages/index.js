import React from "react";
import Chair from "../components/chairWelcome/Chair";
import Navigation from "../components/navigation";

import "@styles/main.scss";
import WelcomePopup from "@components/welcomePopup/";

const Home = () => {
  return (
    <WelcomePopup>
      <div className="main-grid center-column">
        <div className="main-grid__nav">
          <Navigation />
        </div>
        <div className="main-grid__content">
          <Chair />
        </div>
      </div>
    </WelcomePopup>
  );
};

export default Home;

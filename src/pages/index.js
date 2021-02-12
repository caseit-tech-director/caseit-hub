import React from "react";
import Chair from "../components/sections/Chair";
import Navigation from "../components/navigation";
import SectionMarker from "../components/navigation/SectionMarker";
import Button from "../components/form/Button";
import About from "../components/sections/About";
import Overview from "../components/sections/Overview";
import Structure from "../components/sections/Structure";
import Tech from "../components/sections/Tech";
import OC from "../components/sections/OC";
import Sponsor from "../components/sections/Sponsor";
import TopBar from "../components/topbar/topbar";

import "@styles/main.scss";
import WelcomePopup from "@components/welcomePopup/";
import { NavigationContextProvider } from "@components/navigation/NavigationContext";

const Home = () => {
  return (
    <WelcomePopup>
      <NavigationContextProvider>
        <TopBar />
        <div className="main-grid center-column">
          <div className="main-grid__nav">
            <Navigation />
          </div>
          <div className="main-grid__content">
            {/* dummy content for now */}
            <SectionMarker label="Welcome Package" hash="hello" group="Welcome">
              <h1 className="display">Welcome Package</h1>
              <p>for CaseIT 2021, presented by the Beedie School of Business</p>
            </SectionMarker>
            <SectionMarker
              label="Letter from the Prime Minister"
              hash="letter_prime"
              group="Welcome"
            >
              <h2> Letter from the Prime Minister </h2>
              <div className="button-ctr">
                <Button
                  href="https://drive.google.com/file/d/1I_j5-Bf5ED9XoJxkx_0orIlrlJixR7Ky/view?usp=sharing"
                  target="_blank"
                >
                  English
                </Button>
                <Button
                  href="https://drive.google.com/file/d/1WIrgNL1lKDTh1wG7D8EiX0py_1I_9dQE/view?usp=sharing"
                  target="_blank"
                >
                  French
                </Button>
              </div>
            </SectionMarker>
            <SectionMarker
              label="Letter From the Premier"
              hash="letter_premier"
              group="Welcome"
            >
              <h2> Letter from the Premier </h2>
              <div className="button-ctr">
                <Button
                  href="https://drive.google.com/file/d/1PDYFtERFVBEakLZ7vfbMVv6KA1un7V_l/view?usp=sharing"
                  target="_blank"
                >
                  English
                </Button>
              </div>
            </SectionMarker>
            <SectionMarker
              label="Chair's Welcome"
              hash="chair_welcome"
              group="Welcome"
            >
              <Chair />
            </SectionMarker>
            <SectionMarker
              label="Dean's Welcome"
              hash="dean_welcome"
              group="Welcome"
            >
              <h2> Dean's Welcome </h2>
            </SectionMarker>
            <SectionMarker
              label="About the Competition"
              hash="about"
              group="Information"
            >
              <About />
            </SectionMarker>
            <SectionMarker
              label="Competition Structure"
              hash="comp_structure"
              group="Information"
            >
              <Structure />
            </SectionMarker>
            <SectionMarker label="Technology" hash="tech" group="Information">
              <Tech />
            </SectionMarker>
            <Overview />
            <SectionMarker
              label="Meet the Teams"
              hash="teams"
              group="Stakeholders"
            >
              <h1 className="display"> Meet the Teams </h1>
            </SectionMarker>
            <SectionMarker
              label="Organizing Committee"
              hash="oc"
              group="Stakeholders"
            >
              <OC />
            </SectionMarker>
            <SectionMarker
              label="Sponsors"
              hash="sponsors"
              group="Stakeholders"
            >
              <Sponsor />
            </SectionMarker>
          </div>
        </div>
      </NavigationContextProvider>
    </WelcomePopup>
  );
};

export default Home;

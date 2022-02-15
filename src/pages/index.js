import React from "react"
import { Helmet } from "react-helmet"
import Chair from "../components/sections/Chair"
import Navigation from "../components/navigation"
import SectionMarker from "../components/navigation/SectionMarker"
import Button from "../components/form/Button"
import About from "../components/sections/About"
import Overview from "../components/sections/Overview"
import Structure from "../components/sections/Structure"
import Tech from "../components/sections/Tech"
import OC from "../components/sections/OC"
import Sponsor from "../components/sections/Sponsor"
import TopBar from "../components/topbar/topbar"

import "@styles/main.scss"
import WelcomePopup from "@components/welcomePopup/"
import { NavigationContextProvider } from "@components/navigation/NavigationContext"
import Hero from "@components/hero/hero"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>CaseIT 2022 Competitor Welcome Package & Guidebook</title>
        <meta charSet="utf-8" />
        {/* Fav icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon-16x16.png"
          sizes="16x16"
        />
        {/* <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#ff4400"
        /> */}
        <meta name="theme-color" content="#fff" />
        {/* open graph icons */}
        <meta property="og:image" content="/images/favicon-32x32.png"></meta>
      </Helmet>

      <WelcomePopup>
        <NavigationContextProvider>
          <TopBar />
          <div className="main-grid center-column">
            <div className="main-grid__nav">
              <Navigation />
            </div>
            <div className="main-grid__content">
              {/* dummy content for now */}
              <SectionMarker label="Greeting" hash="greeting" group="Welcome">
                <Hero />
              </SectionMarker>

              <SectionMarker
                label="Letter from the Prime Minister"
                hash="letter_prime"
                group="Welcome"
              >
                <div className="center-layout">
                  <h3> Letter from the Prime Minister </h3>
                  <div className="button-ctr">
                    <Button target="_blank" disabled>
                      COMING SOON
                    </Button>
                  </div>
                </div>
              </SectionMarker>
              {/* <SectionMarker
                label="Letter From the Premier"
                hash="letter_premier"
                group="Welcome"
              >
                <div className="center-layout">
                  <h3> Letter from the Premier </h3>
                  <div className="button-ctr">
                    <Button
                      href="https://drive.google.com/file/d/1PDYFtERFVBEakLZ7vfbMVv6KA1un7V_l/view?usp=sharing"
                      target="_blank"
                    >
                      English
                    </Button>
                  </div>
                </div>
              </SectionMarker> */}

              <SectionMarker
                label="Dean's Welcome"
                hash="dean_welcome"
                group="Welcome"
              >
                <h1> Dean's Welcome </h1>
                <p>
                  <a
                    href="https://vimeo.com/676018885/5f3f57e0f9"
                    target="_blank"
                  >
                    <img
                      loading="lazy"
                      src="https://i.imgur.com/aBPZkzw.png"
                      width="640"
                      height="480"
                    ></img>
                  </a>
                </p>
              </SectionMarker>
              <SectionMarker
                label="Chair's Welcome"
                hash="chair_welcome"
                group="Welcome"
              >
                <Chair />
              </SectionMarker>
              <About />
              <Overview />
              <Structure />
              <SectionMarker label="Technology" hash="tech" group="Information">
                <Tech />
              </SectionMarker>
              <SectionMarker
                label="Meet the Teams"
                hash="teams"
                group="Stakeholders"
              >
                <h1 className="display"> Meet the Teams </h1>
                <img src="images/Map.png"></img>
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
    </>
  )
}

export default Home

/*
 * A popup will show base on the provided url
 */
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { motion, AnimatePresence } from "framer-motion";
import useIsFontLoaded from "../../hooks/useIsFontLoaded";
import universityDictionary from "../../data/universityDictionary";

import "./WelcomePopup.scss";
import "./pulsingCaseitDot.scss";

const INTRO_TEXT_PAUSE_TIME = 5000; // 5 seconds
const ONLY_SHOW_WELCOME_ONCE = true;

// the animation of the text container
const container = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
      // control how fast each line pauses before the next
      staggerChildren: 1.5,
    },
  },
};

// the animation of each text item
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const WelcomePopup = ({ children }) => {
  const queryString = (() => {
    if (typeof window !== "undefined") return window.location.search;
  })();
  const universityCode = new URLSearchParams(queryString).get("uni");

  const universityName = universityDictionary[universityCode];
  const isUniversityExist = typeof universityName !== "undefined";

  // for tracking whether the user first time using the site or not
  const [cookies, setCookie, removeCookie] = useCookies(["visitor-university"]);
  useEffect(() => {
    if (isUniversityExist)
      setCookie("visitor-university", universityName, { path: "/" });
  }, [isUniversityExist, universityName, setCookie]);
  const isFirstTimeVisit = typeof cookies["visitor-university"] === "undefined";

  // for determining whether the popup should be showned or not
  const [isShowingPopup, setIsShowingPopup] = useState(
    // show popup only in the first time visit
    isFirstTimeVisit && ONLY_SHOW_WELCOME_ONCE && isUniversityExist
  );
  // for preventing Flash of unstayled text on the welcome screen
  const isFontLoaded = useIsFontLoaded();

  const onLastTextAnimationComplete = () => {
    setTimeout(() => {
      setIsShowingPopup(false);
    }, INTRO_TEXT_PAUSE_TIME);
  };

  return (
    <>
      <div>
        <AnimatePresence>
          {isShowingPopup && isFontLoaded && (
            <motion.div
              className="welcome-popup"
              exit={{ opacity: 0, transition: { delay: 0.1 } }}
            >
              <motion.div
                className="pulsing-caseit-dot"
                exit={{ opacity: 0 }}
              />
              <motion.div
                className="welcome-popup__text center-column"
                variants={container}
                initial="hidden"
                exit="hidden"
                // display nothing if the font is not loaded
                // so we are not getting the Flash of Unstyled Text effect
                animate={isFontLoaded ? "show" : "hidden"}
                // fire when the last child's animation is done
                onAnimationComplete={onLastTextAnimationComplete}
              >
                {/* The Welcome Content begins here */}
                {isFontLoaded && (
                  <>
                    <motion.p className="lead" variants={item}>
                      Welcome, {universityName}!
                    </motion.p>
                    <motion.p className="small" variants={item}>
                      We have prepared a comprehensive guide for you to navigate
                      CaseIT 2022.
                    </motion.p>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div style={{ display: isFontLoaded ? "block" : "none" }}>
        {!isShowingPopup && children}
      </div>
    </>
  );
};

export default WelcomePopup;

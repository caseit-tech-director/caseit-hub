import React, { useRef, useEffect, useState } from "react";
import { window, document } from "browser-monads"; // use brwoser monad to prevent null check in SSR
import Canvas from "./canvas";
import { setup, draw, onResize } from "./AnimatedBackground";
import "./hero.scss";

const Hero = () => {
  const containerRef = useRef();
  // alert(document.body.scrollWidth);

  const [heroWdith, setHeroWidth] = useState(window.innerWidth);
  const [heroHeight, setHeroHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => {
      alert(window.innerWidth);
      alert(window.innerHeight);
      setHeroWidth(window.innerWidth);
      setHeroHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleWindowResize);

    // trigger the initialisation of the dots
    setHeroWidth(window.innerWidth);
    setHeroHeight(window.innerHeight);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="hero">
      <h1 className="welcome">CaseIT 2021 Welcome Package</h1>
      <p>
        presented by the{" "}
        <a href="https://beedie.sfu.ca" target="_blank">
          SFU Beedie School of Business
        </a>
      </p>

      <Canvas
        draw={draw}
        setup={setup}
        onResize={onResize}
        className="hero-background"
        width={heroWdith}
        height={heroHeight}
      />
    </div>
  );
};

export default Hero;

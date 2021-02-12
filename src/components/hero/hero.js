import React, { useRef, useEffect, useState } from "react";
import Canvas from "./canvas";
import { setup, draw } from "./AnimatedBackground";
import "./hero.scss";

const Hero = () => {
  const containerRef = useRef();
  const [heroWdith, setHeroWidth] = useState(window.innerWidth);
  const [heroHeight, setHeroHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => {
      setHeroWidth(window.innerWidth);
      setHeroHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleWindowResize);

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
        className="hero-background"
        width={heroWdith}
        height={heroHeight}
      />
    </div>
  );
};

export default Hero;

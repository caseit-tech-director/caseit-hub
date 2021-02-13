import React, { useRef, useEffect, useState } from "react";
import { window, document } from "browser-monads"; // use brwoser monad to prevent null check in SSR
import Canvas from "./canvas";
import { setup, draw, onResize } from "./AnimatedBackground";
import "./hero.scss";

const Hero = () => {
  const containerRef = useRef();
  // alert(document.body.scrollWidth);

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
      />
    </div>
  );
};

export default Hero;

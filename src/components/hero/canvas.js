import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const { draw, setup, onResize, ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    let isPlaying = true;

    // for canvas initialisation
    if (typeof setup === "function") setup(context, canvas);

    const render = () => {
      if (!isPlaying) return;

      frameCount++;
      draw(context, frameCount, canvasRef.current);
      animationFrameId = window.requestAnimationFrame(render);
    };

    const startAnimation = () => {
      isPlaying = true;
      render();
    };
    const pauseAnimation = () => {
      isPlaying = false;
    };

    // play and pause canvas depends whether it is in view
    const options = {
      rootMargin: `0px 0px 0px 0px`,
    };
    const observer = new IntersectionObserver(function (entries, observer) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        // in view
        startAnimation();
      } else {
        // not in view
        pauseAnimation();
      }
    }, options);

    // observe the container to see if the section is in view
    observer.observe(canvas);

    // handle size change
    const handleResize = () => {
      if (typeof onResize === "function") onResize(context, canvas);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      observer.unobserve(canvas);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;

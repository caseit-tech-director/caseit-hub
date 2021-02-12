import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const { draw, setup, ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    // for canvas initialisation
    if (typeof setup === "function") setup(context, canvas);

    const render = () => {
      frameCount++;
      draw(context, frameCount, canvasRef.current);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;

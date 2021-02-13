import React from "react";

const YoutubeVideo = ({ src }) => (
  <div className="vid-ctr">
    <iframe
      className="video"
      src={src}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
);

export default YoutubeVideo;

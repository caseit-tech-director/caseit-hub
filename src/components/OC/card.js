import React, { Component } from "react";
import "./card.scss";
import "@styles/main.scss";
import Images from "./imageData.js"

const card = () => {
  return (
    <div className="OC-container">
    {Images.map((val) => {
      return (
        <div className="OC-profile">
          <img
            src={val}
            className="OC-profile__image"
          />
        </div>
      );
    })}
  </div>
  );
};
export default card;

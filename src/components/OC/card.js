import React, { Component } from "react";
import "./card.scss";
import "@styles/main.scss";

const card = ({img, subtitle}) => {
  return (
    <main>
        <div className="card-ctr">
            <div className="img-ctr">
                <img src={img} alt={subtitle} width="745" height="420"></img>
            </div>
            <div className="subtitle-ctr">
                <p>{subtitle}</p>
            </div>
        </div>
    </main>
  );
};
export default card;

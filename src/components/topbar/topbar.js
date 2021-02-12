import React from "react";
import "./topbar.scss";

const topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar center-column main-grid">
        <div className="logo-container main-grid__nav-bar">
          <img src="images/CaseIT_Black.png" alt="CaseIT Logo" />
        </div>
        {/* <div className="welcome-txt">
          <h4>
            CaseIT 2021 Welcome Package, Presented by the Beedie School of
            Business
          </h4>
        </div> */}
      </div>
    </div>
  );
};

export default topbar;

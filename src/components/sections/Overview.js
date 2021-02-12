import React, { Component } from "react";
import Button from "../form/Button";

import "@styles/main.scss";
import EventOverviewTemplate from "@components/weekOverview/EventOverviewTemplate";

const overview = () => {
  return (
    <article>
      <h1 className="display">Week Overview</h1>
      {/* Jenny's Video */}

      <EventOverviewTemplate
        eventName="ReadyForIT"
        dressCode="Smart Casual"
        attendance="Mandatory"
      ></EventOverviewTemplate>
      <EventOverviewTemplate
        eventName="PaintIT"
        dressCode="Smart Casual"
        attendance="Mandatory"
      ></EventOverviewTemplate>
    </article>
  );
};
export default overview;

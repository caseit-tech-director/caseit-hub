import React, { Component } from "react";
import Button from "../form/Button";

import "@styles/main.scss";
import EventOverviewTemplate from "@components/weekOverview/EventOverviewTemplate";

const overview = () => {
  return (
    <article>
      <h1 className="display">Week Overview</h1>
      {/* Jenny's Video */}
      <p className="lead">
        Jenny, the Vice-Chair of Competition Execution is excited for all of you
        to experience what we have planned for CaseIT 2021. Click onto an event
        below to see the details!
      </p>

      <EventOverviewTemplate
        eventName="ReadyForIT"
        dressCode="Smart Casual"
        attendance="Mandatory"
      >
        <p>
          ReadyForIT is the first event of the competition week, and is composed
          of two parts. The first part—the Division Draw—is mandatory for all
          coaches and case competitors to attend. The Division Draw will
          determine the competing divisions, as well as the logistics for the
          deliberation periods and presentations.
        </p>
        <p>
          The second part of the event is social, and is intended for case
          competitors to get to know one another, and participate in some
          friendly competition ahead of the academic cases. Although this
          portion of the event is only for case competitors, we invite coaches
          to attend the Coaches events, which will be held during both case
          deliberation periods.
        </p>
        <div>
          <h5>What To Expect</h5>
          <p>
            ReadyForIT will occur through two synchronous sessions. We welcome
            case competitors and coaches to attend the session that corresponds
            with their timezone stagger, as specified above.{" "}
          </p>
        </div>

        <h5>What To Bring</h5>
        <p>
          For the social component, we ask case competitors to bring an item
          that represents yourself, your school or your hometown—whether this be
          a souvenir, a school sweater, or a special personal item.
        </p>
      </EventOverviewTemplate>
      <EventOverviewTemplate
        eventName="PaintIT"
        dressCode="Smart Casual"
        attendance="Mandatory"
      ></EventOverviewTemplate>
    </article>
  );
};
export default overview;

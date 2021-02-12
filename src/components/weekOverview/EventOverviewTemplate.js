import React from "react";
import TimezonePicker from "../timezonePicker";
import EventTimes from "./EventTimes";

import "./EventOverviewTemplate.scss";

const EventOverviewTemplate = ({
  eventName,
  dressCode,
  attendance,
  children, // the content
}) => {
  const eventSessions = EventTimes[eventName];

  if (eventSessions)
    console.warn(
      `Event ${eventName} does not have a record inside EventTime.js`
    );

  return (
    <div className="event-overview">
      <h2>{eventName}</h2>
      {typeof eventSessions !== "undefined" && (
        <TimezonePicker eventSessions={eventSessions} />
      )}
      <div className="event-info-container">
        <div className="event-info">
          <div className="event-info__label">Dress Code</div>
          <div className="event-info__content">{dressCode}</div>
        </div>
        <div className="event-info">
          <div className="event-info__label">Attendance</div>
          <div className="event-info__content">{attendance}</div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default EventOverviewTemplate;

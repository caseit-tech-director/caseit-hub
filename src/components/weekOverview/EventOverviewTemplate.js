import React, { useMemo } from "react";
import TimezonePicker from "../timezonePicker";
import EventTimes from "./EventTimes";
import SectionMarker from "../navigation/SectionMarker";

import "./EventOverviewTemplate.scss";

const EventOverviewTemplate = ({
  eventName,
  dressCode,
  attendance,
  group,
  children,
  infoLabel1,
  infoLabel2,
  hashName, // the content
}) => {
  const eventSessions = EventTimes[eventName];

  if (eventSessions)
    console.warn(
      `Event ${eventName} does not have a record inside EventTime.js`
    );
  

  return (
    <SectionMarker group={group} label={eventName} hash={hashName}>
      <div className="event-overview">
        <h2>{eventName}</h2>
        {typeof eventSessions !== "undefined" && (
          <TimezonePicker eventSessions={eventSessions} />
        )}
        <div className="event-info-container">
          <div className="event-info">
            <div className="event-info__label">{infoLabel1}</div>
            <div className="event-info__content">{dressCode}</div>
          </div>
          <div className="event-info">
            <div className="event-info__label">{infoLabel2}</div>
            <div className="event-info__content">{attendance}</div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </SectionMarker>
  );
};

export default EventOverviewTemplate;

import React from "react";
import TimezonePicker from "../timezonePicker";
import EventTimes from "./EventTimes";

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
    <div>
      <h2>{eventName}</h2>
      {typeof eventSessions !== "undefined" && (
        <TimezonePicker eventSessions={eventSessions} />
      )}
      <div>
        <div>Dress Code</div>
        <div>{dressCode}</div>
      </div>
      <div>
        <div>Attendance</div>
        <div>{attendance}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default EventOverviewTemplate;

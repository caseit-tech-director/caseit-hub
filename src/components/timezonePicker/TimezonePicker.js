import React, { useState, useEffect } from "react";
import "./TimezonePicker.scss";

const TimezonePicker = ({ initialTimezone }) => {
  const timezoneData = {};

  const [currentTimezoneSetting, setCurrentTimezoneSetting] = useState();

  const [currentEventTime, setCurrentEventTime] = useState("14:00");
  const [currentEventDate, setCurrentEventDate] = useState(
    "Sunday, February 14, 2021"
  );
  const [currentSession, setCurrentSession] = useState("Session 1 Time");
  const [currentTimezone, setCurrentTimezone] = useState("Vancouver GMT-8");

  useEffect(() => {
    // update timezone setting base on current event time
  }, [currentTimezoneSetting]);

  // timezone picker
  return (
    <div className="timezone-picker">
      <div className="timezone-picker__event-time">{currentEventTime}</div>
      <div className="timezone-picker__event-date">{currentEventDate}</div>
      <div className="timezone-picker__session">{currentSession}</div>
      <div className="timezone-picker__timezone">{currentTimezone}</div>
    </div>
  );
};

export default TimezonePicker;

import React from "react";
import Button from "../components/form/Button";
import Navigation from "../components/navigation/";
import TimezonePicker from "../components/timezonePicker";

import "@styles/main.scss";

const Home = () => {
  return (
    <div className="center-column">
      <TimezonePicker
        eventSessions={[
          {
            name: "session 1",
            vancouverTime: "2021-2-14 6:00",
            timezones: ["GMT-8", "GMT+1", "GMT+7", "GMT+8"],
          },
          {
            name: "session 2",
            vancouverTime: "2021-2-14 6:00",
            timezones: ["GMT-8", "GMT-7", "GMT-6", "GMT-5"],
          },
        ]}
      />
      <TimezonePicker
        eventSessions={[
          {
            name: "session 1",
            vancouverTime: "2021-2-14 6:00",
            timezones: ["GMT-8", "GMT+1", "GMT+7", "GMT+8"],
          },
          {
            name: "session 2",
            vancouverTime: "2021-2-14 6:00",
            timezones: ["GMT-8", "GMT-7", "GMT-6", "GMT-5"],
          },
        ]}
      />
      <Navigation />
      <main>
        <h1 className="display">Display Heading</h1>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p className="lead">
          Lead: As CaseIT transitioned into a virtual case competition, the
          Organizing Committee researched various different methods to run the
          competition and decided on an event management platform called Hubilo.
        </p>
        <p>
          Body: As CaseIT transitioned into a virtual case competition, the
          Organizing Committee researched various different methods to run the
          competition and decided on an event management platform called Hubilo.
        </p>
        <p className="small">
          Small: As CaseIT transitioned into a virtual case competition, the
          Organizing Committee researched various different methods to run the
          competition and decided on an event management platform called Hubilo.
        </p>
      </main>
    </div>
  );
};

export default Home;

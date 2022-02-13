import React, { Component } from "react";
import SectionMarker from "../navigation/SectionMarker";
import "@styles/main.scss";
import YoutubeVideo from "@components/youtubeVideo/YoutubeVideo";
const Welcome = () => {
  return (
    <main>
      <h2>Chair's Welcome</h2>
      <YoutubeVideo src="https://www.youtube.com/embed/V0aajXvxx64" />
      <p>
      It is our pleasure to welcome you to CaseIT 2022. Hosted in collaboration with the Beedie School of Business at Simon Fraser University, CaseIT is the world’s premier International Undergraduate Management Information Systems Business Case Competition. CaseIT has welcomed 936 undergraduate competitors representing 49 universities from 19 different countries to compete in Vancouver since 2004.
      </p>
      <section>
        <p>
        The CaseIT 2022 Organizing Committee is composed of top students from a multitude of faculties at Simon Fraser University and strives to work humbly, innovatively, and collaboratively. Hosting the first virtual iteration of CaseIT in 2021, the CaseIT 2022 Organizing Committee is extremely excited to provide yet another unprecedented, world-class experience to all attendees.
        </p>
        <p>
        CaseIT has since developed from an internal competition, to one of the most prestigious undergraduate MIS case competitions in the world. Upholding the ambition, tenacity, and insatiable curiosity of our international competitors, CaseIT’s mission is to provide an unparalleled, rigorous, and engaging competition for talented business students to challenge themselves on an international stage. Not only will this talented cohort showcase their analytical skills and technology expertise, but they will be engaged in building meaningful global connections.
        </p>
        <p>Sincerely,</p>
        <img
          width="100px"
          className="signature"
          src="images/Emily_Kim_sign.jpg"
          loading="lazy"
        ></img>
      </section>
      {/* <article>
        <h4>Vancouver</h4>
        <p>
          Enter the gateway to the Asia-Pacific market and connect with a vast
          network of financial sponsors and corporate representatives from the
          Vancouver business community. Our local partnerships spark creativity,
          challenge the status quo, and provide invaluable insight for
          international competitors.
        </p>
      </article> */}
      {/* <article>
        <h4>Global</h4>
        <p>
          Build meaningful global relationships and connections with over 350
          CaseIT stakeholders throughout the week-long competition, including
          more than 70 corporate representatives from the Vancouver business
          community, competitors, and faculty from 15 other universities.
        </p>
        <p>
          We are excited to have you compete at our case competition. We hope
          that you are able to challenge yourselves, step outside of your
          comfort-zone, acquire expertise, and achieve personal growth to reach
          your greatest potential. Our team is ecstatic to connect and share
          with you our experiences alongside 60 other competitors.
        </p>
        <p>Sincerely, </p>
        <img
          className="signature"
          src="images/jordan_sign.png"
          loading="lazy"
        ></img>
        <p>Jordan</p>
      </article> */}
    </main>
  );
};
export default Welcome;

import React, { Component } from "react"
import Button from "../form/Button"
import SectionMarker from "../navigation/SectionMarker"

import "@styles/main.scss"

const structure = () => {
  return (
    <main>
      <h1 className="display"> Competition Structure </h1>
        <p className="lead">
          Are you in it to win it? We lay out all you need to know case
          structure, advancement, and this year’s competition rules.
        </p>
      <SectionMarker
        group="Competition Structure"
        hash="case_advancement"
        label="Cases and Advancement"
      >
        <section>
          <h2> CaseIT 2021 Cases and Advancement </h2>
          <p>
            This year, we have two unique cases for competitors to tackle. Case
            I has an 8-hour long deliberation period and is weighted at 40%.
            Case II has a 24-hour long deliberation period and is weighted at
            60%.
          </p>
          <p>
            To win it all at CaseIT 2021, teams must do well in both cases as
            the winner is based on the combined Case I and Case II scores. Below
            is the advancement structure for CaseIT 2021.
          </p>
          <img className="image" src="images/comp_advancement.png" alt="Competition Advancement"></img>
          <img className="image" src="images/comp_structure.png" alt="Competition Structure"></img>
        </section>
      </SectionMarker>
      <SectionMarker
        group="Competition Structure"
        hash="rules"
        label="CaseIT 2021 Rules"
      >
        <section>
          <h2> Rules </h2>
          <p>
            {" "}
            The CaseIT 2021 rules have been revamped to accommodate the new
            virtual and remote competition format. The details can be found in
            the CaseIT 2021 Official Rules document.{" "}
          </p>
          <p>
            {" "}
            Any questions leading up to and during competition regarding the
            rules will be addressed on the CaseIT 2021 Official FAQ living
            document which will be updated regularly.{" "}
          </p>
          <div className="button-ctr">
            <Button
              href="https://drive.google.com/file/d/14l72Ocfbe-dT3KTgBN_wm_B1sSyiVzsE/view?usp=sharing"
              target="_blank"
            >
              {" "}
              RULES{" "}
            </Button>
            <Button
              href="https://docs.google.com/document/d/1YcvvITpnLyUXdd3d7Gryr5AFe16diXII_UszVLB33Q8/edit?usp=sharing"
              target="_blank"
            >
              {" "}
              FAQ{" "}
            </Button>
          </div>
          <p>
            {" "}
            In addition to these resources, the Competition Execution team will
            be hosting and streaming two Rules Office Hour sessions on Hubilo to
            answer questions from teams directly. Attendees are able to ask
            their questions in chat for the Competition Execution team to answer
            in real time. These office hours will take place immediately after
            the ReadyForIT event on the first day of the competition.{" "}
          </p>
          <p>
            <ul>
              Session 1:
              <li>Date: Sunday, February 14</li>
              <li>Time: 08:00 - 09:00 PST </li>
            </ul>
            <ul>
              Session 2:
              <li>Date: Sunday, February 14</li>
              <li>Time: 14:00 - 15:00 PST </li>
            </ul>
          </p>
        </section>
      </SectionMarker>
      <SectionMarker
        group="Competition Structure"
        hash="spirit"
        label="Spirit Awards"
      >
        <h2> Spirit Award </h2>
        <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/2hEJygi2Pf8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>
          The team that best represents the values and spirit of camaraderie,
          enthusiasm, and dedication will be awarded the Team Spirit Award. This
          award will be presented to the competing team with the highest
          cumulative spirit score, based on attendance, performance, and
          engagement throughout the competition week.
        </p>
        <div className="button-ctr">
          <Button
            href="https://drive.google.com/file/d/1LXfQ-zyq68RLcycQ2UUP-GSNa0f9EH7W/view?usp=sharing"
            target="_blank"
          >
            POINTS
          </Button>
          <Button
            href="https://drive.google.com/file/d/1Uirqqp4lHt9V3bXfzfsk1UESiGg3HISv/view?usp=sharing"
            target="_blank"
          >
            CHALLENGES
          </Button>
        </div>
      </SectionMarker>
    </main>
  )
}
export default structure

import React, { Component } from "react"
import Button from "../form/Button"
import SectionMarker from "../navigation/SectionMarker"
import YoutubeVideo from "../youtubeVideo/YoutubeVideo"

import "@styles/main.scss"

const structure = () => {
  return (
    <main>
      <h1 className="display"> Competition Structure </h1>
      <p className="lead">
        Are you in it to win it? We lay out all you need to know case structure,
        advancement, and this year’s competition rules.
      </p>
      <img
        className="image"
        src="images/comp_structure.png"
        alt="Competition Structure"
        loading="lazy"
      ></img>
      <SectionMarker
        group="Competition Structure"
        hash="case_advancement"
        label="Cases and Advancement"
      >
        <section>
          <h2> CaseIT 2022 Cases and Advancement </h2>
          <p>
            This year, we have two unique cases for competitors to tackle. Case
            I has a 5-hour long deliberation period and is weighted at 40%. Case
            II has a 24-hour long deliberation period and is weighted at 60%.
          </p>
          <p>
            To win it all at CaseIT 2022, teams must do well in both cases as
            the winner is based on the combined Case I and Case II scores. Below
            is the advancement structure for CaseIT 2022.
          </p>
          <img
            className="image"
            src="images/comp_advancement.png"
            alt="Competition Advancement"
            loading="lazy"
          ></img>
        </section>
      </SectionMarker>
      <SectionMarker
        group="Competition Structure"
        hash="rules"
        label="CaseIT 2022 Official Rules Package"
      >
        <section>
          <h2> CaseIT 2022 Official Rules Package </h2>
          <ul>
            <li>Date: Sunday, February 20</li>
            <li>Time: 08:00 - 09:00 AM PST</li>
          </ul>
          <div className="button-ctr">
            <Button
              href="https://www.google.com/url?q=https://drive.google.com/file/d/1yEATQYg6BQMF-v7f1viMRqN-oMLkcYKq/view?usp%3Ddrivesdk&sa=D&source=docs&ust=1644759995237881&usg=AOvVaw2nb5PZCeVs8KYzv893W3Wu"
              target="_blank"
            >
              {" "}
              RULES{" "}
            </Button>
          </div>
        </section>
      </SectionMarker>
      <SectionMarker
        group="Competition Structure"
        hash="spirit"
        label="Spirit Awards"
      >
        <h2> Spirit Award </h2>
        <YoutubeVideo src="https://www.youtube.com/embed/2hEJygi2Pf8" />
        <p>
          The team that best represents the values and spirit of camaraderie,
          enthusiasm, and dedication will be awarded the Team Spirit Award. This
          award will be presented to the competing team with the highest
          cumulative spirit score, based on attendance, performance, and
          engagement throughout the competition week.
        </p>
        <div className="button-ctr">
          <Button
            href="https://drive.google.com/file/d/1tnrAasd6KHMvYYoXsh3v8ElHl0u4zpOE/view?usp=sharing"
            target="_blank"
          >
            POINTS
          </Button>
        </div>
      </SectionMarker>
    </main>
  )
}
export default structure

import React, { Component } from "react"
import Button from "../form/Button"
import SectionMarker from "../navigation/SectionMarker"
import YoutubeVideo from "../youtubeVideo/YoutubeVideo"
import EventOverviewTemplate from "@components/weekOverview/EventOverviewTemplate"

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
            src="images/2022/2022comp_advancement.png"
            alt="Competition Advancement"
            loading="lazy"
          ></img>
        </section>
      </SectionMarker>
      <SectionMarker group="Competition Structure" hash="rules" label="Rules">
        <section>
          <h2> Rules </h2>
          <p>
            The official competition rules for CaseIT 2022 is linked below and
            will also be provided in each team’s assigned Google Drive folders,
            which will be made accessible during deliberation periods.{" "}
          </p>
          <p>
            Please review this document prior to competition week and be advised
            that there will be an opportunity for teams and coaches to ask
            questions at our synchronous Rules Office Hours. The Zoom link to
            join for this event can be found in both competitor and coach’s
            Google Calendars.
          </p>
        </section>
      </SectionMarker>

      <EventOverviewTemplate
        group="Competition Structure"
        eventName="CaseIT 2022 Official Rules Package"
        hashName="competition_structure"
      >
        <p>If you have any questions regarding the competition, please feel free to drop by our optional Rules Office Hours</p>
        <div className="button-ctr">
          <Button
            href="https://drive.google.com/file/d/1yEATQYg6BQMF-v7f1viMRqN-oMLkcYKq/view?usp=drivesdk"
            target="_blank"
          >
            RULES
          </Button>
        </div>
      </EventOverviewTemplate>
      <SectionMarker
        group="Competition Structure"
        hash="spirit"
        label="Spirit Awards"
      >
        <h2> Spirit Award </h2>
        <YoutubeVideo src="https://www.youtube.com/embed/3IG80NauwRg" />
        <p>
          The team that best represents the values and spirit of camaraderie,
          enthusiasm, and dedication will be awarded the Team Spirit Award. This
          award will be presented to the competing team with the highest
          cumulative spirit score, based on attendance, performance, and
          engagement throughout the competition week. This includes, but is not
          limited to:
        </p>
        <ul>
          <li>
            Engaging in pre-competition week opportunities including the
            University Introduction Contest and Team Host connections
          </li>
          <li>
            Participating in non-case related activities throughout the week
            including MixIT, PlayIT and Discover Vancouver{" "}
          </li>
          <li>
            Posting on social media throughout the competition week, using event
            hashtags and tagging @caseitsfu, and participating in social media
            engagement challenges{" "}
          </li>
          <li>
            Engaging in positive interactions with CaseIT 2022 stakeholders and
            encouragement toward other competing teams{" "}
          </li>
        </ul>
        <p>#ShareIT Week-long Bingo Challenge</p>
        <p>
          To obtain your full points for the #ShareIT Bingo Challenge, submit
          your photos/screenshots/proof of completion with the title of the
          challenge (only 1 photo needed per bingo square) in a Google Folder to
          caseit@sfu.ca. Additional rules and the bingo template can be found on
          @caseitsfu Instagram highlights.
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

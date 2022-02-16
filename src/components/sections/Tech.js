import React, { Component } from "react"
import Button from "../form/Button"

import "@styles/main.scss"

const tech = () => {
  return (
    <main>
      <h1 className="display"> Technology </h1>
      <section>
        <p>
          As CaseIT transitioned into a virtual case competition, the Organizing
          Committee researched various different methods to run the competition
          and decided on an event management platform called Hubilo which can be
          accessed through:
          <a
            href="https://events.hubilo.com/caseit-2022---the-worlds-premier-mis-case-competition"
            target="blank"
          >
            https://events.hubilo.com/caseit-2022---the-worlds-premier-mis-case-competition
          </a>
          Hubilo is an event management platform that is integrated with Zoom.
          Competitors will be either redirected to a Zoom room to join their
          event or presentation, or will be able to view the event through a
          live-stream hosted on Hubilo.
        </p>
        <p>
          This platform allows the entirety of the competition week to be hosted
          on one platform exclusive to the stakeholders of CaseIT with increased
          organization and engagement.
        </p>
      </section>

      <img
        className="image"
        src="images/2022/hubilo-agenda.png"
        alt="Hubilo Agenda"
        loading="lazy"
      ></img>
      <section>
        <h5> Main Features of Hubilo</h5>
        <ul>
          <li>
            <strong>Reception</strong>:The landing page for the competition week
            that greets the competitors and summarizes the competition week and
            CaseIT. The reception showcases the main events and highlights of
            the competition week.
          </li>
          <li>
            <strong>Agenda</strong>: Showcases the schedule for the competition
            week. Competitors will be able to access their presentation rooms as
            well as the rooms for any events through the agenda with one easy
            click.
          </li>
          <li>
            <strong>Event Feed</strong>: A “social media wall” for the
            competitors to interact with each other by writing posts, sharing
            pictures or videos, and liking and commenting on each other's posts.
            Important announcements and updates from the Organizing Committee
            will also be posted through the Event Feed, so make sure to keep an
            eye out for posts by the Organizing Committee throughout the week!
          </li>
          <li>
            <strong>Virtual Booths</strong>: Booths from the sponsors that made
            this competition a reality will be showcased through the
            “Exhibitors” page. Check out these booths for more information about
            these sponsors.
          </li>
          <li>
            <strong>Chat and Meet</strong>: Competitors can private message
            another competitor or Organizing Committee member through a private
            messaging system on the platform. Competitors may also request to
            “meet” with another competitor or Organizing Committee member
            through a video-calling system on the platform.
          </li>
        </ul>
      </section>
      <section>
        <p>
          <strong>How to Access CaseIT</strong>:
        </p>
        <ul>
          The log-in information for each attendee is as follows:
          <li>Log-in: School Email</li>
          <li>Log-in Code: CaseIT2022</li>
        </ul>
        <p>
          All competitors and coaches can access the platform through the link:
        </p>
        <div className="button-ctr">
          <Button
            href="https://events.hubilo.com/caseit-2022---the-worlds-premier-mis-case-competition"
            target="_blank"
          >
            {" "}
            HUBILO{" "}
          </Button>
        </div>
        <div className="button-ctr">
          <Button
            href="https://drive.google.com/file/d/1KHMn4GUyM9C1ocEFjP97EHB03I6UDvJJ/view"
            target="_blank"
          >
            TECHNOLOGY REQUIREMENTS GUIDE
          </Button>
        </div>
      </section>
    </main>
  )
}
export default tech

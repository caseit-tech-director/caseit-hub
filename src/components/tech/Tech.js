import React, { Component } from "react"
import Button from "../form/Button"

import "@styles/main.scss"

const overview = () => {
  return (
    <main>
      <h1 className="display"> Technology </h1>
      <section>
        <p>
          As CaseIT transitioned into a virtual case competition, the Organizing
          Committee researched various different methods to run the competition
          and decided on an event management platform called Hubilo which can be
          accessed through: https://caseit2021.hubilo.com/community/. Hubilo is
          an event management platform that is integrated with Zoom. Competitors
          will be either redirected to a Zoom room to join their event or
          presentation, or will be able to view the event through a live-stream
          hosted on Hubilo.
        </p>
        <p>
          {" "}
          This platform allows the entirety of the competition week to be hosted
          on one platform exclusive to the stakeholders of CaseIT with increased
          organization and engagement.{" "}
        </p>
      </section>
      <section>
        <ul>
          Main Features of Hubilo
          <li>
            Reception: The landing page for the competition week that greets the
            competitors and summarises the competition week and CaseIT. The
            reception showcases the main events and highlights of the
            competition week.
          </li>
          <li>
            Event Feed: A “social media wall” for the competitors to interact
            with each other by writing posts, sharing pictures or videos, and
            liking and commenting on each other's posts. Important announcements
            and updates from the Organizing Committee will also be posted
            through the Event Feed, so make sure to keep an eye out for posts by
            the Organizing Committee throughout the week!
          </li>
          <li>
            Agenda: Showcases the schedule for the competition week. Competitors
            will be able to access their presentation rooms as well as the rooms
            for any events through the agenda with one easy click.
          </li>
          <li>
            Sponsor Booths: Booths from the sponsors that made this competition
            a reality will be showcased through the “Sponsors” page. Check out
            these booths for more information about these sponsors.
          </li>
          <li>
            Chat and Meet: Competitors can private message another competitor or
            Organizing Committee member through a private messaging system on
            the platform. Competitors may also request to “meet” with another
            competitor or Organizing Committee member through a video-calling
            system on the platform.
          </li>
        </ul>
      </section>
      <section>
        <p>How to Access CaseIT:</p>
        <ul>
          The log-in information for each attendee is as follows:
          <li>Log-in: School Email</li>
          <li>Log-in Code: CaseIT2021</li>
        </ul>
        <p>
          All competitors and coaches can access the platform through the link:
          https://caseit2021.hubilo.com/community/
        </p>
        <p>
          The CaseIT Organizing Committee has also created a Technology
          Requirements Guide for a more in-depth look into the different online
          applications used, as well as tips to optimize competitors technology
          performance throughout the competition week. These tips include how to
          access the live chat function, how to navigate through the Hubilo
          platform, and many more.
        </p>
      </section>
    </main>
  )
}
export default overview

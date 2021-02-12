import React, { Component } from "react"
import SectionMarker from "../navigation/SectionMarker"

import "@styles/main.scss"
import EventOverviewTemplate from "@components/weekOverview/EventOverviewTemplate"

const overview = () => {
  return (
    <article>
      <SectionMarker
        label="Overview"
        hash="week_overview"
        group="Week Overview"
      >
        <h1 className="display">Week Overview</h1>
        <p className="lead">
          Jenny, the Vice-Chair of Competition Execution is excited for all of
          you to experience what we have planned for CaseIT 2021. Click onto an
          event below to see the details!
        </p>
        <iframe
          className="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IKbDLNhWypE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </SectionMarker>

      <EventOverviewTemplate
        eventName="ReadyForIT"
        dressCode="Smart Casual"
        attendance="Mandatory"
        hashName="ready_for_it"
      >
        <p>
          ReadyForIT is the first event of the competition week, and is composed
          of two parts. The first part—the Division Draw—is mandatory for all
          coaches and case competitors to attend. The Division Draw will
          determine the competing divisions, as well as the logistics for the
          deliberation periods and presentations.
        </p>
        <p>
          The second part of the event is social, and is intended for case
          competitors to get to know one another, and participate in some
          friendly competition ahead of the academic cases. Although this
          portion of the event is only for case competitors, we invite coaches
          to attend the Coaches events, which will be held during both case
          deliberation periods.
        </p>
        <div>
          <h5>What To Expect</h5>
          <p>
            ReadyForIT will occur through two synchronous sessions. We welcome
            case competitors and coaches to attend the session that corresponds
            with their timezone stagger, as specified above.{" "}
          </p>
        </div>

        <h5>What To Bring</h5>
        <p>
          For the social component, we ask case competitors to bring an item
          that represents yourself, your school or your hometown—whether this be
          a souvenir, a school sweater, or a special personal item.
        </p>
      </EventOverviewTemplate>
      <EventOverviewTemplate
        eventName="PaintIT"
        dressCode="Casual"
        attendance="Highly Recommended"
        hashName="paint_it"
      >
        <p>
          In between the two cases, take a moment to unwind and connect with
          fellow-case competitors and team hosts at PaintIT, a Vancouver-themed
          paint event! PaintIT is also an opportunity for case competitors to
          learn more about what Vancouver has to offer, in both its art scene
          and landscapes.
        </p>

        <h5>What To Expect</h5>
        <p>
          <ul>
            <li>
              PaintIT will occur through two synchronous sessions. We welcome
              case competitors to attend the session that corresponds with their
              timezone stagger.
            </li>
            <li>
              Breakout room rotations will allow case competitors to have casual
              conversations with other case competitors and team hosts while
              they work away at their paintings.
            </li>
            <li>
              A post-event gallery walk will allow case competitors to showcase
              their artwork and creativity, while contributing to their team’s
              spirit point score! This will be facilitated through the “Event
              Feed” tab on the event platform.
            </li>
          </ul>
        </p>

        <h5>What To Bring</h5>
        <p>
          Everything you need to create beautiful, original artwork, was sent in
          the competitor welcome boxes. If your package did not arrive in-time,
          please reach out to our team for the opportunity to create digital art
          at PaintIT!
        </p>
      </EventOverviewTemplate>
      <EventOverviewTemplate
        eventName="RaceIT: A Virtual Amazing Race"
        dressCode="Casual"
        attendance="Highly Recommended"
        hashName="race_it"
      >
        <p>
          RaceIT: A Virtual Amazing Race, allows teams to discover some of
          Vancouver’s iconic landmarks and neighbourhoods in a virtual
          environment. This is an asynchronous activity, which means that your
          team can complete RaceIT at a convenient time during one of the first
          four days of the competition.
        </p>
        <h5>What To Expect</h5>
        <p>
          <ul>
            <li>
              RaceIT puts your problem-solving skills and agility to the test.
              Teams will solve clues and complete activities to advance to the
              next leg of the race, and finally, to the finish line!
            </li>
            <li>
              RaceIT will be facilitated by your Team Host, and the rankings
              will be posted on the event platform prior to the end of the
              competition week.
            </li>
          </ul>
        </p>

        <h5>What To Bring</h5>
        <p>
          Please communicate with your Team Host as to the time and date that
          your team wishes to partake in RaceIT. Your Team Host will then send a
          meeting link where the race will occur.
        </p>
      </EventOverviewTemplate>
      <EventOverviewTemplate
        eventName="Sponsor Networking"
        dressCode="Business Casual"
        attendance="Highly Recommended"
        hashName="networking"
      >
        <p>
          We are delighted to present Sponsor Networking at CaseIT 2021, which
          will be facilitated through “coffee chat” style networking sessions.
          These sessions will pair an industry professional from one of our
          sponsor companies with a case competitor from one of our competing
          universities. This event connects top business students from around
          the world with industry professionals that have experience in various
          fields of business and technology.
        </p>

        <h5>What To Expect</h5>
        <ul>
          <li>
            Sponsor Networking sessions will be one-on-one conversations between
            industry professionals and case competitors. This is an opportunity
            to make a meaningful connection with the industry professional that
            you sign-up to network with.
          </li>
          <li>Please refrain from disclosing your school during your chat.</li>
          <li>
            A meeting link and session confirmation email will be sent to
            participants.
          </li>
          <li>Sessions will last for 20 minutes.</li>
        </ul>

        <h5>What To Bring</h5>
        <p>
          Questions tailored to the field/industry of the professional you are
          networking with
        </p>

        <h5>How to Join</h5>
        <ul>
          <li>
            Sign up for a networking session, a sign-up link will be set out.{" "}
          </li>
          <li>
            Read the sponsor representative profiles to prepare for your
            networking session.
          </li>
        </ul>
      </EventOverviewTemplate>
      <EventOverviewTemplate
        eventName="Awards Ceremony"
        dressCode="Smart casual, or as you would dress for an awards banquet!"
        attendance="Highly Recommended"
        hashName="awards_ceremony"
      >
        <p>
          The Awards Ceremony concludes the CaseIT 2021 competition week, and is
          a time to celebrate your achievements and hard work leading up to and
          throughout the competition week! Additionally, the winners of CaseIT
          2021 will be announced and recognized.
        </p>
        <h5>What To Expect</h5>
        <p>Speeches, awards, and so much more!</p>
      </EventOverviewTemplate>
    </article>
  )
}
export default overview

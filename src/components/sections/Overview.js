import React, { Component } from "react"
import SectionMarker from "../navigation/SectionMarker"

import "@styles/main.scss"
import EventOverviewTemplate from "@components/weekOverview/EventOverviewTemplate"
import YoutubeVideo from "@components/youtubeVideo/YoutubeVideo"

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
          Rachel Dee, the Vice-Chair of Competition Execution is excited for all
          of you to experience what we have planned for CaseIT 2022. Keep
          reading to see what to expect!
        </p>
        <YoutubeVideo src="https://www.youtube.com/embed/EMaJdk_iEds" />
      </SectionMarker>

      <SectionMarker
        label="Competition Schedule"
        hash="schedule"
        group="Week Overview"
      >
        <h2> Competition Schedule </h2>
        <img
          src="images/schedule_NA.png"
          alt="North America Schedule"
          loading="lazy"
        ></img>
        <img
          src="images/schedule_EU-or-ASIA.png"
          alt="EU or Asia Schedule"
          loading="lazy"
        ></img>
      </SectionMarker>

      <EventOverviewTemplate
        eventName="ReadyForIT"
        dressCode="Smart Casual"
        attendance="Mandatory"
        hashName="ready_for_it"
      >
        <h5>Description</h5>
        <p>
          ReadyForIT is the first event of the competition week, and consists of
          welcome remarks, introductions and the Division Draw. This event is
          mandatory for all coaches and case competitors to attend. The Division
          Draw will determine the competing divisions, as well as the logistics
          for the deliberation periods and presentations.
        </p>
        <div>
          <h5>How to Join?</h5>
          <img
            src="images/2022/hubilo.png"
            alt="EU or Asia Schedule"
            loading="lazy"
          ></img>
        </div>
      </EventOverviewTemplate>

      <EventOverviewTemplate
        eventName="PlayIT"
        dressCode="Casual"
        attendance="Highly Recommended"
        hashName="play_it"
      >
        <h5>Date and Times</h5>
        <p>
          <ul>
            <li>Sunday, February 20, 2022 at 12:00PM PST</li>
            <li>Monday, February 21, 2022 at 2:00PM PST</li>
            <li>Wednesday, February 23, 2022 at 9:00AM PST</li>
            <li>Friday, February 25, 2022 at 8:00PM PST</li>
          </ul>
        </p>
        <h5>Description</h5>
        <p>
          PlayIT is a casual, social event intended for case competitors to get
          to know one another, and participate in some friendly competition
          ahead of the academic cases. Participation is highly recommended as
          competitors will be awarded spirit points throughout the event!
        </p>

        <h5>What To Expect</h5>
        <p>
          There will be various multiplayer games to join using the platform,
          Discord. There will be separate voice calls and channels to join when
          playing the virtual games that are prepared for the competitors and
          team hosts. All of the games will include a host who will explain the
          rules and moderate the games.
        </p>

        <h5>How to Join?</h5>
        <p>
          <ul>
            <li>
              Create a Discord account and join using the following link:
              <a href="https://discord.gg/a38SB3nP6T" target="_blank">
                https://discord.gg/a38SB3nP6T
              </a>
            </li>
            <li>
              Naming Convention: First Name, Last Initial - School Abbreviation
            </li>
            <li>
              To change your discord server name, follow the instructions
              provided here:
              <a
                href="https://www.businessinsider.com/how-to-change-nickname-on-discord"
                target="_blank"
              >
                https://www.businessinsider.com/how-to-change-nickname-on-discord
              </a>
            </li>
          </ul>
        </p>
      </EventOverviewTemplate>
      <EventOverviewTemplate
        eventName="Discover Vancouver: A Virtual Scavenger Hunt"
        dressCode="Casual"
        attendance="Highly Recommended"
        hashName="discover_it"
      >
        <h5>Description</h5>
        <p>
          Take a tour through downtown Vancouver by partaking in a virtual
          scavenger hunt with your team! Teams will be able to discover some of
          Vancouver’s iconic landmarks and neighbourhoods through Google Maps by
          solving riddles and racing to finish the scavenger hunt the fastest.
          The team that finishes with the quickest time will earn major spirit
          points!
        </p>
        <h5>What To Expect</h5>
        <p>
          <ul>
            <li>
              Discover Vancouver puts your problem-solving skills and agility to
              the test. Teams will solve clues to advance to the next leg of the
              scavenger hunt, and finally, to the finish line!
            </li>
            <li>
              This event will be facilitated by your Team Host in Zoom breakout
              rooms
            </li>
          </ul>
        </p>
      </EventOverviewTemplate>
      <EventOverviewTemplate
        eventName="MixIT - Mocktail Night"
        dressCode="Casual"
        attendance="Highly Recommended"
        hashName="mix_it"
      >
        <h5>Date and Times</h5>
        <p>
          <ul>
            <li>Monday, February 21, 2022 at 12:00PM PST</li>
          </ul>
        </p>
        <h5>Description</h5>
        <p>
          Before the two cases, take a moment to unwind and connect with fellow
          case competitors and team hosts at MixIT, a mocktail night event! You
          will be provided a mocktail kit and will be creating drinks together
          over a virtual Mocktail Happy Hour!
        </p>

        <h5>What To Expect</h5>
        <ul>
          <li>
            MixIT will occur for two hours. There will be guided instruction on
            how to create your mocktails hosted over Zoom.
          </li>
          <li>
            There will be breakout rooms with question prompts for teams to
            engage with each other in a casual setting while sipping on
            delicious mocktails.
          </li>
        </ul>

        <h5>What To Bring</h5>
        <ul>
          <li>
            The mocktail kits will include four different flavors of Craftmix
            packets that will help teams create their mocktails. There will also
            be some other items included to help competitors during the MixIT
            event!
          </li>
          <li>
            If possible, competitors are recommended to bring a bottle of
            flavored or unflavored sparkling water to the event.{" "}
          </li>
        </ul>
      </EventOverviewTemplate>
      <EventOverviewTemplate
        eventName="Sponsor Networking"
        dressCode="Business Casual"
        attendance="Highly Recommended"
        hashName="awards_ceremony"
      >
        <h5>Description</h5>
        <p>
          We are delighted to present Sponsor Networking at CaseIT 2022, which
          will allow our competitors to connect with numerous industry
          professionals. Those who sign up for our Networking Coffee Chats, will
          be placed in a group with other competitors, which would then rotate
          together through 4 different Industry professional’s breakout rooms.
          This event connects top business students from around the world with
          industry professionals that have experience in various fields of
          business and technology.
        </p>

        <h5>What To Expect</h5>
        <ul>
          <li>
            Competitors can expect to receive a sign-up sheet from their team
            hosts, which would then enroll them in our Sponsor Networking Coffee
            Chats. A meeting link and session confirmation email will be sent to
            participants prior to the competitions.
          </li>
          <li>Sessions will last for 15 minutes</li>
        </ul>

        <h5>What to Bring</h5>
        <p>
          Questions tailored to the field/industry of the professional you are
          networking with.
        </p>
        <h5>What to Do</h5>
        <ul>
          <li>Fill out Sign-Up Google Form sent to you by your Team Host</li>
          <li>
            Build a profile on the Industry Professionals you are meeting.
          </li>
        </ul>
      </EventOverviewTemplate>
      <EventOverviewTemplate
        eventName="Coaches Event"
        dressCode="Smart Casual"
        attendance="Highly Recommended"
        hashName="awards_ceremony"
      >
        <h5>Date and Times</h5>
        <p>
          <ul>
            <li>Thursday, February 24 at 10:00 AM PST</li>
          </ul>
        </p>
        <h5>Description</h5>
        <p>
          This event is to provide coaches with the opportunity to form and
          build connections with other fellow coaches, while participating in
          activities and conversations. Activities will include icebreakers,
          trivia and breakout rooms to be able to chat with others in smaller
          settings.
        </p>
      </EventOverviewTemplate>
      <EventOverviewTemplate
        eventName="Awards Banquet"
        dressCode="Semi-Formal or Gala Attire"
        attendance="Mandatory"
        hashName="awards_ceremony"
      >
        <h5>Date and Times</h5>
        <p>
          <ul>
            <li>Friday, February 25, 2022 at 7:00PM PST</li>
          </ul>
        </p>
        <h5>Description</h5>
        <p>
          The Awards Ceremony concludes the CaseIT 2022 competition week, and is
          a time to celebrate your achievements and hard work leading up to and
          throughout the competition week! Additionally, the winners of CaseIT
          2022 will be announced and recognized.
        </p>
        <h5>What to Expect</h5>
        <p>
          The Awards Banquet will feature various speeches from CaseIT 2022
          sponsors, SFU Beedie faculty members, and CaseIT organizing committee
          members. This event will recognize the achievements of the CaseIT 2022
          competing teams and ultimately announce the winning teams of CaseIT
          2022.
        </p>
      </EventOverviewTemplate>
    </article>
  )
}
export default overview

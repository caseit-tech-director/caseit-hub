import React, { Component } from "react"
import Button from "../form/Button"

import "@styles/main.scss"

const structure = () => {
  return (
    <main>
        <h1 className="display"> Competition Structure </h1>
        {/* Kyle's Video */}
        <section>
            <h4> CaseIT 2021 Cases and Advancement </h4>
            <p> This year, we have two unique cases for competitors to tackle. Case I has an 8-hour long deliberation period and is weighted at 40%. Case II has a 24-hour long deliberation period and is weighted at 60%. </p>
            <p> To win it all at CaseIT 2021, teams must do well in both cases as the winner is based on the combined Case I and Case II scores. Below is the advancement structure for CaseIT 2021. </p>
            {/* Advancement graphic? */}
        </section>
        <section>
            <h4> Rules </h4>
            <p> The CaseIT 2021 rules have been revamped to accommodate the new virtual and remote competition format. The details can be found in the CaseIT 2021 Official Rules document. </p>
            <p> Any questions leading up to and during competition regarding the rules will be addressed on the CaseIT 2021 Official FAQ living document which will be updated regularly. </p>
            <p> In addition to these resources, the Competition Execution team will be hosting and streaming two Rules Office Hour sessions on Hubilo to answer questions from teams directly. Attendees are able to ask their questions in chat for the Competition Execution team to answer in real time. These office hours will take place immediately after the ReadyForIT event on the first day of the competition.  </p>
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
        </section>
    </main>
  )
}
export default structure

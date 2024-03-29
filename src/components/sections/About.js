import React, { Component } from "react"
import SectionMarker from "../navigation/SectionMarker"
import "@styles/main.scss"

const about = () => {
  return (
    <main>
      <h1 className="display"> About The Competition </h1>
      <SectionMarker group="About" hash="about_caseit" label="About CaseIT">
        <section>
          <h2> About CaseIT </h2>
          <p>
            CaseIT is the premier international management information systems
            (MIS) business case competition hosted each year in collaboration
            with the{" "}
            <a href="https://beedie.sfu.ca" target="_blank">
              Beedie School of Business
            </a>{" "}
            in Vancouver, Canada. CaseIT brings together top undergraduate
            business students, distinguished faculty members, experienced
            industry professionals, and a dedicated student-run organizing
            committee to challenge conventional thinking and build global
            connections. The competition provides a rigorous platform to test
            students’ critical business case analysis capabilities and empower
            students to present with confidence in front of esteemed industry
            professionals on an international stage.{" "}
          </p>
          <p>
            This year, CaseIT takes place virtually over the course of six days
            in February. During this time, competitors engage in an intense week
            of competition that includes a preliminary round of two cases; a
            wildcard round; and a final presentation that showcases the top five
            teams’ case solving capabilities. In each round, students present to
            a panel of judges made up of industry experts. CaseIT aims to
            provide competitors with one of the pinnacle experiences of their
            undergraduate degree, enabling them to apply academic knowledge in a
            real-life context at one of the most prestigious MIS-themed case
            competitions in the world.
          </p>
        </section>
      </SectionMarker>
      <SectionMarker group="About" hash="about_sfu" label="About SFU">
        <article>
          <h2> About SFU </h2>
          <p>
            Since its inception, the Beedie School of Business at Simon Fraser
            University has championed lifelong learning, innovation, and
            impactful change as we continue to provide education and research to
            benefit both our local and global communities. We have achieved
            considerable success, as confirmed by our accreditation by the AACSB
            (Association to Advance Collegiate Schools of Business) and our
            reception of the EQUIS Quality Award from the EFMD (European
            Foundation for Management Development). The Beedie School of
            Business is proudly included in the less than 1% of business schools
            worldwide to have earned both of these esteemed recognitions.
          </p>
          <p>
            The Beedie School of Business is currently within the top 100
            universities in business research output worldwide. Furthermore, our
            undergraduate, graduate, and Ph.D. programs demonstrate a unique
            innovative spirit to facilitate dynamism and sustain relevance.
            Supported by extensive sponsorships with public, private, and
            nonprofit organizations, our objective is to produce broadly and
            deeply educated, enterprising, and socially conscious individuals,
            eager and able to make meaningful and enduring contributions to
            their communities.
          </p>
          <p>
            The Beedie School of Business operates across three campuses —
            Vancouver, Burnaby, and Surrey — hosting over 3,800 undergraduate
            BBA students, 700 graduate and MBA students, and a thriving Ph.D.
            program.
          </p>
          <p>
            For more information, please visit{" "}
            <a href="https://beedie.sfu.ca" target="_blank">
              beedie.sfu.ca
            </a>{" "}
          </p>
        </article>
      </SectionMarker>
    </main>
  )
}
export default about

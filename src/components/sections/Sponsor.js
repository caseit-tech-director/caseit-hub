import React, { Component } from "react"
import Button from "../../components/form/Button"

import "@styles/main.scss"

const sponsor = () => {
  return (
    <main>
      <h1 className="display"> Sponsors </h1>
      <div className="button-ctr">
        <Button href="https://www.caseit.org/sponsorship/" target="_blank">
          Sponsorship Tiers
        </Button>
      </div>
      <div className="ad-ctr">
        <h3> Beedie </h3>
        <h5 className="sponsor-subheader">Title Sponsor</h5>
        <p>
          Since its inception, the Beedie School of Business at Simon Fraser
          University has championed lifelong learning, innovation, and impactful
          change as we continue to provide education and research to benefit
          both our local and global communities. We have achieved considerable
          success, as confirmed by our accreditation by the AACSB (Association
          to Advance Collegiate Schools of Business) and our reception of the
          EQUIS Quality Award from the EFMD (European Foundation for Management
          Development). The Beedie School of Business is proudly included in the
          less than 1% of business schools worldwide to have earned both of
          these esteemed recognitions.
        </p>
        <p>
          The Beedie School of Business is currently within the top 100
          universities in business research output worldwide. Furthermore, our
          undergraduate, graduate, and Ph.D. programs demonstrate a unique
          innovative spirit to facilitate dynamism and sustain relevance.
          Supported by extensive sponsorships with public, private, and
          nonprofit organizations, our objective is to produce broadly and
          deeply educated, enterprising, and socially conscious individuals,
          eager and able to make meaningful and enduring contributions to their
          communities.
        </p>
        <p>
          The Beedie School of Business operates across three campuses —
          Vancouver, Burnaby, and Surrey — hosting over 3,800 undergraduate BBA
          students, 700 graduate and MBA students, and a thriving Ph.D. program.
        </p>
        <p>
          For more information, please visit{" "}
          <a href="https://beedie.sfu.ca" target="_blank">
            beedie.sfu.ca
          </a>
        </p>
        {/* <img
          src="sponsors/beedie/Beedie_Ad.jpg"
          alt="Beedie Ad"
          loading="lazy"
        ></img> */}
      </div>
      <div className="ad-ctr">
        <h3> CIO Association of Canada - Vancouver Chapter</h3>
        <h5 className="sponsor-subheader">Title Sponsor</h5>
        <p>
          CIOCAN is a not-for-profit community of CIOs and IT leaders whose
          mission is to facilitate networking, sharing of best practices and
          executive development, and to collaborate on issues facing CIOs/IT
          Executives.
        </p>
        <p>
          For more information, please visit{" "}
          <a href="https://www.ciocan.ca/" target="_blank">
            www.ciocan.ca
          </a>
        </p>
      </div>
      <div className="sponsor-ctr">
        <div className="ad-ctr">
          <h3> Beedie </h3>
          <h5 className="sponsor-subheader"> Diamond Sponsor </h5>
          <p>
            Founded in 1954, Beedie is Western Canada’s largest private
            industrial developer and property manager, having completed more
            than 35 million square feet of new development, with an
            ever-expanding portfolio of over 11 million square feet. With over
            six decades of building for good, Beedie is also one of the Lower
            Mainland’s most reputable residential developers having completed
            several significant, large-scale master-planned communities and
            mixed-use projects.
          </p>
          <p>
            For more information, please visit{" "}
            <a href="https://www.beedie.ca/" target="_blank">
              www.beedie.ca
            </a>
          </p>
          {/* <img
            src="sponsors/"
            alt=""
            loading="lazy"
          ></img> */}
        </div>
        <div className="ad-ctr">
          <h3> CGI </h3>
          <h5 className="sponsor-subheader"> Gold Sponsor </h5>
          <p>
            Founded in 1976, CGI is among the largest IT and business consulting
            services firms in the world. We are insights-driven and
            outcome-based to help accelerate returns on your IT and business
            investments.
          </p>
          <p>
            In all we do, our goal is to build trusted relationships through
            client proximity, providing industry and technology expertise to
            help our clients meet the needs of their customers and citizens.
          </p>
          <p>
            For more information, please visit{" "}
            <a href="https://www.cgi.com/en" target="_blank">
              www.cgi.com
            </a>
          </p>
        </div>

        <div className="ad-ctr">
          <h3> East West Market</h3>
          <h5 className="sponsor-subheader"> Silver Sponsor </h5>
          <p>
            The original East West Market has been serving the Vancouver
            community since 1996, until the original owner retired and David Lee
            Kwen purchased the store, making it what it is today. David was
            raised in Trinidad and Tobago along with eight siblings, and he
            helped his family run a local grocery store throughout his
            childhood. His family moved to Canada when he was 14, and he
            continued to hone his customer service skills in the subsequent
            years. This upbringing has given David a deep understanding of how
            to make every customer feel like family. He understands that a local
            grocer can truly be a cornerstone of a community because food and
            grocery shopping brings people from all walks of life together.
          </p>
          <p>
            When David purchased East West Market, his goal was to enrich the
            community. He is passionate about giving back and he focuses heavily
            on charitable giving, environmental awareness, sustainability, and
            cultivating a feeling of connectedness and unity. The success and
            popularity of this location has encouraged David to expand East West
            Markets reach with additional locations. Adding more locations
            allows us to take our message to more communities, and helps us
            further our mission of promoting sustainability and local economy
            support. Our first new location is in Kerrisdale and offers
            customers the same level of friendly, personalized service that they
            have come to expect from the original store.
          </p>
          <p>
            For more information, please visit{" "}
            <a href="https://eastwestmarkets.ca/" target="_blank">
              eastwestmarkets.ca/
            </a>
          </p>
        </div>

        <div className="ad-ctr">
          <h3> SFSS </h3>
          <h5 className="sponsor-subheader"> Silver Sponsor </h5>
          <p>
            The Simon Fraser Student Society is a student-led organization that
            represents and advocates for the interests of the 25,000+
            undergraduate students at SFU. We are your not-for-profit support
            network and voice at SFU and provide services and support to make
            your student life better.
          </p>
          <p>
            For more information, please visit{" "}
            <a href="https://sfss.ca/" target="_blank">
              sfss.ca/
            </a>
          </p>
        </div>

        <div className="ad-ctr">
          <h3> Microsoft </h3>
          <h5 className="sponsor-subheader"> Networking Sponsor </h5>
          <p>
            Established in 1985, Microsoft Canada Inc. is the Canadian
            subsidiary of Microsoft Corp., the worldwide leader in software,
            services and solutions that help people and businesses realize their
            full potential.
          </p>
          <p>
            For more information, please visit{" "}
            <a href="https://www.microsoft.com/en-ca/" target="_blank">
              www.microsoft.com/en-ca/
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
export default sponsor

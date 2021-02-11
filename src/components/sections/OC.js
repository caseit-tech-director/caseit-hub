import React, { Component } from "react";
import Card from "../OC/Card";

import "@styles/main.scss";

const meet = () => {
  return (
    <main>
      <h1 className="display"> Organizing Committee </h1>
      <h3> Management Team </h3>
      <div className="management-ctr">
        <Card img="images/Jordan.png" subtitle="Jordan Wong, Chair"></Card>
        <Card img="images/Kyle.png" subtitle="Kyle Lee, Vice-Chair of Marketing"></Card>
        <Card img="images/Jenny.png" subtitle="Jenny Lian, Vice-Chair of Competition Execution"></Card>
        <Card img="images/Simon.png" subtitle="Simon Ford, Academic Director"></Card>
      </div>
      <div className="directors-ctr">
        {/* Directors */}
      </div>
      <div ClassName="asso_coord-ctr">
        {/* Coords and Associates */}
      </div>
      <div ClassName="team-host-ctr">
        {/* Team Hosts */}
      </div>
    </main>
  );
};
export default meet;

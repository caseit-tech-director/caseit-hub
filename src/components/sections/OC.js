import React, { Component } from "react";
import Card from "../meet/Card";

import "@styles/main.scss";

const meet = () => {
  return (
    <main>
      <h1 className="display"> Organizing Committee </h1>
      <h3> Management Team </h3>
      <div className="management-ctr">
        <Card img="images/Jordan.png" subtitle="Jordan Wong, Chair"></Card>        
      </div>
    </main>
  );
};
export default meet;

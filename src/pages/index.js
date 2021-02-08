import React from "react";
import Button from "../components/form/Button";
import Chair from "../components/chairWelcome/chair"

import "@styles/main.scss";

const Home = () => {
  return (
    <main>
    <Button href="http://caseit.org" target="blank">
      Test
    </Button>
    <Chair/>
    </main>
  );
};

export default Home;

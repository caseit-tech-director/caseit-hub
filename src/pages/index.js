import React from "react";
import Button from "../components/form/Button";
import Chair from "../components/chairWelcome/Chair";

import "@styles/main.scss";
import WelcomePopup from "@components/welcomePopup/";

const Home = () => {
  return (
    <WelcomePopup>
      <main>
        <Button href="http://caseit.org" target="blank">
          Test
        </Button>
        <Chair />
      </main>
    </WelcomePopup>
  );
};

export default Home;

import React, { Component } from "react";
import Article from "../article/Article";
import Button from "../form/Button";

import "@styles/main.scss";

const letters = () => {
  return (
    <Article heading="Letter from the Prime Minister" group="introduction">
      <div className="button-ctr">
        <Button
          href="https://drive.google.com/file/d/1I_j5-Bf5ED9XoJxkx_0orIlrlJixR7Ky/view?usp=sharing"
          target="_blank"
        >
          English
        </Button>
        <Button
          href="https://drive.google.com/file/d/1WIrgNL1lKDTh1wG7D8EiX0py_1I_9dQE/view?usp=sharing"
          target="_blank"
        >
          French
        </Button>
      </div>
    </Article>
  );
};
export default letters;

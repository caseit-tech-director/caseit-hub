import React, { Component } from "react"
import Button from "../form/Button"

import "@styles/main.scss"

const letters = () => {
  return (
    <main>
      <div>
        <h1 className="display"> Letter from the Prime Minister </h1>
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
      </div>
      <div>
        <h1 className="display"> Letter from the Premier </h1>
        <div className="button-ctr">
          <Button
            href="https://drive.google.com/file/d/1PDYFtERFVBEakLZ7vfbMVv6KA1un7V_l/view?usp=sharing"
            target="_blank"
          >
            English
          </Button>
        </div>
      </div>
    </main>
  )
}
export default letters

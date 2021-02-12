import React from "react";
import "./Button.scss";

const Button = ({ children, href, target, type }) => {
  return (
    <a href={href} target={target} className="button-primary">
      {children}
      <img
        src="images/icon-open-in-new.svg"
        alt="download icon"
        className="button__icon"
      />
    </a>
  );
};

export default Button;

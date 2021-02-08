import React from "react";
import "./Button.scss";

const Button = ({ children, href, target, type }) => {
  return (
    <a href={href} target={target} className="button-primary">
      {children}
    </a>
  );
};

export default Button;

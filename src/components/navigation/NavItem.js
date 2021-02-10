import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import AnimationConfig from "../AnimationConfig";

import "./Navigation.scss";

const NavItem = ({ isCurrent, label, sectionId, ...props }) => {
  return (
    <a className="nav-item" href={`#${sectionId}`} {...props}>
      {isCurrent && (
        <motion.div
          layoutId="nav-item__current"
          className="nav-item__current"
          transition={{
            ease: AnimationConfig.EASING,
            duration: AnimationConfig.FAST,
          }}
        ></motion.div>
      )}
      {label}
    </a>
  );
};

NavItem.propTypes = {
  isCurrent: PropTypes.bool,
  sectionId: PropTypes.string, // the hash tag of the section
  label: PropTypes.string, // the label name
};

export default NavItem;

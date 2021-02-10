import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimationConfig from "../AnimationConfig";

const NavGroup = ({ children, label, isExpanded, onToggleExpandState }) => {
  // const [isExpanded, setIsExpanded] = useState(currentSectionInGroup);
  return (
    <div className="nav-group">
      <button
        className="nav-group__toggle"
        onClick={() => {
          // if (isExpanded && onExpand) onExpand();
          // if (isExpanded && onCollapse) onCollapse();
          if (onToggleExpandState) onToggleExpandState();
          // setIsExpanded(!isExpanded);
        }}
      >
        {label}
      </button>
      <motion.div
        className="nav-group__content"
        animate={{
          height: isExpanded ? "auto" : "0rem",
          overflowY: "hidden",
        }}
        // set the initial condition
        initial={{
          height: isExpanded ? "auto" : "0rem",
          overflowY: "hidden",
        }}
        transition={{
          duration: AnimationConfig.NORMAL,
          ease: AnimationConfig.EASING,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default NavGroup;

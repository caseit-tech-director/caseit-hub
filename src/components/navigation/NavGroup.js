import React, { useState } from "react";
import { motion } from "framer-motion";

const NavGroup = ({ children, label, expandedInitially }) => {
  const [isExpanded, setIsExpanded] = useState(expandedInitially);
  return (
    <div className="nav-group">
      <button
        className="nav-group__toggle"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {label}
      </button>
      <motion.div
        className="nav-group__content"
        animate={{
          height: isExpanded ? "auto" : "0rem",
          overflowY: isExpanded ? "visible" : "hidden",
        }}
        // set the initial condition
        initial={{
          height: isExpanded ? "auto" : "0rem",
          overflowY: isExpanded ? "visible" : "hidden",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default NavGroup;

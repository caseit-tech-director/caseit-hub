import React, { useState } from "react";
import { motion } from "framer-motion";

const NavGroup = ({ children, label, forceExpand }) => {
  const [isExpanded, setIsExpanded] = useState(false);
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
          height: isExpanded || forceExpand ? "auto" : "0rem",
          overflowY: isExpanded || forceExpand ? "visible" : "hidden",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default NavGroup;

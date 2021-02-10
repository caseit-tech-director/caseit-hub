import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavMenu } from "./NavigationContext";

const SECTION_VERTICAL_OFFSET = 200; // vertical offset to compensate the anchor difference
const SectionMarker = ({ group, label, hash, children }) => {
  const [navMenu, registerSection] = useNavMenu();

  // register the section to the navigation context
  useEffect(() => {
    registerSection({
      label: label,
      group: group,
      hash: hash,
    });
  }, []);

  return (
    <div>
      <a
        id={hash}
        className="section-anchor"
        aria-hidden="true"
        style={{
          display: "block",
          position: "relative",
          top: `-${SECTION_VERTICAL_OFFSET}px`,
          visibility: "hidden",
        }}
      />
      {children}
    </div>
  );
};
SectionMarker.propTypes = {
  group: PropTypes.string,
  label: PropTypes.string,
  hash: PropTypes.string,
};

export default SectionMarker;

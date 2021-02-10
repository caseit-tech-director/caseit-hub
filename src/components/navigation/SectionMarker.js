import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavMenu } from "./NavigationContext";

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

  return <div id={hash}>{children}</div>;
};
SectionMarker.propTypes = {
  group: PropTypes.string,
  label: PropTypes.string,
  hash: PropTypes.string,
};

export default SectionMarker;

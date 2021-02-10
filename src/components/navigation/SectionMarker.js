import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useNavMenu } from "./NavigationContext";

const SECTION_VERTICAL_OFFSET = 200; // vertical offset to compensate the anchor difference
const SectionMarker = ({ group, label, hash, children }) => {
  const measureRef = useRef();
  const [navMenu, registerSection] = useNavMenu();

  //TODO: use intersection observer to update the current hashtag
  useEffect(() => {
    const options = { rootMargin: `${-SECTION_VERTICAL_OFFSET}px 0px 0px 0px` };
    const observer = new IntersectionObserver(function (entries, observer) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        // setSectionInView(true);
        window.history.pushState({}, "", `#${hash}`);
      } else {
        // setSectionInView(false);
      }
    }, options);

    // observe the container to see if the section is in view
    observer.observe(measureRef.current);

    // cleanup
    return () => observer.unobserve(measureRef.current);
  }, []);

  // register the section to the navigation context
  useEffect(() => {
    registerSection({
      label: label,
      group: group,
      hash: hash,
    });
  }, []);

  return (
    <div ref={measureRef}>
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

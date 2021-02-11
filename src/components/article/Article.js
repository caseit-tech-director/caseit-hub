import React from "react";
import SectionMarker from "../navigation/SectionMarker";

const Article = ({ heading = "", group, children }) => {
  const sectionId = heading.toLowerCase().replaceAll(" ", "-");
  return (
    <article>
      <SectionMarker label={heading} hash={sectionId} group={group}>
        <h1 className="display">{heading}</h1>
        {children}
      </SectionMarker>
    </article>
  );
};

export default Article;

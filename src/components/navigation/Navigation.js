import React, { useState, useEffect } from "react";
import { AnimateSharedLayout } from "framer-motion";

import "./Navigation.scss";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup";

const Navigation = () => {
  //TODO: the navigation structure will ideally automatically generated automatically
  const navMenu = [
    {
      groupLabel: "test link group 1",
      content: [
        {
          label: "Test Link 1",
          sectionId: "testLink1",
        },
        {
          label: "Test Link 2",
          sectionId: "testLink2",
        },
        {
          label: "Test Link 3",
          sectionId: "testLink3",
        },
      ],
    },
    {
      groupLabel: "test link group 2",
      content: [
        {
          label: "Test Link 4",
          sectionId: "testLink4",
        },
        {
          label: "Test Link 5",
          sectionId: "testLink5",
        },
        {
          label: "Test Link 6",
          sectionId: "testLink6",
        },
      ],
    },
  ];

  // the nav bar will update itself base on the location hash
  const [currentSection, setCurrentSection] = useState(getLocationHash());
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentSection(getLocationHash());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav className="nav">
      <AnimateSharedLayout>
        {navMenu.map((group, groupIndex) => {
          const groupContainCurrent = group.content.find(
            ({ sectionId }) => sectionId === currentSection
          );
          return (
            <NavGroup
              label={group.groupLabel}
              key={groupIndex}
              forceExpand={groupContainCurrent}
            >
              {group.content.map((item, index) => {
                return (
                  <NavItem
                    isCurrent={currentSection === item.sectionId}
                    sectionId={item.sectionId}
                    label={item.label}
                    key={index}
                  />
                );
              })}
            </NavGroup>
          );
        })}
      </AnimateSharedLayout>
    </nav>
  );
};

function getLocationHash() {
  return window.location.hash.split("#")[1];
}

export default Navigation;

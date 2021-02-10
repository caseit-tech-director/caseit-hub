import React, { useState, useEffect } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { useNavMenu } from "./NavigationContext";

import "./Navigation.scss";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup";

const Navigation = () => {
  //TODO: the navigation structure will ideally automatically generated automatically
  // const navMenu = [
  //   {
  //     groupLabel: "test link group 1",
  //     content: [
  //       {
  //         label: "Test Link 1",
  //         sectionId: "testLink1",
  //       },
  //       {
  //         label: "Test Link 2",
  //         sectionId: "testLink2",
  //       },
  //       {
  //         label: "Test Link 3",
  //         sectionId: "testLink3",
  //       },
  //     ],
  //   },
  //   {
  //     groupLabel: "test link group 2",
  //     content: [
  //       {
  //         label: "Test Link 4",
  //         sectionId: "testLink4",
  //       },
  //       {
  //         label: "Test Link 5",
  //         sectionId: "testLink5",
  //       },
  //       {
  //         label: "Test Link 6",
  //         sectionId: "testLink6",
  //       },
  //     ],
  //   },
  // ];

  const [navMenu] = useNavMenu();

  // the nav bar will update itself base on the location hash
  const [currentSection, setCurrentSection] = useState(getLocationHash());
  const [currentGroup, setCurrentGroup] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentSection(getLocationHash());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // jump to section when nav item click
  const handleNavItemClick = () => {
    // re-trigger the scrolling
    const targetElement = document.querySelector(window.location.hash);
    targetElement.scrollIntoView();
  };

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
              onToggleExpandState={() => {
                if (currentGroup !== group.groupLabel)
                  setCurrentGroup(group.groupLabel);
              }}
              isExpanded={currentGroup === group.groupLabel}
            >
              {group.content.map((item, index) => {
                return (
                  <NavItem
                    isCurrent={currentSection === item.sectionId}
                    sectionId={item.sectionId}
                    label={item.label}
                    key={index}
                    onClick={handleNavItemClick}
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
  if (typeof window !== "undefined") return window.location.hash.split("#")[1];
}

export default Navigation;

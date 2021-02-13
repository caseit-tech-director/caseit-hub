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

  const currentLocationHash = getLocationHash();

  // the nav bar will update itself base on the location hash
  const [currentSection, setCurrentSection] = useState(currentLocationHash);
  const [currentGroup, setCurrentGroup] = useState();
  const [currentSectionName, setCurrentSectionName] = useState();

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const updateCurrentGroup = (targetSection) => {
    if (!navMenu) return;

    let initialGroup;
    Object.values(navMenu).forEach((group) => {
      // const groupContainCurrent = group.content.find(
      //   ({ sectionId }) => sectionId === targetSection
      // );
      const groupContainCurrent = where(
        group.content,
        "sectionId",
        targetSection
      );
      if (groupContainCurrent) initialGroup = group.groupLabel;
    });
    setCurrentGroup(initialGroup);
    setCurrentSectionName();
  };

  // change update the current section base on the url
  useEffect(() => {
    setCurrentSection(currentLocationHash);
    // see which one is the current group
    updateCurrentGroup(currentLocationHash);
  }, [currentLocationHash]);

  useEffect(() => {
    updateCurrentGroup(currentSection);
  }, [navMenu.length]); // only update when the nav menu is changed

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentSection(getLocationHash());
    };
    window.addEventListener("hashchange", handleHashChange, false);
    return () => {
      window.removeEventListener("hashchange", handleHashChange, false);
    };
  }, []);

  const handleLinkClick = (e) => {
    // scroll to element
    const targetElementId = e.target.href.split("#")[1];
    document.querySelector(`#${targetElementId}`).scrollIntoView();
    e.preventDefault();

    setIsMenuExpanded(false);
    // console.log();
  };

  // lock body scroll when landed
  useEffect(() => {
    if (isMenuExpanded) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isMenuExpanded]);

  // for generating current section string
  const getCurrentSectionLabel = () => {
    // short hand for null check + return value
    const currentGroupObject =
      currentGroup && where(navMenu, "groupLabel", currentGroup);
    const currentSectionObject =
      currentGroupObject &&
      where(currentGroupObject.content, "sectionId", currentSection);
    const currentSectionLabel =
      currentSectionObject && currentSectionObject.label;
    return currentSectionLabel;
  };

  const toggleMenu = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.target !== e.currentTarget) return;

    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <div
      className={
        isMenuExpanded
          ? "nav-container nav-container--expanded"
          : "nav-container"
      }
      onClick={toggleMenu}
    >
      <nav className="nav">
        <button
          className={
            isMenuExpanded
              ? "nav__menu-toggle nav__menu-toggle--expanded"
              : "nav__menu-toggle"
          }
          onClick={toggleMenu}
        >
          {currentGroup && currentSection && (
            <>
              <span className="h5">{`${currentGroup} - `} </span>
              <span className="body">{getCurrentSectionLabel()}</span>
              <img src="images/icon-arrow-drop-down.svg" alt="drop down" />
            </>
          )}
        </button>
        <div
          className={
            isMenuExpanded ? "nav__menu nav__menu--expanded" : "nav__menu"
          }
        >
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
                        onClick={handleLinkClick}
                      />
                    );
                  })}
                </NavGroup>
              );
            })}
          </AnimateSharedLayout>
        </div>
      </nav>
    </div>
  );
};

function where(arr = [], label, val) {
  return arr.find((item) => {
    return item[label] === val;
  });
}

function getLocationHash() {
  if (typeof window !== "undefined") return window.location.hash.split("#")[1];
}

export default Navigation;

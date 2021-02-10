import React, { useState, useContext, useRef } from "react";
import useForceUpdate from "../../hooks/useForceUpdate";

const NavigationContext = React.createContext([[], () => {}]);

const NavigationContextProvider = ({ children }) => {
  // Nav menu structure
  //
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
  //   }
  //  ];
  // const [navMenu, setNavMenu] = useState([]);
  const navMenu = useRef([]);
  const forceUpdate = useForceUpdate();

  const registerSection = ({ label, group, hash }) => {
    console.log(navMenu.current);
    const targetGroupIndex = navMenu.current.findIndex((currentGroup) => {
      return currentGroup.groupLabel === group;
    });
    const newNavItem = {
      label: label,
      sectionId: hash,
    };

    // the group doesnt exist yet
    if (targetGroupIndex === -1) {
      const newGroup = {
        groupLabel: group,
        content: [newNavItem],
      };
      // push the new group into the nav menu registry
      navMenu.current.push(newGroup);
    } else {
      // push the new group into the nav menu registry
      navMenu.current[targetGroupIndex].content.push(newNavItem);
    }

    // trigger re-render
    forceUpdate();
  };
  return (
    <NavigationContext.Provider value={[navMenu.current, registerSection]}>
      {children}
    </NavigationContext.Provider>
  );
};

const useNavMenu = () => {
  return useContext(NavigationContext);
};

export { useNavMenu, NavigationContextProvider };

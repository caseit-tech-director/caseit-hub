import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCookies } from "react-cookie";
import AnimationConfig from "../AnimationConfig";
import universityDictionary from "../../data/universityDictionary";
import "./TimezonePicker.scss";

const UNIVERSITY_TIMEZONES = {
  sfu: "Etc/GMT+8", // "Simon Fraser University",
  uofc: "Etc/GMT+7", // "University of Calgary",
  isu: "Etc/GMT+6", // "Iowa State University",
  uofm: "Etc/GMT+6", // "University of Minnesota",
  uoft: "Etc/GMT+5", // university of toronto
  ru: "Etc/GMT+5", // ryerson university
  hec: "Etc/GMT+5", //"HEC Montréal",
  iu: "Etc/GMT+5", // "Indiana University",
  wlu: "Etc/GMT+5", // "Wilfrid Laurier University",
  au: "Etc/GMT-1", // "Aarhus University",
  corvinus: "Etc/GMT-1", // "Corvinus University of Budapest",
  erasmus: "Etc/GMT-1", // "Rotterdam School of Management, Erasmus University",
  um: "Etc/GMT-1", // "Maastricht University",
  chula: "Etc/GMT-7", // "Chulalongkorn University",
  hkust: "Etc/GMT-8", // "Hong Kong University of Science and Technology",
  nus: "Etc/GMT-8", // "National University of Singapore",
  hku: "Etc/GMT-8", //"University of Hong Kong",
};

// generate a timezone lookup table base on the university timezone definitions
const uniTimezoneLookup = ((uniTimezones) => {
  const uniCodes = Object.keys(uniTimezones);
  let timezoneLookup = {};
  uniCodes.forEach((uniCode) => {
    const timezoneOfUni = uniTimezones[uniCode];

    if (typeof timezoneLookup[timezoneOfUni] === "undefined") {
      // timezone catagory not exist
      timezoneLookup[timezoneOfUni] = [uniCode];
      return;
    }
    // timezone catagory already exist
    timezoneLookup[timezoneOfUni].push(uniCode);
  });

  return timezoneLookup;
})(UNIVERSITY_TIMEZONES);

/** 
 * beginning of timezone comp
 * 
 * "eventSessions" structure:
 * [
 *   {
      name: "session 1",
      vancouverTime: "2021-2-14 6:00",
      timezones: ["GMT-8", "GMT+1", "GMT+7", "GMT+8"],
     },
      {
        name: "session 2",
        vancouverTime: "2021-2-14 6:00",
        timezones: ["GMT-8", "GMT-7", "GMT-6", "GMT-5"],
      },
 * ]
 */

const TimezonePicker = ({
  eventSessions = [{ name: "", vancouverTime: "", timezones: [""] }],
}) => {
  // for the dropdown menu
  const [isExpanded, setIsExpanded] = useState(false);

  // remembering the user's timezone choice
  const [cookies, setCookie, removeCookie] = useCookies([
    "selected-timezone-offset",
  ]);

  // Timezone Calculation
  const userTimezoneOffset = getUserTimezoneOffset(); // an int that represents the timezone offset compare to UTC

  // use the user timezone for initial value if there is no record of timezone preference in cookie
  const [currentTimezoneOffset, setCurrentTimezoneOffset] = useState(
    cookies["selected-timezone-offset"] || userTimezoneOffset
  );

  const [currentEventTime, setCurrentEventTime] = useState("");
  const [currentEventDate, setCurrentEventDate] = useState("");
  const [currentSession, setCurrentSession] = useState("");
  const [currentTimezone, setCurrentTimezone] = useState("");

  const pickEventSession = (timezoneOffset) => {
    return eventSessions.find(({ timezones }) => {
      return timezones.find(
        (timezoneGMT) => GMTToOffset(timezoneGMT) == timezoneOffset
      );
    });
  };

  const updateDisplayingInfo = (timezoneOffset) => {
    // STEP 1: select an appropriate event session
    const selectedEventSession =
      pickEventSession(timezoneOffset) ||
      eventSessions[Object.keys(eventSessions)[0]]; // use the first one in the event session, if the timezone is null
    const eventTime = fromVancouverTime(selectedEventSession.vancouverTime);

    // STEP 2: calculate the appropiate timezone representation
    // timezone table
    // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    // note: "Etc/GMT+8" would map to the GMT-8 timezone (it is inverted)
    const timezoneName = offsetToTimezoneName(timezoneOffset);
    const convertedEventTime = convertTimezone(eventTime, timezoneName);

    // STEP 3: update timezone display setting
    setCurrentEventTime(formatHourMinute(convertedEventTime));
    setCurrentEventDate(convertedEventTime.toDateString());
    setCurrentTimezone(offsetToGMT(timezoneOffset));
    setCurrentSession(selectedEventSession.name);
  };

  // update the display information base on the timezone
  useEffect(() => {
    updateDisplayingInfo(currentTimezoneOffset);
    // STEP 4: update cookie, so the setting is saved and trigger other component's sync
    setCookie("selected-timezone-offset", currentTimezoneOffset, { path: "/" });
  }, [currentTimezoneOffset]);

  // auto update the component when receive cookie update
  useEffect(() => {
    const cookieTimezoneOffset = cookies["selected-timezone-offset"];
    if (
      cookieTimezoneOffset &&
      cookieTimezoneOffset !== currentTimezoneOffset
    ) {
      updateDisplayingInfo(cookieTimezoneOffset);
      setCurrentTimezoneOffset(cookieTimezoneOffset);
    }
  }, [cookies["selected-timezone-offset"]]);

  // adding listener for hiding the menu
  useEffect(() => {
    const closeMenu = () => {
      setIsExpanded(false);
    };
    window.addEventListener("click", closeMenu);
    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);

  // toggler
  const handleBoxClick = (e) => {
    setIsExpanded(!isExpanded);
    e.persist();
    e.stopPropagation();

    if (isExpanded) return;
    // scroll to the element if we are toggling it on
    setTimeout(function () {
      const targetElm = document.querySelector(".timezone-menu__item--active");
      targetElm.parentNode.scrollTop = targetElm.offsetTop - 50;
    }, 1);
  };

  // timezone picker
  return (
    <>
      <div className="timezone-picker-container">
        <a
          className={
            isExpanded
              ? "timezone-picker timezone-picker--expanded"
              : "timezone-picker"
          }
          onClickCapture={handleBoxClick}
        >
          <div className="timezone-picker__row timezone-picker__row--emphasized">
            <div className="timezone-picker__timezone">{currentTimezone}</div>
            <div className="timezone-picker__event-time">
              {currentEventTime}
            </div>
            <div className="timezone-picker__event-date">
              {currentEventDate}
            </div>
          </div>
          <div className="timezone-picker__row">
            {currentSession && (
              <div className="timezone-picker__session">{currentSession}</div>
            )}
          </div>
          <img
            className={
              isExpanded
                ? "timezone-picker__drop-icon timezone-picker__drop-icon--expanded"
                : "timezone-picker__drop-icon"
            }
            src="images/icon-arrow-drop-down.svg"
          />
        </a>

        {/* Menu */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="timezone-menu"
              initial={{
                y: -50,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -50,
                opacity: 0,
              }}
              transition={{
                duration: AnimationConfig.FAST,
                ease: AnimationConfig.EASING,
              }}
            >
              {Object.keys(uniTimezoneLookup).map((timezone, index) => {
                const timezoneOffset = timezoneNameToOffset(timezone);
                const timezoneNameGMT = offsetToGMT(timezoneOffset);

                // use "==" here because currentTimezoneOffset might be string(if it is from cookie)
                const isCurrentTimezone =
                  currentTimezoneOffset == timezoneOffset;

                return (
                  <a
                    className={
                      isCurrentTimezone
                        ? "timezone-menu__item timezone-menu__item--active"
                        : "timezone-menu__item"
                    }
                    key={index}
                    onClick={() => {
                      setCurrentTimezoneOffset(timezoneOffset);
                    }}
                  >
                    <div className="timezone-menu__timezone-label">
                      {timezoneNameGMT}
                    </div>
                    <div className="timezone-menu__universities">
                      {uniTimezoneLookup[timezone].map((uniName, index) => (
                        <div key={index}>{universityDictionary[uniName]}</div>
                      ))}
                    </div>
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {currentSession && (
        <p className="small">
          *Session is assigned based on the university's timezone
        </p>
      )}
    </>
  );
};

// conversion between +8
// note: "Etc/GMT+8" would map to the GMT-8 timezone (it is inverted)
function offsetToTimezoneName(timezoneOffsetInt) {
  const invertedTimezoneInt = -timezoneOffsetInt;
  if (invertedTimezoneInt > 0) return "Etc/GMT+" + invertedTimezoneInt;
  return "Etc/GMT" + invertedTimezoneInt;
}

function offsetToGMT(timezoneOffset) {
  if (timezoneOffset > 0) return "GMT+" + timezoneOffset;
  return "GMT" + timezoneOffset;
}

function GMTToOffset(gmtTime) {
  // split the timezone name to
  return parseInt(gmtTime.replace("GMT", ""));
}
function timezoneNameToOffset(timezoneName) {
  // split the timezone name to
  return parseInt(timezoneName.replace("Etc/GMT", "")) * -1;
}

// FORMAT
// yyyy-mm-dd hh:mm
function fromVancouverTime(vancouverTimeString, withDaylightTimeSaving) {
  const VANCOUVER_TIME_OFFSET = withDaylightTimeSaving ? 7 : 8;

  const [dateComponent, timeComponent] = vancouverTimeString.split(" ");
  const [year, month, date] = dateComponent.split("-");
  const [hour, minute] = timeComponent.split(":");

  return new Date(
    Date.UTC(
      parseInt(year),
      parseInt(month) - 1, // javascript month starts from zero
      parseInt(date),
      parseInt(hour) + VANCOUVER_TIME_OFFSET, // add the vancouver timezone difference
      parseInt(minute)
    )
  );
}

function formatHourMinute(time) {
  const hourDigits = ("0" + time.getHours()).slice(-2);
  const minuteDigits = ("0" + time.getMinutes()).slice(-2);
  return `${hourDigits}:${minuteDigits}`;
}

// timezone string
// https://stackoverflow.com/questions/10087819/convert-date-to-another-timezone-in-javascript/10088053

// for tzString, refer to this wiki table
// https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
function convertTimezone(date, tzString) {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
}

function UTCtoInt(utcStr) {
  return parseInt(utcStr.replace("UTC", ""));
}

//https://stackoverflow.com/questions/9772955/how-can-i-get-the-timezone-name-in-javascript
// return timezone name eg. America/Vancouver
function getUserTimezoneName() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

// https://stackoverflow.com/questions/13/determine-a-users-timezone
function getUserTimezoneOffset() {
  return -new Date().getTimezoneOffset() / 60;
}

export default TimezonePicker;

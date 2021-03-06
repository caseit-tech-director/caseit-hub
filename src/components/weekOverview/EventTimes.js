const EventTimes = {
  ReadyForIT: [
    {
      name: "session 1",
      vancouverTime: "2021-2-14 6:00",
      timezones: ["GMT-8", "GMT+1", "GMT+7", "GMT+8"],
    },
    {
      name: "session 2",
      vancouverTime: "2021-2-14 12:00",
      timezones: ["GMT-8", "GMT-7", "GMT-6", "GMT-5"],
    },
  ],
  PaintIT: [
    {
      name: "session 1",
      vancouverTime: "2021-2-16 5:00",
      timezones: ["GMT-8", "GMT+1", "GMT+7", "GMT+8"],
    },
    {
      name: "session 2",
      vancouverTime: "2021-2-16 10:00",
      timezones: ["GMT-8", "GMT-7", "GMT-6", "GMT-5"],
    },
  ],
  "Sponsor Networking": [
    {
      vancouverTime: "2021-2-16 13:00",
      timezones: [
        "GMT-8",
        "GMT+1",
        "GMT+7",
        "GMT+8",
        "GMT-7",
        "GMT-6",
        "GMT-5",
      ],
      duration: 3, //3 hours
    },
  ],
  "Awards Ceremony": [
    {
      vancouverTime: "2021-2-18 20:00",
      timezones: [
        "GMT-8",
        "GMT+1",
        "GMT+7",
        "GMT+8",
        "GMT-7",
        "GMT-6",
        "GMT-5",
      ],
    },
  ],
};

export default EventTimes;

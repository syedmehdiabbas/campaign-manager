export const filterEventsData = (eventsData, activeID) => {
  //let currentTime = new Date(Date.now());
  //currentTime = currentTime.toDateString();
  //console.log(currentTime);
  let today = "2022-01-11";

  if (activeID === "1") {
    return eventsData.filter((event) => {
      return today > event.date;
    });
  } else if (activeID === "3") {
    return eventsData.filter((event) => {
      return today < event.date;
    });
  }
  return eventsData.filter((event) => {
    return today === event.date;
  });
};

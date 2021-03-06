import React, { useEffect, useState } from "react";
import { eventsData } from "./data/events";
import "./App.scss";
import Tabs from "./components/Tabs/index.js";
import Table from "./components/Table/index.js";
import "./App.scss";
import "./assets/sass/index.scss";
import { FormattedMessage } from "react-intl";
import { filterEventsData } from "./utils/utils";

export const EventsContext = React.createContext("");

function App() {
  const [activeID, setActiveID] = useState("3");
  const [events, setEvents] = useState(eventsData);
  const [displayEvents, setDisplayEvents] = useState([]);

  const changeEvent = (event) => {
    //console.log("change event called");
    let unchangedEvents = events.filter((e) => e.id !== event.id);
    //console.log(unchangedEvents);
    setEvents((events) => [...unchangedEvents, { ...event }]);
  };

  useEffect(() => {
    document.title = "Campaign Manager";
    setDisplayEvents(filterEventsData(events, activeID));
  }, [activeID, events]);

  return (
    <div className="app">
      <h1 className="heading">
        <span className="heading-1">
          <FormattedMessage id="app.heading-1" defaultMessage="Manage " />
        </span>
        <span className="heading-2">
          <FormattedMessage id="app.heading-2" defaultMessage="Campaigns" />
        </span>
      </h1>
      <EventsContext.Provider value={{ events, changeEvent }}>
        <Tabs activeID={activeID} setActiveID={setActiveID}></Tabs>
        <Table activeID={activeID} events={displayEvents}></Table>
      </EventsContext.Provider>
    </div>
  );
}

export default App;

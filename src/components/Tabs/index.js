import "./index.scss";
import React from "react";
import Tab from "./Tab";

function Tabs({ activeID, setActiveID }) {
  let tabs = [
    { id: "1", text: "past" },
    { id: "2", text: "live" },
    { id: "3", text: "upcoming" },
  ];
  return (
    <div className="tabs">
      {tabs.map((t) => (
        <Tab
          activeID={activeID}
          tab={t}
          key={t.id}
          setActiveID={setActiveID}></Tab>
      ))}
    </div>
  );
}

export default Tabs;

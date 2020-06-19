import React, { useState } from "react";
import InvestigatorBoard from "./InvestigatorBoard";

const MapBoard = () => {
  return (
    <div>
      <h1>Map</h1>
    </div>
  );
};

const ScenarioBoard = () => {
  return (
    <div>
      <h1>Scenario</h1>
    </div>
  );
};

const BoardWithTabs = () => {
  const [activeTab, setActiveTab] = useState("Investigator");
  const renderActiveTab = () => {
    switch (activeTab) {
      case "Map":
        return <MapBoard />;
      case "Investigator":
        return <InvestigatorBoard />;
      case "Scenario":
        return <ScenarioBoard />;
      default:
        return null;
    }
  };
  const tabs = ["Map", "Investigator", "Scenario"];
  return (
    <div>
      <div className="tabs">
        <ul>
          {tabs.map((tab) => (
            <li className={tab === activeTab ? "is-active" : ""}>
              <a onClick={() => setActiveTab(tab)}>{tab}</a>
            </li>
          ))}
        </ul>
      </div>
      {renderActiveTab()}
    </div>
  );
};

export default BoardWithTabs;

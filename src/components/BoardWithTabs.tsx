import React, { useState } from "react";
import InvestigatorBoard from "./InvestigatorBoard";
import { useFirebase } from "../firebase";

const tabs = [
  {
    icon: "🗺",
    label: "Map",
    Component: MapBoard,
  },
  {
    icon: "🕵🏻‍♂️",
    label: "Investigator",
    Component: InvestigatorBoard,
  },
  {
    icon: "📖",
    label: "Scenario",
    Component: ScenarioBoard,
  },
  {
    icon: "⚙️",
    label: "Settings",
    Component: Settings,
  },
];

const BoardWithTabs = () => {
  const [activeTab, setActiveTab] = useState("Investigator");

  const renderActiveTab = () => {
    for (const tab of tabs) {
      if (tab.label === activeTab) {
        return <tab.Component />;
      }
    }
    return null;
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li className={tab.label === activeTab ? "is-active" : ""}>
              <a onClick={() => setActiveTab(tab.label)}>
                {[tab.icon, tab.label].join(" ")}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {renderActiveTab()}
    </div>
  );
};

export default BoardWithTabs;

function MapBoard() {
  return (
    <div>
      <h2 className="title is-2">Map</h2>
    </div>
  );
}

function ScenarioBoard() {
  return (
    <div>
      <h2 className="title is-2">Scenario</h2>
    </div>
  );
}

function Settings() {
  const firebase = useFirebase()!;
  return (
    <div>
      <h2 className="title is-2">Settings</h2>
      <button
        className="button is-danger"
        type="button"
        onClick={firebase.doSignOut}
      >
        Sign Out
      </button>
    </div>
  );
}

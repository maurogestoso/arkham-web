import React from "react";
import PlayerDeck from "./PlayerDeck";
import InvestigatorCard from "./Card/Investigator";

const InvestigatorBoard = () => {
  return (
    <div className="columns" style={{ height: 500 }}>
      <div
        className="column is-3"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <PlayerDeck />
        <PlayerDeck />
        <InvestigatorCard code="01001" />
      </div>
      <div className="column is-9"></div>
    </div>
  );
};

export default InvestigatorBoard;

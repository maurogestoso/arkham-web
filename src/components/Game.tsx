import React from "react";

import BoardWithTabs from "./BoardWithTabs";
import PlayerCard from "./Card/Player";

const styles = {
  outline: { outline: "2px solid black" } as React.CSSProperties,
};

const Game = () => {
  return (
    <div className="columns">
      <div className="column is-9" style={{ ...styles.outline }}>
        <BoardWithTabs />
        <PlayerHand />
      </div>
      <div className="column is-3" style={{ ...styles.outline }}>
        <CardViewer />
      </div>
    </div>
  );
};

const CardViewer = () => {
  const style = {} as React.CSSProperties;
  return <div style={style}>Card Viewer</div>;
};

const PlayerHand = () => {
  const style = {
    display: "flex",
    position: "absolute",
    bottom: 0,
  } as React.CSSProperties;
  return (
    <div style={style}>
      <PlayerCard code="01031" />
      <PlayerCard code="01032" />
      <PlayerCard code="01033" />
      <PlayerCard code="01034" />
      <PlayerCard code="01035" />
    </div>
  );
};

export default Game;

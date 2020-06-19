import React from "react";
import CardImage from "./Image";

type Props = {
  code?: string;
  faceDown?: boolean;
};

const PlayerCard = ({ code, faceDown }: Props) => {
  return faceDown ? (
    <CardImage code={"back-player"} />
  ) : (
    <CardImage code={code!} />
  );
};

export default PlayerCard;

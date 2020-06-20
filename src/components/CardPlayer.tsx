import React from "react";
import CardImage from "./CardImage";
import { useDispatch } from "react-redux";
import { actions } from "../state/ui/cardViewer";

type Props = {
  code?: string;
  faceDown?: boolean;
};

const PlayerCard = ({ code, faceDown }: Props) => {
  const dispatch = useDispatch();
  return faceDown ? (
    <CardImage code={"back-player"} />
  ) : (
    <CardImage
      code={code!}
      onClick={() => dispatch(actions.setSelected({ code }))}
      onMouseEnter={() => dispatch(actions.setHover({ code }))}
      onMouseLeave={() => dispatch(actions.clearHover())}
    />
  );
};

export default PlayerCard;

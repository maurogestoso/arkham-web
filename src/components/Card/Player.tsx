import React from "react";
import CardImage from "./Image";
import { useDispatch } from "react-redux";
import { actions } from "../../state/ui/cardViewer";

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
      onMouseEnter={() => dispatch(actions.setCardViewer({ code }))}
      onMouseLeave={() => dispatch(actions.clearCardViewer())}
    />
  );
};

export default PlayerCard;

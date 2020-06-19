import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import CardImage from "./CardImage";

const CardViewer = () => {
  const code = useSelector((state: RootState) => state.ui.cardViewer.code);
  return <div>{code && <CardImage code={code} size="big" />}</div>;
};

export default CardViewer;

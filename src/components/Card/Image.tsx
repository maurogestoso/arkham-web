import React from "react";

const { REACT_APP_ASSETS_BASE_URL: ASSETS_BASE_URL } = process.env;

type Props = {
  code: string;
  horizontal?: boolean;
};

const CardImage = ({ code, horizontal }: Props) => {
  const style: React.CSSProperties = {
    maxWidth: horizontal ? 140 : 100,
    minWidth: horizontal ? 140 : 100,
  };
  return <img src={`${ASSETS_BASE_URL}/cards/${code}.jpg`} style={style} />;
};

export default CardImage;

import React from "react";

const { REACT_APP_ASSETS_BASE_URL: ASSETS_BASE_URL } = process.env;

type Props = {
  code: string;
  orientation: "vertical" | "horizontal";
  size: "big" | "small";
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const sizes = {
  small: {
    horizontal: 140,
    vertical: 100,
  },
  big: {
    horizontal: 420,
    vertical: 300,
  },
};

const CardImage = ({ code, orientation, size, ...props }: Props) => {
  const style: React.CSSProperties = {
    width: sizes[size][orientation],
  };
  return (
    <img
      src={`${ASSETS_BASE_URL}/cards/${code}.jpg`}
      style={style}
      {...props}
    />
  );
};

CardImage.defaultProps = {
  size: "small",
  orientation: "vertical",
};

export default CardImage;

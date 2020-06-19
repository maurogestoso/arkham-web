import React from "react";

import CardImage from "./CardImage";

type Props = {
  code: string;
};

const InvestigatorCard = ({ code }: Props) => {
  return <CardImage code={code} orientation="horizontal" />;
};

export default InvestigatorCard;

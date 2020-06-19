import React from "react";

import CardImage from "./Image";

type Props = {
  code: string;
};

const InvestigatorCard = ({ code }: Props) => {
  return <CardImage code={code!} horizontal />;
};

export default InvestigatorCard;

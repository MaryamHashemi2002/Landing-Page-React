import React from "react";
import { StyledCard } from "./Styles/CardStyle";

const Card = ({ item: { id, title, body, image } }) => {
  return (
    <StyledCard>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
};

export default Card;

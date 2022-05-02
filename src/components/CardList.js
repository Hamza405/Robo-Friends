import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="flex flex-wrap p-8">
      {robots.map((robot) => {
        return <Card key={robot.id} robot={robot} />;
      })}
    </div>
  );
};
export default CardList;

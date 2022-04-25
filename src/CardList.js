import React from "react";
import { robots } from "./robot";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="flex flex-wrap p-8">
      {robots.map((robot, i) => {
        return <Card key={robot.id} robot={robot} />;
      })}
    </div>
  );
};
export default CardList;

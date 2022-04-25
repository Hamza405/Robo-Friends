import React from "react";
import "./card.css";

const Card = ({ robot }) => {
  return (
    <div className="card-container max-w-sm rounded overflow-hidden shadow-lg transform duration-500 hover:scale-105">
      <img
        alt="Robo IMG"
        src={`https://robohash.org/${robot.id}?200x200`}
      ></img>

      <div className="container p-8">
        <h1 className="pb-2 text-xl text-center">{robot.name}</h1>
        <p className="text-sm text-center">{robot.email}</p>
      </div>
    </div>
  );
};
export default Card;

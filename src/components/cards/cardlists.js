import React from "react";

import Card from "./card";

const CardList = ({ robots }) => {
  return (
    <React.Fragment>
      {robots.length > 0 ? (
        <div className="flex items-baseline justify-center flex-wrap m-3 ">
          {robots.map((robot) => (
            <Card key={robot.id} id={robot.id} {...robot} />
          ))}
        </div>
      ) : (
        <div className="special text-center text-3xl ">Nothing to Show</div>
      )}
    </React.Fragment>
  );
};

export default CardList;

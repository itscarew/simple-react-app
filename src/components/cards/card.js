import React from "react";

const Card = ({
  id,
  email,
  name,
  username,
  address: { street, city },
  phone,
  website,
}) => {
  return (
    <div className=" w-64   ">
      <div className=" bg-green-400 m-2 rounded shadow ">
        <img
          src={`https://robohash.org/${id}`}
          alt="test"
          className="h-64 w-64 "
        />
        <div>
          <h2 className="text-2xl font-bold "> Name : {name}</h2>
          <h3 className="text-1xl"> Username : {username}</h3>
          <p> Email : {email}</p>

          <details>
            <summary>More Information:</summary>
            <p> Street : {street} </p>
            <p> City : {city} </p>
            <p> Phone : {phone} </p>
            <p> website : {website} </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Card;

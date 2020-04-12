import React from "react";

const Scroll = ({ children }) => {
  return (
    <div
      className="m-3"
      style={{
        overflowY: "scroll",
        border: "1px solid white ",
        height: "800px",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;

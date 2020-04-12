import React from "react";

const SearchBox = ({ handleSearch }) => {
  return (
    <input
      className="m-auto h-8 p-4 w-1/4  "
      type="text"
      placeholder="Search Robots..."
      onChange={handleSearch}
      name="searchValue"
    />
  );
};

export default SearchBox;

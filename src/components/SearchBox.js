import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="container flex items-center justify-center pb-4">
      <input
        className="text-center bg-blue-200 text-white"
        type="search"
        placeholder="search robot"
        onChange={searchChange}
      ></input>
    </div>
  );
};
export default SearchBox;

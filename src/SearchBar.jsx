import React from "react";
import { SEARCH_BUTTON } from "./icons";

const SearchBar = () => {
  return (
    <>
      <input
        type="text"
        className="w-full pl-2 h-full rounded-l-3xl border outline-gray-400"
        placeholder="Search"
      />
      <button className="text-gray-500 rounded-r-3xl border h-full w-[10%] flex justify-center items-center">
        {SEARCH_BUTTON}
      </button>
    </>
  );
};

export default SearchBar;

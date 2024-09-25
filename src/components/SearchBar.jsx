import React, { useEffect, useState } from "react";
import { SEARCH_BUTTON } from "./icons";
import { SEARCH_SUGGESTIONS } from "../constants";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { UpdateCache } from "../utils/SearchSlice";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [, setFocused] = useState(false);

  const dispatch = useDispatch();
  const store = useSelector((store) => store.search.cache);

  const getSearchSuggestions = async () => {
    const json = await fetch(SEARCH_SUGGESTIONS + searchText);
    const data = await json.json();

    setSuggestions(data[1]);

    // update cache
    dispatch(UpdateCache([searchText, data[1]]));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // Get data from store if exists

      // to check whether the key is there is store if yes it will take from store else it will make an API call
      if (Object.keys(store).includes(searchText)) {
        setSuggestions(store[searchText]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText, getSearchSuggestions, store]);

  return (
    <>
      <input
        type="text"
        className="w-full pl-2 h-full rounded-l-3xl border outline-gray-400 p-1"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <button className="text-gray-500 rounded-r-3xl border h-full w-[10%] flex justify-center items-center hover:border-gray-400">
        {SEARCH_BUTTON}
      </button>

      {suggestions.length === 0 ? null : (
        <div
          className={`absolute top-full bg-white z-10 w-[90%] p-2`}
          //FIXME:
        >
        
        {suggestions.map((data, index) => (
            <a href={"/search?s=" + data} key={index}>
              <div className="text-lg px-1 py-2 flex items-center gap-3 border-b-[1px] border-gray-100">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-lg text-gray-400"
                />
                {data}
              </div>
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;

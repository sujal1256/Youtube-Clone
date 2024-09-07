import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  SEARCH_RESULT_API_FIRST_HALF,
  SEARCH_RESULT_API_SECOND_HALF,
} from "../constants";
import SearchResultVideo from "./SearchResultVideo";

const SearchResults = () => {
  const [params] = useSearchParams();
  const [searchResuts, setSearchResuts] = useState([]);
  

  useEffect(() => {
    getVideos();
  }, [params]);

  async function getVideos() {
    const json = await fetch(
      SEARCH_RESULT_API_FIRST_HALF +
        params.get("s") +
        SEARCH_RESULT_API_SECOND_HALF
    );
    const data = await json.json();

    setSearchResuts(data?.items);
  }

  return (
    <div className="bg-white w-full pl-10">
      <p className="text-sm mb-6">
        Search results for{" "}
        <span className="font-semibold">{params.get("s")}</span>
      </p>
      <div className="flex flex-col gap-3">
        {searchResuts &&
          searchResuts.map((e) => (
            <Link key={e?.id?.videoId} to={"/watch?v=" + e?.id?.videoId}>
              <SearchResultVideo id={e?.id?.videoId} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SearchResults;

import React, { useEffect, useState } from "react";

import { getValidNum, timeSinceUpload} from "../functions";
import useVideoId from "../utils/useVideoId";

const SearchResultVideo = ({ id }) => {
const videoData = useVideoId(id);

  console.log(videoData);

  return (
    <div className="flex gap-2">
      <div className="overflow-hidden h-[180px] w-[300px] bg-black rounded">
        <img
          src={videoData?.snippet?.thumbnails?.standard?.url}
          alt="Thumbnail"
          className="w-full h-full object-cover scale-100"
        />
      </div>
      <div className="text-box flex flex-col gap-3 p-2 overflow-hidden">
        <p className="font-semibold text-xl">{videoData?.snippet?.title}</p>
        {/* stats */}
        <div className="text-gray-500 flex flex-col">
          <p>{`${getValidNum(
            videoData?.statistics?.viewCount
          )} views | ${getValidNum(
            videoData?.statistics?.likeCount
          )} likes`}</p>
          {/* date */}
          <p>
            {timeSinceUpload(
              new Date().getTime() -
                new Date(videoData?.snippet?.publishedAt).getTime()
            )}{" "}
            ago
          </p>
        </div>
        <p className="text-gray-500 text-sm overflow-hidden w-3/4 ">{videoData?.snippet?.description.slice(0,100)}...</p>
      </div>
    </div>
  );
};

export default SearchResultVideo;

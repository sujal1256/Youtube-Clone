import { faEye, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { getValidNum } from "../constants";

const RecommendedVideo = ({ snippet, statistics, id }) => {
  console.log(snippet, statistics);
  const { title } = snippet;
  const { viewCount, likeCount } = statistics;
  return (
    <div className=" w-full flex m-2 gap-2">
      <div className="overflow-hidden h-full w-1/3 bg-black rounded">
        <img
          src={snippet?.thumbnails?.standard?.url}
          alt="Hello"
          className="w-full h-full scale-110 "
        />
      </div>
      <div className="text-box w-full">
        <p className="text-sm font-semibold">{title.slice(0,50)}</p>


          <p>{`${getValidNum(viewCount)} views | ${getValidNum(likeCount)} likes` }</p>
      </div>
    </div>
  );
};

export default RecommendedVideo;

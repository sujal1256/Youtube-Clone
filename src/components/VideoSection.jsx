import React from 'react';
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import VideoSectionShimmer from "./VideoSectionShimmer";
import {useSelector } from "react-redux";


const VideoSection = () => {
  const data  = useSelector((store) => store?.videos?.videos);  

  return data?.length === 0?<VideoSectionShimmer /> :(

    <div className="w-full flex flex-wrap justify-center items-center gap-4 overflow-x-scroll bg-white h-full mx-auto p-2">
      {data.map((video) => {
        return (
          <Link to={'/watch?v=' + video?.id} key={video.id}>
            <VideoCard  info={{ ...video }} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoSection;

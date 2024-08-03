import React, { useEffect, useState } from "react";
import { VIDEOS_API } from "../constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import VideoSectionShimmer from "./VideoSectionShimmer";


const VideoSection = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    getVideos();
  }, []);


  async function getVideos() {
    const json = await fetch(VIDEOS_API);
    const data = await json.json();
    setData(new Array(...data.items));
  }
  return data.length === 0?<VideoSectionShimmer /> :(

    <div className="flex flex-wrap w-full justify-around gap-2 p-5 overflow-x-scroll">
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

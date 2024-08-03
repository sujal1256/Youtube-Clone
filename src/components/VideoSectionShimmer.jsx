import React from "react";

const VideoSectionShimmer = () => {
  return (
    <div className="flex flex-wrap w-full justify-around gap-3 p-5 overflow-x-scroll">        
      {Array(50)
        .fill("")
        .map((e,index) => {
          return <div key = {index} className="h-[280px] w-[250px] bg-slate-100"></div>
        })}

    </div>
  );
};

export default VideoSectionShimmer;

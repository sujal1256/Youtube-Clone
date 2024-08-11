import React from "react";

const VideoSectionShimmer = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-4 overflow-x-scroll bg-white h-full mx-auto p-2">        
      {Array(50)
        .fill("")
        .map((e,index) => {
          return <div key = {index} className="h-[280px] w-[250px] bg-slate-100"></div>
        })}

    </div>
  );
};

export default VideoSectionShimmer;

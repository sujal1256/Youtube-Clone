  import React from "react";


  const getValidNum=(a)=>{
    if(a > Math.pow(10,9)){
      return Math.floor(a/Math.pow(10,9))+'B';
    }
    else if(a>Math.pow(10,6)){
      return Math.floor(a/Math.pow(10,6))+'M';
    }
    else if(a>Math.pow(10,3)){
      return Math.floor(a/Math.pow(10,3))+'K';
    }
    return Math.floor(a);
  }


  const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const likeString = getValidNum(Number(statistics?.likeCount));
    const viewString = getValidNum(Number(statistics?.viewCount));

    return (
      <div className="bg-white md:w-[250px] relative flex flex-col rounded justify-between pb-5 gap-2">
        <img
          src={snippet?.thumbnails?.medium?.url}
          alt="thumbnail"
          className="w-full block overflow-hidden rounded h-3/4"
        />
        {/* text box */}
        <div className="px-2">
          <p className="h-12 overflow-hidden text-md font-semibold">
            {snippet?.title}
          </p>
          <div className="text-[12px] text-gray-500 flex gap-1">
            <p className="">{likeString} likes</p>
            <p className="">|</p>
            <p>{viewString} views</p>
          </div>
        </div>
      </div>
    );
  };

  export default VideoCard;

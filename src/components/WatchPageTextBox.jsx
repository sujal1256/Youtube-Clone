import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import {
  faSave,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { getValidNum } from "../constants";

const WatchPageTextBox = ({videoContent,showLiveChat,setShowLiveChat}) => {
  return (
    <div className="p-2 my-1 flex flex-col gap-3">
            <p className="font-semibold text-xl ">
              {videoContent?.snippet?.title}
            </p>
            <div className="flex justify-between">
              <div className="flex items-center text-sm gap-2">
                <img
                  src="https://marketplace.canva.com/EAFcyEtxbGA/1/0/1600w/canva-black-and-red-modern-gaming-youtube-channel-logo-onRlchjOY2w.jpg"
                  alt="Channel logo"
                  className="w-10 bg-gray-300 rounded-full"
                />
                {/* Channel Name and Subscribe Button */}
                <span className="flex flex-col gap-2">
                  <p className="font-semibold">Channel Name</p>
                  <button className="bg-black p-1 text-white rounded-full">
                    Subsribe
                  </button>
                </span>
              </div>
              <div className=" w-1/2 flex gap-3 items-center justify-start">
                {/* Like and Dislike button */}
                <div className="flex items-center">
                  <button className="bg-gray-200 hover:bg-gray-300 flex items-center gap-1 py-1 px-2 rounded-lg rounded-r-none border-r-[1px] border-gray-500">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <p className="text-md">{getValidNum(videoContent?.statistics?.likeCount)}</p>
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 py-1 px-2 rounded-lg rounded-l-none">
                    <FontAwesomeIcon icon={faThumbsDown} />
                  </button>
                </div>
                <button className="bg-gray-200 hover:bg-gray-300 flex items-center gap-1 py-1 px-2 rounded-lg">
                  <FontAwesomeIcon icon={faShare} />
                  Share
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 flex items-center gap-1 py-1 px-2 rounded-lg">
                  <FontAwesomeIcon icon={faSave} />
                  Save
                </button>
                <button
                  className="bg-gray-200 hover:bg-gray-300 flex items-center gap-1 py-1 px-2 rounded-lg"
                  onClick={() => setShowLiveChat(!showLiveChat)}
                >
                  <FontAwesomeIcon icon={faComment} />
                  Live Chat
                </button>
              </div>
            </div>
          </div>
  )
}

export default WatchPageTextBox
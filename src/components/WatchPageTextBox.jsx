import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import {
  faSave,
  faThumbsDown as regulerThumbsDown,
  faThumbsUp as regulerThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown as boldThumbsDown,faThumbsUp as boldThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { getValidNum } from "../functions";
import { useDispatch } from 'react-redux';
import { addLikedVideo, removeLikedVideo } from '../utils/LikedVideosSlice';




const WatchPageTextBox = ({videoContent,showLiveChat,setShowLiveChat}) => {
  const dispatch = useDispatch();
  const [likeAndDislike,setLikeAndDislike] = useState({
    like:false,
    dislike:false
  });

  function handleLike(){
    if(likeAndDislike.like === false){
      setLikeAndDislike({
        like:true,
        dislike:false
      })
      dispatch(addLikedVideo(videoContent));
    }
    else{
      setLikeAndDislike({
        like:false,
        dislike:false,
      })
      dispatch(removeLikedVideo(videoContent))
    }
  }
  function handleDislike(){
    if(likeAndDislike.dislike === false){
      setLikeAndDislike({
        like:false,
        dislike:true
      })
    }
    else{
      setLikeAndDislike({
        like:false,
        dislike:false,
      })
    }
  }
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
                  <button className="bg-gray-200 hover:bg-gray-300 flex items-center gap-1 py-1 px-2 rounded-lg rounded-r-none border-r-[1px] border-gray-500" onClick={handleLike}>
                    <FontAwesomeIcon icon={likeAndDislike.like?boldThumbsUp:regulerThumbsUp} />
                    <p className="text-md">{getValidNum(videoContent?.statistics?.likeCount)}</p>
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 py-1 px-2 rounded-lg rounded-l-none" onClick={handleDislike}>
                    <FontAwesomeIcon icon={likeAndDislike.dislike?boldThumbsDown:regulerThumbsDown} />
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
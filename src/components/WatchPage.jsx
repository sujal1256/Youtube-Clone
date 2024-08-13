import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/SidebarSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import store from "../utils/store";
import RecommendedVideo from "./RecommendedVideo";

import WatchPageTextBox from "./WatchPageTextBox";

const WatchPage = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videos.videos);
  const [liveChats, setLiveChat] = useState([]);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const videoContent = useSelector((store) => store.selectedVideo.video);

  console.log(videoContent);

  useEffect(() => {
    dispatch(closeMenu());
    return () => setLiveChat([]);
  }, []);

  return (
    <div className="p-5 bg-white flex w-full">
      <div className="flex flex-col w-full items-center">
        <div className="w-full">
          <iframe
            width="1000"
            height="500"
            src={`https://www.youtube.com/embed/${params.get("v")}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; encrypted-media;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="shrink-0 w-full"
          ></iframe>
          {/* text box */}
          <WatchPageTextBox videoContent={videoContent} setShowLiveChat={setShowLiveChat} showLiveChat={showLiveChat}/>
        </div>

        <CommentsContainer />
      </div>
      <div
        className={`w-1/2 p-5 flex flex-col pt-0 ${
          showLiveChat ? "" : "hidden"
        }`}
      >
        {/* Live Chat */}

        <LiveChat liveChats={liveChats} setLiveChat={setLiveChat} />

        {/* Recommended movies */}
        {videos && (
          <div className="bg-white w-full my-2 h-full">
            <h1 className="font-bold text-2xl">Recommended Videos</h1>
            {/* videos */}
            <div className="h-96 overflow-y-scroll overflow-x-hidden">
              {videos.length > 0 &&
                videos.map((e) => {
                  return (
                    <Link to={"/watch?v=" + e?.id} key={e?.id}>
                      <RecommendedVideo {...e} />
                    </Link>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchPage;

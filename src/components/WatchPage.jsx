import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/SidebarSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="p-5 bg-white flex w-full">
      <div className="flex flex-col w-full items-center">
        <iframe
          width="1200"
          height="600"
          src={`https://www.youtube.com/embed/${params.get("v")}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="shrink-0 w-full"
        ></iframe>
        <CommentsContainer />
      </div>
      <div className=" w-1/2 p-5 flex flex-col pt-0">
          {/* Live Chat */}

            <LiveChat />


          {/* Recommended movies */}
          <div className="bg-white w-full h-40 "></div>
      </div>
    </div>
  );
};

export default WatchPage;

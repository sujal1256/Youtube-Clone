import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/SidebarSlice";


const WatchPage = () => {
  const [params] = useSearchParams();
  console.log(params.get("v"));
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeMenu());
  },[])

  return (
    <div className="p-5 bg-white flex w-full">
      <iframe
        width="1200"
        height="600"
        src={`https://www.youtube.com/embed/${params.get('v')}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="shrink-1 w-[75%]"
      ></iframe>
      <div className="bg-red-500">
adas
      </div>
    </div>
  );
};

export default WatchPage;

import React, { useEffect, useState } from "react";
import Message from "./Message";
import { generateRandomChatMessage, generateRandomName } from "../constants";

const LiveChat = () => {
  const [liveChats, setLiveChat] = useState([]);
  useEffect(() => {
    const timer = setInterval(() => {
      liveChats.splice(20,1)
      setLiveChat(liveChats);
      console.log(liveChats);

      setLiveChat([
        {
          name: generateRandomName(),
          message: generateRandomChatMessage(),
        },
        ...liveChats,
      ]);
    }, Math.floor(Math.random()*(1000-100)+1));
    return () => {
      clearInterval(timer);
    };
  }, [liveChats]);
  return (
    <>

      <div className="bg-slate-100 w-full h-full border-gray-300 border-2  relative p-2 border-t-2 rounded-t-lg flex flex-col-reverse gap-1 overflow-y-scroll">
        {liveChats.map((chat, index) => (
          <Message {...chat} key={index} />
        ))}
      </div>
      <div className="bg-slate-100 w-full border-gray-300 border-2 rounded-lg relative p-2 rounded-t-none border-t-0">
        LiveChat
      </div>
    </>
  );
};

export default LiveChat;

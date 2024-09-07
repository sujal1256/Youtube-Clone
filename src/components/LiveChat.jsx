import React, { useEffect, useState } from "react";
import Message from "./Message";
import { LIVE_CHAT_COUNT } from "../constants";
import { generateRandomChatMessage, generateRandomName } from "../functions";

const LiveChat = ({ liveChats, setLiveChat,showLiveChat }) => {
  const [liveChatMessage, setMessage] = useState("");

  const handleSubmit = (e) => {
    
    e.preventDefault();
    setLiveChat([
      {
        name: "Sujal Malhotra",
        message: liveChatMessage,
        user: true,
      },
      ...liveChats,
    ]);
    setMessage("");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      liveChats.splice(LIVE_CHAT_COUNT, 1);
      setLiveChat(liveChats);

      setLiveChat([
        {
          name: generateRandomName(),
          message: generateRandomChatMessage(),
        },
        ...liveChats,
      ]);
    }, Math.floor(Math.random() * (1000 - 500)) + 500);
    return () => {
      clearInterval(timer);
    };
  }, [liveChats, setLiveChat]);
  return (
    <div>
      <div className="bg-slate-100 w-full h-[62vh] border-gray-300 border-2  relative p-2 border-t-2 rounded-t-lg flex flex-col-reverse gap-1 overflow-y-scroll">
        {liveChats.map((chat, index) => (
          <Message {...chat} key={index} />
        ))}
      </div>
      <form className="w-full border-gray-300 border-2 rounded-lg relative  rounded-t-none border-t-0 flex justify-between">
        <input
          type="text"
          value={liveChatMessage}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-full outline-none px-2"
        />
        <button className="p-2 bg-gray-300" onClick={handleSubmit}>
          Post
        </button>
      </form>
    </div>
  );
};

export default LiveChat;

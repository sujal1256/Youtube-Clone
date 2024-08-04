import React, { useState } from "react";
import { faAngleDown, faAngleUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentsList from "./CommentsList";

const Comment = ({ name, comment, replies }) => {
  const [replyOpen, setReplyOpen] = useState(false);
  
  return (
    <div className="flex flex-col gap-2 px-2">
      <div className="flex flex-col bg-gray-200 mb-1 rounded-lg w-full p-1">
        <div className="flex gap-2 items-center p-2">
          <FontAwesomeIcon
            icon={faUser}
            className="rounded-full p-2 bg-gray-400 "
          />
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-sm text-gray-700">{comment}</p>
          </div>
        </div>
        {replies.length > 0 && (
          <button
            className="text-left px-10 text-blue-500"
            onClick={()=>setReplyOpen(!replyOpen)}
          >
            {replyOpen && <FontAwesomeIcon icon={faAngleUp} className="mx-1" />}
            {!replyOpen && <FontAwesomeIcon icon={faAngleDown} className="mx-1" />}

            Replies {replies.length}
          </button>
        )}
      </div>
      {replyOpen && <CommentsList comments={replies} />}
    </div>
  );
};

export default Comment;

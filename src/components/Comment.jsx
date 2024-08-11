import React, { useState } from "react";
import {
  faAngleDown,
  faAngleUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp,faThumbsDown} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentsList from "./CommentsList";

const Comment = ({ name, comment, replies }) => {
  const [replyOpen, setReplyOpen] = useState(false);
  const [commentBoxOpen, setCommentBox] = useState(false);
  const [repliesArray, setRepliesArray] = useState(replies);
  const [commentState, setComment] = useState("");

  const handleClick = (e) => {
    setRepliesArray([
      { name: "Sujal Malhotra", comment: commentState, replies: [] },
      ...repliesArray
    ]);
    setReplyOpen(true);
    setComment("");
  };
  
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex flex-col bg-gray-200 mb-1 rounded-lg w-full p-1">
        <div className="flex gap-2 items-start p-2">
          <FontAwesomeIcon
            icon={faUser}
            className="rounded-full p-2 bg-gray-400 "
          />
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-sm text-gray-700">{comment}</p>
            <div className="flex gap-4 my-1">
              <span className="flex items-center">
                <FontAwesomeIcon icon={faThumbsUp} />
                <p>1</p>
              </span>

              <span className="flex items-center">
                <FontAwesomeIcon icon={faThumbsDown} />
                <p>1</p>
              </span>

              <button
                className="text-left w-fit"
                onClick={() => setCommentBox(!commentBoxOpen)}
              >
                Reply
              </button>
            </div>
          </div>
        </div>
        {repliesArray?.length > 0 && (
          <button
            className="text-left mx-10 text-blue-500 w-fit"
            onClick={() => setReplyOpen(!replyOpen)}
          >
            {replyOpen && <FontAwesomeIcon icon={faAngleUp} className="mx-1" />}
            {!replyOpen && (
              <FontAwesomeIcon icon={faAngleDown} className="mx-1" />
            )}
            {repliesArray.length} replies
          </button>
        )}
        {commentBoxOpen && <div className="w-[95%] my-1 text-black rounded-lg  flex gap-1 mx-auto">
          <textarea
            type="text"
            className="border-0 bg-transparent border-b-[1px] w-full border-black outline-none overflow-hidden resize-none px-2"
            placeholder="Add a Comment"
            value={commentState}
            onChange={(e) => setComment(e?.target?.value)}
            rows={1}
          />
          <button
            className="p-1 w-12 h-full bg-blue-600 rounded-lg text-white"
            onClick={handleClick}
          >
            Post
          </button>
        </div>}
      </div>
      {replyOpen && <CommentsList comments={repliesArray} />}
    </div>
  );
};

export default Comment;

import React, { useState } from "react";
import CommentsList from "./CommentsList";
import { comments } from "../constants";

const CommentsContainer = () => {
  const [comment, setComment] = useState("");
  const [commentsArray, setCommentArray] = useState(comments);

  const handleClick = (e) => {
    if (comment == "") return;
    e.preventDefault();
    setCommentArray([
      ...commentsArray,
      { name: "Sujal Malhotra", comment: comment, replies: [] },
    ]);
    setComment("");
  };

  const handleInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setComment(e.target.value);
  };

  return (
    <div className="my-4 w-full">
      <h1 className="font-bold text-2xl relative">Comments:</h1>
      <CommentsList comments={commentsArray} />
      <div className="gap-2 m-2 rounded-lg px-2 flex flex-col items-end">
        <textarea
          type="text"
          className="border-0 border-b-[1px] w-full border-black outline-none overflow-hidden resize-none "
          placeholder="Add a comment"
          required={true}
          onChange={handleInput}
          value={comment}
          rows={1}
        />
        <button
          onClick={handleClick}
          className=" px-2 py-1 bg-blue-600 rounded-lg text-white h-8"
        >Comment
        </button>
      </div>
    </div>
  );
};

export default CommentsContainer;

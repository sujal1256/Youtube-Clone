import React, { useState } from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  const [commentsArray, setCommentArray] = useState(comments);
  const [comment,setComment] = useState("");
  if (comments.length === 0) return;

  const handleClick = (e) => {
    e.preventDefault();
    setCommentArray([
      ...commentsArray,
      { name: "Sujal Malhotra", comment: comment ,replies:[]},
    ]);
  };
  console.log(commentsArray);
  
  return (
    <div className="flex flex-col gap-2 m-2 border-l-2 w-full">
      {commentsArray.map((e, index) => {
        return (
          <div key={index}>
            <Comment {...e} />
          </div>
        );
      })}
      <div className="flex flex-col justify-between items-end gap-2 mx-2 rounded-lg bg-gray-100 border-2 border-black">
        <input type="text" className="bg-transparent w-full h-10 p-2 text-black rounded-lg outline-none" placeholder="Comment here" required={true} onChange={(e)=>setComment(e.target.value)} value={comment}/>
        <button onClick={handleClick} className="p-1 bg-gray-300 w-12 h-8 rounded-lg">Post</button>
      </div>
    </div>
  );
};

export default CommentsList;

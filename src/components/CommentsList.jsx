import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {

  return (
    <div className="flex flex-col gap-2 m-2 border-l-2 w-full">
      {comments.map((e, index) => {
        return (
          <div key={index}>
            <Comment {...e} />
          </div>
        );
      })}
      
    </div>
  );
};

export default CommentsList;

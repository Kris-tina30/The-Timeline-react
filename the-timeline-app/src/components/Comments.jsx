import React, { useState } from "react";
import "../App.css";

export default function Comments({ postId, comments, onAddComment }) {
  const [userComment, setUserComment] = useState("");
  const handleChange = (e) => {
    setUserComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(postId, userComment);
    setUserComment("");
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input-comment"
          type="text"
          name="userComment"
          placeholder="Your comment here..."
          value={userComment}
          onChange={handleChange}
          autoComplete="off"
        />
        <button className="btn comment">Post a comment</button>
      </form>

      <div className="post-item">
        {comments && comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="post-item">
              <h3 className="comment-item">{comment.userComment}</h3>
            </div>
          ))
        ) : (
          <p className="comment-text">No comments yet.</p>
        )}
      </div>
    </div>
  );
}

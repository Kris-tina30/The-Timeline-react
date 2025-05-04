import React, { useState } from "react";
import Comments from "./Comments";
import axios from "axios";
import "../App.css";

export default function Posts({
  posts,
  errors,
  onAddPost,
  onDeletePost,
  onAddComment,
}) {
  const [formData, setFormData] = useState({
    userName: "",
    userMessage: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    axios
      .post("http://localhost:2100/posts", formData)
      .then((result) => {
        onAddPost(formData);

        setFormData({ userName: "", userMessage: "" });
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };
  return (
    <div>
      <h1>Timeline</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="userName">Post a message</label>
        <input
          type="text"
          name="userName"
          placeholder="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        {errors?.userName && <p className="error">{errors.userName.message}</p>}

        <textarea
          name="userMessage"
          value={formData.userMessage}
          onChange={handleChange}
        />
        {errors?.userMessage && (
          <p className="error">{errors.userMessage.message}</p>
        )}

        <button className="btn post" type="submit">
          Post a message
        </button>
        <h4 className="err-msg">{error && error}</h4>
      </form>

      <div className="post-data">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="post-item">
              <h3 className="name">{post.userName}</h3>
              <span className="date">- {post.createdAt}</span>

              <div className="message-wrap">
                <p className="message">{post.userMessage}</p>
                <button
                  className="btn delete-btn"
                  onClick={() => onDeletePost(post._id)}
                >
                  delete
                </button>
              </div>
              <Comments
                postId={post._id}
                comments={post.comments}
                onAddComment={onAddComment}
              />
            </div>
          ))
        ) : (
          <p>There are no messages. Be the first to post something!</p>
        )}
      </div>
    </div>
  );
}

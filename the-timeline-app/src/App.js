import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Posts from "./components/Posts.jsx";
import NotFound from "./components/NotFound.jsx";
import { createPost } from "./utils/createPost.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comments from "./components/Comments.jsx";

function App() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, createPost(newPost)]);
  };
  const handleDeletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
  };
  const handleAddComment = (postId, commentText) => {
    const updatedPosts = posts.map((post) =>
      post._id === postId
        ? {
            ...post,
            comments: [...post.comments, { userComment: commentText }],
          }
        : post
    );
    setPosts(updatedPosts);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route
            path="/posts"
            element={
              <Posts
                posts={posts}
                onAddPost={handleAddPost}
                onDeletePost={handleDeletePost}
                onAddComment={handleAddComment}
              />
            }
          ></Route>
          <Route path="/post/:postComment" element={<Comments />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

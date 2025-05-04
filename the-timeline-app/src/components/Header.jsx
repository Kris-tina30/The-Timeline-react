import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <div className="header-container">
          <nav>
            <img
              src="/images/arrow-left.svg"
              alt="arrow left icon"
              width="50px"
            />
            <img
              src="/images/arrow-right.svg"
              alt="arrow right icon"
              width="50px"
            />
            <img src="/images/x-mark.svg" alt="x mark icon" />
            <img src="/images/home.svg" alt="home icon" />
          </nav>

          <input type="text" />

          <button className="header-btn btn">
            <img src="../images/search.svg" alt="search icon" />
          </button>
        </div>
      </header>
      <Link to="/posts">View posts</Link>
    </div>
  );
}

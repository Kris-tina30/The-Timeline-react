import React from "react";
import "../App.css";

export default function Header() {
  return (
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
  );
}

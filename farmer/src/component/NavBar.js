import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>A</span>ll
            <span>T</span>hings
            <span>G</span>reen
          </h2>
          <h3>
            <span>F</span>armer's
            <span>P</span>age
          </h3>
        </div>

        {/* 2nd menu part  */}
        <div className="menu-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Enthusiast</a>
            </li>
          </ul>
        </div>

      </nav>

      {/* hero section  */}
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>All THings Green</h1>
      </section>
    </>
  );
}

export default NavBar;

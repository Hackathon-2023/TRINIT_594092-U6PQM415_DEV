import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <nav className="main-foot">
        {/* 1st logo part  */}
        <div className="foot">
            <p> © copyright reserved @ 2023 </p>
          <div className="menu-link">
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        </div>

        {/* 2nd menu part  */}
       

      </nav>
    </>
  );
}

export default Footer;
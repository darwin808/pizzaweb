import React from "react";
import Navbar from "./Navbar";
import "./Body1.css";
function Body1() {
  return (
    <div className="body1">
      <Navbar />

      <div className="body1-container">
        <div className="left-body1">
          <p className="body1-header">GREATEST PIZZA EVER</p>
          <p className="body1-subheader">READY IN 60 SECONDS</p>
          <button className="btnBody1">Place Order</button>
        </div>
        <div className="right-body1"></div>
      </div>
    </div>
  );
}

export default Body1;

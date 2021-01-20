import React from "react";
import "./Body3.css";
import pic4 from "../assets/p4.jpg";

const Body3 = () => {
  return (
    <div className="body3">
      <img src={pic4} alt="1231231" id="imgb3" />
      <h1 className="headerb4">Pizza of the Day</h1>
      <h2 className="h2b4">
        Truffle alfredo sauce toppped with 24 carat gold dust
      </h2>
      <button className="btnb4">Order Now</button>
    </div>
  );
};

export default Body3;

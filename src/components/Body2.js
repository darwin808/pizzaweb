import React from "react";
import "./Body2.css";
import pic1 from "../assets/p1.jpg";
import pic2 from "../assets/p2.jpg";
import pic3 from "../assets/p3.jpg";
const Body2 = () => {
  return (
    <div className="body2">
      <div className="body2Header">Choose your favourite</div>
      <div className="body2-cards">
        <div className="card1">
          <img src={pic1} alt="123" id="imgBody2" />

          <div className="shadow"></div>
          <h1 className="Body2-header">Supreme PIzza</h1>

          <p className="Body2-para">Marinara sauce, basil, italian</p>
          <p className="Body2-para">sausage, roma tomatose, olives</p>
          <p className="Body2-para">and pesto</p>
          <p className="Body2-price">$19.99</p>
          <button className="btn-body2">Add to Cart</button>
        </div>
        <div className="card2">
          <img src={pic2} alt="123" id="imgBody2" />
          <h1 className="Body2-header">Supreme PIzza</h1>
          <div className="shadow"></div>
          <p className="Body2-para">Marinara sauce, basil, italian</p>
          <p className="Body2-para">sausage, roma tomatose, olives</p>
          <p className="Body2-para">and pesto</p>
          <p className="Body2-price">$19.99</p>
          <button className="btn-body2">Add to Cart</button>
        </div>
        <div className="card3">
          <img src={pic3} alt="123" id="imgBody2" />
          <h1 className="Body2-header">Supreme PIzza</h1>
          <div className="shadow"></div>
          <p className="Body2-para">Marinara sauce, basil, italian</p>
          <p className="Body2-para">sausage, roma tomatose, olives</p>
          <p className="Body2-para">and pesto</p>
          <p className="Body2-price">$19.99</p>
          <button className="btn-body2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Body2;

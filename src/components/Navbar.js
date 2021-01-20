import React, { useState, useEffect } from "react";
import "./Navbar.css";

function useWindow() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const x = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", x);
  }, []);
  return size;
}

const Navbar = () => {
  const [burger, setburger] = useState(false);
  const [height, width] = useWindow();
  const toggleburger = () => {
    setburger(!burger);
  };
  return (
    <div className="Navbar">
      <h1 className="mainHeader">Pizza</h1>

      <h2 className="menu">Menu</h2>
      <i
        style={{ color: `${!burger ? "white" : "black"}` }}
        onClick={toggleburger}
        class={!burger ? "fas fa-pizza-slice fa-2x" : "fas fa-times fa-2x"}></i>

      <ul
        className="menuItems"
        style={{
          display: `${burger ? "flex" : "none"}`,
        }}>
        <li>Pizzas</li>
        <li>Desserts</li>
        <li>Full Menu</li>
        <li>
          <button className="btn">Order Now</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import "../style/model.css";

const LimitedStock = () => {
  return (
    <div className="limited-stock-container">
      <div className="image-container">
        <img
          src="shoe-image-url" // Replace with actual image URL
          alt="Limited stock shoe"
          className="shoe-image"
        />
        <div className="decorative-peaches">
          <div className="peach peach-1"></div>
          <div className="peach peach-2"></div>
        </div>
      </div>
      <div className="text-container">
        <h1>Oops! Looks like you are letting go a limited-stock shoe</h1>
        <p>
          Our stocks are limited & high in demand. So don’t miss out on your
          favorite items!
        </p>
        <button className="shop-button">Shop before it is too late</button>
      </div>
    </div>
  );
};

export default LimitedStock;

import React from "react";
import PropTypes from "prop-types";
import "./Product.scss";
import Button from "../Button/Button";
import { useState } from "react";

const Product = ({
  image,
  title,
  price,
  description,
  availability,
  category,
}) => {
  const [count, setCount] = useState(0);
  const handlePlusCount = () => {
    if (count <= availability - 1) {
      setCount(count + 1);
    }
  };
  const handleMinusCount = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt="product"></img>
      </div>
      <div className="info-container">
        <h2>{title}</h2>
        <p className="price">{price}€</p>
        <div className="description">
          {description.map((text, index) => (
            <p className="text-wrap" key={index}>
              {text}
            </p>
          ))}
        </div>
        <p className="availability">
          <strong>Availability: </strong>
          <span className="green-text">{availability} in stock</span>
        </p>
        <div className="buttons-wrapper">
          <span className="item-count">
            <button className="item-count-button" onClick={handleMinusCount}>
              -
            </button>
            <span>{count}</span>
            <button className="item-count-button" onClick={handlePlusCount}>
              +
            </button>
          </span>
          <Button title="Add to cart" />
        </div>
        <p className="category">Category: {category}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.array,
  availability: PropTypes.number,
  category: PropTypes.string,
};

export default Product;

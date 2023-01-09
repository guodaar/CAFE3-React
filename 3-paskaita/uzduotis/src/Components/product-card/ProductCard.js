import "./ProductCard.scss";
import PropTypes from "prop-types";
import StarRating from "../StarRating/StarRating.js";

const ProductCard = ({ productType, productName, productPrice }) => {
  return (
    <div className="product-card">
      <p className="type">{productType}</p>
      <h2 className="name">{productName}</h2>
      <StarRating />
      <p className="price">{productPrice}</p>
    </div>
  );
};

ProductCard.propTypes = {
  productType: PropTypes.string,
  productName: PropTypes.string,
  productPrice: PropTypes.string,
};

export default ProductCard;

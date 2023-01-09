import "./StarRating.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => setRating(index)}
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;

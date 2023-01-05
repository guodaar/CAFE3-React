import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ onClick, backgroundColor, children }) => {
  return (
    <button
      className="styled-button"
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string, //Optional
  onClick: PropTypes.func, //Optional
  children: PropTypes.node.isRequired, //Required
};

export default Button;

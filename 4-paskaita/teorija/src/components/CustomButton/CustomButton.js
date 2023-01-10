import "./CustomButton.scss";

const CustomButton = ({ variant, children, onClick }) => {
  if (variant === "text") {
    return (
      <button className="button text" onClick={onClick}>
        {children}
      </button>
    );
  } else if (variant === "outlined") {
    return (
      <button className="button outlined" onClick={onClick}>
        {children}
      </button>
    );
  } else {
    return (
      <button className="button contained" onClick={onClick}>
        {children}
      </button>
    );
  }
};

export default CustomButton;

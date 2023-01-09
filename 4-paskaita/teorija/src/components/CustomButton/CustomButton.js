import "./CustomButton.scss";

const CustomButton = ({ variant, children }) => {
  if (variant === "text") {
    return <button className="button text">{children}</button>;
  } else if (variant === "outlined") {
    return <button className="button outlined">{children}</button>;
  } else {
    return <button className="button contained">{children}</button>;
  }
};

export default CustomButton;

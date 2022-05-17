import React from "react";
import Icon from "./Icons";

const Button = ({ onCreate, text, className }) => {
  return (
    <button onClick={onCreate} className={className}>
      <Icon name="plus" size={12} />
      <span>{text}</span>
    </button>
  );
};

export default Button;

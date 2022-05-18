import React from "react";
import Icon from "./Icons";

const Button = ({ text, className, iconName }) => {
  if (iconName) {
    return (
      <button type="button" className={className}>
        <Icon name={iconName} size={12} />
        <span>{text}</span>
      </button>
    );
  } else {
    return (
      <button type="button" className={className}>
        <span>{text}</span>
      </button>
    );
  }
};

export default Button;

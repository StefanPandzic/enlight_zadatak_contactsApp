import React from "react";
import Icons from "../images/icon-sprite.svg";
import PropTypes from "prop-types";

//React Component for loading icons from sprite svg file
const Icon = ({ name, stroke, color, size }) => (
  <svg
    className={`icon icon-${name}`}
    stroke={stroke}
    fill={color}
    width={size}
    height={size}
  >
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Icon;

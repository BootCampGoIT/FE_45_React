import React from "react";
import sprite from "../../../assets/header/header.svg";

const Logo = () => {
  return (
    <svg>
      <use href={sprite + "#icon-home"} />
    </svg>
  );
};

export default Logo;

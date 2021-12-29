import React from "react";
import sprite from "../../../assets/header/header.svg";
import { LogoStyled } from "./LogoStyled";

const Logo = () => {
  return (
    <LogoStyled>
      <svg className='logo'>
        <use href={sprite + "#icon-home"} />
      </svg>
    </LogoStyled>
  );
};

export default Logo;

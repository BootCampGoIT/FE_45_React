import React from "react";
import { HeaderStyled } from "./HeaderStyled";
import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;

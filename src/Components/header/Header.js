import React from "react";
import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;

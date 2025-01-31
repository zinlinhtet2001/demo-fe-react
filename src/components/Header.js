import React from "react";
import config from "../config";

const Header = ({ locale }) => {
  const { welcomeMessage } = config[locale];

  return (
    <header>
      <h1>{welcomeMessage}</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;
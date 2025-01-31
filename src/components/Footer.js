import React from "react";
import config from "../config";

const Footer = ({ locale }) => {
  const { currency } = config[locale];

  return (
    <footer>
      <p>Currency: {currency}</p>
      <p>&copy; 2023 My Website</p>
    </footer>
  );
};

export default Footer;
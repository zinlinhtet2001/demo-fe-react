import React from "react";
import config from "../config";

const About = ({ locale }) => {
  const { language } = config[locale];

  return (
    <section>
      <h2>About</h2>
      <p>Language: {language}</p>
    </section>
  );
};

export default About;
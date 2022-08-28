import React from "react";
import { GitHubIcon, LinkedInIcon } from "../UI/Icons/Icons";

import classes from "./Footer.module.css";

const Footer = () => (
  <footer className={classes.footer}>
    <div className={classes.footerMenu}>
      <a href="#about">About</a>
      <a href="#cv">Qualifications</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
    <div className={classes.footerSocial}>
      <a
        href="https://github.com/julianCostinea"
        target="_blank"
        rel="noreferrer"
      >
        {GitHubIcon}
      </a>
      <a
        href="https://www.linkedin.com/in/emil-julian-costinea-74b291103/"
        target="_blank"
        rel="noreferrer"
      >
        {LinkedInIcon}
      </a>
      {/* <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
      {LinkedInIcon}
      </a> */}
    </div>
  </footer>
);

export default Footer;

import React from "react";
import { GitHubIcon, facebookIcon } from "../UI/Icons/Icons";

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
        href="https://www.facebook.com/julian.costinea"
        target="_blank"
        rel="noreferrer"
      >
        {facebookIcon}
      </a>
      {/* <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
      {LinkedInIcon}
      </a> */}
    </div>
  </footer>
);

export default Footer;

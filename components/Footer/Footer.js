import React from "react";
import { GitHubIcon, LinkedInIcon } from "../UI/Icons/Icons";

import classes from "./Footer.module.css";

const Footer = () => (
  <footer className={classes.footer}>
    <div className={classes.footerMenu}>
        <a href="#about">About</a>
        <a href="#cv">C.V.</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </div>
    <div className={classes.footerSocial}>
      {GitHubIcon}
      {LinkedInIcon}
    </div>
  </footer>
);

export default Footer;

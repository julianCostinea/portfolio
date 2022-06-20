import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.css";

const NavigationItems = () => {
  return (
    <ul className={`${classes.NavigationItems}`}>
      <NavigationItem link="#about">About</NavigationItem>
      <NavigationItem link="#cv">C.V.</NavigationItem>
      <NavigationItem link="#projects">Projects</NavigationItem>
      <NavigationItem link="#contact">Contact</NavigationItem>
    </ul>
  );
};

export default NavigationItems;

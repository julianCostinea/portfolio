import React from "react";
import Logo from "../../Logo/Logo";

import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <nav className={classes.DesktopOnly}>
        <Logo />
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;

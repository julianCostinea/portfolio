import React, { useContext } from "react";
import SideDrawerContext from "../../../store/SideDrawerContext";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../DrawerToggle/DrawerToggle";
import { MailIcon, LinkedInIcon, GitHubIcon } from "../../UI/Icons/Icons";

import classes from "./SideDrawer.module.css";

const SideDrawer = () => {
  const sideDrawerCtx = useContext(SideDrawerContext);
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (sideDrawerCtx.showMenu) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <React.Fragment>
      <DrawerToggle />
      <div
        className={attachedClasses.join(" ")}
        style={{ textAlign: "center" }}
      >
        <nav>
          <NavigationItems />
        </nav>
        <div className={classes.Footer}>
          <div className={classes.SideDrawerSocial}>
            {LinkedInIcon}{GitHubIcon}
          </div>
          <div className={classes.SideDrawerSocial}>
            {MailIcon}&nbsp;
            <a href="mailto:julian.costinea@gmail.com">julian.costinea@gmail.com</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;

import React, { useContext } from "react";
// import SideDrawerContext from "../../store/SideDrawerContext";
import Link from "next/link";

import classes from "./Logo.module.css";

const Logo = (props) => {
//   const sideDrawerCtx = useContext(SideDrawerContext);
  return (
    <div className={classes.Logo} style={{ cursor: "pointer" }}>
      <Link href="/" passHref>
        <a
        //   onClick={sideDrawerCtx.hideSideDrawer}
          className={classes.LogoContainer}
        >
          <p>
            <strong>Julian&nbsp;|&nbsp;E.C.</strong>
          </p>
        </a>
      </Link>
    </div>
  );
};

export default Logo;

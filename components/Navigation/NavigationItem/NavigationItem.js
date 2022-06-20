import React, {useContext} from "react";
// import SideDrawerContext from "../../../store/SideDrawerContext";
import { useRouter } from "next/router";

import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  const router = useRouter();
  // const sideDrawerCtx = useContext(SideDrawerContext);
  return (
    // `${classes.NavigationItem} ${sideDrawerCtx.showMenu ? classes.openPreview : null}`
    <li className={`${classes.NavigationItem}`} id={"listItem"}>
        <a
          href={props.link}
          // onClick={sideDrawerCtx.hideSideDrawer}
          className={
            router.pathname == props.link
              ? classes.active
              : null
          }
        >
          {props.children}
        </a>
    </li>
  );
};

export default NavigationItem;

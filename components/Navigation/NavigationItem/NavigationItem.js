import React, {useContext} from "react";
import SideDrawerContext from "../../../store/SideDrawerContext";
import { useRouter } from "next/router";

import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  const router = useRouter();
  const sideDrawerCtx = useContext(SideDrawerContext);
  return (
    
    <li className={`${classes.NavigationItem} ${sideDrawerCtx.showMenu ? classes.openPreview : null}`} id={"listItem"}>
        <a
          href={props.link}
          onClick={sideDrawerCtx.hideSideDrawer}
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

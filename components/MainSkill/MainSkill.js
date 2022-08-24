import React from "react";

import classes from "./MainSkill.module.css";

const MainSkill = (props) => {
  return (
    <div className={classes.MainSkill}>
      {props.skillIcon}
      <p>{props.title}</p>
    </div>
  );
};

export default MainSkill;

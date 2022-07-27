import React from "react";

import classes from "./Loader.module.css";

const Loader = (props) => {
  const hideCheckmark = !props.hideCheckmark;

  let loaderClasses = [classes.label];
  if (!hideCheckmark) {
    loaderClasses = [classes.label, classes.labelConfirmed]
  }
  return (
    <>
      <label htmlFor="" className={loaderClasses.join(' ')}>
        <div 
          className={classes.checkIcon} 
          style = {{display: hideCheckmark ? 'none' : 'block'}}>
          </div>
      </label>
    </>
  );
};

export default Loader;

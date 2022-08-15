import React from "react";

import classes from "./OtherSkill.module.css";

const OtherSkill = (props) => {

    return (
        <div className={classes.otherSkill}>
            <h4>{props.title}</h4>
        </div>
    );
};

export default OtherSkill;

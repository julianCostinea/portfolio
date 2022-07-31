import React from "react";
import { GitHubIcon } from "../UI/Icons/Icons";

import classes from "./FetchedRepo.module.css";

const FetchedRepo = (props) => {
  return (
    <li className={classes.FetchedRepo}>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <a href={props.url} target="_blank" rel="noreferrer">
        {GitHubIcon}
      </a>
    </li>
  );
};

export default FetchedRepo;

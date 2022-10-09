import React, { useEffect } from "react";
import Image from "next/image";

import classes from "./HighlightedProject.module.css";

const HighlightedProject = (props) => {
  useEffect(() => {
    const sliders = document.querySelectorAll(
      `.${classes["highlightedProject"]}`
    );
    const appearOptions = {
      threshold: 0,
      rootMargin: "100px 0px 0px 0px",
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add(classes["appear"]);
          observer.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    sliders.forEach((slider) => {
      appearOnScroll.observe(slider);
    });
  }, []);

  return (
    <div className={classes.highlightedProject}>
      <a href={props.projectURL} target="_blank" rel="noreferrer">
        <div className={classes.highlightedProjectPhoto}>
          <Image
            layout="fill"
            quality={100}
            loading="lazy"
            src={`/${props.projectPhoto}`}
            alt={props.projectTitle}
          />
        </div>
        <div className={classes.projectDetails}>
          <h3>{props.projectTitle} </h3>
          <p>{props.projectDescription}</p>
          <h4>Technologies used: {props.projectTechnologies}</h4>
        </div>
      </a>
    </div>
  );
};

export default HighlightedProject;

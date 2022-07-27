import React, { useEffect } from "react";
import Image from 'next/image'

import classes from "./HighlightedProject.module.css";

const HighlightedProject = (props) => {
    useEffect(() => {
        const sliders = document.querySelectorAll(`.${classes["highlightedProject"]}`);
        const appearOptions = {
            threshold: 0,
            rootMargin: " 0px 0px -100px 0px",
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
            <div className={classes.highlightedProjectPhoto}>
                <Image
                    height={350} width={350} quality={100} loading="lazy"
                    src='/Mexico.jpg' alt="Project photo"
                />
            </div>
            <div className={classes.projectDetails}>
                <h3>{props.projectTitle}</h3>
                <p>{props.projectDescription}</p>
                <h4>Technologies used: {props.projectTechnologies}</h4>
            </div>
        </div>
    );
};

export default HighlightedProject;

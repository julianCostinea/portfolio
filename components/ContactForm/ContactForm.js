import React, {
    useRef,
    useState,
} from "react";

import classes from "./ContactForm.module.css";

const ContactForm = (props) => {
    const titleRef = useRef();
    const mainTagsRef = useRef();
    const secondaryTagsRef = useRef();

    const [errorHeader, setErrorHeader] = useState(null);

    const userRecommendationFormHandler = (event) => {
        event.preventDefault();
        const title = titleRef.current.value.trim();
        const mainTags = mainTagsRef.current.value.trim();
        const secondaryTags = secondaryTagsRef.current.value.trim();
        const formData = { title, mainTags, secondaryTags };

        if (!title) {
            setErrorHeader("Title cannot be empty!");
            return;
        }

        fetch("www.nothing.com", {
            method: "POST",
            body: JSON.stringify(formData),
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                setErrorHeader(`Something went wrong. We're looking into it`);
            });
    };

    return (
        <div className={classes.formContainer}>
            <h3 style={{ marginBlock: 0 }}>
                Feel free to leave out any fields you&apos;re not sure of
            </h3>
            <form method="POST" onSubmit={userRecommendationFormHandler}>
                <h3 className={classes.errorHeader}>{errorHeader}</h3>
                <div className={classes.Input}>
                    <label htmlFor="title"> Title*</label>
                    <input
                        name="title"
                        id="title"
                        required
                        placeholder="Title of your recommendation"
                        ref={titleRef}
                        className={classes.InputElement}
                    />
                </div>
                <div className={classes.Input}>
                    <label htmlFor="mainTags"> LAbel</label>
                    <input
                        name="mainTags"
                        id="mainTags"
                        ref={mainTagsRef}
                        placeholder={"mainTagsPlaceholder"}
                        className={classes.InputElement}
                    />
                </div>
                <div className={classes.Input}>
                    <label htmlFor="secondaryTags"> Genre(s)</label>
                    <input
                        ref={secondaryTagsRef}
                        name="secondaryTags"
                        id="secondaryTags"
                        placeholder={"secondaryTagsPlaceholder"}
                        className={classes.InputElement}
                    />
                </div>
                <button type="submit" className={classes.Button}>
                    SEND
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

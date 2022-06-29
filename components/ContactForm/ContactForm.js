import React, {
    useRef,
    useState,
    useEffect
} from "react";

import classes from "./ContactForm.module.css";

const ContactForm = (props) => {
    const nameRef = useRef();
    const telephoneRef = useRef();
    const emailRef = useRef();
    const companyRef = useRef();
    const descriptionRef = useRef();


    useEffect(() => {
        nameRef.current.errorMessage = "THIS IS AN ERROR"

      }, []);

    const [errorHeader, setErrorHeader] = useState(null);

    const validateInputs = (...inputs) => {
        for (let i=0; i<inputs.length; i++){
            if (inputs[i].value === '') {
                setErrorHeader(inputs[i].errorMessage);
            }
        }
    }

    const userRecommendationFormHandler = (event) => {
        event.preventDefault();
        const name = nameRef.current.value.trim();
        const telephone = telephoneRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const company = companyRef.current.value.trim();
        const description = descriptionRef.current.value.trim();
        // console.log(nameRef.current.errorMessage);
        validateInputs (nameRef.current, telephoneRef.current, emailRef.current, companyRef.current, descriptionRef.current);
        return
        
        const formData = { name, telephone, email, company, description };

        if (!name) {
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
            <h2>
                Have a project or job opportunity we should talk about?
            </h2>
            <h3>Drop me a line!</h3>
            <form method="POST" onSubmit={userRecommendationFormHandler}>
                <h3 className={classes.errorHeader}>{errorHeader}</h3>
                <div className={classes.Input}>
                    <label htmlFor="name"> Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        ref={nameRef}
                        autoComplete="name"
                        className={classes.InputElement}
                        error = {"THIS IS AN ERROR"}
                    />
                </div>
                <div className={classes.Input}>
                    <label htmlFor="telephone"> Phone Number</label>
                    <input
                        type="tel"
                        name="telephone"
                        id="telephone"
                        ref={telephoneRef}
                        autoComplete="tel"
                        className={classes.InputElement}
                    />
                </div>
                <div className={classes.Input}>
                    <label htmlFor="email"> Email</label>
                    <input
                        ref={emailRef}
                        type="email"
                        name="email"
                        id="email"
                        className={classes.InputElement}
                    />
                </div>
                <div className={classes.Input}>
                    <label htmlFor="company"> Company (if applicable)</label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        ref={companyRef}
                        autoComplete="company"
                        className={classes.InputElement}
                    />
                </div>
                <div className={classes.Input}>
                    <label htmlFor="description">Project/Job description</label>
                    <textarea
                        name="description"
                        id="description"
                        rows="5"
                        ref={descriptionRef}
                        className={classes.InputElement}
                    >
                    </textarea>
                </div>
                <button type="submit" className={classes.Button}>
                    SEND
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

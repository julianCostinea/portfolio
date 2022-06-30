import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import classes from "./ContactForm.module.css";

const ContactForm = (props) => {
  const nameRef = useRef();
  const telephoneRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const descriptionRef = useRef();
  const templateParams = {
    from_name: "Julio",
    to_name: "Person",
    message: "message",
  };

  useEffect(() => {
    nameRef.current.errorMessage = "Name cannot be shorter than 3 characters.";
    emailRef.current.errorMessage = "Please enter a valid e-mail";
    descriptionRef.current.errorMessage =
      "Job/Project description must be longer than 10 characteers.";
  }, []);

  const [errorHeader, setErrorHeader] = useState(null);

  const validateInputs = (...inputs) => {
    setErrorHeader("");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.border = "1px solid #ccc";
      if (inputs[i].id === "email") {
        if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs[i].value)
        ) {
          inputs[i].style.border = "1px solid red";
          setErrorHeader(inputs[i].errorMessage);
          return;
        }
      }
      if (inputs[i].id === "description") {
        if (inputs[i].value.length < 10) {
          inputs[i].style.border = "1px solid red";
          setErrorHeader(inputs[i].errorMessage);
        }
      }
      if (inputs[i].value.length < 3) {
        inputs[i].style.border = "1px solid red";
        setErrorHeader(inputs[i].errorMessage);
      }
    }
  };

  const userRecommendationFormHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value.trim();
    const telephone = telephoneRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const company = companyRef.current.value.trim();
    const description = descriptionRef.current.value.trim();
    validateInputs(nameRef.current, emailRef.current, descriptionRef.current);
    emailjs
      .send(
        "service_j9zx7nl",
        "template_vvlalpg",
        templateParams,
        "97iBAgNYtpWNFBuZj"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    return;
    //SEND EMAIL LOGIC
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
      <h2>Have a project or job opportunity we should talk about?</h2>
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
            required
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
          ></textarea>
        </div>
        <button type="submit" className={classes.Button}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

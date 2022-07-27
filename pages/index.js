import Head from "next/head";
import { useEffect } from "react";
import DownloadButton from "../components/Button/DownloadButton";
import { ProfilePhoto } from "../components/UI/ProfilePhoto/profilePhoto";
import styles from "../styles/Home.module.css";
import * as Icons from "../components/UI/Icons/Icons";
import ContactForm from "../components/ContactForm/ContactForm";
import HighlightedProject from "../components/HighlightedProject/HighlightedProject";

export default function Home() {
  useEffect(() => {
    const sliders = document.querySelectorAll(`.${styles["slideUp"]}`);
    const homeIntroSection = document.querySelector(`.${styles["homeIntro"]}`);
    const navBar = document.querySelector("header");

    const appearOptions = {
      threshold: 0,
      rootMargin: " 0px 0px -100px 0px",
    };
    const navigationOptions = {
      rootMargin: "-200px 0px 0px 0px",
    };

    const navigationObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          navBar.classList.add(styles["inverseNavbar"]);
        } else {
          navBar.classList.remove(styles["inverseNavbar"]);
        }
      });
    },
      navigationOptions);
    navigationObserver.observe(homeIntroSection);

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add(styles["appear"]);
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
    <div className={styles.container}>
      <Head>
        <title>Julian | Web Developer</title>
        <meta
          name="description"
          content="I develop websites using mostly javascript."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.homeIntro} id="about">
          <div className={styles.rotatingSentence}>
            <h2>Hello! I am <span style={{ color: "white" }}>Julian.</span></h2>
            <h2 className={styles.sentence}>
              I develop apps with the help of
              <div className={styles.slidingVertical}>
                <span>React</span>
                <span>Express</span>
                <span>NEXT.js</span>
                <span>MongoDB</span>
                <span>Php</span>
                <span>Laravel</span>
                <span>MySQL</span>
              </div>
            </h2>
          </div>
          <div className={styles.aboutMe}>
            <ProfilePhoto />
            <p>
              <span>Julian Emil Costinea</span>
            </p>
            <p>
              Working from <span>Odense, Denmark</span>
            </p>
            <p>
              Born in <span>1995</span>
            </p>
            <p>
              Email: <span>julian.costinea@gmail.com</span>
            </p>
            <DownloadButton>
              Download C.V.
            </DownloadButton>
            <div className={styles.homeSocial}>
              {Icons.GitHubIcon}
              {Icons.LinkedInIcon}
            </div>
            <div className={styles.photoCredit}>
              Photo by <a href="https://unsplash.com/@antoinerault?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Antoine Rault</a> on <a href="https://unsplash.com/s/photos/mountains?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
          </div>
        </div>
        <div className={styles.cvSectionContainer} id="cv">
          <h1>Experience</h1>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>
              {Icons.LaptopIcon}
            </div>
            <div>
              <h4>2016-2022</h4>
              <h3>HR Consultant & IT Manager</h3>
              <h4>GoWork Studenterhjælp ApS</h4>
              <p>Duis enim dolore ut pariatur minim. Ullamco magna eu ad ut dolore aute velit aliqua. Officia amet voluptate labore anim culpa pariatur nisi quis ullamco enim irure officia deserunt occaecat. Veniam irure cupidatat reprehenderit tempor minim. Est irure dolore dolore Lorem incididunt magna aute sunt sit consequat cillum.</p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>
              {Icons.LaptopIcon}
            </div>
            <div>
              <h4>2018-2022</h4>
              <h3>Freelance Developer</h3>
              <p>Duis enim dolore ut pariatur minim. Ullamco magna eu ad ut dolore aute velit aliqua. Officia amet voluptate labore anim culpa pariatur nisi quis ullamco enim irure officia deserunt occaecat. Veniam irure cupidatat reprehenderit tempor minim. Est irure dolore dolore Lorem incididunt magna aute sunt sit consequat cillum.</p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>
              {Icons.BoxIcon}
            </div>
            <div>
              <h4>2014-2016</h4>
              <h3>Warehouse worker</h3>
              <h4>Alex Andersen Ølund A/S</h4>
              <p>Duis enim dolore ut pariatur minim. Ullamco magna eu ad ut dolore aute velit aliqua. Officia amet voluptate labore anim culpa pariatur nisi quis ullamco enim irure officia deserunt occaecat. Veniam irure cupidatat reprehenderit tempor minim. Est irure dolore dolore Lorem incididunt magna aute sunt sit consequat cillum.</p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>
              {Icons.ForksIcon}
            </div>
            <div>
              <h4>2012-2014</h4>
              <h3>Part-Time Waiter/Bartender</h3>
              <h4>Hotel Metropolis</h4>
              <p>Duis enim dolore ut pariatur minim. Ullamco magna eu ad ut dolore aute velit aliqua. Officia amet voluptate labore anim culpa pariatur nisi quis ullamco enim irure officia deserunt occaecat. Veniam irure cupidatat reprehenderit tempor minim. Est irure dolore dolore Lorem incididunt magna aute sunt sit consequat cillum.</p>
            </div>
          </div>
          <h1>Education</h1>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>
              {Icons.EducationIcon}
            </div>
            <div>
              <h4>2020</h4>
              <h3>Next JS</h3>
              <h4>Academind</h4>
              <p>Duis enim dolore ut pariatur minim. Ullamco magna eu ad ut dolore aute velit aliqua. Officia amet voluptate labore anim culpa pariatur nisi quis ullamco enim irure officia deserunt occaecat. Veniam irure cupidatat reprehenderit tempor minim. Est irure dolore dolore Lorem incididunt magna aute sunt sit consequat cillum.</p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>
              {Icons.EducationIcon}
            </div>
            <div>
              <h4>2019</h4>
              <h3>ReactJS (including Hooks and Redux)</h3>
              <h4>Academind</h4>
              <p>Duis enim dolore ut pariatur minim. Ullamco magna eu ad ut dolore aute velit aliqua. Officia amet voluptate labore anim culpa pariatur nisi quis ullamco enim irure officia deserunt occaecat. Veniam irure cupidatat reprehenderit tempor minim. Est irure dolore dolore Lorem incididunt magna aute sunt sit consequat cillum.</p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>
              {Icons.EducationIcon}
            </div>
            <div>
              <h4>2019</h4>
              <h3>MongoDB</h3>
              <h4>Academind</h4>
              <p>Duis enim dolore ut pariatur minim. Ullamco magna eu ad ut dolore aute velit aliqua. Officia amet voluptate labore anim culpa pariatur nisi quis ullamco enim irure officia deserunt occaecat. Veniam irure cupidatat reprehenderit tempor minim. Est irure dolore dolore Lorem incididunt magna aute sunt sit consequat cillum.</p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>
              {Icons.EducationIcon}
            </div>
            <div>
              <h4>2019</h4>
              <h3>Express JS</h3>
              <h4>Academind</h4>
              <p>Duis enim dolore ut pariatur minim. Ullamco magna eu ad ut dolore aute velit aliqua. Officia amet voluptate labore anim culpa pariatur nisi quis ullamco enim irure officia deserunt occaecat. Veniam irure cupidatat reprehenderit tempor minim. Est irure dolore dolore Lorem incididunt magna aute sunt sit consequat cillum.</p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>
              {Icons.EducationIcon}
            </div>
            <div>
              <h4>2019</h4>
              <h3>ES6</h3>
              <h4>WesBos</h4>
              <p>Duis enim dolore ut pariatur minim. Ullamco magna eu ad ut dolore aute velit aliqua. Officia amet voluptate labore anim culpa pariatur nisi quis ullamco enim irure officia deserunt occaecat. Veniam irure cupidatat reprehenderit tempor minim. Est irure dolore dolore Lorem incididunt magna aute sunt sit consequat cillum.</p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>
              {Icons.EducationIcon}
            </div>
            <div>
              <h4>2018</h4>
              <h3>Laravel</h3>
              <h4>Udemy</h4>
              <p>Duis enim dolore ut pariatur minim. Ullamco magna eu ad ut dolore aute velit aliqua. Officia amet voluptate labore anim culpa pariatur nisi quis ullamco enim irure officia deserunt occaecat. Veniam irure cupidatat reprehenderit tempor minim. Est irure dolore dolore Lorem incididunt magna aute sunt sit consequat cillum.</p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>
              {Icons.EducationIcon}
            </div>
            <div>
              <h4>2018</h4>
              <h3>MySQL</h3>
              <h4>Udemy</h4>
              <p>Duis enim dolore ut pariatur minim. Ullamco magna eu ad ut dolore aute velit aliqua. Officia amet voluptate labore anim culpa pariatur nisi quis ullamco enim irure officia deserunt occaecat. Veniam irure cupidatat reprehenderit tempor minim. Est irure dolore dolore Lorem incididunt magna aute sunt sit consequat cillum.</p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>
              {Icons.EducationIcon}
            </div>
            <div>
              <h4>2018</h4>
              <h3>Basic and Advanced PHP</h3>
              <h4>Udemy</h4>
              <p>Duis enim dolore ut pariatur minim. Ullamco magna eu ad ut dolore aute velit aliqua. Officia amet voluptate labore anim culpa pariatur nisi quis ullamco enim irure officia deserunt occaecat. Veniam irure cupidatat reprehenderit tempor minim. Est irure dolore dolore Lorem incididunt magna aute sunt sit consequat cillum.</p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>
              {Icons.EducationIcon}
            </div>
            <div>
              <h4>2018</h4>
              <h3>Basics of VBA (Visual Basic for Application)</h3>
              <h4>Udemy</h4>
              <p>Duis enim dolore ut pariatur minim. Ullamco magna eu ad ut dolore aute velit aliqua. Officia amet voluptate labore anim culpa pariatur nisi quis ullamco enim irure officia deserunt occaecat. Veniam irure cupidatat reprehenderit tempor minim. Est irure dolore dolore Lorem incididunt magna aute sunt sit consequat cillum.</p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>
              {Icons.EducationIcon}
            </div>
            <div>
              <h4>2018</h4>
              <h3>HTML, CSS &amp; Javascript</h3>
              <h4>Codecademy</h4>
              <p>Duis enim dolore ut pariatur minim. Ullamco magna eu ad ut dolore aute velit aliqua. Officia amet voluptate labore anim culpa pariatur nisi quis ullamco enim irure officia deserunt occaecat. Veniam irure cupidatat reprehenderit tempor minim. Est irure dolore dolore Lorem incididunt magna aute sunt sit consequat cillum.</p>
            </div>
          </div>
        </div>
        <div id="projects" className={styles.projects}>
          <h1>My Work</h1>
          <h2>Highlighted projects</h2>
          <div className={styles.highlightedProjectsContainer}>
            <HighlightedProject projectTitle="WeHireYou" projectDescription="A website" projectTechnologies="NextJS, React, Typescript" />
            <HighlightedProject projectTitle="SpotMyNext" projectDescription="A website" projectTechnologies="NextJS, React" />
            <HighlightedProject projectTitle="GoWork ApS" projectDescription="A website" projectTechnologies="NextJS, React" />
          </div>
          <div className={styles.otherProjectsContainer}>
            <h2>Other projects</h2>
          </div>
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>
    </div>
  );
}

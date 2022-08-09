import Head from "next/head";
import { useEffect, useState } from "react";
import DownloadButton from "../components/Button/DownloadButton";
import { ProfilePhoto } from "../components/UI/ProfilePhoto/profilePhoto";
import styles from "../styles/Home.module.css";
import * as Icons from "../components/UI/Icons/Icons";
import ContactForm from "../components/ContactForm/ContactForm";
import HighlightedProject from "../components/HighlightedProject/HighlightedProject";
import FetchedRepo from "../components/FetchedRepo/FetchedRepo";

export default function Home() {
  const [fetchedRepos, setFetchedRepos] = useState("");
  useEffect(() => {
    const repos = fetch(`https://api.github.com/users/julianCostinea/repos`)
      .then((response) => response.json())
      .then((data) => {
        setFetchedRepos(
          data.map((item, index) => {
            if (item.stargazers_count != 0) {
              return (
                <FetchedRepo
                  key={item.full_name}
                  name={item.name}
                  description={item.description}
                  url={item.html_url}
                />
              );
            }
          })
        );
      })
      .catch(() => {
        console.log(`Something went wrong`);
      });

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
    <>
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
            <h2>
              Hello! I am <span style={{ color: "white" }}>Julian.</span>
            </h2>
            <h2 className={styles.sentence}>
              I develop apps with the help of
              <div className={styles.slidingVertical}>
                <span>React</span>
                <span>Express</span>
                <span>NEXT.js</span>
                <span>MongoDB</span>
                <span>Php</span>
                <span>Laravel</span>
                <span>mySQL</span>
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
            <DownloadButton>Download C.V.</DownloadButton>
            <div className={styles.homeSocial}>
              <a
                href="https://github.com/julianCostinea"
                target="_blank"
                rel="noreferrer"
              >
                {Icons.GitHubIcon}
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                {Icons.LinkedInIcon}
              </a>
            </div>
            <div className={styles.photoCredit}>
              Photo by{" "}
              <a href="https://unsplash.com/@antoinerault?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Antoine Rault
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/s/photos/mountains?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
          </div>
        </div>
        <div className={styles.cvSectionContainer} id="cv">
          <h1>Experience</h1>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>{Icons.LaptopIcon}</div>
            <div>
              <h4>2016-2022</h4>
              <h3>HR Consultant & IT Manager</h3>
              <h4>GoWork Studenterhjælp ApS</h4>
              <p>
                I have worked with hiring new temps, invoicing and paryroll.{" "}
                <br />
                As the IT manager I developed tools to help with invoicing and
                payroll, built in VBA and Excel.
                <br />
                Also developed the company website and recruiting portal.
              </p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>{Icons.LaptopIcon}</div>
            <div>
              <h4>2018-2022</h4>
              <h3>Freelance Developer</h3>
              <p>
                Built apps and websites for clients on upwork.com and
                freelancer.com <br />
                Tools used consist of React, Next.js, MongoDB, Php, Laravel and
                mySQL.
              </p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>{Icons.BoxIcon}</div>
            <div>
              <h4>2014-2016</h4>
              <h3>Warehouse worker</h3>
              <h4>Alex Andersen Ølund A/S</h4>
              <p>
                I have worked mostly with packing flowers for different
                supermarkets in Denmark as well as clients in other european
                countries.
              </p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>{Icons.ForksIcon}</div>
            <div>
              <h4>2012-2014</h4>
              <h3>Waiter/Bartender</h3>
              <h4>Hotel Metropolis</h4>
              <p>
                Both waiter and bar tending work during the summers from 2012 to
                2014.
              </p>
            </div>
          </div>
          <h1>Education</h1>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>{Icons.EducationIcon}</div>
            <div>
              <h4>2020</h4>
              <h3>Next JS</h3>
              <h4>Academind</h4>
              <p>
                File-based Routing, Page Pre-Rendering (Static Generation &amp;
                Server Side Rendering), Middlewares, API Routes
              </p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>{Icons.EducationIcon}</div>
            <div>
              <h4>2019</h4>
              <h3>ReactJS (including Hooks and Redux)</h3>
              <h4>Academind</h4>
              <p>
                Class Components &amp; Functional Components/Hooks, Redux,
                Optimizing, Portals, Animations, React Router, Unit Testing(with
                Jest)
              </p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>{Icons.EducationIcon}</div>
            <div>
              <h4>2019</h4>
              <h3>MongoDB</h3>
              <h4>Academind</h4>
              <p>
                CRUD (Create, Read, Update, Delete) operations, Aggregation
                Framework, Indexes, Connecting with Node.js driver
              </p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>{Icons.EducationIcon}</div>
            <div>
              <h4>2019</h4>
              <h3>Node &amp; Express JS</h3>
              <h4>Academind</h4>
              <p>
                Routing, Authentication &amp; Authorization, Session &amp;
                Cookies, Error Handling, File Upload, Unit Testing(with Jest),
                REST APIs, Middlewares, GraphQL
              </p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>{Icons.EducationIcon}</div>
            <div>
              <h4>2019</h4>
              <h3>ES6</h3>
              <h4>WesBos</h4>
              <p>Destructuring, Spread/Rest, Promises, ESLint, Async+Await</p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>{Icons.EducationIcon}</div>
            <div>
              <h4>2018</h4>
              <h3>Laravel</h3>
              <h4>Udemy</h4>
              <p>
                Routing, MVC(Model, View, Controller), Testing, Eloquent,
                Authentication, Database Migration,Seeding&amp;Factories,
                Caching, File System
              </p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>{Icons.EducationIcon}</div>
            <div>
              <h4>2018</h4>
              <h3>Basic and Advanced PHP</h3>
              <h4>Welling Thomson &amp; Udemy</h4>
              <p>
                Data types, Error and Exception Handling, Object-Oriented PHP,
                Managing Date &amp; Time File System, Session Control,
                Authentication &amp; Authorization, CRUD, Rest APIs
              </p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>{Icons.EducationIcon}</div>
            <div>
              <h4>2018</h4>
              <h3>mySQL</h3>
              <h4>Welling Thomson &amp; Udemy</h4>
              <p>
                Creating Tables, CRUD operations (INSERT, SELECT, UPDATE,
                DELETE), Table relationships (One to One, One to Many, Many to
                Many), User Administration
              </p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>{Icons.EducationIcon}</div>
            <div>
              <h4>2018</h4>
              <h3>Git &amp; GitHub</h3>
              <h4>Udemy</h4>
              <p>Commits, Branching, Merging, Rebasing, Stashing</p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>{Icons.EducationIcon}</div>
            <div>
              <h4>2018</h4>
              <h3>Basics of VBA (Visual Basic for Applications)</h3>
              <h4>Udemy</h4>
              <p>
                Data Types, Functions, Loops, Forms, Recording and Adapting
                Macros
              </p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>{Icons.EducationIcon}</div>
            <div>
              <h4>2018</h4>
              <h3>HTML, CSS &amp; Javascript</h3>
              <h4>Codecademy</h4>
              <p>
                Including Bootstrap and TailwindCSS. Regarding Javascript: Data
                types, Functions, Loops, Array/Objects.
              </p>
            </div>
          </div>
          <h1>Currently Studying</h1>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>{Icons.EducationIcon}</div>
            <div>
              <h4></h4>
              <h3>React Native</h3>
              <h4>Academind</h4>
            </div>
          </div>
        </div>
        <div id="projects" className={styles.projects}>
          <h1>My Work</h1>
          <h2>Highlighted projects</h2>
          <div className={styles.highlightedProjectsContainer}>
            <HighlightedProject
              projectTitle="SpotMyNext"
              projectDescription="Catalog app offering user based recommendations for movies, books and video games."
              projectTechnologies="Next.js, React, MongoDB, React-Transition-Group, Sendgrid, CSS Grid"
              projectPhoto="spotmynext.jpg"
              projectURL="https://spotmynext.com"
            />
            <HighlightedProject
              projectTitle="GoWork ApS"
              projectDescription="GoWork is a temp hiring agency in Denmark. Includes hiring portal."
              projectTechnologies="Next.js, React, Yup, Sendgrid"
              projectPhoto="gowork.jpg"
              projectURL="https://gowork.dk"
            />
            <HighlightedProject
              projectTitle="CompletCurat"
              projectDescription="CompletCurat is a cleaning company in Romania that services both private and commercial clients."
              projectTechnologies="Next.js, React, EmailJs, Swiper"
              projectPhoto = "completcurat.jpg"
              projectURL="https://completcurat-2eojcuyey-juliancostinea.vercel.app/"
            />
          </div>
          <h2>Current project(s)</h2>
          <div className={styles.CurrentProjectsContainer}>
            <HighlightedProject
              projectTitle="WeHireYou"
              projectDescription="A website"
              projectTechnologies="Next.js, React, Typescript, MongoDB, Amazon S3"
            />
          </div>
          <div className={styles.otherProjectsContainer}>
            <h2>Other projects</h2>
            <ul style={{ padding: "0px" }}>{fetchedRepos}</ul>
          </div>
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>
    </>
  );
}

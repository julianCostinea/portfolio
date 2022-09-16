import Head from "next/head";
import { useEffect, useState } from "react";
import DownloadButton from "../components/Button/DownloadButton";
import { ProfilePhoto } from "../components/UI/ProfilePhoto/profilePhoto";
import styles from "../styles/Home.module.css";
import * as Icons from "../components/UI/Icons/Icons";
import ContactForm from "../components/ContactForm/ContactForm";
import HighlightedProject from "../components/HighlightedProject/HighlightedProject";
import FetchedRepo from "../components/FetchedRepo/FetchedRepo";
import OtherSkill from "../components/UI/OtherSkill/OtherSkill";
import { IntroPhoto } from "../components/UI/IntroPhoto/IntroPhoto";
import MainSkill from "../components/MainSkill/MainSkill";
import * as MainSkillIcons from "../components/UI/MainSkillsSVGs/MainSkillsSVGS";

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
        <title>Emil | Web Developer</title>
        <meta
          name="description"
          content="I develop websites using mostly javascript."
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.homeIntro} id="about">
          <IntroPhoto />
          <div className={styles.rotatingSentence}>
            <h2>
              Hello! I am <span style={{ color: "white" }}>Emil.</span>
            </h2>
            <h2 className={styles.sentence}>I am a</h2>
            <div className={styles.slidingVertical}>
              <h2>
                <span>Web</span>
                <span>Front-End</span>
                <span>Back-End</span>
                <span>Full Stack</span>
              </h2>
            </div>
            <br />
            <h2>developer.</h2>
          </div>
          <div className={styles.aboutMe}>
            <ProfilePhoto />
            <p>
              <span>Emil Julian Costinea</span>
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
                href="https://www.linkedin.com/in/emil-julian-costinea-74b291103/"
                target="_blank"
                rel="noreferrer"
              >
                {Icons.LinkedInIcon}
              </a>
              {/* <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                {Icons.LinkedInIcon}
              </a> */}
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
        <div className={styles.cvSectionContainer} id="qualifications">
          <h1>
            Technical <span>skills</span>
          </h1>
          <div className={styles.mainSkillsContainer}>
            <MainSkill title="CSS3" skillIcon={MainSkillIcons.CSSIcon} />
            <MainSkill title="HTML5" skillIcon={MainSkillIcons.HTMLIcon} />
            <MainSkill
              title="JavaScript"
              skillIcon={MainSkillIcons.JavascriptIcon}
            />
            <MainSkill title="React" skillIcon={MainSkillIcons.ReactIcon} />
            <MainSkill title="Next.js" skillIcon={MainSkillIcons.NextJSIcon} />
            <MainSkill
              title="TypeScript"
              skillIcon={MainSkillIcons.TypeScriptIcon}
            />
            {/* <MainSkill title="NodeJS" skillIcon={MainSkillIcons.nodeIcon} /> */}
            <MainSkill title="MongoDB" skillIcon={MainSkillIcons.MongoDBIcon} />
            <MainSkill title="mySQL" skillIcon={MainSkillIcons.mySQLIcon} />
            <MainSkill title="PHP" skillIcon={MainSkillIcons.phpIcon} />
            <MainSkill title="Laravel" skillIcon={MainSkillIcons.laravelIcon} />
            {/* <MainSkill title="Jest" skillIcon={MainSkillIcons.JestIcon} /> */}
          </div>
          {/* <div className={`${styles.cvSection} ${styles.slideUp}`}>
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
              <h3>NEXT.js</h3>
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
              <h3>React (including Hooks and Redux)</h3>
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
              <h3>Node &amp; Express.js</h3>
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
              <h4>2018</h4>
              <h3>Laravel</h3>
              <h4>Udemy</h4>
              <p>
                Routing, MVC(Model, View, Controller), Testing, Eloquent,
                Authentication, Database Migration, Seeding&amp;Factories,
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
              <h4>2014-2018</h4>
              <h3>Bachelor in International Sales and Marketing</h3>
              <h4>University College Lillebælt</h4>
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
          </div> */}
          <div>
            <h1>
              Other <span>skills</span>
            </h1>
            <div className={styles.otherSkills}>
              <OtherSkill title="TailwindCSS" />
              <OtherSkill title="Bootstrap" />
              <OtherSkill title="Git &amp; GitHub" />
              <OtherSkill title="VBA" />
              <OtherSkill title="ES6" />
              <OtherSkill title="English" />
              <OtherSkill title="Danish" />
              <OtherSkill title="Spanish" />
            </div>
          </div>
        </div>
        <div id="projects" className={styles.projects}>
          <h1>My <span>Work</span></h1>
          <h2>Highlighted projects</h2>
          <div className={styles.highlightedProjectsContainer}>
            <HighlightedProject
              projectTitle="SpotMyNext"
              projectDescription="Catalog app offering user based recommendations for movies, books and video games."
              projectTechnologies="NEXT.js, React, MongoDB, React-Transition-Group, Sendgrid, CSS Grid"
              projectPhoto="spotmynext.jpg"
              projectURL="https://spotmynext.com"
            />
            <HighlightedProject
              projectTitle="GoWork ApS"
              projectDescription="GoWork is a temp hiring agency in Denmark. Includes hiring portal."
              projectTechnologies="NEXT.js, React, Yup, Sendgrid"
              projectPhoto="gowork.jpg"
              projectURL="https://gowork.dk"
            />
            <HighlightedProject
              projectTitle="CompletCurat"
              projectDescription="CompletCurat is a cleaning company in Romania that services both private and commercial clients."
              projectTechnologies="NEXT.js, React, EmailJs, Swiper"
              projectPhoto="completcurat.jpg"
              projectURL="https://complecurat.com"
            />
          </div>
          {/* <h2>Current project(s)</h2>
          <div className={styles.CurrentProjectsContainer}>
            <HighlightedProject
              projectTitle="WeHireYou"
              projectDescription="A hiring portal to be used as a SAAS."
              projectTechnologies="NEXT.js, React, Typescript, MongoDB, Amazon S3"
              projectPhoto="missing.png"
            />
          </div> */}
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

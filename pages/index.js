import Head from "next/head";
import { useEffect } from "react";
import DownloadButton from "../components/Button/DownloadButton";
import { ProfilePhoto } from "../components/UI/ProfilePhoto/profilePhoto";
import styles from "../styles/Home.module.css";
import { LinkedInIcon, GitHubIcon, LaptopIcon, BoxIcon, ForksIcon } from "../components/UI/Icons/Icons";
import ContactForm from "../components/ContactForm/ContactForm";

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
          <div>
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
              {GitHubIcon}
              {LinkedInIcon}
            </div>
          </div>
        </div>
        <div className={styles.cvSectionContainer} id="cv">
          <h1>Experience</h1>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>
              {LaptopIcon}
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
              {LaptopIcon}
            </div>
            <div>
              <h4>2018-2022</h4>
              <h3>Freelance Developer</h3>
              <p>Duis enim dolore ut pariatur minim. Ullamco magna eu ad ut dolore aute velit aliqua. Officia amet voluptate labore anim culpa pariatur nisi quis ullamco enim irure officia deserunt occaecat. Veniam irure cupidatat reprehenderit tempor minim. Est irure dolore dolore Lorem incididunt magna aute sunt sit consequat cillum.</p>
            </div>
          </div>
          <div className={`${styles.cvSection} ${styles.slideUp}`}>
            <div>
              {BoxIcon}
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
              {ForksIcon}
            </div>
            <div>
              <h4>2012-2014</h4>
              <h3>Part-Time Waiter/Bartender</h3>
              <h4>Hotel Metropolis</h4>
              <p>Duis enim dolore ut pariatur minim. Ullamco magna eu ad ut dolore aute velit aliqua. Officia amet voluptate labore anim culpa pariatur nisi quis ullamco enim irure officia deserunt occaecat. Veniam irure cupidatat reprehenderit tempor minim. Est irure dolore dolore Lorem incididunt magna aute sunt sit consequat cillum.</p>
            </div>
          </div>
        </div>
        <div className={styles.slideUp} id="projects">
          <p>
            Reprehenderit consectetur enim tempor proident eiusmod pariatur.
            Labore ut sunt Lorem laborum dolore tempor in elit irure veniam
            excepteur deserunt excepteur. Dolor dolore aute aliquip amet
            exercitation culpa sunt commodo ipsum tempor qui sit eu anim. Et
            adipisicing mollit tempor est. Proident irure do non irure
            incididunt laboris dolor consectetur sit aute sit. Culpa aliquip
            laborum magna excepteur labore excepteur consequat sunt culpa sint
            sint tempor. Enim fugiat fugiat fugiat quis officia amet fugiat quis
            anim duis cupidatat reprehenderit aute. Deserunt reprehenderit ut
            ipsum est mollit quis magna pariatur sit. Exercitation nostrud
            exercitation ex veniam aute est eu consectetur eiusmod commodo
            deserunt ea adipisicing. Magna excepteur culpa excepteur pariatur
            commodo amet esse. Pariatur exercitation aute nostrud ea veniam
            velit. Non esse ex amet amet ad dolor exercitation pariatur magna
            Lorem commodo amet dolor ea. Consequat pariatur duis magna commodo
            voluptate. Do aliqua minim duis ut eiusmod consectetur. Sunt velit
            pariatur nisi dolore ex. Ipsum adipisicing qui voluptate pariatur do
            anim nostrud incididunt.
          </p>
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>
    </div>
  );
}

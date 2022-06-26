import Head from "next/head";
import { useEffect } from "react";
import Button from "../components/Button/Button";
import { ProfilePhoto } from "../components/UI/ProfilePhoto/profilePhoto";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    const sliders = document.querySelectorAll(`.${styles["slideUp"]}`);
    const homeIntroSection = document.querySelector(`.${styles["homeIntro"]}`);
    const navBar = document.querySelector("header");

    const appearOptions = {
      threshold: 0,
      rootMargin: " 0px 0px -200px 0px",
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
            <h2>Hello! I am Julian.</h2>
            <h2 className={styles.sentence}>
              I develop apps with the help of
              <div className={styles.slidingVertical}>
                <span>React</span>
                <span>Express</span>
                <span>Next js</span>
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
            <Button>
              Download C.V.
            </Button>
            <br /><br />
            add github and linkedin
          </div>
        </div>
        <div className={styles.slideUp} id="cv">
          <p>
            Nostrud eiusmod cillum anim ad eu et anim excepteur est ut qui.
            Proident nostrud sint do excepteur ex ipsum do deserunt voluptate
            cillum aliqua in. Sit reprehenderit veniam Lorem laboris proident
            esse. Qui sunt ullamco magna proident consequat. Sint amet eiusmod
            consequat laborum irure ea enim pariatur. Mollit aliquip nostrud do
            aliqua id adipisicing incididunt velit. Quis fugiat id aliqua anim
            cillum est esse velit ea elit minim amet elit consequat. Eiusmod
            deserunt enim culpa esse tempor eu aute commodo pariatur culpa anim
            eu et. Duis aute exercitation in occaecat magna ad non dolore aute
            velit velit reprehenderit mollit. Do labore laboris ipsum sit dolore
            sit qui ea id quis. Ea consectetur consectetur officia esse qui sint
            occaecat nisi Lorem est aliquip eu est pariatur.
          </p>
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
        <div className={styles.slideUp} id="contact">
          <p>
            Laborum occaecat incididunt consectetur nostrud officia exercitation
            ex tempor consectetur cupidatat reprehenderit. Eiusmod ea veniam ad
            nisi exercitation mollit. Sunt ullamco quis est duis occaecat. Ea
            non irure fugiat laboris ex fugiat incididunt ut. Mollit dolor nulla
            qui cillum adipisicing ipsum eu aliquip nulla cillum occaecat. Minim
            quis id deserunt qui Lorem magna laboris anim occaecat excepteur
            cupidatat qui ullamco nulla. Voluptate nostrud occaecat nisi sit in
            labore. Irure et est in minim do duis. Culpa velit irure aliqua
            laboris consequat dolore elit aliquip reprehenderit quis. Aliquip
            culpa Lorem proident est exercitation aliquip cupidatat ad excepteur
            proident. Minim eu et nisi est quis minim exercitation cupidatat do.
            Velit consectetur ex nisi nisi elit minim adipisicing proident Lorem
            ipsum. Aute voluptate aliqua aliqua non. Fugiat commodo exercitation
            aliquip Lorem deserunt sunt et aliquip dolor occaecat ad nostrud
            fugiat. Ea proident ex veniam cillum veniam qui eu aute ex quis
            nostrud ad et. Commodo esse laboris culpa officia deserunt in ipsum.
            Nisi eu minim fugiat non proident dolor. Ea consequat eiusmod
            ullamco Lorem cillum culpa enim sunt eiusmod ullamco dolore ipsum
            duis. Ut velit exercitation magna eu incididunt voluptate aute eu
            Lorem esse laboris.
          </p>
        </div>
      </main>
    </div>
  );
}

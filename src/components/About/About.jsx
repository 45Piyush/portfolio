import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Personal Info</h3>
              <p>
                Myself Piyush Singh, and I'm passionate Computer science student
                currently pursuing Bachler of Technology in Computer Science &
                Engineering from Government College of Engineering, Nagpur,
                Maharastra, India.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                I have completed my schooling for both my 10th and 12th from
                Montfort Seniour Secondary School, CBSE, Nagpur, Maharastra. I
                secured 92.6% in 10th CBSE [ AISSE 2018 ] and 91.2% in my 12th
                CBSE [ AISSCE 2020] Board Examination. Currently, I have CGPA of
                8.76 in my college and will continue to strive to enhance my
                knowledge and skills.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Hobbies</h3>
              <p>
                Beyond academic pursuits, my hobbies that make me maintain a
                well balanaced entertained lifestyle includes playing sports
                especially Cricket, as well as watching it and staying updated
                with latest cricket news. Apart from this, I love watching
                animes, reading light novels, and play mobile games in my free
                time. Additionally, Exercise is an integral part of my routine,
                and lastly listening music for peace of mind and maintain
                calmness.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Skills</h3>
              <p>
                My Technical Skills include proficiency in Python & Java
                programming language. Skilled with Frontend web development
                using HTML, CSS, JavaScript and ReactJS. Satisfactory knowledge
                of database management systems like MySQL, SqLite3 Db. Handy with
                Python frameworks like Django, Django RestFramework for Backend
                Web Development. Additionally, familiar with various Data
                Science Python Libraries like numpy, pandas, matplotlib,
                tensorflow and Streamlit.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Area of Interests</h3>
              <p>
                My areas of interest is in the fields of Web Development and
                Artificial Intelligence. Keen to explore on Machine Learning and
                Deep Learning concepts. Committed to continuous learning and
                professional growth. Seeking opportunities to apply my skills and
                expand my knowledge.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

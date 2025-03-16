// import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        {/* Profile Image */}
        <img
          src={getImageUrl("about/aboutImage.png")}
          // src={getImageUrl("about/aboutPiyush.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />

        {/* About Content */}
        <div className={styles.aboutContent}>
          {/* Personal Info */}
          <div className={styles.aboutSection}>
            <h3>Personal Info</h3>
            <p>
            Myself Piyush Singh, a passionate and driven Computer Science enthusiast, graduated in 2024 with a Bachelor of Technology in Computer Science and Engineering from Government College of Engineering, Nagpur. Eager to leverage my technical skills and knowledge to contribute to innovative solutions and make a meaningful impact in the tech industry.
            </p>
          </div>

          {/* Education */}
          <div className={styles.aboutSection}>
            <h3>Education</h3>
            <ul className={styles.timeline}>
              <li>
                <span>2020 - 2024</span>
                <p>B.TECH in Computer Science & Engineering, Government College of Engineering, Nagpur (CGPA: 8.76)</p>
              </li>
              <li>
                <span>2018 - 2020</span>
                <p>12th CBSE, Montfort Sr. Sec. School, Nagpur (Percentage: 91.2%)</p>
              </li>
              <li>
                <span>2017 - 2018</span>
                <p>10th CBSE, Montfort Sr. Sec. School, Nagpur (Pecentage: 92.6%)</p>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className={styles.aboutSection}>
            <h3>Skills</h3>
            <div className={styles.skillsGrid}>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/python.png")} alt="Python" />
                <p>Python</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/django.png")} alt="Django" />
                <p>Python</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/react.png")} alt="React" />
                <p>React</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/java.png")} alt="Java" />
                <p>Java</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/mysql.png")} alt="MySQL" />
                <p>MySQL</p>
              </div>
            </div>
          </div>

          {/* Hobbies */}
          <div className={styles.aboutSection}>
            <h3>Hobbies</h3>
            <ul className={styles.hobbiesList}>
              <li>Cricket</li>
              <li>Coding</li>
              <li>Chess</li>
              <li>Exercising</li>
              <li>Listening to Music</li>
              <li>Reading Light Novels</li>

            </ul>
          </div>

          {/* Interests */}
          <div className={styles.aboutSection}>
            <h3>Area of Interests</h3>
            <ul className={styles.hobbiesList}>
              <li>Python Developer</li>
              <li>Web Development</li>
              <li>Artificial Intelligence</li>
              <li>Deep Learning</li>
              <li>Cloud Computing</li>
            </ul>
            {/* <p>
              Python Development, Web Development, Artificial Intelligence, Machine Learning, and Deep Learning.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
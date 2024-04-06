import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Development</h3>
              <p>
                I have interest in the field of web developement with experience in building responsive
                and optimized with Html,Css, Js and ReactJs along with decent knowledge of DBMS with MySqL.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Python Development</h3>
              <p>
                I have good knowledge of Python along with it's libraries Numpy, Pandas, Matplotlib and Seaborn.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Science/ AI/ ML</h3>
              <p>
                Currently I am developing my skills on Exploratory Data Analysis and Data Visualization through various Python Libraries.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Java Development</h3>
              <p>
              I have satisfactory knowledge of Oops with Java along with Java Collections,JDBC and Data Structures. .

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
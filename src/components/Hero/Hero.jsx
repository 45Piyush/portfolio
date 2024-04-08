import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Piyush</h1>
        <p className={styles.description}>
          A Computer Science Engineer striving for an opportunity where I can make the best use of my potential and 
          contribute to the Organization growth with consistency and foster my own personal and professional growth.
        </p>
        <a href="https://drive.google.com/file/d/1FuTYLpB_PtUAbBcofjvf5BPwpdA8SGK0/view?usp=drivesdk" className={styles.contactBtn} target="blank">
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/piyush.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Piyush</h1>
        <p className={styles.description}>
          I'm a Computer Science Student striving for an opportunity wherein I can make the best use of my potential and contribute to the Organization growth with dedication and foster my own personal and professional growth.
        </p>
        <a href="https://drive.google.com/file/d/1KhlpJec9W8M_bxl7h33T7WIPlrX_aj0H/view?usp=drivesdk" className={styles.contactBtn} target="blank">
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
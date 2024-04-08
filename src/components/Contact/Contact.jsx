import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact Me Here</h2>
        <p>Feel Free to reach Out !!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/gmailIcon.png")} alt="Email icon" />
          <a href="mailto:singh45piyush.com">Gmail</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/piyush45singh" target="_blank">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/45Piyush">Github</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/twitterIcon.png")} alt="Twitter icon" />
          <a href="https://twitter.com/piyush45singh" target="_blank">Twitter</a>
        </li>
      </ul>
    </footer>
  );
};

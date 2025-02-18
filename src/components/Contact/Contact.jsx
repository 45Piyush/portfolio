import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact Me Here</h2>
        <p>Feel Free to Reach Out!</p>
      </div>

      {/* Social Media Links */}
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:singh45piyush.com" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/gmailIcon.png")} alt="Email icon" />
            <span>Gmail</span>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/piyush45singh" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/45Piyush" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <span>Github</span>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://twitter.com/piyush45singh" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/twitterIcon.png")} alt="Twitter icon" />
            <span>Twitter</span>
          </a>
        </li>
      </ul>

      {/* Call-to-Action Button */}
      <div className={styles.cta}>
        <a href="mailto:singh45piyush.com" className={styles.ctaButton}>
          Let's Collaborate!
        </a>
      </div>

      {/* Newsletter Subscription */}
      {/* <div className={styles.newsletter}>
        <h3>Subscribe to My Newsletter</h3>
        <form className={styles.newsletterForm}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div> */}

      {/* Copyright Notice */}
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Piyush Singh. All rights reserved.</p>
      </div>
    </footer>
  );
};
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      {/* Background Overlay */}
      <div className={styles.backgroundOverlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, my name's Piyush.</h1>
        <p className={styles.subtitle}>
          I'm a <span className={styles.highlight}>Software Developer</span> from India.
        </p>
        <p className={styles.description}>
          Welcome to my portfolio! I am exploring the realms of technology and seeking for an opportunity by building innovative solutions with Code.
        </p>
        <a href="https://drive.google.com/file/d/1sHJPJXqVi7FPVFewEenqcFMaliKCjP44/view" className={styles.ctaButton} target="blank">
          View My Resume
        </a>
      </div>

      {/* Hero Image */}
      <img
        src={getImageUrl("hero/piyush.png")}// Replace with your image path
        alt="Hero image of Me"
        className={styles.heroImg}
      />
    </section>
  );
};
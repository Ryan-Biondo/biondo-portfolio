import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <section id="about" className="main">
      <h2 className={styles.h2}>About Me</h2>
      <div className={styles.aboutMeSection}>
        <div className={styles.skills}>
          <h3 className={styles.h3}>Skills</h3>
          <ul className={styles.skillsList}>
            <li className={styles.skillsListItem}>HTML5</li>
            <li className={styles.skillsListItem}>CSS3</li>
            <li className={styles.skillsListItem}>JavaScript</li>
            <li className={styles.skillsListItem}>React</li>
            <li className={styles.skillsListItem}>TypeScript</li>
            <li className={styles.skillsListItem}>Git</li>
          </ul>
        </div>

        <div className={styles.aboutMeContact}>
          <h3>Reach out to me!</h3>
          <p className={styles.p}>
            I am a self-taught web developer with a background in restaurant
            management. I am a web developer based in Colorado. I enjoy working
            in React and TypeScript. Currently available for hire.
          </p>
          <a href="#contact">
            <button className="button">Contact Me</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

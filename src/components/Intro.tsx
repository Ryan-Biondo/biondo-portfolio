import resume from '/src/assets/Ryan-Biondo-Resume.pdf';
import styles from './Intro.module.css';
import Socials from './Socials';
import { FaDownload } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';

const Intro = () => {
  return (
    <>
      <Socials />
      <section className={styles.introSection} id="intro">
        <h1 className={styles.slidingDownDiv}>
          Ryan <span className={styles.biondoColor}>Biondo</span>
        </h1>
        <p className={styles.jobTitle}>Front End Developer</p>
        <p className={styles.downloadResume}>Download my resume here!</p>
        <a href={resume} download>
          <button className="button">
            <FaDownload /> Resume
          </button>
        </a>
        <FaArrowDown className={styles.scrollArrow} color="black" />
      </section>
    </>
  );
};

export default Intro;

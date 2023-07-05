// import React from 'react';
import styles from './Intro.module.css';
import Socials from './Socials';
import { FaDownload } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';

const Intro = () => {
  return (
    <>
      <Socials />
      <section className={styles.introSection} id="intro">
        <h1>Ryan Biondo</h1>
        <p className={styles.jobTitle}>Front End Developer</p>
        <p className={styles.downloadResume}>Download my resume below!</p>
        <a href="./src/images/RyanBiondo-Resume.pdf" download>
          <button className="button">
            {/* add icon */}
            <FaDownload /> Resume
          </button>
        </a>
        <FaArrowDown className={styles.scrollArrow} color="black" />
      </section>
    </>
  );
};

export default Intro;

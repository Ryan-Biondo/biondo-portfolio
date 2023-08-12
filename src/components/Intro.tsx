import { useState, useEffect } from 'react';
import resume from '/src/images/Ryan-Biondo-Resume.pdf';
import styles from './Intro.module.css';
import Socials from './Socials';
import { FaDownload } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';

const Intro = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <>
      <Socials />
      <section className={styles.introSection} id="intro">
        {isLoading ? (
          <div className={styles.loadingEllipsis}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        ) : (
          <>
            <h1 className={styles.slidingDownDiv}>
              Ryan <span className={styles.biondoColor}>Biondo</span>
            </h1>
            <p className={styles.jobTitle + ' ' + styles.slidingDownDiv}>
              Front End Developer
            </p>
            <p className={styles.downloadResume + ' ' + styles.slidingDownDiv}>
              Download my resume here!
            </p>
            <a href={resume} className={styles.slidingDownDiv} download>
              <button className="button">
                <FaDownload /> Resume
              </button>
            </a>
            <FaArrowDown className={styles.scrollArrow} color="black" />
          </>
        )}
      </section>
    </>
  );
};

export default Intro;

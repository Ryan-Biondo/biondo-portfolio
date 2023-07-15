import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerMain}>
        <div className={styles.footerDescription}>
          <h3>Ryan Biondo</h3>
          <p className={styles.footerText}>
            Front End Developer. React & TypeScript. Currently available for
            hire.
          </p>
        </div>

        <div className={styles.footerSocials}>
          <a
            className={styles.footerLink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ryan-biondo/">
            <FaLinkedin color="white" />
          </a>
          <a
            className={styles.footerLink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Ryan-Biondo/">
            <FaGithub color="white" />
          </a>
          <a
            className={styles.footerLink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/RyanBiondo/">
            <FaTwitter color="white" />
          </a>
        </div>
      </div>
      <p className={styles.footerCopyright}>
        &copy; Copyright 2023. Created by&nbsp;
        <a href="#intro">
          <strong>Ryan Biondo</strong>
        </a>
      </p>
    </footer>
  );
};

export default Footer;

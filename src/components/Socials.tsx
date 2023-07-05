import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import styles from './Socials.module.css';

const Socials = () => {
  return (
    <div className={styles.socials}>
      <a
        className={styles.socialLink}
        target="_blank"
        href="https://www.linkedin.com/in/ryan-biondo/">
        <FaLinkedin color="var(--quinary-color)" />
      </a>
      <a
        className={styles.socialLink}
        target="_blank"
        href="https://github.com/Ryan-Biondo/">
        <FaGithub color="var(--quinary-color)" />
      </a>
      <a
        className={styles.socialLink}
        target="_blank"
        href="https://twitter.com/RyanBiondo/">
        <FaTwitter color="var(--quinary-color)" />
      </a>
    </div>
  );
};

export default Socials;

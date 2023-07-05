import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.navTitle}>
        <a href="#intro">
          <img
            className={styles.navPic}
            src="./src/images/profilepic.jpg"
            alt="Ryan"
          />
        </a>
        <a href="#intro">
          <div className={styles.navName}>Ryan Biondo</div>
        </a>
      </div>
      <ul className={styles.navLinks}>
        <a href="#intro">
          <li className={styles.navItem}>Home</li>
        </a>
        <a href="#about">
          <li className={styles.navItem}>About</li>
        </a>
        <a href="#projects">
          <li className={styles.navItem}>Projects</li>
        </a>
        <a href="#contact">
          <li className={styles.navItem}>Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;

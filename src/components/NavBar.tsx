import { useState, useEffect } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import styles from './NavBar.module.css';
import profilepic from '/src/images/profilepic.jpg';

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navTitle}>
        <a href="#intro">
          <img className={styles.navPic} src={profilepic} alt="Ryan" />
        </a>
        <a href="#intro">
          <div className={styles.navName}>Ryan Biondo</div>
        </a>
      </div>

      {isMobile &&
        (navOpen ? (
          <BiX
            className={`${styles.menuIcon} ${styles.open}`}
            onClick={toggleNav}
          />
        ) : (
          <BiMenu className={styles.menuIcon} onClick={toggleNav} />
        ))}

      <ul
        className={
          navOpen ? `${styles.navLinksActive} ${styles.open}` : styles.navLinks
        }>
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

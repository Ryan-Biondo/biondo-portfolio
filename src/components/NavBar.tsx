import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { BiMenu, BiX } from 'react-icons/bi';
import styles from './NavBar.module.css';
import profilepic from '/src/images/profilepic.jpg';
declare module 'react-scroll';

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeLink] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className={isScrolled ? styles.navVisible : ''}>
      <div className={styles.navTitle}>
        <Link
          to="intro"
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
          onClick={navOpen ? toggleNav : () => null}>
          <img className={styles.navPic} src={profilepic} alt="Ryan" />
        </Link>
        <Link
          to="intro"
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
          onClick={navOpen ? toggleNav : () => null}>
          <div className={styles.navName}>Ryan Biondo</div>
        </Link>
      </div>

      {navOpen ? (
        <BiX className={styles.menuIcon} onClick={toggleNav} />
      ) : (
        <BiMenu className={styles.menuIcon} onClick={toggleNav} />
      )}

      <ul className={navOpen ? styles.navLinksActive : styles.navLinks}>
        <Link
          activeClass={windowWidth > 768 ? styles.navItemActive : ''}
          to="intro"
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
          className={
            activeLink === 'intro' ? styles.navItemActive : styles.navItem
          }
          onClick={navOpen ? toggleNav : () => null}>
          <li>Home</li>
        </Link>
        <Link
          activeClass={windowWidth > 768 ? styles.navItemActive : ''}
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
          className={
            activeLink === 'about' ? styles.navItemActive : styles.navItem
          }
          onClick={navOpen ? toggleNav : () => null}>
          <li>About</li>
        </Link>
        <Link
          activeClass={windowWidth > 768 ? styles.navItemActive : ''}
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
          className={
            activeLink === 'projects' ? styles.navItemActive : styles.navItem
          }
          onClick={navOpen ? toggleNav : () => null}>
          <li>Projects</li>
        </Link>
        <Link
          activeClass={windowWidth > 768 ? styles.navItemActive : ''}
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
          className={
            activeLink === 'contact' ? styles.navItemActive : styles.navItem
          }
          onClick={navOpen ? toggleNav : () => null}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;

import styles from './Projects.module.css';
import physciraImage from '/src/images/physcirascreenshot.png';
import codeQuizImage from '/src/images/codequizscreenshot.png';
import astropixImage from '/src/images/astropix-screenshot.jpg';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects + ' ' + 'main'}>
      <div className={styles.projectsSection}>
        <h2>Projects</h2>

        <div className={styles.projectBox}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Ryan-Biondo/APOD">
            <img
              className={styles.projectImage}
              src={astropixImage}
              alt="AstroPix Gallery Screenshot"
            />
          </a>
          <div className={styles.projectText}>
            <p className={styles.projectDescript}>
              <strong>The AstroPix Gallery</strong> showcases space images
              sourced from NASA's Astronomy Picture of the Day (APOD), built
              using React, Chakra UI, and React Router. The calendar is imported
              from date-picker and synchronizes the date with the chosen
              picture. Utilized Chakra UI components for styling and
              responsiveness, and generic custom hooks for modular structure.
              The integration of real-time API data and interactive features
              provides users with a platform to enjoy and learn about astronomy.
            </p>
            <div className={styles.projectLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apod.ryanbiondo.com/">
                <button className="button">Demo</button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Ryan-Biondo/APOD">
                <button className="button">GitHub Link</button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.projectBox}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Ryan-Biondo/The-Code-Quiz-Client">
            <img
              className={styles.projectImage}
              src={codeQuizImage}
              alt="The Code Quiz Screenshot"
            />
          </a>
          <div className={styles.projectText}>
            <p className={styles.projectDescript}>
              <strong>The Code Quiz</strong> client is a dynamic web application
              designed to connect with the Code Quiz server and retrieve a
              random assortment of questions from a diverse pool of quizzes.
              This project was built using React and TypeScript. It provides an
              interactive platform for developers to test their knowledge across
              a multitude of categories.
            </p>
            <div className={styles.projectLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.thecodequiz.com/">
                <button className="button">Demo</button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Ryan-Biondo/The-Code-Quiz-Client">
                <button className="button">GitHub Link</button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.projectBox}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Ryan-Biondo/scc-brand-dash-physcira">
            <img
              className={styles.projectImage}
              src={physciraImage}
              alt="Physcira Screenshot"
            />
          </a>
          <div className={styles.projectText}>
            <p className={styles.projectDescript}>
              <strong>The Brand Guide Navigation</strong> project is a web
              application that showcases a brand's positioning, logo and
              identity assets, and touchpoints and brand assets. It serves as a
              centralized hub for accessing and exploring various elements of a
              brand's guidelines. The project utilizes HTML, CSS, and JavaScript
              to create a responsive and interactive user interface. Designed by
              Sean Craig Creative.
            </p>
            <div className={styles.projectLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://media.physcira.com">
                <button className="button">Demo</button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Ryan-Biondo/scc-brand-dash-physcira">
                <button className="button">GitHub Link</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

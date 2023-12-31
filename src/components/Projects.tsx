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
          <img
            className={styles.projectImage}
            src={astropixImage}
            alt="AstroPix Gallery Screenshot"
          />

          <div className={styles.projectText}>
            <p className={styles.projectDescript}>
              <strong>The AstroPix Gallery</strong> showcases images sourced
              from NASA's Astronomy Picture of the Day, built using React,
              Chakra UI, React Query and React Router. The calendar is imported
              from date-picker and synchronizes the date with the chosen
              picture. Utilized Chakra UI components for styling and
              responsiveness, and generic custom hooks for modular structure. We
              protect the API key, apply throttling, and add security headings
              using a Node.js server built with Express. The integration of
              infinite scrolling and other navigation features provide users
              with a platform to enjoy and learn about astronomy.
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
          <img
            className={styles.projectImage}
            src={codeQuizImage}
            alt="The Code Quiz Screenshot"
          />

          <div className={styles.projectText}>
            <p className={styles.projectDescript}>
              <strong>The Code Quiz</strong> is a tool for developers, that
              connects with the server to retrieve a random assortment of
              questions from a pool of quizzes. This project was built using
              React and TypeScript. It provides an interactive platform for
              developers to test their knowledge across a multitude of
              categories.
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
          <img
            className={styles.projectImage}
            src={physciraImage}
            alt="Physcira Screenshot"
          />

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

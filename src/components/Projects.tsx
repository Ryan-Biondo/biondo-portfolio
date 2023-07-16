import styles from './Projects.module.css';
import physciraImage from '/src/images/physcirascreenshot.png';
import codeQuizImage from '/src/images/codequizscreenshot.png';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects + ' ' + 'main'}>
      <div className={styles.projectsSection}>
        <h2>Projects</h2>
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

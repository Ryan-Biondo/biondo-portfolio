import styles from './Projects.module.css';
import physciraImage from '/src/images/physcirascreenshot.png';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects + ' ' + 'main'}>
      <h2>Projects</h2>
      <div className={styles.projectsSection}>
        <a
          target="_blank"
          href="https://github.com/Ryan-Biondo/scc-brand-dash-physcira">
          <img
            className={styles.projectImage}
            src={physciraImage}
            alt="Physcira Screenshot"
          />
        </a>
        <div className={styles.projectText}>
          <p className={styles.projectDescript}>
            The Brand Guide Navigation project is a web application that
            provides a user-friendly interface for navigating through a brand
            guide. The purpose of this project is to showcase a brand's
            positioning, logo and identity assets, and touchpoints and brand
            assets. It serves as a centralized hub for accessing and exploring
            various elements of a brand's guidelines. The project utilizes HTML,
            CSS, and JavaScript to create a responsive and interactive user
            interface. It incorporates media queries to ensure optimal display
            and usability on different devices and screen sizes.
          </p>
          <a
            target="_blank"
            href="https://github.com/Ryan-Biondo/scc-brand-dash-physcira">
            <button className="button">Project Link</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

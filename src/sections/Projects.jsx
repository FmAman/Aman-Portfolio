import { motion } from 'framer-motion';
import { projects } from '../data/content.js';
import ParticleBackground from '../components/ParticleBackground.jsx';

function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-heading">
      <ParticleBackground />
      <div className="project__overlay" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="projects-heading">Projects</h2>
          <p>A selection of builds that capture my love for product, performance, and polish.</p>
        </motion.div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ translateY: -6 }}
            >
              <div
                className="project-card__visual"
                style={{ backgroundImage: project.gradient }}
                aria-hidden="true"
              >
                <span className="project-card__tag">Featured</span>
              </div>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-card__tech">
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-card__links">
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live demo ↗
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

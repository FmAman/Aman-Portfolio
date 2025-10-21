import { motion } from 'framer-motion';
import { experiences } from '../data/content.js';
import ParticleBackground from '../components/ParticleBackground.jsx';

function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-heading">
      <ParticleBackground />
      <div className="experience__overlay" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="experience-heading">Experience</h2>
          <p>Product-focused roles where I owned outcomes across the stack.</p>
        </motion.div>

        <div className="experience__timeline">
          {experiences.map((experience, index) => {
            // const Icon = experience.icon;
            return (
              <motion.article
                key={experience.company}
                className="experience-card"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                {/* <div className="experience-card__marker" aria-hidden="true">
                  <Icon />
                </div> */}
                <div className="experience-card__logo" aria-hidden="true">
                  {/* {experience.logo} */}
                  <img src={experience.logo} width="47%"/>
                </div>
                <div className="experience-card__content">
                  <header>
                    <h3>{experience.role}</h3>
                    <div className="experience-card__meta">
                      <span>{experience.company}</span>
                      <span>{experience.period}</span>
                    </div>
                  </header>

                  <ul className="experience-card__highlights">
                    {experience.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <a
                    className="experience-card__link"
                    href={experience.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit company website ↗
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;

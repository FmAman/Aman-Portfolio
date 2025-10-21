import { motion } from "framer-motion";
import { skillGroupsLeft, skillGroupsRight } from "../data/content.js";
import ParticleBackground from "../components/ParticleBackground.jsx";

function About() {
  return (
    <section
      id="about"
      className="section about"
      aria-labelledby="about-heading"
    >
      <ParticleBackground />
      <div className="about__overlay" aria-hidden="true" />

      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="about-heading">About</h2>
          <p>
            I thrive at the intersection of beautiful interfaces and scalable
            architecture. From whiteboarding journeys with stakeholders to
            hardening distributed systems, I partner with teams to craft digital
            products people love using.
          </p>
        </motion.div>

        <div className="about__grid">
          {/* <motion.div
            className="about__bio"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              Over the past six years I&apos;ve helped startups and enterprises scale their web
              platforms. My sweet spot is full-stack JavaScript and product engineering—shipping
              features quickly without compromising maintainability or accessibility.
            </p>
            <p>
              I lead with empathy, back decisions with data, and keep feedback loops tight. Whether
              it&apos;s pairing on APIs, iterating on design tokens, or fine-tuning DevOps pipelines,
              I enjoy enabling teams to do their best work.
            </p>
            <p className="about__fun-fact">
              Fun fact: I co-run a weekend creative coding club where we bring generative art ideas
              to life in the browser.
            </p>
          </motion.div> */}
          <motion.div
            className="about__skills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {skillGroupsLeft.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="skill-card">
                  <div className="skill-card__header">
                    <span className="skill-card__icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul className="skill-card__list">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <div className="skill-card__meta">
                          <span>{item.name}</span>
                          <span>{item.mastery}%</span>
                        </div>
                        <div className="skill-card__bar" aria-hidden="true">
                          <span style={{ width: `${item.mastery}%` }} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </motion.div>
          <motion.div
            className="about__skills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {skillGroupsRight.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="skill-card">
                  <div className="skill-card__header">
                    <span className="skill-card__icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul className="skill-card__list">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <div className="skill-card__meta">
                          <span>{item.name}</span>
                          <span>{item.mastery}%</span>
                        </div>
                        <div className="skill-card__bar" aria-hidden="true">
                          <span style={{ width: `${item.mastery}%` }} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

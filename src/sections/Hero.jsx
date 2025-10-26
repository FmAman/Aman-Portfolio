import { motion } from 'framer-motion';
import { FiArrowDownCircle, FiMapPin } from 'react-icons/fi';
import ParticleBackground from '../components/ParticleBackground.jsx';
import { heroContent, heroHighlights } from '../data/content.js';
import profileIllustration from '../assets/profile-illustration.svg';

function Hero({ onViewProjects, onContact }) {
  return (
    <section id="hero" className="section hero" aria-labelledby="hero-heading">
      <ParticleBackground />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="hero__meta">
            <div className="hero__portrait">
              <img src={profileIllustration} alt="Illustrated portrait of Me :)" />
            </div>
            <div className="hero__badge">
              <FiMapPin aria-hidden="true" />
              <span>{heroContent.location}</span>
            </div>
          </div>
          <h1 id="hero-heading">{heroContent.name}</h1>
          <p className="hero__title">{heroContent.title}</p>
          <p className="hero__tagline">{heroContent.tagline}</p>
          <div className="hero__actions">
            <button type="button" className="button primary" onClick={onViewProjects}>
              View Projects
            </button>
            <button type="button" className="button secondary" onClick={onContact}>
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero__highlights"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          {heroHighlights.map((highlight) => (
            <div key={highlight.label} className="hero__highlight">
              <span className="hero__highlight-value">{highlight.value}</span>
              <span className="hero__highlight-label">{highlight.label}</span>
            </div>
          ))}
        </motion.div>

        {/* <motion.div
          className="hero__scroll-hint"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <FiArrowDownCircle aria-hidden="true" />
          <span>Scroll to explore</span>
        </motion.div> */}
      </div>
    </section>
  );
}

export default Hero;

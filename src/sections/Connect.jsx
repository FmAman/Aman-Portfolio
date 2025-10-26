import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import { contactConfig, socialLinks } from '../data/content.js';
import ParticleBackground from '../components/ParticleBackground.jsx';

const initialState = {
  name: '',
  email: '',
  message: '',
};

function Connect() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setStatus({ state: 'loading', message: 'Sending...' });

      try {
        const endpoint = contactConfig.formEndpoint;
        if (endpoint.includes('yourFormId')) {
          throw new Error('Form endpoint placeholder not replaced');
        }

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormData(initialState);
          setStatus({
            state: 'success',
            message: 'Thanks for reaching out! I will reply shortly.',
          });
        } else {
          throw new Error('Failed to submit form');
        }
      } catch (error) {
        const message =
          error.message === 'Form endpoint placeholder not replaced'
            ? 'Update contactConfig.formEndpoint with your Formspree ID to enable submissions.'
            : 'Something went wrong. Double-check your connection or reach me via LinkedIn.';

        setStatus({
          state: 'error',
          message,
        });
      }
    },
    [formData],
  );

  return (
    <section id="connect" className="section connect" aria-labelledby="connect-heading">
      <ParticleBackground />
      <div className="connect__overlay" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="connect-heading">Connect</h2>
          <p>Let&apos;s collaborate on your next big idea or chat about engineering leadership.</p>
        </motion.div>

        <div className="connect__grid">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="button primary contact-form__submit" disabled={status.state === 'loading'}>
              <FiSend aria-hidden="true" />
              <span>{status.state === 'loading' ? 'Sending' : 'Send Message'}</span>
            </button>
            <p className={`form-status form-status--${status.state}`} role="status" aria-live="polite">
              {status.state === 'idle' ? '' : status.message}
            </p>
          </motion.form>

          <motion.div
            className="connect__details"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="connect__card">
              <h3>Let&apos;s Connect</h3>
              <p>
                Prefer async? Reach out via your favorite network or download my resume for a deep
                dive into recent work.
              </p>
              <div className="social-links">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                      <span className="social-links__icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
              <a
                className="button secondary"
                href="/Fayaz_Mohamed_Aman_Resume.pdf"
                download
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Connect;

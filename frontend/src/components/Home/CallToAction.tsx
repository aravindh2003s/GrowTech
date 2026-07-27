import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './CallToAction.css';

export default function CallToAction() {
  return (
    <section className="cta-section section-padding">
      <div className="container">
        <motion.div 
          className="cta-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="cta-content">
            <h2>Ready to Build Something Great?</h2>
            <p>Design your software interactively. Let's create something extraordinary together in our Studio.</p>
          </div>
          <div className="cta-action">
            <Link to="/studio">
              <motion.button 
                className="btn-primary cta-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                Open Studio
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

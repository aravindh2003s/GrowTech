import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transform Ideas Into <br />
          <motion.span 
            className="text-gradient" 
            style={{ display: 'inline-block' }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            Digital Experiences
          </motion.span>
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Engineering solutions that scale. We don't just build software, we collaborate with you to create the next generation of premium digital products.
        </motion.p>
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link to="/studio">
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '1.1rem' }}
            >
              Build Your Project <ArrowRight size={20} />
            </motion.button>
          </Link>
          <Link to="/studio">
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '1.1rem' }}
            >
              Explore Studio <Code size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

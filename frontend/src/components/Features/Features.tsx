import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Monitor, Server, Paintbrush } from 'lucide-react';
import './Features.css';

const features = [
  {
    title: 'Website Development',
    description: 'Modern, responsive, and user-friendly websites with solid SEO foundations to help your business grow.',
    icon: <Monitor size={32} color="var(--accent-primary)" />
  },
  {
    title: 'Full Stack Web Apps',
    description: 'Complete web applications with custom frontend, robust backend, and scalable database integration.',
    icon: <Server size={32} color="var(--accent-secondary)" />
  },
  {
    title: 'UI/UX Design',
    description: 'Clean, modern, and intuitive user interfaces designed to maximize engagement and conversion.',
    icon: <Paintbrush size={32} color="var(--accent-tertiary)" />
  }
];

export default function Features() {
  return (
    <section id="services" className="features-section section-padding">
      <div className="container">
        <div className="features-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our <span className="text-gradient">Core Capabilities</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We provide a wide range of technical services to help you launch and scale your business efficiently.
          </motion.p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              className="glass-panel feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)' }}
            >
              <div className="feature-icon" style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p className="text-muted" style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          style={{ textAlign: 'center', marginTop: '4rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/services">
            <button className="btn-secondary" style={{ padding: '14px 32px', fontSize: '1.05rem', borderRadius: '30px' }}>
              View All Our Services
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

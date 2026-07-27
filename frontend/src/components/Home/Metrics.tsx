import { motion } from 'framer-motion';
import './Metrics.css';

const stats = [
  { value: '5+', label: 'Projects Completed' },
  { value: '99%', label: 'Uptime Guaranteed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
];

export default function Metrics() {
  return (
    <section className="metrics-section">
      <div className="container metrics-container">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            className="metric-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <div className="metric-value text-gradient">{stat.value}</div>
            <div className="metric-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

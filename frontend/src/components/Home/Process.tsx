import { motion } from 'framer-motion';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your business goals, target audience, and technical requirements to map out the perfect strategy.'
  },
  {
    number: '02',
    title: 'Design & Build',
    description: 'Our expert designers and engineers craft a stunning, high-performance solution using cutting-edge technologies.'
  },
  {
    number: '03',
    title: 'Launch & Scale',
    description: 'We deploy your product with zero downtime and provide ongoing support to help your business scale effortlessly.'
  }
];

export default function Process() {
  return (
    <section className="process-section section-padding">
      <div className="container">
        <div className="section-title-wrapper text-center">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How We <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A streamlined process designed to deliver exceptional results from day one.
          </motion.p>
        </div>

        <div className="process-grid">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              className="process-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="process-number text-gradient">{step.number}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-description text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel image-panel">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="GrowTech Team" 
                className="about-image" 
                loading="lazy"
              />
              <div className="image-overlay-text">
                <span className="text-gradient font-bold text-2xl">5+ Years</span>
                <p>Of Digital Excellence</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              Who We <span className="text-gradient">Are</span>
            </h2>
            <p className="about-description">
              GrowTech is a forward-thinking digital agency specializing in premium web development, custom software solutions, and UI/UX design. We don't just build websites; we engineer digital experiences that drive growth and scale with your business.
            </p>
            
            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon-wrapper">
                  <Target className="text-blue-500" />
                </div>
                <div>
                  <h4>Our Mission</h4>
                  <p className="text-muted text-sm">To empower businesses with scalable, high-performance digital solutions.</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon-wrapper">
                  <Users className="text-pink-500" />
                </div>
                <div>
                  <h4>Dedicated Team</h4>
                  <p className="text-muted text-sm">A collective of expert developers, designers, and strategists.</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon-wrapper">
                  <Zap className="text-purple-500" />
                </div>
                <div>
                  <h4>Fast Execution</h4>
                  <p className="text-muted text-sm">Agile methodologies ensuring rapid delivery without compromising quality.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Globe, Server, GraduationCap, Lightbulb } from 'lucide-react';
import './Educational.css';

const PATHS = [
  {
    id: 'website',
    title: 'Website',
    icon: Globe,
    useCases: 'Landing Pages, Portfolios, E-commerce',
    timeline: '2 - 6 Weeks',
    service: 'Web Development'
  },
  {
    id: 'software',
    title: 'Business Software',
    icon: Server,
    useCases: 'CRM, Dashboards, Inventory',
    timeline: '2 - 4 Months',
    service: 'Custom Software'
  },
  {
    id: 'college',
    title: 'College Project',
    icon: GraduationCap,
    useCases: 'Final Year Projects, Hackathons',
    timeline: '2 - 4 Weeks',
    service: 'Mentorship & Dev'
  },
  {
    id: 'startup',
    title: 'Startup Idea',
    icon: Lightbulb,
    useCases: 'MVPs, SaaS Platforms, Mobile Apps',
    timeline: '3 - 6 Months',
    service: 'Full Stack Development'
  }
];

export default function ChoosePath() {
  const navigate = useNavigate();

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="section-title">What brings you <span className="text-gradient">here today?</span></h2>
          <p className="text-muted">Select an option below to customize your GrowTech Studio experience.</p>
        </div>

        <div className="path-grid">
          {PATHS.map((path, index) => (
            <motion.div
              key={path.id}
              className="glass-panel path-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => navigate('/studio')}
            >
              <div className="path-icon">
                <path.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="path-title">{path.title}</h3>
              
              <div className="path-details">
                <div className="path-detail-item">
                  <span className="path-detail-label">Use Cases:</span> {path.useCases}
                </div>
                <div className="path-detail-item">
                  <span className="path-detail-label">Timeline:</span> {path.timeline}
                </div>
                <div className="path-detail-item">
                  <span className="path-detail-label">Service:</span> {path.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

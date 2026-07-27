import { motion } from 'framer-motion';
import { CheckCircle2, Monitor, Shield, Zap, Search, Code2 } from 'lucide-react';
import './Educational.css';

const CHECKS = [
  { icon: Monitor, name: 'Responsive Design', desc: 'Adapts seamlessly to mobile, tablet, and desktop.' },
  { icon: Zap, name: 'Performance Optimized', desc: 'Lazy loading, code splitting, and compressed assets.' },
  { icon: Shield, name: 'Security Hardened', desc: 'JWT auth, bcrypt hashing, and protected routes.' },
  { icon: Search, name: 'Technical SEO', desc: 'Dynamic meta tags, robots.txt, and semantic HTML.' },
  { icon: Code2, name: 'Clean Architecture', desc: 'Component-based, typed with TypeScript, modular CSS.' },
];

export default function ReadinessDashboard() {
  return (
    <div className="readiness-dashboard">
      <div className="glass-panel p-8">
        <div className="text-center mb-8">
          <h2 className="section-title">Production <span className="text-gradient">Ready</span></h2>
          <p className="text-muted">Every GrowTech project passes a strict engineering checklist before launch.</p>
        </div>

        <div className="dashboard-grid">
          {CHECKS.map((check, index) => (
            <motion.div 
              key={check.name}
              className="dashboard-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="dashboard-card-header">
                <div className="dashboard-icon-wrapper">
                  <check.icon size={20} />
                </div>
                <CheckCircle2 size={18} className="dashboard-check" />
              </div>
              <h4 className="dashboard-card-title">{check.name}</h4>
              <p className="dashboard-card-desc">{check.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

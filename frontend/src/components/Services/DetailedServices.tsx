import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Server, Cpu, Paintbrush, Wrench, Cloud, ChevronDown, ChevronUp, Clock, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './DetailedServices.css';

const servicesData = [
  {
    title: '1. Website Development',
    description: 'We create modern, responsive, and user-friendly websites that help businesses establish a strong online presence.',
    offers: [
      'Business Websites', 'Company Websites', 'Portfolio Websites',
      'Landing Pages', 'Responsive Design', 'Contact Forms', 'Basic SEO Setup'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    timeline: '2 - 6 Weeks',
    icon: <Monitor size={32} />
  },
  {
    title: '2. Full Stack Web Development',
    description: 'We develop complete web applications with both frontend and backend functionality, tailored to business requirements.',
    offers: [
      'Custom Web Applications', 'Authentication & Login Systems', 
      'Admin Dashboards', 'REST APIs', 'Database Integration', 'CRUD Operations'
    ],
    tech: ['Node.js', 'Express', 'React', 'MySQL', 'SQLite'],
    timeline: '3 - 8 Weeks',
    icon: <Server size={32} />
  },
  {
    title: '3. Custom Software Development',
    description: 'We build software solutions that simplify business operations and improve productivity.',
    offers: [
      'Employee Management Systems', 'Inventory Management Systems', 
      'Student Management Systems', 'Simple Business Management Systems'
    ],
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    timeline: '2 - 6 Months',
    icon: <Cpu size={32} />
  },
  {
    title: '4. UI/UX Design',
    description: 'We design clean, modern, and responsive user interfaces that provide a great user experience.',
    offers: [
      'Website UI Design', 'Dashboard Design', 'Mobile Responsive Layouts',
      'Wireframes', 'Prototype Design'
    ],
    tech: ['Figma', 'Adobe XD', 'Sketch'],
    timeline: '1 - 3 Weeks',
    icon: <Paintbrush size={32} />
  },
  {
    title: '5. Website Maintenance & Support',
    description: 'We help keep your website updated, secure, and running smoothly after deployment.',
    offers: [
      'Bug Fixes', 'Content Updates', 'Performance Improvements',
      'Feature Enhancements', 'Technical Support'
    ],
    tech: ['Support', 'Monitoring', 'Analytics'],
    timeline: 'Ongoing',
    icon: <Wrench size={32} />
  },
  {
    title: '6. Deployment & Hosting',
    description: 'We assist in deploying your website and making it accessible online.',
    offers: [
      'Domain Setup', 'Hosting Configuration', 'Website Deployment',
      'SSL Certificate Setup', 'GitHub Integration', 'Vercel / Netlify Deployment'
    ],
    tech: ['Git', 'GitHub', 'Vercel', 'AWS', 'Linux'],
    timeline: '1 - 3 Days',
    icon: <Cloud size={32} />
  }
];

export default function DetailedServices() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div className="services-container">
      <div className="services-grid">
        {servicesData.map((service, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <motion.div 
              key={idx} 
              className={`service-detail-card glass-panel ${isExpanded ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
              onClick={() => setExpandedIndex(isExpanded ? null : idx)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-top">
                <div className="flex justify-between items-start">
                  <div className="icon-wrapper">
                    {service.icon}
                  </div>
                  <button className="expand-btn text-muted hover:text-white transition-colors">
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </button>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="expanded-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="card-middle mt-4">
                      <h4 className="text-blue-400 mb-2 font-bold">What We Offer</h4>
                      <ul className="grid grid-cols-1 gap-2 text-sm text-gray-300">
                        {service.offers.map((offer, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-pink-500">•</span> {offer}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="card-bottom mt-6 border-t border-gray-800 pt-4">
                      <div className="flex flex-col gap-4">
                        <div>
                          <h4 className="text-blue-400 mb-2 font-bold flex items-center gap-2"><Code size={16}/> Tech Stack</h4>
                          <div className="tech-stack flex flex-wrap gap-2">
                            {service.tech.map((tech, i) => (
                              <span key={i} className="tech-pill text-xs">{tech}</span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-blue-400 mb-2 font-bold flex items-center gap-2"><Clock size={16}/> Estimated Timeline</h4>
                          <p className="text-sm text-gray-300">{service.timeline}</p>
                        </div>

                        <button 
                          className="btn-primary w-full mt-4"
                          onClick={() => navigate('/studio')}
                        >
                          Start This Project
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

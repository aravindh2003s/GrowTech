import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectBlueprint from './ProjectBlueprint';
import './Portfolio.css';

const projects = [
  { 
    id: 1,
    title: 'Employee Management System', 
    category: 'Management System', 
    image: 'https://images.unsplash.com/photo-1576091160550-2173ff94031d?auto=format&fit=crop&w=800&q=80',
    description: 'Developed a full-stack application to manage employee records with CRUD operations, built REST APIs and integrated MySQL database for efficient data management, and implemented MVC architecture for better application structure.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: ['CRUD Operations', 'REST APIs', 'MySQL Integration', 'MVC Architecture'],
    liveDemo: '#',
    github: 'https://github.com/aravindh2003s'
  },
  { 
    id: 2,
    title: 'Enterprise Playwright Automation Framework', 
    category: 'QA Automation', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Built a reusable automation framework using Page Object Model architecture. Developed automated test scripts with data-driven testing support. Improved test organization through reusable components and reporting.',
    tech: ['Java', 'Playwright', 'TestNG', 'Maven'],
    features: ['Page Object Model', 'Data-Driven Testing', 'Automated Test Scripts', 'Reusable Components'],
    liveDemo: '#',
    github: 'https://github.com/aravindh2003s'
  },
  { 
    id: 3,
    title: 'Project Manager Application', 
    category: 'Management System', 
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    description: 'Developed an application to manage projects and tasks efficiently. Designed backend services and database models for project tracking.',
    tech: ['Java', 'Spring Boot', 'MySQL'],
    features: ['Project Tracking', 'Task Management', 'Backend Services', 'Database Models'],
    liveDemo: '#',
    github: 'https://github.com/aravindh2003s'
  },
  { 
    id: 4,
    title: 'Expense Tracker Application', 
    category: 'Web Application', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'Created a finance management application for tracking income and expenses. Implemented transaction management and categorized financial records.',
    tech: ['Java', 'Spring Boot', 'MySQL'],
    features: ['Income Tracking', 'Expense Tracking', 'Transaction Management', 'Categorized Records'],
    liveDemo: '#',
    github: 'https://github.com/aravindh2003s'
  },
  { 
    id: 5,
    title: 'Personal Portfolio Website', 
    category: 'Portfolio', 
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    description: 'Designed and deployed a responsive portfolio website showcasing skills, projects, and professional details.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsive Design', 'Projects Showcase', 'Professional Details', 'Deployed Application'],
    liveDemo: 'https://aravindh2003s-aravindhan-portfolio.vercel.app',
    github: 'https://github.com/aravindh2003s'
  }
];

const CATEGORIES = ['All', 'Web Application', 'Management System', 'E-commerce', 'Portfolio'];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(p => 
    activeCategory === 'All' ? true : p.category === activeCategory
  );

  return (
    <section id="portfolio" className="portfolio-section section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Interactive <span className="text-gradient">Portfolio</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Explore our engineering case studies and technical blueprints.
          </motion.p>
        </div>

        <div className="portfolio-filter">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="portfolio-grid">
          <AnimatePresence>
            {filteredProjects.map((proj) => (
              <motion.div 
                key={proj.id} 
                className="glass-panel portfolio-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(proj)}
              >
                <div className="portfolio-image-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.02)', padding: '2rem' }}>
                  <span className="view-details-btn" style={{ transform: 'none', opacity: 1, position: 'relative' }}>View Blueprint</span>
                </div>
                <div className="portfolio-content">
                  <h3>{proj.title}</h3>
                  <span className="text-gradient">{proj.category}</span>
                  <p className="portfolio-short-desc text-muted">{proj.description.substring(0, 80)}...</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectBlueprint 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

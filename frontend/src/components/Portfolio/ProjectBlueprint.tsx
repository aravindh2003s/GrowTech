import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, X, ChevronRight } from 'lucide-react';
import './Portfolio.css';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  features: string[];
  liveDemo: string;
  github: string;
}

interface BlueprintProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectBlueprint({ project, onClose }: BlueprintProps) {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Architecture', 'Tech Stack', 'Database Design'];

  return (
    <div className="portfolio-modal-overlay" onClick={onClose}>
      <motion.div 
        className="blueprint-modal"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="blueprint-header">
          <h2>{project.title}</h2>
          <span className="text-gradient category-badge">{project.category}</span>
        </div>

        <div className="blueprint-tabs">
          {tabs.map(tab => (
            <button 
              key={tab} 
              className={`blueprint-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="blueprint-content">
          {activeTab === 'Overview' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3>Business Problem & Solution</h3>
              <p className="modal-description">{project.description}</p>
              
              <h4>Key Features</h4>
              <ul className="modal-list">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {activeTab === 'Architecture' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="blueprint-architecture">
              <h3>System Architecture</h3>
              <p className="text-muted mb-4">A high-level view of how data flows through the application.</p>
              <div className="architecture-diagram">
                <div className="arch-node">Client (Browser)</div>
                <ChevronRight className="arch-arrow" />
                <div className="arch-node text-gradient font-bold">{project.tech[0]}</div>
                <ChevronRight className="arch-arrow" />
                <div className="arch-node">{project.tech.length > 2 ? project.tech[2] : 'API'}</div>
                <ChevronRight className="arch-arrow" />
                <div className="arch-node">Database</div>
              </div>
            </motion.div>
          )}

          {activeTab === 'Tech Stack' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3>Technology Stack</h3>
              <div className="modal-tech-stack" style={{ marginTop: '1rem' }}>
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'Database Design' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3>Database Design</h3>
              <p className="text-muted">Optimized schema for performance and scalability.</p>
              <div className="db-schema-mockup">
                <div className="db-table">
                  <div className="db-table-header">Users</div>
                  <div className="db-table-row">id (PK)</div>
                  <div className="db-table-row">email (Unique)</div>
                  <div className="db-table-row">password_hash</div>
                </div>
                <div className="db-table">
                  <div className="db-table-header">Data Models</div>
                  <div className="db-table-row">id (PK)</div>
                  <div className="db-table-row">user_id (FK)</div>
                  <div className="db-table-row">payload</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="modal-actions blueprint-actions">
          <a href={project.liveDemo} className="btn-primary" target="_blank" rel="noopener noreferrer">
            <ExternalLink size={18} style={{ marginRight: '8px', verticalAlign: 'text-bottom' }} />
            Live Demo
          </a>
          <a href={project.github} className="btn-secondary" target="_blank" rel="noopener noreferrer">
            <Code size={18} style={{ marginRight: '8px', verticalAlign: 'text-bottom' }} />
            Source Code
          </a>
        </div>
      </motion.div>
    </div>
  );
}

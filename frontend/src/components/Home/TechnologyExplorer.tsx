import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDeveloperMode } from '../../context/DeveloperModeContext';
import './Educational.css';

const TECHNOLOGIES = [
  { name: 'React', type: 'Frontend', desc: 'A JavaScript library for building user interfaces. We use it for its virtual DOM and component reusability.', dev: 'JSX, Hooks (useState, useEffect), Context API, React Router.' },
  { name: 'Node.js', type: 'Backend', desc: 'JavaScript runtime built on Chrome\'s V8 engine. Perfect for fast, scalable network applications.', dev: 'Event-driven, non-blocking I/O model. Express.js framework.' },
  { name: 'TypeScript', type: 'Language', desc: 'Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.', dev: 'Static type checking, interfaces, generics, Enums.' },
  { name: 'Framer Motion', type: 'UI Library', desc: 'An open source motion library for React. Used for fluid, physics-based animations.', dev: '<motion.div>, AnimatePresence, layout animations.' },
  { name: 'MySQL', type: 'Database', desc: 'The world\'s most popular open source relational database. We use it for structured data storage.', dev: 'ACID compliant, relational integrity, complex JOINs.' }
];

export default function TechnologyExplorer() {
  const [activeTech, setActiveTech] = useState(TECHNOLOGIES[0]);
  const { isDeveloperMode } = useDeveloperMode();

  return (
    <div className="tech-explorer-container glass-panel">
      <div className="text-center mb-5">
        <h3 className="text-2xl font-bold mb-2">Technology <span className="text-gradient">Explorer</span></h3>
        <p className="text-sm text-muted">Click a technology to understand why we use it.</p>
      </div>

      <div className="tech-grid">
        {TECHNOLOGIES.map(tech => (
          <button
            key={tech.name}
            className={`tech-btn ${activeTech.name === tech.name ? 'active' : ''}`}
            onClick={() => setActiveTech(tech)}
          >
            {tech.name}
          </button>
        ))}
      </div>

      <div className="tech-details-box mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTech.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-xl font-bold text-white">{activeTech.name}</h4>
              <span className="text-xs px-2 py-1 rounded" style={{ background: 'var(--accent-primary)', color: 'var(--text-primary)' }}>{activeTech.type}</span>
            </div>
            <p className="text-gray-400">{activeTech.desc}</p>
            
            {isDeveloperMode && (
              <div className="mt-4 pt-3 border-t border-gray-800">
                <span className="text-xs text-blue-400 font-bold font-mono">Dev Focus: </span>
                <span className="text-sm text-gray-500 font-mono">{activeTech.dev}</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

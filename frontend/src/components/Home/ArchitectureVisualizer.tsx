import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Database, Globe, Layers, ArrowRight } from 'lucide-react';
import { useDeveloperMode } from '../../context/DeveloperModeContext';
import './Educational.css';

const LAYERS = [
  {
    id: 'client',
    icon: Globe,
    title: 'Client Layer',
    tech: 'React / Vite',
    description: 'The user interface running in the browser. We use React for fast, interactive, and responsive components.',
    devDetail: 'Strict Mode enabled, Framer Motion for physics-based animations, Context API for state management.'
  },
  {
    id: 'api',
    icon: Layers,
    title: 'API Gateway',
    tech: 'Express.js',
    description: 'The secure bridge between the frontend and database. Handles authentication and routing.',
    devDetail: 'RESTful architecture, JWT middleware, CORS configured, request rate limiting.'
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend Logic',
    tech: 'Node.js / Spring Boot',
    description: 'The core business logic where data is processed, validated, and computed.',
    devDetail: 'Microservice-ready, robust error handling, stateless authentication.'
  },
  {
    id: 'database',
    icon: Database,
    title: 'Data Persistence',
    tech: 'PostgreSQL / MySQL',
    description: 'Where all information is safely and securely stored.',
    devDetail: 'Normalized relational schema, connection pooling, indexed for fast querying.'
  }
];

export default function ArchitectureVisualizer() {
  const [activeLayer, setActiveLayer] = useState(LAYERS[0].id);
  const { isDeveloperMode } = useDeveloperMode();

  return (
    <div className="arch-visualizer-container">
      <div className="text-center mb-5">
        <h2 className="section-title">Software <span className="text-gradient">Architecture</span></h2>
        <p className="text-muted">Interactive diagram showing how our web applications operate under the hood.</p>
      </div>

      <div className="arch-layout">
        <div className="arch-stack">
          {LAYERS.map((layer, index) => (
            <div key={layer.id} className="arch-row-wrapper">
              <motion.div 
                className={`arch-layer ${activeLayer === layer.id ? 'active' : ''}`}
                onClick={() => setActiveLayer(layer.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <layer.icon size={24} className={activeLayer === layer.id ? 'text-blue-400' : 'text-gray-400'} />
                <div className="arch-layer-text">
                  <h4>{layer.title}</h4>
                  <span className="text-xs text-muted">{layer.tech}</span>
                </div>
              </motion.div>
              {index < LAYERS.length - 1 && (
                <div className="arch-connector">
                  <div className="arch-line"></div>
                  <ArrowRight size={16} className="text-muted arch-arrow-down" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="arch-details glass-panel">
          <AnimatePresence mode="wait">
            {LAYERS.filter(l => l.id === activeLayer).map(layer => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <layer.icon size={32} className="text-blue-400" />
                  <h3>{layer.title}</h3>
                </div>
                <div className="tech-badge mb-4">{layer.tech}</div>
                <p className="mb-4 text-gray-300">{layer.description}</p>
                
                {isDeveloperMode && (
                  <div className="dev-mode-panel mt-4 p-4 rounded bg-blue-900/20 border border-blue-500/30">
                    <h5 className="text-blue-400 text-sm font-bold mb-2">{'</> Developer Insight'}</h5>
                    <p className="text-sm font-mono text-gray-400">{layer.devDetail}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

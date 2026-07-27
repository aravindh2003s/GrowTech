import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PenTool, Layout, Code, TestTube, Rocket, HeartHandshake } from 'lucide-react';
import '../Home/Educational.css';

const PHASES = [
  { id: 1, icon: Search, title: 'Discovery', desc: 'Understanding your business, goals, and technical requirements.', deliverable: 'Project Scope Document' },
  { id: 2, icon: PenTool, title: 'Planning', desc: 'Defining the architecture, database schema, and technology stack.', deliverable: 'Technical Blueprint' },
  { id: 3, icon: Layout, title: 'UI/UX Design', desc: 'Creating wireframes and high-fidelity interactive prototypes.', deliverable: 'Figma Prototype' },
  { id: 4, icon: Code, title: 'Development', desc: 'Writing clean, modular, and scalable code in sprints.', deliverable: 'Functional Application' },
  { id: 5, icon: TestTube, title: 'Testing', desc: 'Rigorous QA testing for security, performance, and bugs.', deliverable: 'QA Sign-off Report' },
  { id: 6, icon: Rocket, title: 'Deployment', desc: 'Configuring servers, CI/CD pipelines, and going live.', deliverable: 'Live Production System' },
  { id: 7, icon: HeartHandshake, title: 'Support', desc: 'Ongoing maintenance, monitoring, and feature updates.', deliverable: 'SLA Agreement' }
];

export default function DevelopmentJourney() {
  const [activePhase, setActivePhase] = useState(1);

  return (
    <div className="journey-container">
      <div className="text-center mb-5">
        <h2 className="section-title">The Development <span className="text-gradient">Journey</span></h2>
        <p className="text-muted">How we take your idea from concept to production.</p>
      </div>

      <div className="journey-timeline">
        <div className="timeline-line"></div>
        <div className="timeline-nodes">
          {PHASES.map((phase) => (
            <motion.div 
              key={phase.id}
              className={`timeline-node ${activePhase === phase.id ? 'active' : ''} ${activePhase > phase.id ? 'completed' : ''}`}
              onClick={() => setActivePhase(phase.id)}
              whileHover={{ scale: 1.1 }}
            >
              <phase.icon size={20} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="journey-details glass-panel mt-6 text-center max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {PHASES.filter(p => p.id === activePhase).map(phase => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <h3 className="text-2xl font-bold mb-2">Phase {phase.id}: {phase.title}</h3>
              <p className="text-gray-400 mb-4">{phase.desc}</p>
              <div className="inline-block bg-blue-900/30 border border-blue-500/30 rounded px-4 py-2">
                <span className="text-xs text-blue-400 uppercase font-bold mr-2">Deliverable:</span>
                <span className="text-sm font-semibold">{phase.deliverable}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

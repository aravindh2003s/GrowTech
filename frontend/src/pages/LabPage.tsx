import { useState } from 'react';
import SEO from '../components/SEO/SEO';
import UIExperiments from '../components/Lab/UIExperiments';
import BackendDemo from '../components/Lab/BackendDemo';
import { motion, AnimatePresence } from 'framer-motion';

export default function LabPage() {
  const [activeTab, setActiveTab] = useState<'ui' | 'backend'>('ui');

  return (
    <>
      <SEO 
        title="GrowTech Lab" 
        description="A technology playground. Explore our UI experiments, component designs, and backend API simulations."
      />
      <div className="section-padding" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 className="section-title">GrowTech <span className="text-gradient">Lab</span></h1>
            <p className="section-subtitle">
              Welcome to our playground. Interact with our components to see how we engineer digital experiences.
            </p>
          </div>

          <div className="lab-tabs">
            <button 
              className={`lab-tab-btn ${activeTab === 'ui' ? 'active' : ''}`}
              onClick={() => setActiveTab('ui')}
            >
              UI Experiments
            </button>
            <button 
              className={`lab-tab-btn ${activeTab === 'backend' ? 'active' : ''}`}
              onClick={() => setActiveTab('backend')}
            >
              Backend Simulator
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'ui' ? <UIExperiments /> : <BackendDemo />}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </>
  );
}

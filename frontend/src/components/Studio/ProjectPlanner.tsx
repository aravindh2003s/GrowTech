import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Printer, Code, Clock, Laptop } from 'lucide-react';
import './Studio.css';

const PROJECT_TYPES = ['Business Website', 'Portfolio', 'Employee Management', 'Inventory System', 'College Project', 'Custom Web Application'];
const FEATURES = ['Authentication', 'Dashboard', 'Reports', 'File Upload', 'Notifications', 'Search', 'Admin Panel'];
const DESIGN_STYLES = ['Modern', 'Glass', 'Corporate', 'Minimal'];
const TIMELINES = ['2 Weeks', '1 Month', '2 Months', 'Flexible'];

export default function ProjectPlanner() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    projectType: '',
    features: [] as string[],
    designStyle: '',
    timeline: ''
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const toggleFeature = (feature: string) => {
    setSelections(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const getRecommendations = () => {
    let tech = ['React', 'Node.js', 'Express'];
    let service = 'Full Stack Web Development';
    
    if (selections.projectType === 'Business Website' || selections.projectType === 'Portfolio') {
      tech = ['React', 'Tailwind', 'Vite'];
      service = 'Website Development';
    } else if (selections.projectType === 'Employee Management' || selections.projectType === 'Inventory System') {
      tech = ['Java Spring Boot', 'React', 'MySQL'];
      service = 'Custom Software Development';
    }

    if (selections.features.includes('Authentication') || selections.features.includes('Admin Panel')) {
      if (!tech.includes('JWT')) tech.push('JWT');
    }

    return { tech, service };
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="studio-step-title">1. What are you building?</h3>
            <div className="studio-options-grid">
              {PROJECT_TYPES.map(type => (
                <button
                  key={type}
                  className={`studio-option-btn ${selections.projectType === type ? 'selected' : ''}`}
                  onClick={() => setSelections({ ...selections, projectType: type })}
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="studio-step-title">2. Select Required Features</h3>
            <div className="studio-options-grid features-grid">
              {FEATURES.map(feature => (
                <button
                  key={feature}
                  className={`studio-option-btn ${selections.features.includes(feature) ? 'selected' : ''}`}
                  onClick={() => toggleFeature(feature)}
                >
                  {selections.features.includes(feature) && <Check size={16} className="feature-check" />}
                  {feature}
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="studio-step-title">3. Choose a Design Style</h3>
            <div className="studio-options-grid">
              {DESIGN_STYLES.map(style => (
                <button
                  key={style}
                  className={`studio-option-btn ${selections.designStyle === style ? 'selected' : ''}`}
                  onClick={() => setSelections({ ...selections, designStyle: style })}
                >
                  {style}
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="studio-step-title">4. Select Timeline</h3>
            <div className="studio-options-grid">
              {TIMELINES.map(time => (
                <button
                  key={time}
                  className={`studio-option-btn ${selections.timeline === time ? 'selected' : ''}`}
                  onClick={() => setSelections({ ...selections, timeline: time })}
                >
                  {time}
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 5:
        const { tech, service } = getRecommendations();
        return (
          <motion.div key="step5" className="printable-summary" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="summary-header">
              <h3 className="studio-step-title text-gradient">Your Project Blueprint</h3>
              <button className="btn-secondary print-btn" onClick={() => window.print()}>
                <Printer size={18} /> Print PDF
              </button>
            </div>
            
            <div className="summary-grid">
              <div className="summary-card glass-panel">
                <Laptop className="summary-icon" />
                <h4>Project Type</h4>
                <p>{selections.projectType || 'Not specified'}</p>
              </div>
              <div className="summary-card glass-panel">
                <Clock className="summary-icon" />
                <h4>Timeline</h4>
                <p>{selections.timeline || 'Flexible'}</p>
              </div>
              <div className="summary-card glass-panel">
                <Code className="summary-icon" />
                <h4>Suggested Tech Stack</h4>
                <div className="tech-pills">
                  {tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </div>
            </div>

            <div className="summary-details glass-panel">
              <h4>Required Features</h4>
              <ul className="features-list">
                {selections.features.length > 0 ? selections.features.map(f => <li key={f}>{f}</li>) : <li>Standard Features</li>}
              </ul>
              
              <h4 style={{ marginTop: '1.5rem' }}>Design Style</h4>
              <p>{selections.designStyle || 'Standard'}</p>

              <div className="service-recommendation">
                <h4>Recommended GrowTech Service</h4>
                <p className="text-gradient font-bold">{service}</p>
              </div>
            </div>
            
            <div className="summary-cta hide-on-print">
              <p>Ready to build this?</p>
              <a href="/contact" className="btn-primary">Contact GrowTech</a>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  const canProceed = () => {
    if (step === 1) return selections.projectType !== '';
    if (step === 3) return selections.designStyle !== '';
    if (step === 4) return selections.timeline !== '';
    return true; // Step 2 (features) is optional
  };

  return (
    <div className="studio-container">
      <div className="studio-progress hide-on-print">
        <div className="progress-bar" style={{ width: `${(step / 5) * 100}%` }}></div>
      </div>
      
      <div className="studio-content glass-panel">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>

        {step < 5 && (
          <div className="studio-navigation hide-on-print">
            <button 
              className="btn-secondary nav-btn" 
              onClick={prevStep} 
              disabled={step === 1}
            >
              <ChevronLeft size={18} /> Back
            </button>
            <button 
              className="btn-primary nav-btn" 
              onClick={nextStep}
              disabled={!canProceed()}
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

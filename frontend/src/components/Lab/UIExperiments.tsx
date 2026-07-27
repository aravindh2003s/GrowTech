import { useState } from 'react';
import { motion } from 'framer-motion';
import './Lab.css';

export default function UIExperiments() {
  const [blur, setBlur] = useState(12);
  const [opacity, setOpacity] = useState(0.03);

  return (
    <div className="ui-experiments-container">
      <div className="experiments-grid">
        
        {/* Glassmorphism Editor */}
        <div className="experiment-card glass-panel">
          <h3>Glassmorphism Lab</h3>
          <p className="text-muted mb-4">Adjust values to see how we build our UI components.</p>
          
          <div className="controls">
            <label>
              Blur: {blur}px
              <input type="range" min="0" max="30" value={blur} onChange={(e) => setBlur(Number(e.target.value))} />
            </label>
            <label>
              Background Opacity: {(opacity * 100).toFixed(0)}%
              <input type="range" min="0" max="100" value={opacity * 100} onChange={(e) => setOpacity(Number(e.target.value) / 100)} />
            </label>
          </div>

          <div className="preview-area">
            <div 
              className="glass-preview-box"
              style={{
                backdropFilter: `blur(${blur}px)`,
                background: `rgba(255, 255, 255, ${opacity})`,
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              Glass Panel
            </div>
            {/* Background shapes to show blur effect */}
            <div className="bg-shape shape-1"></div>
            <div className="bg-shape shape-2"></div>
          </div>
        </div>

        {/* Micro-interactions */}
        <div className="experiment-card glass-panel">
          <h3>Micro-interactions</h3>
          <p className="text-muted mb-4">Hover and click these buttons to experience our fluid animation physics.</p>
          
          <div className="interactions-preview">
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Bounce Button
            </motion.button>
            
            <motion.div 
              className="interactive-card"
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(59,130,246,0.3)' }}
            >
              Hover Me
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}

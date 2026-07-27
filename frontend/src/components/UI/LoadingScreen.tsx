import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import './LoadingScreen.css';

export default function LoadingScreen() {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <Loader2 className="animate-spin loading-icon" size={48} />
        <h2 className="loading-text text-gradient">Loading...</h2>
      </div>
    </motion.div>
  );
}

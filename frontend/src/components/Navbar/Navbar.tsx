import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDeveloperMode } from '../../context/DeveloperModeContext';
import './Navbar.css';
import logo from '../../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDeveloperMode, toggleDeveloperMode } = useDeveloperMode();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }} onClick={closeMenu}>
          <img src={logo} alt="GrowTech Logo" className="logo-img" />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/studio" className={location.pathname === '/studio' ? 'active' : ''}>Studio <span className="beta-tag">New</span></Link>
          <Link to="/lab" className={location.pathname === '/lab' ? 'active' : ''}>Lab</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>
        
        <div className="nav-actions">
          <button 
            className={`dev-mode-toggle ${isDeveloperMode ? 'active' : ''}`}
            onClick={toggleDeveloperMode}
            title="Toggle Developer Mode"
          >
            {'</>'}
          </button>
          
          <Link to="/studio">
            <button className="btn-primary">Start Project</button>
          </Link>
          
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="mobile-nav-links">
              <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
              <Link to="/studio" onClick={closeMenu} className={location.pathname === '/studio' ? 'active' : ''}>Studio</Link>
              <Link to="/lab" onClick={closeMenu} className={location.pathname === '/lab' ? 'active' : ''}>Lab</Link>
              <Link to="/services" onClick={closeMenu} className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
              <Link to="/portfolio" onClick={closeMenu} className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
              <Link to="/about" onClick={closeMenu} className={location.pathname === '/about' ? 'active' : ''}>About</Link>
              <Link to="/contact" onClick={closeMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

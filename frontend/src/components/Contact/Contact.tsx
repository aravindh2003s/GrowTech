import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { api } from '../../services/api';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error', message: string }>({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }
    
    setStatus({ type: 'loading', message: 'Sending message...' });
    try {
      await api.submitContact(formData);
      setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get in <span className="text-gradient">Touch</span></h2>
          <p className="section-subtitle">Ready to start your next big project? Our team is here to help you build the future.</p>
        </motion.div>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3>Contact Information</h3>
            <p className="text-muted mb-4">Fill up the form and our team will get back to you within 24 hours.</p>
            
            <div className="info-item">
              <div className="icon-circle">
                <Phone className="info-icon" />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+91 8838544167</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-circle">
                <Mail className="info-icon" />
              </div>
              <div>
                <h4>Email</h4>
                <p>aravindh2003s@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-circle">
                <MapPin className="info-icon" />
              </div>
              <div>
                <h4>Location</h4>
                <p>Velachery, Chennai, Tamil Nadu</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            className="glass-panel contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required disabled={status.type === 'loading'} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required disabled={status.type === 'loading'} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." required disabled={status.type === 'loading'}></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="btn-primary"
              whileHover={status.type !== 'loading' ? { scale: 1.02 } : {}}
              whileTap={status.type !== 'loading' ? { scale: 0.98 } : {}}
              disabled={status.type === 'loading'}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              {status.type === 'loading' ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
            {status.message && status.type !== 'loading' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className={`status-message ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}
                style={{
                  color: status.type === 'success' ? '#10b981' : '#ef4444',
                  textAlign: 'center',
                  padding: '10px',
                  borderRadius: '8px',
                  backgroundColor: status.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'
                }}
              >
                {status.message}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

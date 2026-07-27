import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  { 
    quote: "GrowTech transformed our business. Their technical expertise and architectural vision are unparalleled in the industry.", 
    author: "Sarah Jenkins", 
    role: "CTO, TechCorp",
    avatar: "SJ"
  },
  { 
    quote: "The best agency we've ever worked with. Delivered our cloud infrastructure on time and way beyond our initial expectations.", 
    author: "Michael Chang", 
    role: "Founder, StartupX",
    avatar: "MC"
  },
  { 
    quote: "A true partner in our digital transformation. Their modern interfaces have doubled our user engagement in just three months.", 
    author: "Elena Rodriguez", 
    role: "VP of Product, FinServe",
    avatar: "ER"
  }
];

const StarRating = () => (
  <div className="star-rating">
    {[...Array(5)].map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star-icon">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section section-padding">
      <div className="container">
        <div className="testimonials-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Client <span className="text-gradient">Testimonials</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Don't just take our word for it. Here is what industry leaders say about our solutions.
          </motion.p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              className="glass-panel testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.3)' }}
            >
              <StarRating />
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.avatar}</div>
                <div className="author-info">
                  <h4>{t.author}</h4>
                  <span className="text-muted">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

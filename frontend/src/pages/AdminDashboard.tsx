import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { api } from '../services/api';
import './AdminDashboard.css';

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('adminToken'));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      fetchMessages();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await api.login({ email, password });
      localStorage.setItem('adminToken', data.token);
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setMessages([]);
  };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const data = await api.getMessages();
      setMessages(data);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Could not fetch messages. Session might have expired.');
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    try {
      await api.deleteMessage(id);
      setMessages(messages.filter(msg => msg.id !== id));
    } catch (err) {
      console.error(err);
      alert('Failed to delete message.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-container section-padding">
        <motion.div 
          className="admin-login-card glass-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2>Admin Access</h2>
          <p className="text-muted">Enter credentials to view dashboard</p>
          <form onSubmit={handleLogin} className="admin-login-form">
            <input 
              type="email" 
              placeholder="Admin Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="admin-input"
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-input"
              required
            />
            {error && <div className="error-text" style={{ color: '#ef4444', marginTop: '0.5rem' }}>{error}</div>}
            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={loading}>
              {loading ? 'Authenticating...' : 'Unlock'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-container section-padding">
      <div className="container">
        <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Messages <span className="text-gradient">Dashboard</span>
          </motion.h1>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <motion.div 
              className="stats-card glass-panel"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ margin: 0, padding: '0.5rem 1rem' }}
            >
              <div className="stat-label" style={{ fontSize: '0.8rem' }}>Total Requests</div>
              <div className="stat-value" style={{ fontSize: '1.5rem' }}>{messages.length}</div>
            </motion.div>
            <button onClick={handleLogout} className="btn-secondary">Logout</button>
          </div>
        </div>

        {loading ? (
          <div className="loading-spinner" style={{ textAlign: 'center', padding: '3rem' }}>Loading dashboard...</div>
        ) : (
          <motion.div 
            className="table-container glass-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ overflowX: 'auto', marginTop: '2rem' }}
          >
            <table className="admin-table" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '1rem' }}>Date</th>
                  <th style={{ padding: '1rem' }}>Client Name</th>
                  <th style={{ padding: '1rem' }}>Email</th>
                  <th style={{ padding: '1rem' }}>Message</th>
                  <th style={{ padding: '1rem' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.length === 0 ? (
                  <tr>
                    <td colSpan={5} style={{ textAlign: 'center', padding: '2rem' }}>
                      No recent messages found.
                    </td>
                  </tr>
                ) : (
                  messages.map((msg) => (
                    <tr key={msg.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem' }} className="col-date">{new Date(msg.created_at).toLocaleDateString()}</td>
                      <td style={{ padding: '1rem' }} className="col-name">{msg.name}</td>
                      <td style={{ padding: '1rem' }} className="col-email">
                        <a href={`mailto:${msg.email}`} style={{ color: '#3b82f6' }}>{msg.email}</a>
                      </td>
                      <td style={{ padding: '1rem', maxWidth: '300px' }} className="col-message">{msg.message}</td>
                      <td style={{ padding: '1rem' }}>
                        <button 
                          onClick={() => handleDelete(msg.id)} 
                          style={{ color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid rgba(239,68,68,0.2)' }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </motion.div>
        )}
      </div>
    </div>
  );
}

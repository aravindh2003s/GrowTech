import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Database } from 'lucide-react';
import './Lab.css';

export default function BackendDemo() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [method, setMethod] = useState('GET');
  const [endpoint, setEndpoint] = useState('/api/users');

  const simulateRequest = () => {
    setLoading(true);
    setResponse(null);
    
    setTimeout(() => {
      let mockData = {};
      if (method === 'GET' && endpoint === '/api/users') {
        mockData = {
          status: 200,
          data: [
            { id: 1, name: 'Alice', role: 'Admin' },
            { id: 2, name: 'Bob', role: 'User' }
          ]
        };
      } else if (method === 'POST') {
        mockData = {
          status: 201,
          message: 'Resource created successfully',
          id: Math.floor(Math.random() * 1000)
        };
      } else {
        mockData = {
          status: 404,
          error: 'Not Found'
        };
      }
      setResponse(mockData);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="backend-demo-container">
      <div className="demo-panel glass-panel">
        <div className="panel-header">
          <Database size={20} className="text-blue-400" />
          <h3>API Simulator</h3>
        </div>
        
        <div className="api-controls">
          <select value={method} onChange={(e) => setMethod(e.target.value)} className="api-select">
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
          </select>
          <input 
            type="text" 
            value={endpoint} 
            onChange={(e) => setEndpoint(e.target.value)} 
            className="api-input"
          />
          <button className="btn-primary flex-center" onClick={simulateRequest} disabled={loading}>
            {loading ? <span className="spinner"></span> : <><Send size={16} /> Send</>}
          </button>
        </div>

        <div className="api-response">
          <div className="response-header">
            <span>Response JSON</span>
            {response && (
              <span className={`status-badge ${response.status >= 400 ? 'error' : 'success'}`}>
                {response.status >= 400 ? <AlertCircle size={14} /> : <CheckCircle2 size={14} />}
                {response.status}
              </span>
            )}
          </div>
          <pre className="json-container">
            {loading ? (
              <span className="text-muted">Fetching data...</span>
            ) : response ? (
              JSON.stringify(response, null, 2)
            ) : (
              <span className="text-muted">Waiting for request...</span>
            )}
          </pre>
        </div>
      </div>
    </div>
  );
}

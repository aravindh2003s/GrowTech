const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Custom fetch wrapper to handle JSON and Authorization headers.
 */
async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem('adminToken');
  
  const headers = new Headers(options.headers);
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  const config: RequestInit = {
    ...options,
    headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, config);
  
  // If unauthorized, clear token (simple logout)
  if (response.status === 401 || response.status === 403) {
    localStorage.removeItem('adminToken');
  }
  
  return response;
}

export const api = {
  // Public
  submitContact: async (data: { name: string; email: string; message: string }) => {
    const res = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to submit contact');
    return res.json();
  },

  // Auth
  login: async (credentials: { email: string; password: string }) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    if (!res.ok) throw new Error('Invalid credentials');
    return res.json();
  },

  // Admin (Protected)
  getMessages: async () => {
    const res = await fetchWithAuth('/messages');
    if (!res.ok) throw new Error('Failed to fetch messages');
    return res.json();
  },

  deleteMessage: async (id: number) => {
    const res = await fetchWithAuth(`/messages/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete message');
    return res.json();
  }
};

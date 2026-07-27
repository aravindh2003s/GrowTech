<div align="center">
  <h1>🚀 GrowTech Studio</h1>
  <p><strong>An Immersive Digital Software Studio Experience</strong></p>
  <p>
    Built with React, TypeScript, Framer Motion, and PostgreSQL.
  </p>
</div>

<hr />

## 🌟 Vision

GrowTech is not just another agency website—it is an **interactive software studio**. The goal of this project is to create a digital experience that makes visitors feel like they are directly interacting with premium software rather than simply reading about services. 

Inspired by industry leaders like Apple, Vercel, Linear, and Stripe, GrowTech leverages a dark-mode glassmorphism aesthetic, fluid micro-animations, and dynamic data visualization to communicate technical excellence at first glance.

---

## ⚡ Key Features

- **🎨 Premium Dark UI & Glassmorphism:** A meticulously crafted design system utilizing backdrop filters, dynamic gradients, and precision typography.
- **✨ Fluid Micro-Animations:** Extensive use of `framer-motion` for page transitions, hover states, scroll-reveals, and interactive components.
- **🏗️ Interactive Project Blueprints:** A bespoke modal system that breaks down portfolio projects by Business Problem, System Architecture, Tech Stack, and Database Schema.
- **📊 Readiness Dashboard:** An interactive "Production Ready" dashboard that dynamically visualizes software readiness metrics.
- **📱 Fully Responsive:** Carefully optimized grid architectures that seamlessly adapt from 4K desktop displays down to mobile devices.
- **🛡️ Secure Admin Dashboard:** A JWT-authenticated React dashboard connected to a Node.js/PostgreSQL backend for managing incoming client communications.

---

## 🛠️ Technology Stack

### Frontend (Client)
- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite (Ultra-fast HMR and optimized production builds)
- **Styling:** Custom CSS Architecture (Modular, CSS Variables, Premium Tokens)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM

### Backend (API)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL (Migrated from SQLite for production scalability)
- **Authentication:** JSON Web Tokens (JWT) & bcrypt (Password Hashing)

---

## 🚀 Getting Started (Local Development)

### 1. Clone the Repository
```bash
git clone https://github.com/aravindh2003s/GrowTech.git
cd GrowTech
```

### 2. Setup the Backend
The backend requires a PostgreSQL database. Ensure PostgreSQL is running locally or provide a cloud connection string.

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:
```env
PORT=5000
DATABASE_URL=postgresql://username:password@localhost:5432/growtech
JWT_SECRET=your_super_secret_key
ADMIN_EMAIL=admin@growtech.com
ADMIN_PASS=admin123
```

Start the backend server:
```bash
npm start
```

### 3. Setup the Frontend
```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` directory:
```env
VITE_API_URL=http://localhost:5000/api
```

Start the Vite development server:
```bash
npm run dev
```

---

## 🌍 Production Deployment

This project is architected for modern cloud deployment:
- **Frontend:** Optimized for Vercel. Connect the GitHub repository and set the root directory to `frontend`.
- **Backend:** Optimized for Render (Web Service). Connect the GitHub repository, set the root directory to `backend`, and attach a free PostgreSQL database instance. 

*(Don't forget to configure the respective Environment Variables in the cloud dashboards!)*

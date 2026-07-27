import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LoadingScreen from './components/UI/LoadingScreen';
import Footer from './components/Footer/Footer';

// Lazy loading pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const StudioPage = React.lazy(() => import('./pages/StudioPage'));
const LabPage = React.lazy(() => import('./pages/LabPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage'));
const TestimonialsPage = React.lazy(() => import('./pages/TestimonialsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/studio" element={<StudioPage />} />
            <Route path="/lab" element={<LabPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Suspense>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;

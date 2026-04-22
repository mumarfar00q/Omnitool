import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from './components/ThemeContext';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const ToolsList = lazy(() => import('./pages/ToolsList'));
const ToolDetail = lazy(() => import('./pages/ToolDetail'));
const Blog = lazy(() => import('./pages/Blog'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<ToolsList />} />
            <Route path="/tools/:slug" element={<ToolDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Privacy />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

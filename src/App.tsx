import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from './components/ThemeContext';
import { routes } from './routes';

export default function App() {
  const AppRoutes = () => {
    const element = useRoutes(routes);
    return element;
  };
  
  return (
    <ThemeProvider>
      <Layout>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[400px]">
             <div className="w-8 h-8 border-4 border-[var(--accent-color)] border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <AppRoutes />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

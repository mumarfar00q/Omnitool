import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import * as HelmetPkg from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const HelmetProvider = (HelmetPkg as any).HelmetProvider || (HelmetPkg as any).default?.HelmetProvider;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);

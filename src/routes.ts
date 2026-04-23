import { createElement } from 'react';
import Home from './pages/Home';
import ToolsList from './pages/ToolsList';
import ToolDetail from './pages/ToolDetail';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

export const routes = [
  { path: '/', element: createElement(Home) },
  { path: '/tools', element: createElement(ToolsList) },
  { path: '/tools/:slug', element: createElement(ToolDetail) },
  { path: '/blog', element: createElement(Blog) },
  { path: '/faq', element: createElement(FAQ) },
  { path: '/contact', element: createElement(Contact) },
  { path: '/privacy-policy', element: createElement(Privacy) },
];

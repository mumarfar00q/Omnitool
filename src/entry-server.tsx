import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import * as HelmetPkg from 'react-helmet-async';
import type { FilledContext } from 'react-helmet-async';
import App from './App';

const HelmetProvider = (HelmetPkg as any).HelmetProvider || (HelmetPkg as any).default?.HelmetProvider;

export function render(url: string) {
  const helmetContext = {} as FilledContext;
  
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>
    </HelmetProvider>
  );

  return { html, helmet: helmetContext.helmet };
}

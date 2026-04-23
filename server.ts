import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON and form data
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API Route: Technical Support Request
  app.post('/api/support', (req, res) => {
    const { email, message } = req.body;
    console.log(`Support request received from: ${email}`);
    // In a real MPA, this would save to a database or send an email
    res.json({ success: true, message: 'Support request received by the server.' });
  });

  // API Route: System Status
  app.get('/api/status', (req, res) => {
    res.json({
      status: 'Online',
      latency: '8ms',
      uptime: '99.99%',
      serverTime: new Date().toISOString()
    });
  });

  // Vite integration for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    
    // Generic route for SPA fallback if needed, but the server handles the routing
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Multi-Page Server running at http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

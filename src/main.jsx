import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { verifyDatabaseConnection } from './services/db.js'

// Verify database connection during server / app startup
verifyDatabaseConnection().then((res) => {
  console.log('[Startup] Database connection verification completed:', res);
}).catch((err) => {
  console.error('[Startup] Database verification error:', err);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { DeveloperModeProvider } from './context/DeveloperModeContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <DeveloperModeProvider>
        <App />
      </DeveloperModeProvider>
    </HelmetProvider>
  </StrictMode>,
)

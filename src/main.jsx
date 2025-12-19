import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import initScrollReveal from './scrollReveal'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// initialize reveal after hydration
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => initScrollReveal());
}

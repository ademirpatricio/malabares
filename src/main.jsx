import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'

import AOS from 'aos'

import 'aos/dist/aos.css'
import './index.css'

// INICIALIZA O AOS
AOS.init({
  duration: 800,
  once: true,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
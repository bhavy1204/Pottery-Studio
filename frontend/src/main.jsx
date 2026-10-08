import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/gloock";

// 2. DM Sans (Standard UI/Body font - import weights you plan to use)
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";

// 3. Cormorant Garamond (Your secondary elegant font)
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/700.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

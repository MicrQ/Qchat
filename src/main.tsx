import './index.css'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import ContextProvider from './context/Context'

createRoot(document.getElementById('root')!).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ContextProvider } from './Components/Modals/context/ContextModal.tsx'
import { BookProvider } from './hooks/useBook/ContextBooks/ContextBook.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BookProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BookProvider>
  </StrictMode>,
)

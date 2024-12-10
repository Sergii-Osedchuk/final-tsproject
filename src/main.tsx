import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SessionsContextProvider from './store/sessions-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SessionsContextProvider>
      <App />
    </SessionsContextProvider>
  </React.StrictMode>,
)

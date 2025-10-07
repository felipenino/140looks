import React from 'react'
import ReactDOM from 'react-dom/client'
import AppB from './AppB.tsx'
import './index.css'
import './index-b.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppB />
  </React.StrictMode>,
)
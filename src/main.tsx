import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './app/router'
import PlayContextProvider from './app/context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlayContextProvider>
      <Router />
    </PlayContextProvider>
  </React.StrictMode>,
)

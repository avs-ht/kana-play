import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './app/router'
import PlayContextProvider from './app/context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlayContextProvider>
      <div className="w-full min-h-full overflow-hidden p-5">
        <Router />
      </div>
    </PlayContextProvider>
  </React.StrictMode>,
)

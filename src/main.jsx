import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // This links to your main logic
import './App.css'     // This links to your styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
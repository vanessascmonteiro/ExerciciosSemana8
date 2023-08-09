import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContext } from './Context/AuthContext/AuthContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
    <App />
    </AuthContext>
  </React.StrictMode>,
)

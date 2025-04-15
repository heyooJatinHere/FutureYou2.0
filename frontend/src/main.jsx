
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router } from 'wouter'

createRoot(document.getElementById('root')).render(

    <Router>
        <App />
    </Router>

)

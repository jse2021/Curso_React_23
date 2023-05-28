import React from 'react'
// import BrowserRouter from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './styles.css'
import HeroesApp from './HeroesApp'
import { BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
    
  </React.StrictMode>,
)

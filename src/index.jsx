import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './style/index.scss'
import { WordlistContextComponent } from './components/App/WordlistContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WordlistContextComponent>
    <App />
    </WordlistContextComponent>
  </React.StrictMode>,
)

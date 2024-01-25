import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './style/index.scss'
import { Provider } from 'mobx-react';
import WordlistStore from './stores/WordlistStore';


const stores = {
  wordlistStore: new WordlistStore()
} 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider {...stores}>
    <App />
    </Provider>,
  </React.StrictMode>,
)

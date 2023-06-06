import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.tsx';
import './styles/index.css'
import './styles/tailwind.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>
   <Provider store={store}> 
  
    <App />
    </Provider>
  </React.StrictMode>,
)

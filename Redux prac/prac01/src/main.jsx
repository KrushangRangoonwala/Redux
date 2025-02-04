import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'   // Provider component gives full acces of redux store to raeact app
import store from './store.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>  
    <App />
  </Provider>
  // </StrictMode>,
)

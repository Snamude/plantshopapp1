import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import ContextProvider from './Features/ContextProvider.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
    <testLandingpage />
  </ContextProvider>,
)

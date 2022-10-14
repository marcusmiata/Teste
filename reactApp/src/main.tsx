import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Pages/Home'
import { GlobalStyle } from "./Styles/global"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
)

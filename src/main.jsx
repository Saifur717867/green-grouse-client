import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './assets/router/router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './assets/auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)

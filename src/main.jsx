import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import House from './Pages/House.jsx'
const router = new createBrowserRouter([
  {
    path: "/",
    Component: Home 
  },
  {
    path: "/Register",
    Component: Register
  },
  {
    path: "/House",
    Component: House
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

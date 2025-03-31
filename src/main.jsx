import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import tailwindcss from '@tailwindcss/vite'
import './index.css'
import App from './App.jsx'
import { Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContent from './components/MainContent.jsx'
import Karpportal from './components/Karpportal.jsx'
import NotFoundPage from './components/NotFound.jsx'
import { AnimatePresence } from 'framer-motion'

const router = createBrowserRouter([
  // { path: "/personal-website/", element: <App /> },
  { path: "/*", element: <App /> },
  // { path: "/personal-website/karpportal", element: <Karpportal /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AnimatePresence mode="wait"> */}
      <RouterProvider router={router} />
      {/* <App/> */}
    {/* </AnimatePresence> */}
  </StrictMode>,
)

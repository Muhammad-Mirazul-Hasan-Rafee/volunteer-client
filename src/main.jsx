import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ThemeInit } from "../.flowbite-react/init";

import router from './router/router'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeInit />
   <RouterProvider router={router} />
  </StrictMode>,
)

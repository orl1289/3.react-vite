import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import English from './pages/English.jsx'

import { createBrowserRouter, RouterProvider,} from "react-router-dom";



//Here I created the router

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/resume",
    element: <English/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

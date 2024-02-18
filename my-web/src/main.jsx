import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import English from './pages/English.jsx'
import Blog from './pages/Blog.jsx'

import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import NotFoundPage from './pages/NotFoundpage.jsx'



//Here I created the router

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/resume",
    element: <English/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

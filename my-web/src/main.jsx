import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import English from "./pages/English.jsx";
//! When the Frenish section is ready
// import French from './pages/French.jsx'
import Blog from "./pages/Blog.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundpage.jsx";
import NavBar from "./components/NavBar.jsx";

//* Here I created the router, router and special package to configure 
//*routes statically (it's impossible to generate purely dynamic routes on a server)


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/english",
    element: <English />,
  },

  // !This is for the French part
  // {
  //   path: "/french",
  //   element: <French/>,
  // },

  {
    path: "/blog",
    element: <Blog />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

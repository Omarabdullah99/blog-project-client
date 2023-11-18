import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/blog",
        element:<Blog />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/services",
        element:<Services />
      },
      {
        path:"/contact",
        element:<Contact />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)

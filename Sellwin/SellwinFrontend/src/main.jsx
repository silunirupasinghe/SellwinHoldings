// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import RootLayout from './layouts/Root.layout.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutUs from './pages/AboutUs.jsx';
import Production from './pages/Production.jsx';
import Products from './pages/Products.jsx';
import ContactUs from './pages/ContactUs.jsx';
import './lib/fontawesome.js'
import Services from './pages/Sectors.jsx';
import Sectors from './pages/Sectors.jsx';
import Careers from './pages/Careers.jsx';
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/AboutUs',
        element: <AboutUs />
      },
      
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/contactUs',
        element: <ContactUs />
      },
      {
        path: '/sectors',
        element: <Sectors/>
      },
      {
        path: '/production',
        element: <Production/>
      },
      {
        path: '/careers',
        element: <Careers/>
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

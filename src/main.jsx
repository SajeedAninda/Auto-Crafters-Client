import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Components/Homepage/Homepage.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthenticationProvider from './Components/Authentication/AuthenticationProvider.jsx';
import BrandDetails from './Components/BrandDetails/BrandDetails.jsx';
import AddProducts from './Components/AddProducts/AddProducts.jsx';
import UpdateProducts from './Components/UpdateProducts/UpdateProducts.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addProducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brandDetails/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/brand/${params.id}`),
        element: <BrandDetails></BrandDetails>,
      },
      {
        path: "/updateProducts/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
        element: <UpdateProducts></UpdateProducts>,
      },
      {
        path: "/productDetails/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthenticationProvider>
      <RouterProvider router={router} />
    </AuthenticationProvider>
  </React.StrictMode>,
)

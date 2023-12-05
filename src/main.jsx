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
import Cart from './Components/Cart/Cart.jsx';
import PrivateRoute from './Components/Authentication/PrivateRoute.jsx';
import ErrorElement from './ErrorPage/ErrorElement.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElement></ErrorElement>,
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
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
      },
      {
        path: "/brandDetails/:id",
        loader: ({ params }) => fetch(`https://auto-crafters-server.vercel.app/brand/${params.id}`),
        element: <BrandDetails></BrandDetails>,
      },
      {
        path: "/updateProducts/:id",
        loader: ({ params }) => fetch(`https://auto-crafters-server.vercel.app/products/${params.id}`),
        element: <PrivateRoute><UpdateProducts></UpdateProducts></PrivateRoute>,
      },
      {
        path: "/productDetails/:id",
        loader: ({ params }) => fetch(`https://auto-crafters-server.vercel.app/products/${params.id}`),
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
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

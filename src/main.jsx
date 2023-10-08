import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './Layout/Root/Root';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contract from './Pages/Contract/Contract';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/Authprovider';
import Privateroute from './Routes/Priveroutes';
import Services from './Pages/Home/Services'
import Errorpages from './Pages/Errorpages/Errorpages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpages></Errorpages>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch("/category.json"),
      },
      {
        path: "/service/:id",
        element: <Privateroute><Services></Services></Privateroute>,
        loader: () => fetch("/category.json"),
      
      },
      {
        path:"/about",
        element:<Privateroute><About></About></Privateroute>,
      },
      {
        path:"/contract",
        element:<Privateroute><Contract></Contract></Privateroute>,
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)

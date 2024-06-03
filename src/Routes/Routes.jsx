
import {
  createBrowserRouter,
  
} from "react-router-dom";

import Main from "../Layout/Main";

import Home from "../components/Home/Home/Home";

import Signin from "../components/Registration/Signin";
import Signup from "../components/Registration/Signup";
import Order from "../components/Orders/Order";
import PrivateRoutes from "./PrivateRoutes";
import CheckOut from "../components/checkout/CheckOut";
import Bookings from "../components/Bookings/Bookings";
import TotalUser from "../components/TotalUser/TotalUser";
import Makeadmin from "../components/Makeadmin/Makeadmin";
import About from "../components/Home/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/'
        ,
        element:<Home></Home>
      },
      {
        path:'/about'
        ,
        element:<About></About>
      },
      {
        path:'/order'
        ,
        element:<PrivateRoutes><Order></Order></PrivateRoutes>
      },
      {
        path:'/login'
        ,
        element:<Signin></Signin>
      },
      {
        path:'/signup'
        ,
        element:<Signup></Signup>
      },
      {
        path:'/checkout/:id'
        ,
        element:<CheckOut></CheckOut>,
        loader:({params})=>fetch(`https://car-doctor-server-six-pi.vercel.app/checkout/${params.id}`)
      },
      {
        path:'/bookings',
        element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>
      },
      {
        path:'/totaluser',
        element:<TotalUser></TotalUser>
      },
      {
        path:'/admin',
        element:<Makeadmin></Makeadmin>
      }
    ]
  },
]);

export default router
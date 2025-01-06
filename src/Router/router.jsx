import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Homepages from "../Pages/Homepages";
import Login from "../Component/Login";
import Register from "../Component/Register";
import Alltour from "../Pages/Alltour";
import Details from "../Component/Details";
import PrivatRoutes from "./PrivatRoutes";
import Umrah from "../Pages/Umrah";
import UmrahDetails from "../Component/UmrahDetails";
import ContactUs from "../Pages/ContactUs";





  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,

      children:[
           {
            path:'/',
            element:<Homepages></Homepages>
           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            path:'/register',
            element:<Register></Register>
           },
           {
            path:'/allpackage',
            element:<Alltour></Alltour>
           },
           {
            path:'/details/:id',
            element:<PrivatRoutes><Details></Details></PrivatRoutes>
           },
           {
            path:'/umrah',
            element:<Umrah></Umrah>
           },
           {
            path: "/umrah-details/:id", 
            element: <PrivatRoutes>  <UmrahDetails></UmrahDetails> </PrivatRoutes>,
          },
          {
            path:'/contact',
            element:<ContactUs></ContactUs>
           },
          
          
          
]

}, 
{
  path:'*',

},
  

  ]);

export default router;
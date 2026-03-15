import React from "react";
import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddNeedPost from "../pages/NeedPost/AddNeedPost";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Router not found!!</h2>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/addpost",
        element:<AddNeedPost></AddNeedPost>
      }
    ]
    
  },
]);
export default router;
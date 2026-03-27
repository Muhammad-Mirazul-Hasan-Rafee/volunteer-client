import React from "react";
import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddNeedPost from "../pages/NeedPost/AddNeedPost";
import ShowNeedPost from "../pages/ShowNeedPost/ShowNeedPost";
import AllPost from "../pages/AllPost/AllPost";
import JobDetails from "../pages/Home/JobDetails/JobDetails";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import PrivateRoute from "./PrivateRoute";


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
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>,
      },
      {
        path:"/addpost",
        element:<PrivateRoute><AddNeedPost></AddNeedPost></PrivateRoute>,
      },
      {
        path:"/neednow",
        element:<PrivateRoute><ShowNeedPost></ShowNeedPost></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/jobs'),
      },
      {
        path:"/allpost",
        element:<AllPost></AllPost>,
      },
     {
       path:"/jobs/:id",
      element:<JobDetails></JobDetails>,
      loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
     },
    {
        path: 'jobApply/:id',
        element: <JobApply></JobApply>
      },
      {
        path:'/myApplications',
        element:<MyApplications></MyApplications>

      }
    ]
    
  },
]);
export default router;
import React from "react";
import { createBrowserRouter } from "react-router-dom";
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
    element: <MainLayout />,
    errorElement: <h2>Router not found!!</h2>,
    children: [
      // ---------- PUBLIC ROUTES ----------
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allpost",
        element: <AllPost />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`api/jobs/${params.id}`),
      },

      // ---------- PRIVATE ROUTES ----------
      {
        path: "/addpost",
        element: (
          <PrivateRoute>
            <AddNeedPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/neednow",
        element: (
          <PrivateRoute>
            <ShowNeedPost />
          </PrivateRoute>
        ),
        loader: () => fetch("api/jobs"),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
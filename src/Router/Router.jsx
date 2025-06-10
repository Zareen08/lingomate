import {
  createBrowserRouter
} from "react-router";

import React from "react";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path:'/findtutors',
            Component: Home
        },
        {
            path:'/addtutorials',
            Component: Home
        },
        {
            path:'/mytutorials',
            Component: Home
        },
        {
            path:'/bookedtutorials',
            Component: Home
        },
    ]
  },
]);

export default router
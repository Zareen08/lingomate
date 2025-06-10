import {
  createBrowserRouter
} from "react-router";

import React from "react";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Home/Services/Services";
import Company from "../Pages/Company/Company";
import Legal from "../Pages/Legal/Legal";

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
        {
            path:'/services',
            Component: Services
        },
        {
            path:'/company',
            Component: Company
        },
        {
            path:'/legal',
            Component: Legal
        },
        {
            path:'/register',
            Component: Register
        },
        {
            path:'/login',
            Component: Login
        },
    ]
  },
]);

export default router
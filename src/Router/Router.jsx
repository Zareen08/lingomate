import {
  createBrowserRouter
} from "react-router";

import React from "react";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Company from "../Pages/Company/Company";
import Legal from "../Pages/Legal/Legal";
import Services from "../Pages/Services/Services";
import AddTutorials from "../Pages/AddTutorial/AddTutorials";
import CatLangs from "../Pages/CatLangs/CatLangs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            loader: ()=>fetch('http://localhost:4000/categories'),
            Component: Home
        },
        {
            path:'/findtutors',
            loader: ()=>fetch('http://localhost:4000/categories'),
            Component: Home
        },
        {
            path:'/findtutors/:id',
            loader:({params})=>fetch(`http://localhost:4000/categories/${params.id}`),
            Component:CatLangs
        },
        {
            path:'/addtutorials',
            Component: AddTutorials
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
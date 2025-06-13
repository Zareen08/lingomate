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
import MyTutorials from "../Pages/MyTutorials/MyTutorials";
import UpdateTutorial from "../Pages/UpdateTutorial/UpdateTutorial";
import FindTutors from "../Pages/FindTutors/FindTutors";
import TutorDetails from "../Pages/TutorDetails/TutorDetails";
import MyBooked from "../Pages/MyBooked/MyBooked";
import Error from "../Components/Error/Error";
import FindByCat from "../Pages/FindByCat/FindByCat";
import PrivateRoute from "./PrivateRoute";
import Loader from "../Components/Loader/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    Component: MainLayout,
    children: [
        {
            index: true,
            hydrateFallbackElement:<Loader></Loader>,
            loader: ()=>fetch('https://lingomate-server-site.vercel.app/categories'),
            Component: Home
        },
        {
            path:'/findtutors',
            hydrateFallbackElement:<Loader></Loader>,
            loader: ()=>fetch('https://lingomate-server-site.vercel.app/tutorials'),
            Component: FindTutors
        },
        {
            path:'findtutors/:category',
            
            Component:FindByCat
        },
        {
            path:'/addtutorials',
            element: <PrivateRoute>
                <AddTutorials></AddTutorials>
            </PrivateRoute>
        },
        {
            path: '/tutor/:id',
            element: <PrivateRoute>
                <TutorDetails></TutorDetails>
            </PrivateRoute>
           
        },
        {
            path:'/mytutorials',
            hydrateFallbackElement:<Loader></Loader>,
            loader:()=>fetch('https://lingomate-server-site.vercel.app/tutorials'),
            element: <PrivateRoute>
                <MyTutorials></MyTutorials>
            </PrivateRoute>
            
        },
        {
            path: '/updateTutorial/:id',
            hydrateFallbackElement:<Loader></Loader>,
            loader: ({ params }) => fetch(`https://lingomate-server-site.vercel.app/tutorials/${params.id}`),
            Component: UpdateTutorial
        },
        {
            path:'/bookedtutorials',
            element: <PrivateRoute>
                <MyBooked></MyBooked>
                </PrivateRoute>
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
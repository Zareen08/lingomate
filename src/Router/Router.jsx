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

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    Component: MainLayout,
    children: [
        {
            index: true,
            loader: ()=>fetch('http://localhost:4000/categories'),
            Component: Home
        },
        {
            path:'/findtutors',
            loader: ()=>fetch('http://localhost:4000/tutorials'),
            Component: FindTutors
        },
        {
            path:'/findtutors/:category',
            
            Component:FindByCat
        },
        {
            path:'/addtutorials',
            Component: AddTutorials
        },
        {
            path: '/tutor/:id',
            Component: TutorDetails
           
        },
        {
            path:'/mytutorials',
            loader:()=>fetch('http://localhost:4000/tutorials'),
            Component: MyTutorials
        },
        {
            path: '/updateTutorial/:id',
            loader: ({ params }) => fetch(`http://localhost:4000/tutorials/${params.id}`),
            Component: UpdateTutorial
        },
        {
            path:'/bookedtutorials',
            Component: MyBooked
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
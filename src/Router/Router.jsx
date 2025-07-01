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
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import Users from "../Pages/Users/Users";
import Contacts from "../Pages/Contacts/Contacts";

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
            path:'contacts',
            
            Component: Contacts
        },
        
        {
            path: '/tutor/:id',
            element: <PrivateRoute>
                <TutorDetails></TutorDetails>
            </PrivateRoute>
           
        },
         {
            path: 'users',
            hydrateFallbackElement: <Loader></Loader>,
            loader:()=>fetch('https://lingomate-server-site.vercel.app/users'),
            Component: Users
        },
        
         {
            path: '/updateTutorial/:id',
            hydrateFallbackElement:<Loader></Loader>,
            loader: ({ params }) => fetch(`https://lingomate-server-site.vercel.app/tutorials/${params.id}`),
            Component: UpdateTutorial
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Dashboard
      },
      {
            path:'mytutorials',
            hydrateFallbackElement:<Loader></Loader>,
            loader:()=>fetch('https://lingomate-server-site.vercel.app/tutorials'),
            element: <PrivateRoute>
                <MyTutorials></MyTutorials>
            </PrivateRoute>
            
        },
        {
            path:'bookedtutorials',
            element: <PrivateRoute>
                <MyBooked></MyBooked>
                </PrivateRoute>
        },
        {
            path:'addtutorials',
            element: <PrivateRoute>
                <AddTutorials></AddTutorials>
            </PrivateRoute>
        },
       

    ]
  }
]);

export default router
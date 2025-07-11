import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
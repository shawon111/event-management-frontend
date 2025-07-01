import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <div>
            {/* header */}
            <Header />
            {/* main contents */}
            <main>
                <Outlet />
            </main>
            {/* footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
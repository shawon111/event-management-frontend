import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';

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
        </div>
    );
};

export default MainLayout;
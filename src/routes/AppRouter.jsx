import AuthLayout from '@/components/layout/AuthLayout';
import MainLayout from '@/components/layout/MainLayout';
import AddEvent from '@/components/pages/add-event/AddEvent';
import Login from '@/components/pages/auth/Login';
import Registration from '@/components/pages/auth/Registration';
import Events from '@/components/pages/events/Events';
import Home from '@/components/pages/home/Home';
import MyEvents from '@/components/pages/my-events/MyEvents';
import NotFound from '@/components/pages/not-found/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router';

const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* Main Routes */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/events/my-events/:id" element={<MyEvents />} />
                    <Route path="/events/add-event" element={<AddEvent />} />
                </Route>
                {/* Auth Routes */}
                <Route element={<AuthLayout />}>
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Registration />} />
                </Route>
                {/* Not Found Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default AppRouter;
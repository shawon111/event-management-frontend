import React from 'react';
import HomeHero from './HomeHero';
import Features from './Features';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Hero section */}
            <HomeHero />
            {/* Features */}
            <Features />
            {/* Testimonials */}
            <Testimonials />
            {/* Call to action */}
            <CallToAction />
        </div>
    );
};

export default Home;
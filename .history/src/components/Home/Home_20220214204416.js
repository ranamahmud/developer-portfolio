import React from 'react';
import Header from '../commons/Header/Header';
import Navigation from '../commons/Navigation/Navigation';
import Introduce from './Introduce/Introduce';
import Testimonials from './Testimonials/Testimonials';
import Work from './Works/Work';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <Introduce />
            <Work />
            {/* <Testimonials /> */}
        </div>
    );
};

export default Home;
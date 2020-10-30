import React from 'react';
import Header from '../commons/Header/Header';
import Navigation from '../commons/Navigation/Navigation';
import Introduce from './Introduce/Introduce';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <Introduce />
        </div>
    );
};

export default Home;
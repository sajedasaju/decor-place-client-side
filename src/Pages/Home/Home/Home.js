import React from 'react';
import './Home.css'
import Banner from './../Banner/Banner';
import Inventory from './../Inventory/Inventory';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;
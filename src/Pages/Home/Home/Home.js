import React from 'react';
import './Home.css'
import Banner from './../Banner/Banner';
import Inventory from '../Inventories/Inventories';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <Inventories></Inventories>
        </div>
    );
};

export default Home;
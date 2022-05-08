import React from 'react';
import './Home.css'
import Banner from './../Banner/Banner';
import Inventory from '../Inventories/Inventories';
import Inventories from '../Inventories/Inventories';
import SearchSection from '../SearchSection/SearchSection';
import About from '../../About/About';




const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <Inventories></Inventories>
            <SearchSection></SearchSection>
            <About></About>


        </div >
    );
};

export default Home;
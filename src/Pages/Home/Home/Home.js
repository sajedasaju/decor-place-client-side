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
            <div className="infocardContainer">
                <div id="main">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Dog_coat_variation.png"></img>
                </div>
                <div id="textbois">
                    <h2>Emil Alicic</h2>
                    <h4>Professional Memeologist</h4>
                    <a href="mailto:limecicila@gmail.com">limecicila@gmail.com</a>
                    <div id="hotlinks">
                        <a href="/"><img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
                        </a>
                        <a href="/">
                            <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
                        </a>
                        <a href="/">
                            <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
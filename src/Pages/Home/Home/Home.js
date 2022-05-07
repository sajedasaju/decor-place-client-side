import React from 'react';
import './Home.css'
import Banner from './../Banner/Banner';
import Inventory from '../Inventories/Inventories';
import Inventories from '../Inventories/Inventories';
import SearchSection from '../SearchSection/SearchSection';
import aboutImage1 from '../../../images/banner/aboutImage1.jpg'
import aboutImage2 from '../../../images/banner/aboutImage2.jpg'
import aboutImage3 from '../../../images/banner/aboutImage3.jpg'


const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <Inventories></Inventories>
            <SearchSection></SearchSection>














            <section className="relative py-12 bg-blueGray-50 bg-[#b8d0c6ac] my-20">
                <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img alt="..." className="max-w-full rounded-lg shadow-lg" src={aboutImage3} />
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="text-pink-600 p-3 text-center flex items-center  flex-rowjustify-center w-16 h-16 mb-0 shadow-lg rounded-full bg-[#70827a]  mt-4">
                                <i className="fas fa-rocket text-xl"></i>

                            </div>
                            <h3 className="text-3xl font-semibold">Top Picks For You
                            </h3>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
                            </p>
                            <ul className="list-none mt-6">
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-900 mr-3"><i className="fas fa-fingerprint"></i></span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Carefully crafted components
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-[#70827a]  mr-3"><i className="fab fa-html5"></i></span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">Amazing page examples</h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-900 mr-3"><i className="far fa-paper-plane"></i></span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">Dynamic components</h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <footer className="relative  pt-8 pb-6 mt-8">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                <div className="text-sm text-blueGray-500 font-semibold py-1">
                                    Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer> */}
            </section>










        </div >
    );
};

export default Home;
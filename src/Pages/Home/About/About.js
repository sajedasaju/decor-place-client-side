import React from 'react';
import aboutImage3 from '../../../images/banner/aboutImage3.jpg'

const About = () => {
    return (

        <section className="relative py-12 bg-blueGray-50 bg-[#b8d0c6ac] my-20">
            <div className="items-center flex flex-wrap">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img alt="..." className="max-w-full rounded-lg shadow-lg" src='https://i.ibb.co/t4rzRRb/about-Image3.jpg' />
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
                                            A Fusion Of Form And Function
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
                                        <h4 className="text-blueGray-500">Your order is our priority. Satisfaction guaranteed at the right time at the right place.</h4>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-900 mr-3"><i className="far fa-paper-plane"></i></span>
                                    </div>
                                    <div>
                                        <h4 className="text-blueGray-500">Our specialists will help you build your perfect home</h4>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default About;
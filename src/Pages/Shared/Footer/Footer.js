import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/ceiling-lamp-gray.png'
import logoName from '../../../images/logo/logo-removeb.png'
import phone from '../../../images/icons/phone.png'
import email from '../../../images/icons/email.png'

const Footer = () => {
    return (

        <footer className="p-4 sm:p-6 bg-[#dadadad3] ">
            <div className='container mx-auto'>
                <div className="md:flex md:justify-between">
                    <div className='mb-8'>
                        <span
                            className="flex items-center justify-center md:justify-start  lg:justify-start xl:justify-start"
                        >
                            <Link to="/"><img src={logo} className="logo-size" alt="logo" />

                            </Link>
                            <Link to="/"><img src={logoName} alt="" /></Link>

                        </span>
                        <p class="max-w-xs mt-2 text-sm text-gray-600 mx-auto">
                            Welcome to Decor Place.Decor place is a platform where you can find all your desire decor items.
                        </p>

                    </div>
                    <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 mt-5">

                        <div className='break-all'>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="my-2">
                                    <Link to='/top' className="hover:underline">Home</Link>
                                </li>
                                <li>
                                    <Link to='/blogs' className="hover:underline">Blogs</Link>
                                </li>
                                <li className='my-2'>
                                    <Link to='/addInventories' className="hover:underline">Add Inventories <span className='text-red-700 font-bold'>*</span> </Link>
                                </li>
                                <li>
                                    <Link to='/manageInventories' className="hover:underline">Manage Inventories <span className='text-red-700 font-bold'>*</span> </Link>
                                </li>
                                <li className='my-2'>
                                    <Link to='/myInventories' className="hover:underline">My Inventories <span className='text-red-700 font-bold'>*</span> </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div id="footer-content2" className='break-all'>
                                <h4 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Address</h4>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li>
                                        <span><i className="fa fa-location-arrow"></i></span>
                                        <p>100,Mohammadpur,Dhaka</p>
                                    </li>
                                    <li className="my-2 flex items-center">
                                        <span className='mr-1'><img src={phone} alt="" height='12px' width='12px' /></span>
                                        <p>+66021462134</p>
                                    </li>
                                    <li className="my-2 flex items-center">
                                        <span className='mr-1'><img src={email} alt="" height='12px' width='12px' /></span>
                                        <a>sajedasaju85@gmail.com</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div>

                            <div >
                                <label class="text-xl font-medium leading-5 text-gray-800 dark:text-white">Get updates</label>
                                <div class="flex items-center justify-between">
                                    <div class="mt-4 flex flex-wrap">
                                        <input type="text" class="p-2 border border-grey-light round text-grey-dark text-sm h-auto" placeholder="Your email address" />
                                        <button class="bg-[#f6993f] text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between pb-4">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> <small>copyright @ {new Date().getFullYear()}</small> All Rights Reserved To <span className='font-bold'>Sajeda</span>
                    </span>
                    <div class="flex items-center gap-x-4 ">


                        <a href='https://www.facebook.com/profile.php?id=100010466556130'>
                            <svg class="h-6 w-6 fill-current text-yellow-500 hover:text-yellow-700 mr-6" viewBox="0 0 512 512">
                                <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                            </svg>
                        </a>
                        <Link to='/'>
                            <svg fill="none" class="h-6 w-6 text-yellow-500 hover:text-yellow-700 mr-6" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </Link>
                        <Link to='/'>
                            <svg class="h-6 w-6 fill-current text-yellow-500 hover:text-yellow-700 mr-6" viewBox="0 0 512 512">
                                <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                            </svg>
                        </Link>
                        <Link to='/'>
                            <svg class="h-6 w-6 fill-current text-yellow-500 hover:text-yellow-700 mr-6" viewBox="0 0 512 512">
                                <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                            </svg>
                        </Link>



                    </div>
                </div>

            </div>
        </footer>


    );
};

export default Footer;
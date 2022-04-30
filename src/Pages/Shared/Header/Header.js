import React, { useState } from 'react';
import hamburgerMenu from '../../../images/homeburg.png'
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/ceiling-lamp-gray.png'
import logoName from '../../../images/logo/logo-removeb.png'
import './Header.css'

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div className='bg-gray-200		'>
            <nav className="relative flex flex-wrap items-center justify-between px-2 pt-2 nav-font">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <span
                            className="flex items-center"
                        >
                            <Link to="/"><img src={logo} className="my-2 logo-size" alt="logo" />

                            </Link>
                            <Link to="/"><img src={logoName} alt="" /></Link>

                        </span>
                        <button
                            className="inline-flex items-center justify-center p-2  text-white-600 lg:hidden"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <img
                                className="block w-10 h-10 ml-10"
                                src={hamburgerMenu}
                                alt=""
                            />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <div className="flex flex-col md:flex-row lg:flex-row lg:ml-auto lg:px-10 lg:text-md xl:text-ms 2xl:text-md sm:text-md md:text-sm ">
                            <Link
                                className="nav-item px-3 py-2 flex items-center   hover:opacity-75 font-semibold text-amber-900  hover: border-amber-900 
                            hover:border-b-2"
                                as={Link} to="/home">
                                Home
                            </Link>
                            <Link
                                className="nav-item px-3 py-2 flex items-center   hover:opacity-75 font-semibold text-amber-900  hover: border-amber-900 
                            hover:border-b-2"
                                as={Link} to="/inventory">
                                Inventory
                            </Link>
                            <Link
                                className="nav-item px-3 py-2 flex items-center   hover:opacity-75 font-semibold text-amber-900  hover: border-amber-900 
                            hover:border-b-2"
                                as={Link} to="/About">
                                About
                            </Link>
                            <Link
                                className="nav-item px-3 py-2 flex items-center   hover:opacity-75 font-semibold text-amber-900  hover: border-amber-900 
                            hover:border-b-2"
                                as={Link} to="/blog">
                                Blog
                            </Link>
                            {/* {
                                user && <>
                                    <Link as={Link} to='/addinventories' className="nav-item px-3 py-2 flex items-center   hover:opacity-75 font-semibold text-amber-900  hover: border-amber-900 
                            hover:border-b-2">Add Inventories</Link>
                                    <Link as={Link} to="/manageinventories" className="nav-item px-3 py-2 flex items-center   hover:opacity-75 font-semibold text-amber-900  hover: border-amber-900 
                            hover:border-b-2" >Manage Inventories</Link>
                                    <Link as={Link} to="/myinventory" className="nav-item px-3 py-2 flex items-center   hover:opacity-75 font-semibold text-amber-900  hover: border-amber-900 
                            hover:border-b-2">My Inventory</Link>
                                </>
                            } */}


                            <Link className="nav-item px-3 py-2 flex items-center   hover:opacity-75 font-semibold text-amber-900 mt-3"
                                as={Link} to="/">
                                <button type="button" className="
                           border  border-amber-800 hover:bg-amber-700
                           hover:text-white focus:ring-4 text-amber-900 font-medium rounded-lg text-md px-12 py-2 mr-2 mb-2">Logout</button>
                            </Link>
                            :
                            <Link
                                className="nav-item px-3 py-2 flex items-center   hover:opacity-75 font-semibold text-amber-900 mt-3"
                                as={Link} to="/login">
                                <button type="button" className="
                           border  border-amber-800 hover:bg-amber-700
                           hover:text-white focus:ring-4 text-amber-900 font-medium rounded-lg text-md px-12 py-2 mr-2 mb-2">Login</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
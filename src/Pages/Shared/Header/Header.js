import React, { useState } from 'react';
import hamburgerMenu from '../../../images/icons/homeburg1.png'
import cross from '../../../images/icons/cross-icon.png'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo/ceiling-lamp-gray.png'
import logoName from '../../../images/logo/logo-removeb.png'
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);

    const hangleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className='bg-[#dadadad3] sticky top-0 z-50	 '>
            <nav className="flex justify-between flex-wrap px-2 pt-2 ">
                <div className="container mx-auto px-4 flex  justify-between flex-wrap items-center ">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <span
                            className="flex items-center"
                        >
                            <Link to="/"><img src={logo} className="my-2 logo-size" alt="logo" />

                            </Link>
                            <Link to="/"><img src={logoName} alt="" /></Link>

                        </span>
                        <button
                            className="lg:hidden  p-2  "
                            type="button"
                            onClick={() => setOpen(!open)}
                        >
                            {
                                open ? <img
                                    className="block w-8 h-8 ml-10"
                                    src={cross}
                                    alt=""
                                /> : <img
                                    className="block w-8 h-8 ml-10"
                                    src={hamburgerMenu}
                                    alt=""
                                />
                            }

                        </button>
                    </div>
                    <div
                        className=
                        {
                            "lg:flex flex-grow items-center" +
                            (open ? " flex" : " hidden")
                        }
                    >
                        <div className="flex flex-col md:flex-row lg:flex-row lg:ml-auto lg:px-10 ">
                            <NavLink
                                className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2 mr-2"
                                    :
                                    "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}
                                as={Link} to="/home">
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
                                    :
                                    "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}
                                as={Link} to="/home">
                                Inventory
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
                                    :
                                    "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}
                                as={Link} to="/aboutTeam">
                                About
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
                                    :
                                    "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}
                                as={Link} to="/blogs">
                                Blog
                            </NavLink>

                            {
                                user && <>
                                    <NavLink as={Link} to='/addinventories' className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
                                        :
                                        "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}>Add Inventories</NavLink>

                                    <NavLink className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
                                        :
                                        "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"} as={Link} to="/manageinventories"  >Manage Inventories</NavLink>
                                    <NavLink
                                        className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
                                            :
                                            "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}
                                        as={Link} to="/myInventories" >My Inventories</NavLink>
                                </>
                            }


                            {
                                user ?
                                    <NavLink className="nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold "
                                        as={Link} to="/login">
                                        <button onClick={hangleSignOut} type="button" className="px-6 py-2 font-bold bg-transparent rounded-lg
                                         border-2  border-yellow-600 hover:bg-yellow-700  hover:text-white ">Logout</button>

                                    </NavLink>
                                    :
                                    <NavLink
                                        className="nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold "
                                        as={Link} to="/login">
                                        <button type="button" className="px-6 py-2 font-bold bg-transparent rounded-lg
                                         border-2  border-yellow-600 hover:bg-yellow-700  hover:text-white  ">Login</button>
                                    </NavLink>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
import React, { useEffect, useState } from 'react';
import useInventories from '../../hooks/useInventories';
import './MyInventories.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Inventory from './../Home/Inventory/Inventory';
import MyInventorieyDetails from './MyInventorieyDetails/MyInventorieyDetails';
import axios from 'axios';

const MyInventories = () => {
    const [user] = useAuthState(auth)
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        const getMyInventory = async () => {
            const email = user.email;
            const url = `http://localhost:5000/inventory?email=${user.email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setInventories(data);
        }
        getMyInventory();
        // fetch(`http://localhost:5000/inventory?email=${user.email}`)
        //     .then((response) => response.json())
        //     .then((data) => setInventories(data));

    }, [user, inventories])
    return (
        <div className='myInventoriesContainer '>
            <h2 className='font-bold text-center text-[#C39A31]'>MyInventories</h2>
            {/* <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <div className="grid grid-rows-1">

                        {
                            inventories.map(inventory => <MyInventorieyDetails key={inventory._id}
                                inventory={inventory}
                            >

                            </MyInventorieyDetails>)
                        }
                    </div>
                </div>
            </section> */}
            <div>


                {
                    inventories.map(inventory => <MyInventorieyDetails key={inventory._id}
                        inventory={inventory}
                    >

                    </MyInventorieyDetails>)
                }
            </div>

        </div>
    );
};

export default MyInventories;
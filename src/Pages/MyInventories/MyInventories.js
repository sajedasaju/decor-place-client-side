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
            const url = `https://afternoon-fjord-70162.herokuapp.com/inventory?email=${user.email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setInventories(data);
        }
        getMyInventory();
        // fetch(`https://afternoon-fjord-70162.herokuapp.com/inventory?email=${user.email}`)
        //     .then((response) => response.json())
        //     .then((data) => setInventories(data));

    }, [user, inventories])
    return (
        <div className='myInventoriesContainer container mx-auto my-12'>
            <h2 className='font-bold text-center text-[#C39A31]'>MyInventories</h2>

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
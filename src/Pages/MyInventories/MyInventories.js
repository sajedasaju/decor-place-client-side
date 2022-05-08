import React, { useEffect, useState } from 'react';
import useInventories from '../../hooks/useInventories';
import './MyInventories.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Inventory from './../Home/Inventory/Inventory';
import MyInventorieyDetails from './MyInventorieyDetails/MyInventorieyDetails';
import axios from 'axios';
import star from '../../images/icons/star.png'

const MyInventories = () => {
    const [user] = useAuthState(auth)
    console.log(user)
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

            <div className="flex flex-col w-full border-opacity-50">
                <h2 className='text-yellow-500  text-3xl font-bold text-center'>My Inventories</h2>

                <div className="divider w-4/6 mx-auto"><img src={star} height='30' width='30' alt="" /></div>

            </div>


            <div className='my-10'>


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
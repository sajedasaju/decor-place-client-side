import React, { useEffect, useState } from 'react';
import useInventories from '../../hooks/useInventories';
import './MyInventories.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Inventory from './../Home/Inventory/Inventory';

const MyInventories = () => {
    const [user] = useAuthState(auth)
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/inventory?email=${user.email}`)
            .then((response) => response.json())
            .then((data) => setInventories(data));

    }, [inventories])
    return (
        <div className='myInventoriesContainer'>
            <h2>MyInventoriesi:{inventories.name}
                {
                    inventories.map(inventory => <h1>{inventory.name}</h1>)
                }</h2>
        </div>
    );
};

export default MyInventories;
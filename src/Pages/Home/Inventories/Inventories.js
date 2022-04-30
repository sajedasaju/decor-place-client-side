import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then((response) => response.json())
            .then((data) => setInventories(data));

    }, [])
    return (
        <div>
            <h2>this is inventory</h2>
            <div className='container lg:mx-auto xl:mx-auto 2xl:mx-auto md:mx-auto sm:mx-0 '>
                <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
                    {
                        inventories.slice(0, 6).map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
            </div>



        </div >
    );
};

export default Inventories;
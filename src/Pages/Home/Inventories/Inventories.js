import React, { useEffect, useState } from 'react';
import useInventories from './../../../hooks/useInventories';
import Inventory from './../Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useInventories()
    return (
        <div>
            <h2 className='text-yellow-500 font-bold '>Inventory</h2>
            <div className='container lg:mx-auto xl:mx-auto 2xl:mx-auto md:mx-auto sm:mx-0 '>
                <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
                    {
                        inventories.slice(0, 6).map(inventory => <Inventory

                            key={inventory._id}
                            inventory={inventory}
                        >

                        </Inventory>)
                    }
                </div>
            </div>



        </div >
    );
};

export default Inventories;
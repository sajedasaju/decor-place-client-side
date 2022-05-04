import React, { useEffect, useState } from 'react';
import useInventories from './../../../hooks/useInventories';
import Inventory from './../Inventory/Inventory';
import star from '../../../images/icons/star.png'
import { Link } from 'react-router-dom';

const Inventories = () => {
    const [inventories, setInventories] = useInventories()
    return (
        <div className='mb-10 '>

            <div class="flex flex-col w-full border-opacity-50">
                <h2 className='text-yellow-500  text-3xl font-bold text-center'>Inventory</h2>

                <div class="divider"><img src={star} height='30' width='30' alt="" /></div>

            </div>
            <div className='w-11/12 mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto md:mx-auto sm:mx-0 '>
                <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    {
                        inventories.slice(0, 6).map(inventory => <Inventory

                            key={inventory._id}
                            inventory={inventory}
                        >

                        </Inventory>)
                    }
                </div>
                <div className='flex items-end mr-3 mt-4'>
                    <Link to='/manageInventories' className=" ml-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FEC165] rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-[#FEC165] dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                        Manage Inventories
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>





        </div >
    );
};

export default Inventories;
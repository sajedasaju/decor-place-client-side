import React from 'react';
import './ManageInventories.css'
import useInventories from './../../hooks/useInventories';
import ManageInventorieyDetails from './ManageInventorieyDetails/ManageInventorieyDetails';
import { Link, useNavigate } from 'react-router-dom';
import cartIcon from '../../images/icons/cart3.png'

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories()
    const navigate = useNavigate();
    const navigateToAddInventory = () => {
        navigate('/addInventories')
    }
    return (
        <div className='lg:w-3/5 md:w-4/5 sm:w-full mx-auto my-12 manage-inventory-container rounded shadow-xl'>
            <table className="border-collapse w-full mx-auto ">
                <thead className='border-t-6 border-slate-700 rounded-xl'>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Inventory Image</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Inventory name</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Description</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Price</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Quantity</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Supplier</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventories.map(inventory => <ManageInventorieyDetails
                            key={inventory._id}
                            inventory={inventory}
                        >

                        </ManageInventorieyDetails>

                        )
                    }
                </tbody>
            </table >


            <div div className='flex items-end mr-3 mt-4  bg-transparentt' >
                <button onClick={navigateToAddInventory} className=" ml-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FEC165] rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-[#FEC165] dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                    <img src={cartIcon} className="mr-2 -ml-1 w-6 h-6" />
                    Add Inventory

                </button>
            </div>
        </div >

    );
};

export default ManageInventories;
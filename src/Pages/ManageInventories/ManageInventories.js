import React from 'react';
import './ManageInventories.css'
import useInventories from './../../hooks/useInventories';
import ManageInventorieyDetails from './ManageInventorieyDetails/ManageInventorieyDetails';
import { Link, useNavigate } from 'react-router-dom';
import cartIcon from '../../images/icons/cart3.png'
import star from '../../images/icons/star.png'

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories()
    const navigate = useNavigate();
    const navigateToAddInventory = () => {
        navigate('/addInventories')
    }
    return (

        <>
            <div className="flex flex-col w-full border-opacity-50 mt-6">
                <h2 className='text-yellow-500  text-3xl font-bold text-center'>Manage Inventories</h2>

                <div className="divider w-4/6 mx-auto"><img src={star} height='30' width='30' alt="" /></div>

            </div>
            <div className='lg:w-3/5 md:w-4/5 sm:w-full mx-auto my-12 manage-inventory-container  shadow-2xl rounded-lg'>

                <table className="border-collapse w-full mx-auto ">
                    <thead className='border-t-6 border-slate-700 rounded-xl'>
                        <tr>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-[#52828e]  border border-gray-300 hidden lg:table-cell">Inventory Image</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-[#52828e]  border border-gray-300 hidden lg:table-cell">Inventory name</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-[#52828e]  border border-gray-300 hidden lg:table-cell">Description</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-[#52828e]  border border-gray-300 hidden lg:table-cell">Price</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-[#52828e]  border border-gray-300 hidden lg:table-cell">Quantity</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-[#52828e]  border border-gray-300 hidden lg:table-cell">Supplier</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-[#52828e]  border border-gray-300 hidden lg:table-cell">Actions</th>
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
                    <button onClick={navigateToAddInventory} className=" dark:focus:ring-yellow-800 ml-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#F6993F] rounded-lg   focus:ring-4 focus:outline-none focus:ring-yellow-300 hover:bg-[#dc9d40] dark:hover:bg-yellow-500 hover:scale-110 transition duration-150 ease-out hover:ease-in">
                        <img src={cartIcon} className="mr-2 -ml-1 w-6 h-6" />
                        Add Inventory

                    </button>
                </div>
            </div >
        </>

    );
};

export default ManageInventories;
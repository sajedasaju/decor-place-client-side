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
        <div className='lg:w-3/5 md:w-4/5 sm:w-full mx-auto my-12 manage-inventory-container'>
            <div className=" 	relative overflow-x-auto shadow-md sm:rounded-lg">




                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Supplier
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Edit
                            </th>
                        </tr>
                    </thead>
                    {
                        inventories.map(inventory => <ManageInventorieyDetails
                            key={inventory._id}
                            inventory={inventory}
                        >

                        </ManageInventorieyDetails>

                        )
                    }

                </table>

            </div>
            <div className='flex items-end mr-3 mt-4'>
                <button onClick={navigateToAddInventory} className=" ml-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FEC165] rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-[#FEC165] dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                    <img src={cartIcon} className="mr-2 -ml-1 w-6 h-6" />
                    Add to Cart

                </button>
            </div>
        </div >

    );
};

export default ManageInventories;
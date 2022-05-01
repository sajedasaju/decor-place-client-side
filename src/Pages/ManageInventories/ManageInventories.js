import React from 'react';
import './ManageInventories.css'
import useInventories from './../../hooks/useInventories';
import ManageInventorieyDetails from './ManageInventorieyDetails/ManageInventorieyDetails';

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories()
    return (
        <div className='container mx-auto my-12 '>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
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
        </div>

    );
};

export default ManageInventories;
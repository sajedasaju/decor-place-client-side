import React from 'react';
import deleteIcon from '../../../images/delete-icon.png'
import './ManageInventorieyDetails.css'

const ManageInventorieyDetails = ({ inventory }) => {
    const { _id, name, img, description, price, supplierName } = inventory;
    return (
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {inventory.name}
                </th>
                <td class="px-6 py-4">
                    Sliver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img className='deleteIcon' src={deleteIcon} alt="" /></a>
                </td>
            </tr>

        </tbody>

    );
};

export default ManageInventorieyDetails;
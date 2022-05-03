import React from 'react';
import deleteIcon from '../../../images/delete-icon3.png'
import './ManageInventorieyDetails.css'
import { toast, ToastContainer } from 'react-toastify';
//http://localhost:5000/inventory/626d718290d8be87ca5f2d5a

const ManageInventorieyDetails = ({ inventory }) => {
    const handleDelete = (id) => {
        const proceed = window.confirm("Want to Delete?")
        if (proceed) {
            fetch(`http://localhost:5000/inventory/${id}`,
                {
                    method: "DELETE",
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast("Item Deleted")
                    }
                }
                )
        }

    }
    const { _id, name, img, description, price, supplierName } = inventory;
    return (
        <tbody className=' my-2 bg-blue whitespace'>
            <tr className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 whitespace">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    <img className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={inventory.img} alt="product" />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {inventory.name}
                </th>

                <td className="px-6 py-4">
                    {inventory.supplierName}
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4 text-right">
                    <button onClick={() => { handleDelete(_id) }} className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img className='deleteIcon' src={deleteIcon} alt="" /></button>
                </td>
            </tr>
            <ToastContainer></ToastContainer>

        </tbody>

    );
};

export default ManageInventorieyDetails;
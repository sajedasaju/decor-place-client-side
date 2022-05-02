import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({ inventory }) => {
    const { _id, name, img, description, price, supplierName, quantity } = inventory;
    const navigate = useNavigate();
    const navigateToInventoryDetail = (id) => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div class="card w-full bg-base-100 shadow-lg drop-shadow-2xl ">
            <figure className='figure'><img src={img} alt="products" className='h-4/6	' /></figure>
            <div class="card-body h-4/6 pt-2">
                <h2 class="card-title">
                    {name}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p className='pb-0 mb-0'>{description}
                </p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">${price}</div>
                    <div class="badge badge-outline">{supplierName}</div>
                    <div class="badge badge-outline">{quantity}</div>
                </div>
                <div>
                    <button onClick={() => { navigateToInventoryDetail(_id) }} type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Update</button>
                </div>
            </div>
        </div>

        /*  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
             <a href="/">
                 <img class="rounded-t-lg" src={img} alt="" />
             </a>
             <div class="p-5">
                 <a href="/">
                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                 </a>
                 <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                 <a href="/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Read more
                     <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                 </a>
             </div>
         </div>
  */

    );
};

export default Inventory;
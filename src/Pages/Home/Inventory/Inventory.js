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


        <div className="mx-auto flex w-11/12	 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">

            <img className="aspect-video w-full rounded-t-2xl object-contain object-center" src={inventory.img} alt='inventory' />

            <div className="p-4">
                <small className="text-blue-400 text-xs">Supplier:{inventory.supplierName}</small>
                <h1 className="text-2xl font-medium text-slate-600 pb-2">{inventory.name}</h1>
                <p className="text-sm tracking-tight font-light text-slate-400 leading-6 ">{inventory.description.length > 150 ? inventory.description.slice(0, 150) + '....' : inventory.description} </p>

                <div className='flex justify-between items-center'>
                    <h2>${inventory.price}</h2>
                    <h2>Quantity:{inventory.quantity}</h2>
                </div>
                <div class="p-1  mt-2 text-center space-x-1 space-y-2 w-full mx-auto">

                    <button onClick={() => { navigateToInventoryDetail(_id) }} className="bg-gray-700 px-5 py-3 text-sm shadow-sm font-medium tracking-wider  text-gray-100 rounded hover:shadow-2xl hover:bg-gray-800 w-full align-middle">Update</button>

                </div>

            </div>

        </div>






        // <div className="card w-full bg-base-100 shadow-lg drop-shadow-2xl ">
        //     <figure className='figure'><img src={img} alt="products" className='h-4/6	' /></figure>
        //     <div className="card-body h-4/6 pt-2">
        //         <h2 className="card-title">
        //             {name}
        //             <div className="badge badge-secondary">NEW</div>
        //         </h2>
        //         <p className='pb-0 mb-0'>{description}
        //         </p>
        //         <div className="card-actions justify-end">
        //             <div className="badge badge-outline">${price}</div>
        //             <div className="badge badge-outline">{supplierName}</div>
        //             <div className="badge badge-outline">{quantity}</div>
        //         </div>
        //         <div>
        //             <button onClick={() => { navigateToInventoryDetail(_id) }} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Update</button>
        //         </div>
        //     </div>
        // </div>

        /*  <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
             <a href="/">
                 <img className="rounded-t-lg" src={img} alt="" />
             </a>
             <div className="p-5">
                 <a href="/">
                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                 </a>
                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                 <a href="/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Read more
                     <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                 </a>
             </div>
         </div>


         <a href="/" className=" text-sm font-medium text-center text-black  hover:text-slate-500	 ">
                    Read more

                </a>
  */

    );
};

export default Inventory;
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


        <div className="mx-auto flex 
           flex-col justify-center bg-[#EBEBEB] rounded-2xl shadow-xl shadow-slate-300/60 ">

            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#fffffff0] rounded-lg max-w-xs shadow-2xl transform transition duration-500 hover:scale-110">
                <img className="aspect-video w-full rounded-t-2xl object-contain object-center" src={inventory.img} alt='inventory' />

                <div className="p-4 break-all">
                    <small className="text-blue-400 text-xs">Supplier:{inventory.supplierName}</small>
                    <h1 className="text-2xl font-medium text-slate-700 pb-2">{inventory.name}</h1>
                    <p className="text-sm tracking-tight  text-slate-600 leading-6 mb-2">{inventory.description.length > 150 ? inventory.description.slice(0, 150) + '....' : inventory.description} </p>

                    <div className='flex justify-between items-center'>
                        <span className="block bg-gray-100 rounded-full  font-bold px-3 py-2 leading-none flex items-center text-[#52828e] text-lg">$68.50</span>
                        <h2 className='block bg-gray-100 rounded-full  font-bold px-3 py-2 leading-none flex items-center text-[#52828e] text-lg justify-center'>
                            Quantity:
                            {
                                inventory.quantity <= 0 ? <h2 className='text-red-700 text-sm pt-1 break-words'>Stock Out</h2> : inventory.quantity
                            }
                        </h2>

                    </div>
                    <div className="p-1  mt-2 text-center space-x-1 space-y-2 w-full mx-auto">

                        <button onClick={() => { navigateToInventoryDetail(_id) }} className="bg-[#6ca5b3] hover:bg-[#6c949e] px-5 py-3 text-sm shadow-sm font-medium tracking-wider  text-gray-100 rounded hover:shadow-2xl hover:bg-[#6c949e] w-full align-middle">Update</button>

                    </div>

                </div>
            </div>

        </div>


    );
};

export default Inventory;
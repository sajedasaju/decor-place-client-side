import React from "react";
import { useForm } from "react-hook-form";
import './AddInventories.css'
import { toast, ToastContainer } from 'react-toastify';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const AddInventories = () => {
    const [user, loading, error] = useAuthState(auth);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = 'http://localhost:5000/inventory';
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast("Item Added Successfully")
                }
            })
        console.log(data)
    }

    return (

        <div className='container mx-auto addInventory-container'>

            <div className="py-32 min-h-screen w-full">
                <div className=" bg-amber-500 p-14	 md:w-3/4 lg:w-1/2 mx-auto">
                    <h2>Please add a Inventory</h2>
                    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2 rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none' placeholder='email' value={user.email} type="email" {...register("email")} />

                        <input className='mb-2 rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none' placeholder='Inventory name' type="text" {...register("name")} required />

                        <textarea className='mb-2 rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none' placeholder='Description' {...register("description")} required />

                        <input className='mb-2 rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none' placeholder='price' type="number" {...register("price")} required />

                        <input className='mb-2 rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none' placeholder='quantity' type="number" {...register("quantity")} required />

                        <input className='mb-2 rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none' placeholder='Photo url' type="text" {...register("img")} required />

                        <input className='mb-2 rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none' placeholder='supplierName' type="text" {...register("supplierName")} required />

                        <button className="btn btn-wide ">Add Inventory</button>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default AddInventories;
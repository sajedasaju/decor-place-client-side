import React from "react";
import { useForm } from "react-hook-form";
import './AddInventories.css'
import { toast, ToastContainer } from 'react-toastify';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const AddInventories = () => {
    const [user, loading, error] = useAuthState(auth);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const url = 'https://afternoon-fjord-70162.herokuapp.com/inventory';
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
        // console.log(e.target[1].value)
        e.target[1].value = '';
        e.target[2].value = '';
        e.target[3].value = '';
        e.target[4].value = '';
        e.target[5].value = '';
        e.target[6].value = '';
    }

    return (
        <>
            <div className="mx-auto lg:w-4/6 container flex items-center  rounded login-container" id="nav">
                <div className="w-full pt-2 p-4 ">

                    <div className="mx-auto md:p-6 md:w-1/2  shadow-2xl bg-gray-200 rounded-lg">

                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="mb-4">

                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        </div>
                                        <input className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded-lg w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-amber-100 transition duration-500 ease-in-out" placeholder='email' value={user.email} type="email" {...register("email")} />
                                    </div>

                                </div>



                                <div className="mb-4">

                                    <input className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded-lg w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-amber-100 transition duration-500 ease-in-out" placeholder='Inventory name' type="text" {...register("name")} required />
                                </div>

                                <div className="mb-4">
                                    <textarea className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded-lg w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-amber-100 transition duration-500 ease-in-out" placeholder='Description' {...register("description")} required />
                                </div>

                                <div className="mb-4">
                                    <input className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded-lg w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-amber-100 transition duration-500 ease-in-out" placeholder='price' type="number" {...register("price")} required />
                                </div>
                                <div className="mb-4">

                                    <input className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded-lg w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-amber-100 transition duration-500 ease-in-out" placeholder='quantity' type="number" {...register("quantity")} required />
                                </div>

                                <div className="mb-4">
                                    <input className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded-lg w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-amber-100 transition duration-500 ease-in-out" placeholder='Photo url' type="text" {...register("img")} required />
                                </div>

                                <div className="mb-4">
                                    <input className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded-lg w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-amber-100 transition duration-500 ease-in-out" placeholder='supplierName' type="text" {...register("supplierName")} required />
                                </div>

                                <button className="btn px-10 py-0 bg-yellow-500 rounded-lg hover:bg-[#b87043] focus:ring-2 outline-none border-none focus:ring-yellow-300 transition duration-500  hover:bg-orange-400/75 text-white font-bold   focus:outline-none  focus:shadow-outline align-middle w-full mx-auto">Add Inventory</button>

                            </form>

                            <ToastContainer></ToastContainer>

                        </div>
                    </div>
                </div >
            </div >



            {/* 
        <div className='container mx-auto addInventory-container bg-gray-lighter'>

            <div className="py-32 min-h-screen w-full ">
                <div className="  p-2 md:p-14 lg:p-14 xl:p-14	 md:w-3/4 lg:w-1/2 mx-auto border border-2  shadow-2xl  rounded-lg bg-[#82807a3d]">
                    <h2>Please add a Inventory</h2>
                    <form className='flex flex-col bg-[#c9c8c8] p-6 rounded-lg border-t-12 border-yellow-600 border-teal-300  border-t-12  shadow-2xl' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2 bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none rounded-lg  shadow-xl ' placeholder='email' value={user.email} type="email" {...register("email")} />

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
        </div> */}
        </>

    );
};

export default AddInventories;
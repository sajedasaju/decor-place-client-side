import React from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetail from './../../../hooks/useInventoryDetail';
import './InventoryDetail.css'

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useInventoryDetail(inventoryId);
    const handleUpdateUser = (event) => {
        console.log(event.target.id)
        event.preventDefault();
        let quantity = inventory.quantity
        if (event.target.id === 'delivered') {
            quantity -= 1;
        }
        if (event.target.id === 'restock') {
            const restokeQuantity = parseInt(event.target.quantity.value)
            quantity += restokeQuantity;
            console.log(event.target.quantity.value)
            event.target.quantity.value = ' ';
        }

        const updatedUser = { quantity };

        //send data to the server
        const url = `http://localhost:5000/inventory/${inventoryId}`
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                // alert("user added successfully!!")

            })
    }
    return (

        <div className="container md:w-4/6 lg:w-4/6 my-24 px-6 mx-auto " >


            <section className="mb-32 text-gray-800 text-center md:text-left">
                <div className="block rounded-lg shadow-lg bg-white drop-shadow-2xl pb-10">
                    <div className="flex flex-wrap items-center ">
                        <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12 ">
                            <img src={inventory.img} alt="Trendy Pants and Shoes"
                                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                            <div className="px-6 py-12 md:px-12">
                                <h2 className="lg:text-3xl md:text-3xl text-2xl  font-bold mb-6 pb-2">{inventory.name}</h2>
                                <p className="text-gray-500 mb-6 pb-2 text-justify	">
                                    {inventory.description}
                                </p>
                                <div className="grid md:grid-cols-2 sm:grid-col-1 pb-4 border-b-2 border-gray-100 mb-5">
                                    <p>Price: <span className="title-font font-medium text-2xl text-gray-900 ">${inventory.price}</span> </p>

                                    <p>Supplier: <span className="title-font font-medium text-2xl text-gray-900 ">{inventory.supplierName}</span> </p>
                                </div>
                                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">

                                </span>
                                <div className="flex flex-col gap-4 sm:flex-row justify-between md:justify-between lg:justify-between ">
                                    <div className="custom-number-input h-10 w-32 flex justify-between items-center sm:flex-col md:flex-row lg:flex-row ">
                                        <label for="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">Quantity:
                                        </label>
                                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                            <button data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none" id='plus'>
                                                <span className="m-auto text-2xl font-thin">−</span>
                                            </button>
                                            <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={inventory.quantity}></input>
                                            <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer" id='plus'>
                                                <span className="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>



                                    <button onClick={handleUpdateUser} type="button" id='delivered'
                                        className="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                                        Delivered
                                    </button>
                                </div>


                            </div>
                            <form onSubmit={handleUpdateUser} id='restock' className='flex items-center justify-center'>
                                <input type="number" placeholder='quantity' name='quantity' className='w-40' />
                                <button type="submit"
                                    className="inline-block px-4 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Restock</button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>


            {/* 

            <section className="text-gray-600 body-font overflow-hidden drop-shadow-2xl">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="product" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={inventory.img} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Product id:{inventory._id}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{inventory.name}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">Supplier:   {inventory.supplierName}</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" ></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed">{inventory.description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">${inventory.price}</span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div >


    );
};

export default InventoryDetail;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useInventoryDetail from './../../../hooks/useInventoryDetail';
import './InventoryDetail.css'
import { toast, ToastContainer } from 'react-toastify';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useInventoryDetail(inventoryId);
    const handleUpdateUser = (event) => {
        // console.log(event.target.id)
        event.preventDefault();
        let quantity = parseInt(inventory.quantity)

        if ((event.target.id === 'delivered' || 'minus') && (event.target.id !== 'restock') && (event.target.id !== 'plus')) {
            if (quantity <= 0) {
                quantity = quantity;
                toast('sold out')
            }
            else {
                quantity -= 1;
            }
        }
        if ((event.target.id === 'plus') && (event.target.id !== 'delivered') && (event.target.id !== 'minus') && (event.target.id !== 'restock')) {
            quantity = quantity + 1;
        }
        if (event.target.id === 'restock') {

            const restokeQuantity = parseInt(event.target.quantity.value)
            quantity += restokeQuantity;

            event.target.quantity.value = ' ';
        }


        const updatedUser = { quantity };

        //send data to the server
        const url = `https://afternoon-fjord-70162.herokuapp.com/inventory/${inventoryId}`
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

        <div className="container md:w-5/6 lg:w-5/6 my-24 px-6 mx-auto " >


            <section className="mb-10 text-gray-800 text-center md:text-left">
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

                                    <p>Supplier: <span className="title-font font-medium text-2xl text-gray-900 break-all">{inventory.supplierName}</span> </p>
                                </div>
                                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">

                                </span>
                                <div className="flex flex-col gap-2 sm:flex-row justify-between md:justify-between lg:justify-between ">
                                    <div className="custom-number-input h-10 w-48	items-center flex justify-center items-center sm:flex-col md:flex-row lg:flex-row ">
                                        <label for="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">Quantity:
                                        </label>
                                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">

                                            {
                                                inventory.quantity <= 0 ? <h2 className='text-red-700 text-sm font-bold break-words mt-2'>Stock Out</h2> :
                                                    <>
                                                        <button onClick={handleUpdateUser} data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none" id='minus'>
                                                            <span className="m-auto text-2xl font-thin">−</span>
                                                        </button>
                                                        <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none " name="custom-input-number" value={inventory.quantity}></input>
                                                        <button onClick={handleUpdateUser} id='plus' data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer">
                                                            <span className="m-auto text-2xl font-thin">+</span>
                                                        </button>
                                                    </>
                                            }


                                        </div>
                                    </div>



                                    <button onClick={handleUpdateUser} type="button" id='delivered'
                                        className="inline-block px-7 py-3 bg-[#6C949E] hover:bg-[#4d6f77] text-white font-medium text-sm leading-snug uppercase rounded shadow-md  hover:shadow-lg focus:bg-[#4d6f77] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#4d6f77] active:shadow-lg transition duration-150 ease-in-out">
                                        Delivered
                                    </button>
                                </div>


                            </div>
                            <form onSubmit={handleUpdateUser} id='restock' className='flex items-center justify-center w-full'>
                                <input type="number" placeholder='quantity' name='quantity' className='md:w-80 lg:w-80 w-40' />
                                <button type="submit"
                                    className="inline-block px-7 py-3 bg-[#6C949E] hover:bg-[#4d6f77] text-white font-medium text-sm leading-snug uppercase  shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-[#4d6f77] focus:shadow-lg rounded-r active:bg-[#4d6f77] active:shadow-lg transition duration-150 ease-in-out focus:outline-none focus:ring-0 bg-[#6ca5b3] hover:bg-[#6c949e] ">Restock</button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

            <div className='flex items-end mr-3 mt-4'>
                <Link to='/manageInventories' className=" ml-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FEC165] rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-[#FEC165] dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                    Manage Inventories
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
            </div>

            <ToastContainer></ToastContainer>

        </div >


    );
};

export default InventoryDetail;
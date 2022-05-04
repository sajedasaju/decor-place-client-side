import React from 'react';
import './MyInventorieyDetails.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { Link } from 'react-router-dom';
import deleteIcon from '../../../images/icons/cross-icon.png'
import { toast, ToastContainer } from 'react-toastify';
import handleDelete from '../../../hooks/handleDelete';

const MyInventorieyDetails = ({ inventory }) => {
    const [user] = useAuthState(auth);
    // const handleDelete = (id) => {
    //     const proceed = window.confirm("Want to Delete?")
    //     if (proceed) {
    //         fetch(`http://localhost:5000/inventory/${id}`,
    //             {
    //                 method: "DELETE",
    //             })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     toast("Your Item Deleted")
    //                 }
    //             }
    //             )
    //     }

    // }
    return (
        <div className="max-w-2xl mx-auto mb-2">

            <div className="p-4 max-w-4/6 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{inventory.name}</h3>
                    <Link to={`/inventory/${inventory._id}`} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        Details
                    </Link>
                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">

                        <li className="pt-3 pb-0 sm:pt-4">
                            <div className="flex  justify-between flex-col md:flex-row  lg:flex-row xl:flex-row justify-center items-center gap-2 ">
                                <div className='flex flex-col md:flex-row  lg:flex-row xl:flex-row  items-center flex-wrap'>
                                    <div className="flex-shrink-0">
                                        <img className="w-20 h-20 rounded-full mr-3" alt='img' src={inventory.img} />

                                    </div>
                                    <div className="flex  flex-wrap
                                     justify-between flex-col  items-center md:items-start lg:items-start xl:items-start ">
                                        <p className="text-md font-medium text-gray-900 truncate dark:text-white">
                                            Supplier:<span>{inventory.supplierName}</span>
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {user.email}
                                        </p>
                                        <p className="text-sm text-gray-500  dark:text-gray-400 break-all ">
                                            {inventory.description}
                                        </p>
                                        <p className=" text-sm font-bold text-gray-900 dark:text-white">
                                            $2367
                                        </p>
                                    </div>
                                </div>

                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <button onClick={() => { handleDelete(inventory._id) }} type="button" className="text-white bg-[#d93204df] hover:bg-[#d93204df]/80 focus:ring-4 focus:outline-none focus:ring-[#d93204df]/50 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center dark:hover:bg-[#d93204df]/80 dark:focus:ring-[#FF9119]/40 hover:shadow-yellow-900  mb-2">
                                        <img src={deleteIcon} className="w-6 h-6 mr-2 -ml-1" alt='delete-icon'></img>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <ToastContainer></ToastContainer>


        </div>


    );
};

export default MyInventorieyDetails;
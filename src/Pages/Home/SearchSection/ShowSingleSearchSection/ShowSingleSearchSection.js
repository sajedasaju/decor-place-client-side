import React from 'react';
import './ShowSingleSearchSection.css'
import { useNavigate } from 'react-router-dom';


const ShowSingleSearchSection = ({ inventory }) => {
    console.log("heeeee", inventory)
    const navigate = useNavigate();
    const navigateToInventoryDetail = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (

        <div className="carousel-item relative float-left w-full text-center border-t-2 mt-2 rounded-box flex">
            <h1 className="text-md md:text-2xl lg:text-3xl xl:text-3xl  mx-auto text-gray-100 max-w-4xl lg:font-bold p-5 pt-1 lg:mt-2 break-all">
                {inventory.name}
            </h1>

            <div className="mt-12 mb-10 flex justify-center" >
                <button onClick={() => { navigateToInventoryDetail(inventory._id) }} >
                    <img src={inventory.img}
                        className="rounded-full w-50 h-24 md:h-44 lg:h-50 xl:h-50 shadow-lg hover:opacity-75"
                        alt="" />
                </button>

            </div>


            <p className="text-md md:text-2xl lg:text-3xl xl:text-3xl  mx-auto text-gray-100 max-w-4xl lg:font-bold p-5 pt-1 lg:mt-2">${inventory.price}</p>
        </div>


    );
};

export default ShowSingleSearchSection;
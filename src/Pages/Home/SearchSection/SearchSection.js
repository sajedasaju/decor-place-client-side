import React, { useState } from 'react';
import ShowSingleSearchSection from './ShowSingleSearchSection/ShowSingleSearchSection';
import banner1 from '../../../images/banner/banner1.jpg'

const SearchSection = () => {
    const [inventories, setInventories] = useState([]);

    const handleSearch = (event) => {
        event.preventDefault();
        const queryText = event.target.searchText.value;

        if (queryText) {

            fetch(`http://localhost:5000/inventory?name=${queryText}`)
                .then(res => res.json())
                .then(data => setInventories(data))


        }

    }
    return (




        <div className=" py-16">

            <div className="w-full relative flex items-center justify-center mx-auto">
                <img src={banner1} alt="dining" className="w-full h-full absolute z-0 hidden md:block xl:block xl:block" />

                <div className="md:bg-gray-300 lg:bg-gray-300 xl:bg-gray-300 bg-[#252525bb] bg-opacity-30 md:bg-opacity-30 lg:bg-opacity-30 xl:bg-opacity-30 md:my-16 lg:py-5 py-5 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                    <h1 className="text-3xl md:text-4xl font-semibold  text-white text-center">Don’t miss out!</h1>
                    <p className="text-base leading-normal text-center text-white mt-3">
                        You can check our product by search.It will save your valuable time!.
                    </p>

                    <div className=' w-full md:w-4/6 lg:w-4/6 xl:w-4/6 mx-auto '>

                        <form className="input-group justify-center" onSubmit={handleSearch} >
                            <div className="  sm:flex-row flex items-center lg:w-5/12 w-full mt-6  justify-center">

                                <input type="text" placeholder="Search…" className="input input-bordered sm:border border-white text-white font-bold bg-transparent" name='searchText' defaultValue='Double Sofa' />
                                <div className='pt-1 pb-1'>
                                    <button className="btn btn-square  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>


                    <div className='bg-[#3d3d3dbb] rounded-box mt-2'>
                        <div className="carousel carousel-vertical rounded-box h-48	 md:h-64 lg:h-64 xl:h-64">

                            {

                                inventories.map(inventory => <ShowSingleSearchSection
                                    key={inventory._id}
                                    inventory={inventory}
                                ></ShowSingleSearchSection>

                                )
                            }
                        </div>
                    </div>


                </div>

            </div>
        </div>


    );
};

export default SearchSection;
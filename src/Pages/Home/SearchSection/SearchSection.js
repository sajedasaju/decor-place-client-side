import React, { useState } from 'react';
import ShowSingleSearchSection from './ShowSingleSearchSection/ShowSingleSearchSection';

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
        <div className='bg-amber-50 py-10 h-full'>
            <div className='w-9/12 mx-auto '>
                <div className="form-control">
                    <form className="input-group" onSubmit={handleSearch} >
                        <input type="text" placeholder="Search…" className="input input-bordered" name='searchText' defaultValue='Navigli Black Center Table' />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </form>
                </div>
                {
                    inventories.map(inventory => <ShowSingleSearchSection
                        key={inventory._id}
                        inventory={inventory}
                    ></ShowSingleSearchSection>

                    )
                }
                {/* 
                <div className=" flex flex-wrap items-center justify-center m-0">

                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6  gap-x-4 gap-y-1 max-w-2xl">


                        <div className="col-span-full mb-3">
                            <p className="text-xl text-gray-800"> Today's popular searches </p>
                        </div>


                        <div className="col-span-2 ">
                            <a href="">
                                <img src="https://picsum.photos/seed/1/2000/1000" className="rounded-xl brightness-75" />
                            </a>
                            <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3"> thick soup </p>
                        </div>


                        <div className="col-span-2 ">
                            <a href="">
                                <img src="https://picsum.photos/seed/2/2000/1000" className="rounded-xl brightness-75" />
                            </a>
                            <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3"> egg </p>
                        </div>


                        <div className="col-span-2 ">
                            <a href="">
                                <img src="https://picsum.photos/seed/3/2000/1000" className="rounded-xl brightness-75" />
                            </a>
                            <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3"> french toast </p>
                        </div>


                        <div className="col-span-2 ">
                            <a href="">
                                <img src="https://picsum.photos/seed/4/2000/1000" className="rounded-xl brightness-75" />
                            </a>
                            <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3"> bread </p>
                        </div>


                        <div className="col-span-2 ">
                            <a href="">
                                <img src="https://picsum.photos/seed/5/2000/1000" className="rounded-xl brightness-75" />
                            </a>
                            <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3"> pasta </p>
                        </div>

                    </div>

                </div> */}
            </div>
        </div>
    );
};

export default SearchSection;
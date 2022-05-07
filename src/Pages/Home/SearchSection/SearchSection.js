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

            <div className="w-full relative flex items-center justify-center">
                <img src={banner1} alt="dining" className="w-full h-full absolute z-0 block xl:block" />

                <div className="bg-gray-300 bg-opacity-30 md:my-16 lg:py-5 py-5 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                    <h1 className="text-4xl font-semibold  text-white text-center">Don’t miss out!</h1>
                    <p className="text-base leading-normal text-center text-white mt-6">
                        Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in <br />
                        a week on every friday so subscribe to get latest news and updates.
                    </p>
                    {/* <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                        <input className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
                        <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">Subscribe</button>
                    </div> */}
                    <div className='w-4/6 mx-auto '>
                        <div className="form-control">
                            <form className="input-group justify-center" onSubmit={handleSearch} >
                                <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-6 space-y-2 sm:space-y-0">
                                    <input className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white px-4 py-2focus:outline-none bg-transparent placeholder-white" name='searchText' defaultValue='Double Sofa' />
                                    {/* <input type="text" placeholder="Search…" className="input input-bordered" name='searchText' defaultValue='Double Sofa' /> */}
                                    <button className="btn btn-square bg-[#dfdedec6] my-4 border-2 border-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>














































                    <div className=''>
                        <div className="h-96 carousel carousel-vertical rounded-box">

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

        // <div className='bg-amber-50 py-10 h-full'>
        //     <div className='w-9/12 mx-auto '>
        //         <div className="form-control">
        //             <form className="input-group" onSubmit={handleSearch} >
        //                 <input type="text" placeholder="Search…" className="input input-bordered" name='searchText' defaultValue='Navigli Black Center Table' />
        //                 <button className="btn btn-square">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        //                 </button>
        //             </form>
        //         </div>
        //         {
        //             inventories.slice(0, 3).map(inventory => <ShowSingleSearchSection
        //                 key={inventory._id}
        //                 inventory={inventory}
        //             ></ShowSingleSearchSection>

        //             )
        //         }

        //     </div>
        // </div>
    );
};

export default SearchSection;
import React from 'react';

const ShowSingleSearchSection = ({ inventory }) => {
    return (
        <div>
            <div class=" flex flex-wrap items-center justify-center m-0">

                <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6  gap-x-4 gap-y-1 max-w-2xl">


                    <div class="col-span-full mb-3">
                        <p class="text-xl text-gray-800"> Today's popular searches </p>
                    </div>


                    <div class="col-span-2 ">
                        <a href="">
                            <img src={inventory.img} />
                        </a>
                        <p class="text-xs -translate-y-6 text-black text-center font-semibold sm:-translate-y-8 sm:text-base translate-x-3"> {inventory.name} </p>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default ShowSingleSearchSection;
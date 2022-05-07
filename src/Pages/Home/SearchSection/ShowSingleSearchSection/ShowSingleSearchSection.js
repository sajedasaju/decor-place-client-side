import React from 'react';
import './ShowSingleSearchSection.css'


const ShowSingleSearchSection = ({ inventory }) => {
    return (
        <div class="carousel-item h-full">
            <img src={inventory.img} className='' />
        </div>
        // <>
        //     <div class="carousel-item w-1/2">
        //         <img src={inventory.img} />
        //     </div>

        //     {/* <div className="carousel-item rounded-box snap-always ">
        //         <img src={inventory.img} className=" searchPhoto " />
        //     </div> */}

        // </>

    );
};

export default ShowSingleSearchSection;
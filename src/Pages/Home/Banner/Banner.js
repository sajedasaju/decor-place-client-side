import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div
            id="carouselDarkVariant"
            className="carousel slide carousel-fade carousel-dark relative"
            data-bs-ride="carousel"
        >
            {/* <!-- Indicators --> */}
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 ">
                <button
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide-to="1"
                    aria-label="Slide 1"
                ></button>
                <button
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide-to="2"
                    aria-label="Slide 1"
                ></button>
            </div>

            {/* <!-- Inner --> */}
            <div className="carousel-inner relative w-full overflow-hidden">
                {/* <!-- Single item --> */}
                <div className="carousel-item active relative float-left w-full">
                    <img
                        src='https://i.ibb.co/ggbTTYN/slide4.webp'
                        className="block w-full sm:h-max"
                        alt="Motorbike Smoke"
                    />
                    <div className="absolute text-center  inset-0 hidden  md:block carousel-caption h-full w-1/2  ">
                        <h5 className="text-4xl	 font-bold font-mono text-[#C47803] mt-10">Craft Your Dream Home</h5>

                        <button className=" px-8 py-2 text-lg  font-medium   text-white rounded hover:shadow-2xl hover:bg-[#81854b] bannerbtn mt-4 border-none opacity-100   shadow-2xl shadow-black bg-[#BABE74]">Explore More</button>

                    </div>


                </div>


                {/* <!-- Single item --> */}
                <div className="carousel-item relative float-left w-full">
                    <img
                        src='https://i.ibb.co/3MgCK0y/slide5.webp'
                        className="block w-full"
                        alt="Mountaintop"
                    />
                    <div className="absolute text-center  inset-0 hidden  md:block carousel-caption w-1/2 mt-10">
                        <h5 className="text-4xl	 font-bold font-mono		 text-[#C47803] font-urbanist">Make your days feeling comfy</h5>

                        <button className=" px-8 py-2 text-lg  font-medium tracking-wider rounded text-white hover:shadow-2xl hover:bg-[#87c4d4] bannerbtn mt-4 border-none opacity-100  shadow-2xl shadow-black bg-[#7cbaca]">Explore More</button>

                    </div>

                </div>

                {/* <!-- Single item --> */}
                <div className="carousel-item relative float-left w-full">
                    <img
                        src='https://i.ibb.co/NndJTPP/slode6.webp'
                        className="block w-full"
                        alt="Woman Reading a Book"
                    />
                    <div className="absolute text-center  inset-0 hidden  md:block carousel-caption w-1/2 mt-10">
                        <h5 className="text-4xl	 font-bold font-mono text-[#C47803] font-urbanist">Make Your Interior More Minimalistic</h5>

                        <button className=" px-8 py-2 text-lg  font-medium tracking-wider  rounded text-white hover:shadow-2xl hover:bg-[#fdb4a0] bannerbtn mt-4 border-none opacity-100  shadow-2xl shadow-black bg-[#ffc3b3]">View All</button>

                    </div>
                </div>
            </div>
            {/* <!-- Inner --> */}

            {/* <!-- Controls --> */}
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 invisible md:visible lg:visible xl:visible"
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 invisible md:visible lg:visible xl:visible"
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;
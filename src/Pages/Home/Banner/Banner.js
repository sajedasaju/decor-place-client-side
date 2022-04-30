import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
import banner1 from '../../../images/banner/banner5.jpg'
import banner2 from '../../../images/banner/banner3.jpg'
import banner3 from '../../../images/banner/banner4.jpg'

const Banner = () => {
    return (
        <div
            id="carouselDarkVariant"
            className="carousel slide carousel-fade carousel-dark relative"
            data-bs-ride="carousel"
        >
            {/* <!-- Indicators --> */}
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
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
                        src={banner1}
                        className="block w-full"
                        alt="Motorbike Smoke"
                    />
                    <div className="absolute text-center top-40 inset-0 hidden md:block carousel-caption">
                        <h5 className="text-white	 ">First slide label</h5>
                        <p className="text-white	 ">Some representative placeholder content for the first slide.</p>
                    </div>
                </div>


                {/* <!-- Single item --> */}
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={banner2}
                        className="block w-full"
                        alt="Mountaintop"
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>

                {/* <!-- Single item --> */}
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={banner3}
                        className="block w-full"
                        alt="Woman Reading a Book"
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            {/* <!-- Inner --> */}

            {/* <!-- Controls --> */}
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
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
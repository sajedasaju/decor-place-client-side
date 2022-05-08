import React from 'react';
import aboutImage3 from '../../../images/banner/aboutImage3.jpg'

const AboutTeam = () => {
    return (

        <div id="container" class="w-4/5 mx-auto my-24">

            <div class="flex flex-col sm:flex-row">

                <div class="sm:w-1/4 p-2">
                    <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                        <div class="mb-3">
                            <img
                                class="w-auto mx-auto rounded-full"
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                alt=""
                            />
                        </div>
                        <h2 class="text-xl font-medium text-gray-700">Jack Paul</h2>
                        <span class="text-gray-400 block mb-5">Decor Designer</span>

                        <span class="px-4 py-2 bg-[#6ca5b3] hover:bg-[#6c949e]  text-white rounded-full"
                        >Contact</span>
                    </div>
                </div>


                <div class="sm:w-1/4 p-2">
                    <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                        <div class="mb-3">
                            <img
                                class="w-auto mx-auto rounded-full"
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
                                alt=""
                            />
                        </div>
                        <h2 class="text-xl font-medium text-gray-700">Kate Mak</h2>
                        <span class="text-gray-400 block mb-5">Interior Designer</span>

                        <span class="px-4 py-2 bg-[#6ca5b3] hover:bg-[#6c949e]  text-white rounded-full"
                        >Contact</span>
                    </div>
                </div>


                <div class="sm:w-1/4 p-2">
                    <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                        <div class="mb-3">
                            <img
                                class="w-auto mx-auto rounded-full"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                alt=""
                            />
                        </div>
                        <h2 class="text-xl font-medium text-gray-700">Wayan Alex</h2>
                        <span class="text-gray-400 block mb-5">Architect Designer</span>

                        <span class="px-4 py-2 bg-[#6ca5b3] hover:bg-[#6c949e]  text-white rounded-full"
                        >Contact</span>

                    </div>
                </div>


                <div class="sm:w-1/4 p-2">
                    <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                        <div class="mb-3">
                            <img
                                class="w-auto mx-auto rounded-full"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                                alt=""
                            />
                        </div>
                        <h2 class="text-xl font-medium text-gray-700">Pritty Julia</h2>
                        <span class="text-gray-400 block mb-5">Branch Manager</span>

                        <span class="px-4 py-2 bg-[#6ca5b3] hover:bg-[#6c949e]  text-white rounded-full"
                        >Contact</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutTeam;
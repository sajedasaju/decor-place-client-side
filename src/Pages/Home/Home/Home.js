import React from 'react';
import './Home.css'
import Banner from './../Banner/Banner';
import Inventory from '../Inventories/Inventories';
import Inventories from '../Inventories/Inventories';
import SearchSection from '../SearchSection/SearchSection';
import About from '../About/About';



const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <Inventories></Inventories>
            <SearchSection></SearchSection>
            <About></About>
            {/* 
            <section>
                <div id="carouselExampleCaptions" className="carousel slide relative carousel-dark my-10 md:ml-44 md:mr-44 md:pl-5 md:pr-5 md:bg-gray-50 md:rounded-lg md:shadow-2xl  lg:ml-96 lg:mr-96 lg:pl-14 lg:pr-14 lg:bg-gray-50 lg:rounded-lg lg:shadow-2xl flex mx-auto" data-bs-ride="carousel" style={{ height: '680px' }}>
                    <div className="carousel-inner relative w-full overflow-hidden h-100">
                        <div className="carousel-item active relative float-left w-full text-center">
                            <h1 className="text-3xl  mx-auto text-pink-600 max-w-4xl lg:font-bold p-5 lg:mt-2">
                                How perfumes are made?
                            </h1>
                            <div className="mt-12 mb-6 flex justify-center">
                                <img
                                    src="https://i.ibb.co/JcBmTBF/blog-5.png
"
                                    className="rounded-full  w-44 h-44 shadow-lg"
                                    alt=""
                                />
                            </div>
                            <p className="text-sm  mx-auto  max-w-4xl  p-5 ">
                                "Making a perfume involves collecting ingredients, extracting oils, blending, aging and quality control. Almost like a fine wine, a lot of work and time go into producing a perfume. What's especially interesting is that many of the methods from ancient times are used by popular perfume brands today. Of course, the techniques and mixtures have been finetuned and perfected by scientists and other professionals, but some procedures are very similar to their early counterparts.Throughout the years while the process has modernised and has been produced on a much larger scale it is still very much following a similar path to those who started it."
                            </p>

                            <p className="text-gray-500">- Anna Morian</p>
                        </div>
                        <div className="carousel-item relative float-left w-full text-center ">
                            <h1 className="text-3xl  mx-auto text-pink-600 max-w-4xl lg:font-bold p-5 lg:mt-2">
                                Ingredients Used to Make Perfume?
                            </h1>
                            <div className="mt-12 mb-6 flex justify-center">
                                <img
                                    src="https://i.ibb.co/0t8PsJX/blog-3.png
"
                                    className="rounded-full w-44 h-44  shadow-lg"
                                    alt=""
                                />
                            </div>
                            <p className="text-sm  mx-auto  max-w-4xl p-5">
                                "Many perfumes are made by extracting scented oil from natural ingredients. These ingredients can include various plants, fruits, woods and even animal secretions. Other resources like alcohol, coal, tars and petrochemicals can be used during the manufacturing process.For scents that don't occur in nature or do not produce essential oils, synthetic chemicals are used to emulate the scent. Many popular and hard to find scents fall into this category, so it's likely that your favorite perfume uses at least some synthetic scents. "
                            </p>

                            <p className="text-gray-500">- Teresa May</p>
                        </div>
                        <div className="carousel-item relative float-left w-full text-center ">
                            <h1 className="text-3xl  mx-auto text-pink-600 max-w-4xl lg:font-bold p-5 lg:mt-2">
                                How to apply perfumes AKA fragrances?
                            </h1>
                            <div className="mt-12 mb-6 flex justify-center">
                                <img src="https://i.ibb.co/mX8YHkX/blog-1.png
"
                                    className="rounded-full w-44 h-44 shadow-lg"
                                    alt="" />
                            </div>
                            <p className="text-sm  mx-auto  max-w-4xl p-5">
                                "The conventional application of pure perfume (parfum extrait) in Western cultures is behind the ears, at the nape of the neck, under the armpits and at the insides of wrists, elbows and knees, so that the pulse point will warm the perfume and release fragrance continuously. According to perfumer Sophia Grojsman behind the knees is the ideal point to apply perfume in order that the scent may rise.The modern perfume industry encourages the practice of layering fragrance so that it is released in different intensities depending upon the time of the day."
                            </p>

                            <p className="text-gray-500">- Jake Paralta</p>
                        </div>
                        <div className="carousel-item relative float-left w-full text-center ">
                            <h1 className="text-3xl  mx-auto text-pink-600 max-w-4xl lg:font-bold p-5 lg:mt-2">
                                What is Perfume?
                            </h1>
                            <div className="mt-12 mb-6 flex justify-center">
                                <img src="https://i.ibb.co/9TdvZcw/blog-2.png
"
                                    className="rounded-full w-44 h-44 shadow-lg"
                                    alt="" />
                            </div>
                            <p className="text-sm  mx-auto  max-w-4xl p-5">
                                "The word perfume derives from the Latin perfumare, meaning "to smoke through".Perfume is a mixture of fragrant essential oils or aroma compounds (fragrances), fixatives and solvents, usually in liquid form, used to give the human body, animals, food, objects, and living-spaces an agreeable scent.The 1939 Nobel Laureate for Chemistry, Leopold Ružička stated in 1945 that "right from the earliest days of scientific chemistry up to the present time, perfumes have substantially contributed to the development of organic chemistry as regards methods, systematic classification, and theory."
                            </p>

                            <p className="text-gray-500">- Amy Santiago</p>
                        </div>
                        <div className="carousel-item relative float-left w-full text-center ">
                            <h1 className="text-3xl  mx-auto text-pink-600 max-w-4xl lg:font-bold p-5 lg:mt-2">
                                Aromatic Sources of Perfume?
                            </h1>
                            <div className="mt-12 mb-6 flex justify-center">
                                <img src="https://i.ibb.co/C2zZjDg/blog-4.png
"
                                    className="rounded-full w-44 h-44 shadow-lg"
                                    alt="" />
                            </div>
                            <p className="text-sm  mx-auto  max-w-4xl p-5">
                                "Plants have long been used in perfumery as a source of essential oils and aroma compounds for aroma.The sources of these compounds may be derived from various parts of a plant. A plant can offer more than one source of aromatics, for instance the aerial portions and seeds of coriander have remarkably different odors from each other. Orange leaves, blossoms, and fruit zest are the respective sources of petitgrain, neroli, and orange oils.Proper preservation of perfumes involves keeping them away from sources of heat and storing them where they will not be exposed to light."
                            </p>

                            <p className="text-gray-500">- Jofferd William</p>
                        </div>
                        <div className="carousel-item relative float-left w-full text-center ">
                            <h1 className="text-3xl  mx-auto text-pink-600 max-w-4xl lg:font-bold p-5 lg:mt-2">
                                Fragrant extracts for Perfume?
                            </h1>
                            <div className="mt-12 mb-6 flex justify-center">
                                <img src="https://i.ibb.co/g7zd98s/blog-10.png
"
                                    className="rounded-full w-44 h-44 shadow-lg"
                                    alt="" />
                            </div>
                            <p className="text-sm  mx-auto  max-w-4xl p-5">
                                "Although fragrant extracts are known to the general public as the generic term "essential oils", a more specific language is used in the fragrance industry to describe the source, purity, and technique used to obtain a particular fragrant extract. Of these extracts, only absolutes, essential oils, and tinctures are directly used to formulate perfumes.Products from different extraction methods are known under different names even though their starting materials are the same. For instance, orange blossoms from Citrus aurantium that have undergone solvent extraction produces "orange blossom absolute" but that which have been steam distilled is known as "neroli oil"."
                            </p>

                            <p className="text-gray-500">- Joey Tribbiani</p>
                        </div>
                        <div className="carousel-item relative float-left w-full text-center ">
                            <h1 className="text-3xl  mx-auto text-pink-600 max-w-4xl lg:font-bold p-5 lg:mt-2">
                                How to Compose Perfume ?
                            </h1>
                            <div className="mt-12 mb-6 flex justify-center">
                                <img src="https://i.ibb.co/ypQZSJN/blog-9.png
"
                                    className="rounded-full w-44 h-44 shadow-lg"
                                    alt="" />
                            </div>
                            <p className="text-sm  mx-auto  max-w-4xl p-5">
                                "Perfume compositions are an important part of many industries ranging from the luxury goods sectors, food services industries, to manufacturers of various household chemicals. The purpose of using perfume or fragrance compositions in these industries is to affect customers through their sense of smell and entice them into purchasing the perfume or perfumed product. As such there is significant interest in producing a perfume formulation that people will find aesthetically pleasing.The job of composing perfumes that will be sold is left up to an expert on perfume composition or known in the fragrance industry as the <i>Perfumer</i>."
                            </p>

                            <p className="text-gray-500">- Monica Geller</p>
                        </div>
                        <div className="carousel-item relative float-left w-full text-center">
                            <h1 className="text-3xl  mx-auto text-pink-600 max-w-4xl lg:font-bold p-5 lg:mt-2">
                                Plant resources for Perfumes?
                            </h1>
                            <div className="mt-12 mb-6 flex justify-center">
                                <img src="https://i.ibb.co/k5LBVqt/blog-4.png
"
                                    className="rounded-full w-44 h-44 shadow-lg"
                                    alt="" />
                            </div>
                            <p className="text-sm  mx-auto  max-w-4xl p-5">
                                "Plants have long been used in perfumery as a source of essential oils and aroma compounds. These aromatics are usually secondary metabolites produced by plants as protection against herbivores, infections, as well as to attract pollinators. Plants are by far the largest source of fragrant compounds used in perfumery. The sources of these compounds may be derived from various parts of a plant. A plant can offer more than one source of aromatics, for instance the aerial portions and seeds of coriander have remarkably different odors from each other. Orange leaves, blossoms, and fruit zest are the respective sources of petitgrain, neroli, and orange oils."
                            </p>

                            <p className="text-gray-500">- Pheobe Buffay</p>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section> */}


        </div >
    );
};

export default Home;
import React from 'react';
import car1 from "../../assets/cars/car1.jpg";
import car2 from "../../assets/cars/car2.jpg";
import car3 from "../../assets/cars/car3.jpg";
import car4 from "../../assets/cars/car4.jpg";
import car5 from "../../assets/cars/car5.jpg";
import car6 from "../../assets/cars/car6.jpg";
import car7 from "../../assets/cars/car7.jpg";
import car8 from "../../assets/cars/car8.jpg";
import car9 from "../../assets/cars/car9.jpg";
import car10 from "../../assets/cars/car10.jpg";
import car11 from "../../assets/cars/car11.jpg";
import car12 from "../../assets/cars/car12.jpg";
import "./gallery.css";

const CarGallery = () => {
    return (
        <div className='galleryBg'>
            <div className='w-[90%] pb-12 mx-auto '>
                <div>
                    <h1 className='text-5xl pt-12 pb-6 text-center text-white font-bold'>Car Gallery</h1>
                </div>
                <div className='py-6'>
                    <div class="container mx-auto px-5 py-2 lg:px-32">
                        <div class="-m-1 flex flex-wrap md:-m-2">
                            <div class="flex w-1/2 flex-wrap">
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src={car1} />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src={car2} />
                                </div>
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src={car3} />
                                </div>
                            </div>
                            <div class="flex w-1/2 flex-wrap">
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src={car4} />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src={car5} />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src={car6} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container mx-auto px-5 lg:px-32">
                        <div class="-m-1 flex flex-wrap md:-m-2">
                            <div class="flex w-1/2 flex-wrap">
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src={car7} />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src={car8} />
                                </div>
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src={car9} />
                                </div>
                            </div>
                            <div class="flex w-1/2 flex-wrap">
                                <div class="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src={car10} />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src={car11} />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        class="block h-full w-full rounded-lg object-cover object-center"
                                        src={car12} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarGallery;
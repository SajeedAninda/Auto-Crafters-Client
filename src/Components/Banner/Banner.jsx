import React from 'react';
import bannerImg from "../../assets/bannerimg.png"
import "./banner.css"

const Banner = () => {
    return (
        <div className='h-fit md:h-[85vh] flex items-center bannerBg dark:bg-gray-950 '>
            <div className='w-[90%] mx-auto py-5 md:py-0 flex flex-col md:flex-row justify-between items-center'>
                <div>
                    <p className='text-2xl md:text-3xl text-[#111230] dark:text-white font-semibold'>Auto Crafters</p>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl text-[#111230] dark:text-white font-bold'>Unveiling the Artistry of <br /> Automotive Design</h1>
                </div>

                <div>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
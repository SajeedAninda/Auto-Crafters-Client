import React from 'react';
import bannerImg from "../../assets/bannerimg.png"
import "./banner.css"

const Banner = () => {
    return (
        <div className='h-[85vh] flex items-center bannerBg'>
            <div className='w-[90%] mx-auto flex justify-between items-center'>
                <div>
                    <p className='text-3xl text-[#111230] font-semibold'>Auto Crafters</p>
                    <h1 className='text-6xl text-[#111230] font-bold'>Unveiling the Artistry of <br /> Automotive Design</h1>
                </div>

                <div>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
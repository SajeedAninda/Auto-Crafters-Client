import React, { useEffect, useState } from 'react';
import "./affiliate.css"
import { Link } from 'react-router-dom';

const AffiliatedBrand = () => {
    let [brandData, setBrandData] = useState([]);
    useEffect(() => {
        fetch("https://auto-crafters-server.vercel.app/brand")
            .then(res => res.json())
            .then(data => setBrandData(data));
    }, [])

    return (
        <div className='flex justify-center items-center affiliateBG dark:bg-slate-400'>
            <div className='flex flex-col md:flex-row justify-between items-center w-[90%]'>
                <div>
                    <h1 className='text-5xl pt-12 pb-6 text-center text-[#111230] dark:text-white font-bold'>Affiliated Brands</h1>
                </div>
                <div className='w-[90%] mx-auto grid grid-cols-3 py-12'>

                    {
                        brandData.map(data =>
                            <Link to={`/brandDetails/${data._id}`} className='p-6 border border-[#111230] dark:border-white flex flex-col justify-center items-center gap-4 hover:bg-[#111230] text-[#111230]  hover:text-white'>
                                <div className='flex-1 flex justify-center items-center'>
                                    <img className='w-[200px]' src={data.brand_image} alt="" />
                                </div>
                                <div flex-1>
                                    <h3 className='text-xl md:text-3xl  font-bold'>{data.brand_name}</h3>
                                </div>
                            </Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AffiliatedBrand;
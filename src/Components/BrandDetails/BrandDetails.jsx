import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import "./brandDetails.css"

const BrandDetails = () => {
    let brandData = useLoaderData();
    return (
        <div className='detailsBg'>
            <div className='w-[90%] mx-auto text-center py-12'>
                <h1 className='text-[#111230] text-5xl pb-12 font-bold'>
                    {brandData.brand_name}
                </h1>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className='h-[80vh] flex justify-center items-center flex-col'>
                            <img className='w-full object-contain' src={brandData.slider_img1} alt="" />
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-[80vh] flex justify-center items-center flex-col'>
                            <img className='w-full object-contain' src={brandData.slider_img2} alt="" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-[80vh] flex justify-center items-center flex-col'>
                            <img className='w-full object-contain' src={brandData.slider_img3} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default BrandDetails;
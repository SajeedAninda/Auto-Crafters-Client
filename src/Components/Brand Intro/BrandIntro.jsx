import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import "./intro.css";
import bmw from "../../assets/CarLogo/bmw.png";
import ford from "../../assets/CarLogo/ford.png";
import honda from "../../assets/CarLogo/honda.png";
import mercedez from "../../assets/CarLogo/mercedez.png";
import tesla from "../../assets/CarLogo/tesla.png";
import toyota from "../../assets/CarLogo/toyota.png";

const BrandIntro = () => {
    return (
        <div className='introBg'>
            <div className='w-[90%] mx-auto'>
                <div>
                    <h1 className='text-5xl pt-12 pb-6 text-center text-[#111230] font-bold'>Brand Introduction</h1>
                </div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className='h-[80vh] flex justify-center items-center flex-col'>
                            <img className='w-[150px]' src={bmw} alt="" />
                            <h3 className='text-3xl py-12 text-center text-[#111230] font-bold'>BMW: The Ultimate Driving Machine</h3>
                            <p className='w-[50%] text-[#111230]  text-center font-medium text-lg'>For over a century, BMW has been a symbol of uncompromising quality, innovation, and driving pleasure. From the sleek curves of vehicles to the precision of engineering, every BMW is a masterpiece of design and performance. We invite you to experience the exhilaration of driving a BMW – where luxury meets power, and every journey becomes an adventure.</p>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-[80vh] flex justify-center items-center flex-col'>
                            <img className='w-[150px]' src={ford} alt="" />
                            <h3 className='text-3xl py-12 text-center text-[#111230] font-bold'>Ford: Built for the Road Ahead</h3>
                            <p className='w-[50%] text-[#111230]  text-center font-medium text-lg'>Ford has been a household name in automotive excellence for over a century. From the iconic Model T to the modern-day innovations, Ford has been driving progress and changing the way the world moves. Ford's commitment to quality, durability, and cutting-edge technology ensures that every Ford vehicle is built not just for today but for the road ahead.
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-[85vh] flex justify-center items-center flex-col'>
                            <img className='w-[150px]' src={mercedez} alt="" />
                            <h3 className='text-3xl py-12 text-center text-[#111230] font-bold'>Mercedes-Benz: A Legacy of Luxury</h3>
                            <p className='w-[50%] text-[#111230]  text-center font-medium text-lg'>Mercedes-Benz is the embodiment of timeless luxury and relentless innovation. It's the brand that has consistently set the standard for excellence in the automotive world. When you think of Mercedes-Benz, you think of a legacy that spans generations, delivering iconic vehicles that epitomize style and class. It's a brand that has consistently pushed the envelope in terms of technology and safety, making driving not just a journey, but an experience of pure indulgence
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-[80vh] flex justify-center items-center flex-col'>
                            <img className='w-[150px]' src={tesla} alt="" />
                            <h3 className='text-3xl py-12 text-center text-[#111230] font-bold'>Tesla: The Pioneers of Electric Revolution</h3>
                            <p className='w-[50%] text-[#111230]  text-center font-medium text-lg'>When you think of Tesla, you think of the vanguard of electric automotive technology. It's the brand that dared to challenge the status quo, redefining the way we drive with innovation that's not just forward-thinking, but future-building. Tesla is at the forefront of the electric vehicle revolution, providing sustainable, high-performance alternatives that have changed the way we view transportation.
                            </p>
                        </div>
                    </SwiperSlide>



                    <SwiperSlide>
                        <div className='h-[80vh] flex justify-center items-center flex-col'>
                            <img className='w-[150px]' src={toyota} alt="" />
                            <h3 className='text-3xl py-12 text-center text-[#111230] font-bold'>Toyota: Where Quality Meets Reliability</h3>
                            <p className='w-[50%] text-[#111230]  text-center font-medium text-lg'>Toyota is the automotive brand known for quality, reliability, and a commitment to making the road safer and more accessible for all. It's the brand that has consistently delivered vehicles that people can trust, providing peace of mind and dependability in every journey. Toyota's dedication to innovation has brought about groundbreaking advancements in hybrid technology and sustainable mobility, shaping the way we think about the environment and our future on the road.
                            </p>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-[80vh] flex justify-center items-center flex-col'>
                            <img className='w-[150px]' src={honda} alt="" />
                            <h3 className='text-3xl py-12 text-center text-[#111230] font-bold'>Honda: The Power of Dreams</h3>
                            <p className='w-[50%] text-[#111230]  text-center font-medium text-lg'>When you think of Honda, you think of reliability. It's the brand that's earned its reputation for crafting dependable vehicles that stand the test of time. For many, Honda is the trusted companion on life's journeys, offering durability and consistency in every drive.  It's the brand that takes pride in its commitment to innovation, consistently pushing the boundaries of technology and sustainability.
                            </p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default BrandIntro;
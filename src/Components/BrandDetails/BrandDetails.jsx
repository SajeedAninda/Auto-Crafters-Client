import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import "./brandDetails.css"
import { Rating } from '@mui/material';

let BrandDetails = () => {
    let brandData = useLoaderData();
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://auto-crafters-server.vercel.app/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    let brandNameLower = brandData.brand_name.toLowerCase();
    let targetedProducts = products.filter((product) =>
        product.brand.toLowerCase() === brandNameLower
    );
    // console.log(targetedProducts);


    return (
        <div className='detailsBg'>
            <div className='w-[90%] mx-auto text-center py-12'>
                <h1 className='text-[#111230] text-5xl pb-12 font-bold'>
                    {brandData.brand_name}
                </h1>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className='h-fit lg:h-[80vh] flex justify-center items-center flex-col'>
                            <img className='w-full object-contain' src={brandData.slider_img1} alt="" />
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='h-fit lg:h-[80vh] flex justify-center items-center flex-col'>
                            <img className='w-full object-contain' src={brandData.slider_img2} alt="" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='h-fit lg:h-[80vh] flex justify-center items-center flex-col'>
                            <img className='w-full object-contain' src={brandData.slider_img3} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='w-[90%] mx-auto pt-6 pb-12'>
                {loading ? (
                    <div className='flex justify-center items-center'>
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                ) : targetedProducts.length > 0 ? (
                    <h1 className='text-[#111230] text-center text-5xl pb-12 font-bold'>
                        Available Products
                    </h1>
                ) : (
                    <h1 className='text-[#111230] text-center text-5xl pb-12 font-bold'>
                        No Products Available
                    </h1>
                )}

                {loading ? (
                    <div className='flex justify-center items-center'>
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                ) : (
                    targetedProducts.map(products =>
                        <div className="grid grid-cols-1 place-items-center font-mono mb-12">
                            <div className="bg-white rounded-md shadow-lg h-fit w-fit">
                                <div className="md:flex px-4 leading-none max-w-4xl">
                                    <div className="flex-none ">
                                        <img
                                            src={products.imgUrl}
                                            alt="pic"
                                            className="h-72 w-96 object-cover rounded-md shadow-2xl transform -translate-y-4 border-4 border-[#111230]"
                                        />
                                    </div>

                                    <div className="flex-col text-[#111230]">

                                        <p className="pt-4 text-2xl font-bold">{products.productName}</p>
                                        <hr className="hr-text" data-content="" />
                                        <div className="text-md flex justify-between px-4 my-2">
                                            <span className="font-bold uppercase">{products.brand} | {products.productType}</span>
                                            <span className="font-bold"></span>
                                        </div>
                                        <p className="px-4 my-4 text-sm text-left">{products.productDescription}</p>

                                        <p className="flex flex-col lg:flex-row items-center text-md px-4 my-2">
                                            Rating: <Rating name="read-only" value={products.rating} readOnly />
                                            <span className="font-bold px-2 hidden lg:block">||</span>
                                            <p className="font-bold block">Price: ${products.productPrice}/=</p>
                                        </p>

                                        <div className="text-md font-bold">
                                            <Link to={`/productDetails/${products._id}`}>
                                                <button type="button" className="border border-[#111230] text-[#111230] rounded-md px-5 py-3 m-2 transition duration-300 ease select-none hover:bg-gray-900 hover:text-white focus:outline-none focus:shadow-outline">Details</button>
                                            </Link>

                                            <Link to={`/updateProducts/${products._id}`}>
                                                <button type="button" className="border border-[#111230] text-[#111230] rounded-md px-5 py-3 m-2 transition duration-300 ease select-none hover:bg-gray-900 hover:text-white focus:outline-none focus:shadow-outline">Update</button>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>

        </div>
    );
};

export default BrandDetails;
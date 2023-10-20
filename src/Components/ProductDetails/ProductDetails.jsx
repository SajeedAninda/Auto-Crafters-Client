import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import "./productdetails.css"
import Swal from 'sweetalert2';
import { Rating } from '@mui/material';
import { AuthContext } from '../Authentication/AuthenticationProvider';

const ProductDetails = () => {
    let productDetailedData = useLoaderData();
    let { productName, brand, imgUrl, productPrice, productType, productDescription, rating } = productDetailedData;
    let loggedInUser = useContext(AuthContext);
    let userEmail = loggedInUser.loggedInUser.email;

    let handleAddToCart = (id) => {
        let cart = { productName, brand, imgUrl, productPrice, productType, productDescription, rating, userEmail };
        fetch("https://auto-crafters-server.vercel.app/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cart),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Product Added to Cart!',
                        'success'
                    )
                }
            });
    }

    return (
        <div className='text-left'>
            <div class="detailsBg py-16">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col md:flex-row -mx-4">
                        <div class="md:flex-1 px-4">
                            <div class="rounded-lg">
                                <img class="w-full h-full object-contain" src={imgUrl} alt="Product Image" />
                            </div>
                            <div class="flex -mx-2 mb-4 mt-4">
                                <div class="w-full px-2">
                                    <button onClick={handleAddToCart} class="w-full brandNameBg text-white py-3 px-4 rounded-full font-bold hover:bg-[#111230] ">Add to Cart</button>
                                </div>
                            </div>
                            <div>
                                <p className="flex items-center justify-center text-md px-8 my-2">
                                    <Rating name="read-only" value={rating} size='large' readOnly />
                                </p>
                            </div>
                        </div>
                        <div class="md:flex-1 px-4">
                            <h2 class="text-2xl font-bold text-white uppercase p-2 brandNameBg inline mb-8">{brand}</h2>
                            <h2 class="text-4xl font-bold text-[#111230] mt-4 mb-2">{productName}</h2>
                            <p class="text-[#111230]  text-lg mb-4">
                                {productName} is one of the Latest products to come out from the famous brand <span className='capitalize'>{brand}</span>. It is reliable, durable and comfortable just like all the other Cars that <span className='capitalize'>{brand}</span> provides.
                            </p>

                            <div class="flex mb-4">
                                <div class="mr-4">
                                    <span class="font-bold text-xl text-[#111230] mr-2">
                                        Segment:
                                    </span>
                                    <span class="text-[#111230] text-lg"><span className='capitalize'>{productName}</span> belongs to the segment of <span className='capitalize'>{productType}</span></span>
                                </div>
                            </div>


                            <div class="flex mb-4">
                                <div class="mr-4">
                                    <span class="font-bold text-xl text-[#111230] mr-2">
                                        Price:
                                    </span>
                                    <span class="text-[#111230] text-lg"><span className='capitalize'>{brand}</span> has set the price of <span className='capitalize'>{productName}</span> at <span className='font-bold'>{productPrice}$</span>. The price may vary from region to region.</span>
                                </div>
                            </div>
                            <div>
                                <span class="font-bold text-xl text-[#111230]">Description: </span>
                                <p class="text-[#111230] text-lg inline mt-2">
                                    {productDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;
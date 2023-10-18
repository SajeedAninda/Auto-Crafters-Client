import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './cart.css';

const Cart = () => {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cart')
            .then((res) => res.json())
            .then((data) => setCartData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="cartBg">
            <div className="w-[90%] mx-auto">
                <h1 className="text-[#111230] text-5xl py-12 font-bold">Cart</h1>
                {cartData.length === 0 ? (
                    <div className="w-[90%] mx-auto">
                        <h1 className="text-[#111230] text-5xl py-12 font-bold">No Products in Cart</h1>
                    </div>
                ) : (
                    cartData.map((cart) => (
                        <div className="grid grid-cols-1 place-items-center font-mono" key={cart._id}>
                            <div className="bg-white rounded-md shadow-lg mb-12">
                                <div className="md:flex px-4 leading-none max-w-4xl">
                                    <div className="flex-none">
                                        <img
                                            src={cart.imgUrl}
                                            alt="pic"
                                            className="h-72 w-96 object-cover rounded-md shadow-2xl transform -translate-y-4 border-4 border-[#111230]"
                                        />
                                    </div>

                                    <div className="flex-col text-[#111230]">
                                        <p className="pt-4 text-2xl font-bold">{cart.productName}</p>
                                        <hr className="hr-text" data-content="" />
                                        <div className="text-md flex justify-between px-4 my-2">
                                            <span className="font-bold capitalize">{cart.brand} | {cart.productType}</span>
                                            <span className="font-bold"></span>
                                        </div>
                                        <p className="hidden md:block px-4 my-4 text-sm text-left">{cart.productDescription}</p>
                                        <p className="flex text-md px-4 my-2">
                                            Rating: {cart.rating}/5
                                            <span className="font-bold px-2">|</span>
                                            <span className="font-bold">Price: ${cart.productPrice}/=</span>
                                        </p>
                                        <div className="text-md font-bold">
                                            <button
                                                type="button"
                                                className="border border-[#111230] text-[#111230] rounded-md px-5 py-3 mt-4 transition duration-300 ease select-none hover:bg-gray-900 hover:text-white focus:outline-none focus:shadow-outline"
                                            >
                                                Delete From Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Cart;

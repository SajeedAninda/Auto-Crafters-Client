import React, { useEffect, useState } from 'react';

import './cart.css';
import Swal from 'sweetalert2';
import { Rating } from '@mui/material';

const Cart = () => {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cart')
            .then((res) => res.json())
            .then((data) => setCartData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    let handleDelete = (id) => {
        fetch(`http://localhost:5000/cart/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Product Deleted From Cart!',
                        'success'
                    )
                }
            });
        let remainingCartData = cartData.filter(cart => cart._id !== id);
        setCartData(remainingCartData);
    }


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
                                        <p className="flex items-center text-md px-4 my-2">
                                            Rating: <Rating name="read-only" value={cart.rating} readOnly />
                                            <span className="font-bold px-2">||</span>
                                            <p className="font-bold block">Price: ${cart.productPrice}/=</p>
                                        </p>
                                        <div className="text-md font-bold">
                                            <button
                                                onClick={() => handleDelete(cart._id)}
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

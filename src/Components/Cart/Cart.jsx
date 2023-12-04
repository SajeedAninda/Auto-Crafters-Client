import React, { useContext, useEffect, useState } from 'react';
import './cart.css';
import Swal from 'sweetalert2';
import { Rating } from '@mui/material';
import { AuthContext } from '../Authentication/AuthenticationProvider';

const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const [loading, setLoading] = useState(true); // New loading state
    let loggedInUser = useContext(AuthContext);
    let userSpecificEmail = loggedInUser.loggedInUser.email;

    useEffect(() => {
        fetch('https://auto-crafters-server.vercel.app/cart')
            .then((res) => res.json())
            .then((data) => {
                setCartData(data);
                setLoading(false); // Set loading to false after data is loaded
            })
            .catch((error) => {
                console.error(error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, []);

    let userSpecificData = cartData.filter(cart => cart.userEmail === userSpecificEmail);

    let handleDelete = (id) => {
        fetch(`https://auto-crafters-server.vercel.app/cart/${id}`, {
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
                    );
                }
            });

        let remainingCartData = userSpecificData.filter(cart => cart._id !== id);
        setCartData(remainingCartData);
    }

    return (
        <div className="cartBg">
            <div className="w-[90%] mx-auto">
                <h1 className="text-[#111230] text-5xl py-12 font-bold">Cart</h1>
                {loading ? (
                    <div className='flex justify-center items-center py-12'>
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                ) : userSpecificData.length === 0 ? (
                    <div className="w-[90%] mx-auto">
                        <h1 className="text-[#111230] text-5xl py-12 font-bold">No Products in Cart</h1>
                    </div>
                ) : (
                    userSpecificData.map((cart) => (
                        <div className="grid grid-cols-1 place-items-center font-mono" key={cart._id}>
                            <div className="bg-white rounded-md shadow-lg mb-12 py-5 h-fit w-fit">
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
                                        <p className="px-4 my-4 text-sm text-left">{cart.productDescription}</p>
                                        <p className="flex flex-col lg:flex-row items-center text-md px-4 my-2">
                                            Rating: <Rating name="read-only" value={cart.rating} readOnly />
                                            <span className="hidden lg:block font-bold px-2">||</span>
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

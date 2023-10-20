import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImg from "../assets/404.png"

const ErrorElement = () => {
    let error = useRouteError();
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center  space-y-4">
                <img className='w-[70%] mx-auto' src={errorImg} alt="" />
                <p className="text-2xl font-bold text-[#111230]">Oops! Page not found</p>
                <p className="text-[#111230]">
                    The page that you are looking for might not exist or removed. Please try later.
                </p>
                <p>
                    <i className='font-bold text-[#111230]'>Error Message: {error.statusText || error.message}</i>
                </p>
                <div>
                    <Link to={"/"}>
                        <button className="px-5 py-3 font-bold rounded-lg text-gray-100 bg-[#111230] hover:text-[#111230] hover:bg-white border-2 border-[#111230]">
                            Go Back to Homepage
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;
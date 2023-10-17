import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {

    let handleRegister = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let imgurl = e.target.imgurl.value;
        console.log(name, email, password, imgurl);
    }


    return (
        <div className=' mx-auto loginBg flex justify-center '>
            <div className="min-h-screen w-[90%] text-gray-900 ">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="mt-3 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">
                                Sign Up
                            </h1>


                            <form onSubmit={handleRegister}>
                                <div className="w-full mt-8">
                                    <div className="flex flex-col items-center">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            name='name'
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            required
                                        />

                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name='email'
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            required
                                        />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            name='password'
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            required
                                        />
                                        <input
                                            type="text"
                                            placeholder="Image URL"
                                            name='imgurl'
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                        >
                                            <span className='text-lg'>Sign Up</span>
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className='pt-3'>
                                <p className='text-lg text-[#111230]'>Already Have an Account? <Link className='font-bold hover:underline' to={"/login"}>Sign In</Link></p>
                            </div>
                        </div>
                    </div>


                    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                        <div
                            className="w-full bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url('https://i.ibb.co/2vbyrjv/a6ebc852-b369-41f6-b13a-351ebf239455.jpg')`,
                            }}
                        ></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;
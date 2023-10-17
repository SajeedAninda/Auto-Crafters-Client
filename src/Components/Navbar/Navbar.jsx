import React from 'react';
import logo from "../../assets/logo.jpeg";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='h-[15vh] bg-[#111230] flex items-center'>
            <div className='flex justify-between items-center w-[90%] mx-auto'>
                <div className='flex items-center flex-1'>
                    <Link>
                        <div className='flex items-center flex-1'>
                            <img className='w-[75px]' src={logo} alt="" />
                            <h5 className='font-bold text-xl text-white'>Auto Crafters</h5>
                        </div>
                    </Link>
                </div>

                <div className='text-white text-xl flex items-center justify-evenly gap-6 flex-1'>
                    <NavLink
                        to={"/"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold underline" : ""
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to={"/addproduct"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold underline" : ""
                        }
                    >
                        Add Products
                    </NavLink>


                    <NavLink
                        to={"/cart"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold underline" : ""
                        }
                    >
                        Cart
                    </NavLink>


                </div>


                <div className='flex-1 flex justify-end'>
                    <Link to={"/login"}>
                        <button className='bg-white text-[#111230] font-bold border border-[#111230] px-4 py-2 rounded-lg hover:bg-[#111230] hover:text-white hover:border hover:border-white'>
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
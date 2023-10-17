import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { app } from '../Authentication/firebase.init';
import { AuthContext } from '../Authentication/AuthenticationProvider';
const auth = getAuth(app);


const Register = () => {
    let { signUp } = useContext(AuthContext);
    let navigate = useNavigate();

    let handleRegister = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let imgurl = e.target.imgurl.value;

        if (password.length < 6) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Length should atleast be 6 Characters!'
            })
        }

        if (!/[A-Z]/.test(password)) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password should contain at least one capital letter!'
            })
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password should contain at least one special character!'
            })
        }
        signUp(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: imgurl
                }).then(() => {
                    Swal.fire(
                        'Registration Successful!',
                        'Please Login Now with Email & Password',
                        'success'
                    )
                }).catch((error) => {
                    console.log(error);
                });
                navigate('/login');
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === "auth/email-already-in-use") {
                    return Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email is Already being Used!'
                    })
                }
            });
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
                                            className="mt-5 tracking-wide font-semibold bg-[#111230] text-gray-100 w-full py-4 rounded-lg hover:bg-[#2d307c] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
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
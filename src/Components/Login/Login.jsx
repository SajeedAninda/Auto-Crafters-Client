import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./login.css"
import { AuthContext } from '../Authentication/AuthenticationProvider';
import Swal from 'sweetalert2';

const Login = () => {
    let { signIn, googleLogin, gitLogin } = useContext(AuthContext);
    let location = useLocation();
    let navigate = useNavigate();

    let handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                Swal.fire(
                    'Good job!',
                    'Login Successful!',
                    'success'
                )
                navigate(location?.state ? location.state : '/');
            }).catch((error) => {
                console.log(error);
            });
    }

    let handleGithubLogin = () => {
        gitLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                Swal.fire(
                    'Good job!',
                    'Login Successful!',
                    'success'
                )
                navigate(location?.state ? location.state : '/');
            }).catch((error) => {
                console.log(error);
            });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                Swal.fire(
                    'Good job!',
                    'Login Successful!',
                    'success'
                )
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                let errorCode = error.code;
                if (errorCode === "auth/invalid-login-credentials") {
                    return Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Invalid Email or Password!'
                    })
                }
            });
    };

    return (
        <div className=' mx-auto loginBg flex justify-center '>
            <div className="min-h-screen w-[90%] text-gray-900 ">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div>
                            <div className="bg-white rounded-t-lg p-8">
                                <p className="text-center text-sm text-[#111230] font-light">Sign in with</p>
                                <div>
                                    <div className="flex items-center justify-center space-x-4 mt-3">
                                        <button
                                            onClick={handleGithubLogin}
                                            className="flex items-center py-3 px-6 text-sm uppercase rounded bg-white hover:bg-gray-100 text-[#033430] border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                className="w-8 h-8 mr-3"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                                ></path>
                                            </svg>
                                            Github
                                        </button>
                                        <button
                                            onClick={handleGoogleLogin}
                                            className="flex items-center py-3 px-6 text-sm uppercase rounded bg-white hover:bg-gray-100 text-[#033430] border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-8 h-8 mr-3"
                                                viewBox="0 0 48 48"
                                            >
                                                <path
                                                    fill="#fbc02d"
                                                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                                                />
                                                <path
                                                    fill="#e53935"
                                                    d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                                                />
                                                <path
                                                    fill="#4caf50"
                                                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                                                />
                                                <path
                                                    fill="#1565c0"
                                                    d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                                                />
                                            </svg>
                                            Google
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">
                                Sign In
                            </h1>


                            <form onSubmit={handleLogin}>
                                <div className="w-full flex-1 mt-8">
                                    <div className="flex flex-col items-center">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name='email'
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            required
                                        />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            name='password'
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="mt-5 tracking-wide font-semibold bg-[#111230] text-gray-100 w-full py-4 rounded-lg hover:bg-[#2d307c] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                        >
                                            <span className='text-lg'>Sign In</span>
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className='pt-3'>
                                <p className='text-lg text-[#111230]'>Don't have an Account? <Link className='font-bold hover:underline' to={"/register"}>Sign Up</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                        <div
                            className="w-full bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url('https://i.ibb.co/tp9kjLj/77cd8007-ac7f-46fe-9448-ec13557bdd88.jpg')`,
                            }}
                        ></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;

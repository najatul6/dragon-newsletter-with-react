import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../share/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useState } from "react";

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState()
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
            .then(result => {
                console.log(result)

                //navigate user
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                setErrorMessage(error.message)
            })
    }
    return (
        <div className="bg-[#F3F3F3]">
            <div className="max-w-[1440px] mx-auto min-h-screen">
                <Navbar></Navbar>
                <form onSubmit={handleLogin} className="w-full md:w-3/4 lg:w-1/2 shadow-xl bg-[#FFF] py-8 px-3 md:py-16 md:px-24 mt-10 md:mt-24 mx-auto rounded-lg">
                    <h2 className="text-2xl md:text-4xl font-semibold text-center">Login your account</h2>
                    <hr className="my-12" />
                    <div className="mb-4 flex flex-col gap-6">

                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                type="email"
                                name="email"
                                required
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-[#F3F3F3] px-3 py-5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                type="password"
                                name="password"
                                required
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-[#F3F3F3] px-3 py-5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>
                        <Link to="/">Forgot Password ?</Link>
                    </div>

                    <button
                        className="mt-6 block w-full select-none rounded-lg bg-[#403F3F] py-5 px-6 text-center align-middle text-xl font-semibold text-white shadow-md shadow-black-500/20 transition-all hover:shadow-lg hover:shadow-black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="submit"
                        data-ripple-light="true"
                    >
                        Login
                    </button>
                    <p className="text-red-600 font-semibold">{errorMessage}</p>
                    <p className="mt-4 block text-center font-sans text-base font-semibold leading-relaxed text-[#706F6F] antialiased">
                        New to The Dragon News?
                        <Link
                            className="font-bold text-[#F75B5F] transition-colors pl-1"
                            to='/register'
                        >
                            Create an account
                        </Link>
                    </p>

                </form>
            </div>
        </div>

    );
};

export default Login;
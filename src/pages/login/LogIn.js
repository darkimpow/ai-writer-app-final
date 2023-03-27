import React, {useRef} from 'react';
import {Link} from "react-router-dom";



const LogIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const forgetPasswordRef= useRef();
    const rememberMeRef= useRef();
    const gmailMeRef= useRef();

    const handleLogin=(e)=>{
        e.preventDefault();
        console.log(e);
    }

    return (
        <div>
            <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 mx-20 w-full max-w-sm shadow-2xl bg-base-100 m-4">

                        <div className="card-body ">
                            <div className="form-control">
                                <div>
                                    <h1 className="justify-left font-bold text-2xl" >Welcome Back</h1>

                                    <h1 className="justify-left text-sm text-gray-400" >Have we meet before?</h1>
                                </div>
                                <br/>
                                <button className=" flex justify-center text-black font-bold border-2 rounded-lg py-2 border-b-gray-300 gap-2" ref={gmailMeRef}>
                                    <img className="w-6 h-6" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"/>
                                    Sign in with Google
                                </button>
                                <div className="divider text-sm text-gray-400">Or continue with</div>

                                <label className="label">
                                    <span className="label-text font-bold">Email*</span>
                                </label>
                                <div className="flex justify-between p-2  border border-gray-300 rounded-lg" >
                                    <input placeholder="Enter your email" className="border-transparent rounded-lg outline-white border-solid border-2" ref={emailRef}/>
                                </div>

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password*</span>
                                </label>
                                <div className="flex justify-between p-2  border border-gray-300 rounded-lg" >


                                    <input  placeholder="Enter your password" className="border-transparent rounded-lg outline-white border-solid border-2" ref={passwordRef}/>
                                    <span><img className="w-6 h-6 " src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-19-512.png" /></span>
                                </div>

                                <div className="justify-between flex mt-2">
                                    <div className="">

                                        <input type="checkbox"  className="checkbox-xm" ref={rememberMeRef}/>
                                        <span className="label-text text-gray-400">Remember me</span>
                                    </div>
                                    <Link to={'/forgot_password'} className="text-sm text-warning" ref={forgetPasswordRef}>Forget your password?</Link>
                                </div>
                            </div>
                            <div className="form-control mt-2">
                                <button type="submit" className="py-2 rounded-lg border-2 bg-purple-600 text-sm text-white">Sign in</button>
                            </div>
                            <div className="flex justify-center text-sm" >
                                <h1 className=" text-gray-400" >Don't have an account?</h1>
                                <a className="font-bold text-purple-600" >Sign here</a>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LogIn;
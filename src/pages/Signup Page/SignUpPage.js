import React from 'react';
import {handler} from "daisyui";
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SignUpPage = () => {
    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card-body">
                    <div className="form-control">

                                <h1 className='font-bold'> Start for free Today </h1><span
                                    className="EKtkFWMYpwzMKOYr0GYm LQVY1Jpkk8nyJ6HBWKAk"> 👏 </span>
                                </div>

                                    <p className='text-xs'> Access to all features. No credit card required. </p>
                                    <form onSubmit={ handler } className='input input-bordered'>
                                        <button className=" flex justify-center text-black font-bold border-2 rounded-lg py-2 border-b-gray-300 gap-2">
                                            <img className="w-6 h-6" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"/>
                                            Sign in with Google
                                        </button>
                                    </form>
                                    <div className='divider'>
                                        <p className='text-xs'> Or continue with </p>
                                    </div>
                                    <h3>Full Name*</h3>
                                    <input type='text' placeholder=' Sajib Rahman' className="input input-bordered"/>
                                    <h3>Email*</h3>
                                        <input type="text" placeholder="Email" className="input input-bordered" />

                                    <h3>Password*</h3>
                                    <input type='text' placeholder=' Create password' className="input input-bordered"/>
                                    <h3>Re-Password*</h3>
                                    <input type='text' placeholder=' Confirm password' className="input input-bordered"/>
                                    <div className="form-control mt-6">
                                 <button className="btn btn-primary bg-blend-color"> Sign Up </button>
                                <p className='text-xs'> Already have an account? <strong> Sign In </strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default SignUpPage;
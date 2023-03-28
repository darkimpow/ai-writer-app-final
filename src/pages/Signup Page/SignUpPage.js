import React, {useRef} from 'react';

import GoogleButton from "../../component/GoogleButton";







const SignUpPage = () => {
    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const rePasswordRef = useRef();
    const gmailMeRef = useRef();
    const handleSignUp = (e) => {
        e.preventDefault();
        // console.log(fullNameRef.current.value);
        // console.log(emailRef.current.value);
        // console.log(passwordRef.current.value);
        // console.log(rePasswordRef.current.value);

    }

    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card-body">
                        <div className="form-control">
                            <div className='flex'>
                                <h1 className='font-bold text-xl'> Start for free Today </h1><span
                                    className=" flex EKtkFWMYpwzMKOYr0GYm LQVY1Jpkk8nyJ6HBWKAk"> 👏 </span>
                            </div>
                        </div>

                                    <p className='text-xs'> Access to all features. No credit card required. </p>
                                <GoogleButton/>
                        <form onSubmit={ handleSignUp } >



                                    <div className='divider'>
                                        <p className='text-xs'> Or continue with </p>
                                    </div>
                                    <h3>Full Name*</h3>
                                    <input ref={fullNameRef} type='text' placeholder=' Sajib Rahman' className="input input-bordered w-full"/>
                                    <h3>Email*</h3>
                                        <input ref={emailRef} type="text" placeholder="Email" className="input input-bordered w-full" />

                                    <h3>Password*</h3>
                                <div className=" flex input input-bordered">
                                    <input ref={passwordRef} type='text' placeholder=' Create password' />
                                    <div className='hero-content flex-col lg:flex-row-reverse'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                                    </svg>
                                    </div>
                                </div>

                                    <h3>Re-Password*</h3>
                                    <div className=" flex input input-bordered">
                                    <input ref={rePasswordRef} type='text' placeholder=' Confirm password'/>
                                    <div className='hero-content flex-col lg:flex-row-reverse'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                                        </svg>
                                    </div>
                                    </div>

                                    <div className="form-control mt-6">
                                 <button className="btn btn-primary bg-purple-600"> Sign Up </button>
                                <p className='text-xs'> Already have an account? <strong> Sign In </strong></p>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default SignUpPage;
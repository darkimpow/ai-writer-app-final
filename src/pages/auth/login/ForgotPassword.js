import React, {useRef} from 'react';
import {ResendEmail} from '../../../component/ResendEmail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLockOpen} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";



const ForgotPassword = () => {

    const enterEmailRef = useRef();


    const handleLogin=(e)=>{
        e.preventDefault();
        console.log(enterEmailRef.current.value);
    }


    return (
        <div>
            <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 mx-20 w-full max-w-sm shadow-2xl bg-base-100 m-4">

                        <div className="card-body ">
                            <div className="form-control">
                                <div className="flex " >

                                    <FontAwesomeIcon className="w-12 h-12 bg-amber-300 " icon={faLockOpen} />
                                    <div className="pl-2">
                                        <h1 className="justify-left font-bold text-2xl" >Can't log in?</h1>

                                        <h1 className="justify-left text-sm text-gray-400" >Restore access to your account</h1>
                                    </div>
                                </div>

                                <br/>

                                <label className="label">
                                    <span className="label-text font-bold">We'll send a recovery link to</span>
                                </label>
                                <div className="flex justify-between p-2  border border-gray-300 rounded-lg" >
                                    <input placeholder="Enter your email" className="border-transparent rounded-lg outline-white border-solid border-2" ref={enterEmailRef}/>
                                </div>

                            </div>

                            <div className="form-control mt-2">
                                <button type="submit" className="py-2 rounded-lg border-2 bg-purple-600 text-sm text-white">Reset Password</button>
                            </div>
                            <div className="flex justify-center text-sm" >
                                <Link to={""} className=" text-warning" >Resend email</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;
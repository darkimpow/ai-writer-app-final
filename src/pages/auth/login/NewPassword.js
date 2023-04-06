import React, {useRef} from 'react';
import {ResendEmail} from '../../../component/ResendEmail'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLockOpen} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";



const NewPassword = () => {

    const newPasswordRef = useRef();
    const confirmPasswordRef = useRef();
    const handleLogin=(e)=>{
        e.preventDefault();
        console.log(newPasswordRef.current.value);
        console.log(confirmPasswordRef.current.value);
    }


    return (
        <div>
            <form onSubmit={handleLogin} className="hero  min-h-screen bg-base-200">
                <div className="hero-content  flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 mx-20 w-full max-w-sm shadow-2xl bg-base-100 m-4">

                        <div className="card-body p-4">
                            <div className="form-control">
                                <div className="flex" >

                                    <FontAwesomeIcon className="w-12 h-12 bg-amber-300 " icon={faLockOpen} />
                                    <div className="pl-2">
                                        <h1 className="justify-left font-bold text-2xl" >Create New Password</h1>

                                        <h1 className="justify-left text-sm text-gray-400" >Enter a new password for login your account</h1>
                                    </div>
                                </div>

                                <br/>



                                <label className="label">
                                    <span className="label-text font-bold">New Password*</span>
                                </label>
                                <div className="flex justify-between p-2  border border-gray-300 rounded-lg" >
                                    <input type="password" placeholder="New Password" className="border-transparent rounded-lg outline-white border-solid border-2" ref={newPasswordRef}/>
                                    <span><img className="w-6 h-6 " src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-19-512.png" /></span>
                                </div>


                                <label className="label">
                                    <span className="label-text font-bold">Confirm Password*</span>
                                </label>
                                <div className="flex justify-between p-2  border border-gray-300 rounded-lg" >
                                    <input type="password" placeholder="Confirm Password" className="border-transparent rounded-lg outline-white border-solid border-2" ref={confirmPasswordRef}/>
                                    <span><img className="w-6 h-6 " src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-19-512.png" /></span>
                                </div>


                            </div>


                            <div className="form-control mt-2">
                                <button type="submit" className="py-2 rounded-lg border-2 bg-purple-600 text-sm text-white">Confirm Password</button>
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

export default NewPassword;
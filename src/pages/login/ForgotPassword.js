import React from 'react';



const ForgotPassword = () => {
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
                                <div className="flex" >
                                    <img className="w-12 h-12 pr-2" src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Logo_semi-protecion_jaune.svg" />
                                    <div>
                                        <h1 className="justify-left font-bold text-2xl" >Can't log in?</h1>

                                        <h1 className="justify-left text-sm text-gray-400" >Restore access to your account</h1>
                                    </div>
                                </div>

                                <br/>

                                <label className="label">
                                    <span className="label-text font-bold">We'll send a recovery link to</span>
                                </label>
                                <div className="flex justify-between p-2  border border-gray-300 rounded-lg" >
                                    <input placeholder="Enter your email" className="border-transparent rounded-lg outline-white border-solid border-2"/>
                                </div>

                            </div>

                            <div className="form-control mt-2">
                                <button type="submit" className="py-2 rounded-lg border-2 bg-purple-600 text-sm text-white">Reset Password</button>
                            </div>
                            <div className="flex justify-center text-sm" >
                                <h1 className=" text-warning" >Resend email</h1>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;
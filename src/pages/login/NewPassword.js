import React from 'react';



const NewPassword = () => {
    const handleLogin=(e)=>{
        e.preventDefault();
        console.log(e);
    }


    return (
        <div>
            <form onSubmit={handleLogin} className="hero  min-h-screen bg-base-200">
                <div className="hero-content  flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 mx-20 w-full max-w-sm shadow-2xl bg-base-100 m-4">

                        <div className="card-body p-4">
                            <div className="form-control">
                                <div className="flex" >
                                    <img className="w-12 h-12 pr-2" src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Logo_semi-protecion_jaune.svg" />
                                    <div>
                                        <h1 className="justify-left font-bold text-2xl" >Create New Password</h1>

                                        <h1 className="justify-left text-sm text-gray-400" >Enter a new password for login your account</h1>
                                    </div>
                                </div>

                                <br/>



                                <label className="label">
                                    <span className="label-text font-bold">New Password*</span>
                                </label>
                                <div className="flex justify-between p-2  border border-gray-300 rounded-lg" >
                                    <input type="password" placeholder="New Password" className="border-transparent rounded-lg outline-white border-solid border-2"/>
                                    <span><img className="w-6 h-6 " src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-19-512.png" /></span>
                                </div>


                                <label className="label">
                                    <span className="label-text font-bold">Confirm Password*</span>
                                </label>
                                <div className="flex justify-between p-2  border border-gray-300 rounded-lg" >
                                    <input type="password" placeholder="Confirm Password" className="border-transparent rounded-lg outline-white border-solid border-2"/>
                                    <span><img className="w-6 h-6 " src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-19-512.png" /></span>
                                </div>


                            </div>


                            <div className="form-control mt-2">
                                <button type="submit" className="py-2 rounded-lg border-2 bg-purple-600 text-sm text-white">Confirm Password</button>
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

export default NewPassword;
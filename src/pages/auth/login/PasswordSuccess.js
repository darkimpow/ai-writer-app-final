import React, {useRef} from 'react';


const PasswordSuccess = () => {

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
                                <div className="px-28" >
                                    <img className=" " src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77416/confetti-clipart-md.png" />

                                </div>

                                <br/>

                                <div className="" >
                                    <h1 className="text-center font-bold text-2xl" >Password change success</h1>

                                    <h1 className="text-center text-sm text-gray-400" >Your new password has ben successfully change</h1>
                                </div>

                            </div>

                            <div className="form-control mt-2">
                                <button type="submit" className="py-2 rounded-lg border-2 bg-purple-600 text-sm text-white">Log in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PasswordSuccess;
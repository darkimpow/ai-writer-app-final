import React from 'react';

function LandingPage() {
    return (
        <div className="flex justify-center items-center">
            <div className='pb-[550px]'>
                <button
                    className="border-2 rounded-lg font-bold text-purple-800 text-2xl bg-purple-200 flex inline mr-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10 pr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                    </svg>
                    Back
                </button>
            </div>
            <div>
                {/* The form section */}
                <div className="w-[600px] h-[600px] bg-white shadow-lg rounded-lg  pl-32">
                    <div className="form-control w-full max-w-xs flex flex-col">
                        <label className="label">
                            <span className="label-text">Project Name *</span>
                        </label>
                        <input type="text" placeholder="Write your project name"
                               className="input input-bordered w-64 border-2"/>
                    </div>

                    {/*Language field*/}
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text">Project Name *</span>
                        </label>
                        <input type="text" placeholder="Write your project name"
                               className="input input-bordered w-64 border-2"/>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default LandingPage;

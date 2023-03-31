import React,{useRef} from 'react';
import {createClient} from '@supabase/supabase-js'
function LandingPage() {
    {/*This is where the functions will begin */}
    {/*Helper libs */}

    const projectRef =useRef();
    const productRef =useRef();
    const descriptionRef =useRef();

{/*user events*/}


















    return (
        <div className="flex justify-center items-center">

            <div className='pb-[550px]'>


                <button
                    className=" border-2 rounded-lg font-bold text-purple-800 text-2xl bg-purple-200 border-purple-800 flex inline mr-4 pr-1">
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

                {/*Landing page headlines */}
                <h1 className="font-bold text-xl pl-32">
                    Landing Page Headlines
                </h1>
                <h2 className='text-lg text-gray-400 pl-32 pb-5'>
                    Unique and Catchy headlines that are perfect
                </h2>


                {/* The form section */}
                {/* This form will need a submit function inserted here*/}

            <form onSubmit={}>
                <div className="w-[600px] h-[550px] bg-white shadow-2xl rounded-lg  pl-32">
                    <div className="form-control w-full max-w-xs flex flex-col">
                        <label className="label">
                            <span className="label-text">Project Name *</span>
                        </label>
                        <input type="text" placeholder="Write your project name"
                               className="input input-bordered w-[400px] border-2"/>
                    </div>


                    {/*Language field*/}
                    <div className="form-control w-[400px]">
                        <label className="label">
                            <span className="label-text">Language</span>
                        </label>
                        <select className="select select-bordered">
                            <option disabled selected>English</option>
                            <option>Spanish</option>
                            <option>Chinese</option>
                            <option>Arabic</option>
                        </select>
                    </div>

                    {/*Product Name input field*/}
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text">Product Name *</span>
                        </label>
                        <input type="text" placeholder="Write your product name"
                               className="input input-bordered w-[400px] border-2"/>
                    </div>

                    {/*Short description input field*/}
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text">Short description *</span>
                        </label>
                        <input type="text" placeholder="Write your project name"
                               className="input input-bordered w-[400px] h-[200px] border-2"/>
                    </div>
                    <div className='pt-4 pl-2'>
                        <button
                            className='justify-center items-center border-2 bg-purple-700 text-white w-96 h-10 rounded-lg'>
                            Generate
                        </button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    );
}


export default LandingPage;

import React from 'react';

function LandingPage() {
    return (
        <div className='pl-96 pt-20'>
            <button className='border-2 rounded-lg font-bold text-purple-800 text-2xl bg-purple-200 w-28 flex inline'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-10 h-10 pr-2">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/>
                </svg>
                Back
            </button>
            
        </div>
    );
}

export default LandingPage;

import React from 'react';



const GoogleButton = () => {
    return (
        <div>
            <button className="w-full flex justify-center text-black font-bold border-2 rounded-lg py-2 border-b-gray-300 gap-2" >
                <img className="w-6 h-6" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"/>
                Sign in with Google
            </button>
        </div>
    );
};

export default GoogleButton;
import React from 'react';
import {handler} from "daisyui";
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SignUpPage = () => {
    return (
        <div>
            <h2 className='font-bold'> Start for free Today </h2>
            <p className='text-xs'> Access to all features. No credit card required. </p>
            <form onSubmit={ handler }>
                <FontAwesomeIcon icon={faGoogle}/>
                <a href="#" className="google btn">
                    <i className="font-bold fa fa-google fa-fw"></i> Sign up with Google
                </a>
            </form>
            <h3>Full Name*</h3>
            <input type='text' placeholder=' Sajib Rahman'/>
            <h3>Email*</h3>
            <input type='text' placeholder=' hellosajib@gmail.com'/>
            <h3>Password*</h3>
            <input type='text' placeholder=' Create password'/>
            <h3>Re-Password*</h3>
            <input type='text' placeholder=' Confirm password'/>
            <button> Sign Up </button>
            <p className='text-xs'> Already have an account? <strong> Sign In </strong></p>
        </div>
    );
}

export default SignUpPage;
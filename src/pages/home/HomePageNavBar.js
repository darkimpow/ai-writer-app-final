import React from 'react';
import logo from "./logo.png"
import {Link} from "react-router-dom";
const HomePageNavBar = () => {
    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <img src={logo} className="w-28 h-10"/>
                </div>
                <div className="navbar-center">
                    <div>
                        <a className="btn btn-ghost normal-case font-bold text-indigo-800 text-xl">About Us</a>
                    </div>
                    <div>
                        <a className="btn btn-ghost normal-case font-bold text-indigo-800 text-xl">Contact Us</a>
                    </div>

                </div>
                <div className="navbar-end">
                    <button>
                        <Link
                            className="btn btn-ghost normal-case font-bold text-indigo-300 text-xl"
                            to={'/login'}>Sign In</Link>

                    </button>
                    <button className="btn btn-ghost ">
                        <div>
                            <Link to={'/signup'} className="btn btn-ghost normal-case font-bold bg-blue-900 text-white text-xl">Sign Up</Link>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePageNavBar;
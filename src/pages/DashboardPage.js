import {Outlet, useNavigate} from "react-router-dom";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import {useEffect, useState} from "react";

const DashboardPage = () => {

    //@TODO: this should really be triggered when a user is signed in
    const [loggedIn, setLoggedIn] = useState(true);

    const navigate = useNavigate();
    // useEffect(() => {
    //
    //     const checkUserLoggedIn = () => {
    //         if (loggedIn) navigate('/dashboard/home');
    //     };
    //
    //     //sends user to the Dashboard home page when logged in
    //     checkUserLoggedIn();
    // }, [])
    // ;

    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};
export default DashboardPage;
import {Outlet, useNavigate} from "react-router-dom";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";

const DashboardPage = () => {


    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};
export default DashboardPage;
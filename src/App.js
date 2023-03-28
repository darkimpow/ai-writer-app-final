import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import DashboardPage from "./pages/DashboardPage";
import DashboardMainSection from "./pages/DashboardMainSection";
<<<<<<< HEAD
import LogIn from "./pages/login/LogIn";
import NewPassword from "./pages/login/NewPassword";
import PasswordSuccess from "./pages/login/PasswordSuccess";
import ForgotPassword from "./pages/login/ForgotPassword";
import {AllProjects} from "./pages/projects/AllProjects";





function App() {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/login'} element={<LogIn/>}/>
            <Route path={'/new_password'} element={<NewPassword/>}/>
            <Route path={'/password_success'} element={<PasswordSuccess/>}/>
            <Route path={'/forgot_password'} element={<ForgotPassword/>}/>


            {/* Start: Dashboard Routes */}
            <Route path={'/dashboard'} element={<DashboardPage/>}>
                <Route path={'/dashboard/home'} element={<DashboardMainSection/>}/>
                <Route path={'/dashboard/projects'} element={<AllProjects/>}/>
            </Route>

            {/* End: Dashboard Routes*/}
        </Routes>
    );

}

export default App;

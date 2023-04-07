import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import DashboardPage from "./pages/DashboardPage";
import DashboardMainSection from "./pages/DashboardMainSection";
import LogIn from "./pages/auth/login/LogIn";
import NewPassword from "./pages/auth/login/NewPassword";
import PasswordSuccess from "./pages/auth/login/PasswordSuccess";
import ForgotPassword from "./pages/auth/login/ForgotPassword";
import SignUpPage from "./pages/auth/login/SignUpPage";
import {AllProjects} from "./pages/projects/AllProjects";
import LandingPage from "./pages/LandingPage";


function App() {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>

            <Route path={'/login'} element={<LogIn/>}/>
            <Route path={'/new-password'} element={<NewPassword/>}/>
            <Route path={'/password-success'} element={<PasswordSuccess/>}/>
            <Route path={'/forgot-password'} element={<ForgotPassword/>}/>

            <Route path={'/signup'} element={<SignUpPage/>}/>

            {/* Start: Dashboard Routes */}
            <Route path={'/dashboard'} element={<DashboardPage/>}>
                <Route path={'/dashboard/home'} element={<DashboardMainSection/>}/>
                <Route path={'/dashboard/projects'} element={<AllProjects/>}/>
                <Route path={'/dashboard/create-project'} element={<LandingPage/>}/>
            </Route>
            {/* End: Dashboard Routes*/}
        </Routes>
    );

}

export default App;

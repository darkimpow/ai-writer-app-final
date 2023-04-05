import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import DashboardPage from "./pages/DashboardPage";
import DashboardMainSection from "./pages/DashboardMainSection";
import LogIn from "./pages/login/LogIn";
import NewPassword from "./pages/login/NewPassword";
import PasswordSuccess from "./pages/login/PasswordSuccess";
import ForgotPassword from "./pages/login/ForgotPassword";
import SignUpPage from "./pages/Signup Page/SignUpPage";
import {AllProjects} from "./pages/projects/AllProjects";








function App() {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>

            <Route path={'/login'} element={<LogIn/>}/>
            <Route path={'/new-password'} element={<NewPassword/>}/>
            <Route path={'/password-success'} element={<PasswordSuccess/>}/>
            <Route path={'/forgot-password'} element={<ForgotPassword/>}/>



            <Route path={'/signup'} element={<SignUpPage/>}/>
            <Route path={'/dashboard/projects'} element={<AllProjects/>}/>

            {/* Start: Dashboard Routes */}
            <Route path={'/dashboard'} element={<DashboardPage/>}>
                <Route path={'/dashboard/home'} element={<DashboardMainSection/>}/>
            </Route>
            {/* End: Dashboard Routes*/}
        </Routes>
    );

}

export default App;

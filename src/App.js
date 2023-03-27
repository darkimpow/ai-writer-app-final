import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import DashboardPage from "./pages/DashboardPage";
import DashboardMainSection from "./pages/DashboardMainSection";
import LandingPage from "./pages/LandingPage";




function App() {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>

            {/* Start: Dashboard Routes */}
            <Route path={'/dashboard'} element={<DashboardPage/>}>
                <Route path={'/dashboard/home'} element={<DashboardMainSection/>}/>
                <Route path={'/dashboard/prj-landing'} element={<LandingPage/>}/>
            </Route>
            {/* End: Dashboard Routes*/}

        </Routes>
    );

}

export default App;

import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import DashboardMainSection from "./pages/DashboardMainSection";
import {AllProjects} from "./pages/projects/AllProjects";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>

            {/* Start: Dashboard Routes */}
            <Route path={'/dashboard'} element={<DashboardPage/>}>
                <Route path={'/dashboard/home'} element={<DashboardMainSection/>}/>
            </Route>
            <Route path={'/projects'} element={<AllProjects/>}/>

            {/* End: Dashboard Routes*/}
        </Routes>
    );
}

export default App;

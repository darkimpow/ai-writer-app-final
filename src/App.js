import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import DashboardPage from "./pages/DashboardPage";
import DashboardMainSection from "./pages/DashboardMainSection";




function App() {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>

            {/* Start: Dashboard Routes */}
            <Route path={'/dashboard'} element={<DashboardPage/>}>
                <Route path={'/dashboard/home'} element={<DashboardMainSection/>}/>
            </Route>
            {/* End: Dashboard Routes*/}
        </Routes>
    );

}

export default App;

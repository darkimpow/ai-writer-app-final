import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <div>
    <div>
      <Navbar/>
    </div>
      <div>
        <DashboardPage/>
      </div>
    <div>
        <Footer/>
    </div>
    </div>
  );
}

export default App;

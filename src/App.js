import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import {AllProjects} from "./projects/AllProjects";

function App() {
  return (
    <div>
    <div>
      <Navbar/>
    </div>
      <div>
        <AllProjects/>
      </div>
    <div>
        <Footer/>
    </div>
    </div>
  );
}

export default App;

import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import MainSection from "./home-page/MainSection";



function App() {
  return (
    <div>
    <div>
      <Navbar/>
    </div>
    <MainSection />
    <div>
        <Footer/>
    </div>
    </div>
  );
}

export default App;

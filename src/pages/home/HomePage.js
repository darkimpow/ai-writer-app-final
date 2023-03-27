import React from 'react';
import MainSection from "./MainSection";
import HomePageNavBar from "./HomePageNavBar";
import HomePageFooter from "./HomePageFooter";


const HomePage = () => {
    return (
        <div>
        <HomePageNavBar />
        <MainSection/>
        <HomePageFooter />
        </div>
    );
};

export default HomePage;
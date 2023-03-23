//AllProjectsPage

import React from 'react';

// import { ProjectMainSection } from './ProjectMainSection.jsx';
import {ProjectSideBar} from "./ProjectSideBar.js";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import {ProjectMainSection} from "./ProjectMainSection";
import Table from "./Table";

export const AllProjects = () => {

    return (
        <div className='flex'>
              {/*<Navbar/>*/}
            {/*<ProjectMainSection />*/}
            {/*<ProjectMainSection/>*/}
            {/*<ProjectSideBar />*/}
            {<Table />}
             {/*<Footer/>*/}
        </div>
    );
};

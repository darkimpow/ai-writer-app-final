//AllProjectsPage

import React from 'react';

// import { ProjectMainSection } from './ProjectMainSection.jsx';
import {ProjectSideBar} from "./ProjectSideBar.js";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import {ProjectMainSection} from "./ProjectMainSection";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export const AllProjects = () => {

    return (
        <div className='flex'>
              {/*<Navbar/>*/}
            {/*tableHeader*/}
            {/*<ProjectMainSection />*/}
            {/*<ProjectMainSection/>*/}
            {/*<ProjectSideBar />*/}
            <TableHeader />

            {<TableBody />}
             {/*<Footer/>*/}
        </div>
    );
};

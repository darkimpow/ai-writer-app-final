//AllProjectsPage

import React from 'react';

import { ProjectMainSection } from './ProjectMainSection.jsx';
import {ProjectSideBar} from "./ProjectSideBar.js";

export const AllProjects = () => {
    //// <Header>

    return (
        <div className='flex'>
            {/*  <Header>  */}
            <ProjectMainSection />
            <ProjectSideBar />

            {/* <Footer> */}
        </div>
    );
};

//AllProjectsPage

import React from 'react';

import { ProjectMainSection } from './ProjectMainSection.jsx';
import {ProjectSideBar} from "./ProjectSideBar.js";

export const AllProject = () => {
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

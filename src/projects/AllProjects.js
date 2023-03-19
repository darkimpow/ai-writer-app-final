//AllProjectsPage

//example:
import React from 'react';

import { ProjectMainSection } from './ProjectMainSection.jsx';
import { ProjectMainSidebar } from './ProjectMainSidebar.jsx';////
////

export const AllProject = () => {
    //// <Header>
    ///feature/all-project
    // git push feature/all-project

    ///1. git checkoout -b feature/all-project/main-section
    ///1b. git checkout feature/all-project && git merge feature/all-project/main-section && git pushfeature/all-project
    //2c. git pull feature/all-project

    //1c. git pull feature/all-project

    ///2. git checkoout -b feature/all-project/sidebar
    //2b. git checkout feature/all-project && git merge feature/all-project/sidebar && git pushfeature/all-project
    //2c. git pull feature/all-project


    return (
        <div className='flex'>
            {/*  <Header>  */}
            <ProjectMainSection />
            <ProjectMainSidebar />

            {/* <Footer> */}
        </div>
    );
};

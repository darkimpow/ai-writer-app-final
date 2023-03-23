//AllProjectsPage
import React from 'react';
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export const AllProjects = () => {

    return (
        <div className='flex'>
              {/*<Navbar/>*/}
            {<TableHeader />}
            {<TableBody />}
             {/*<Footer/>*/}
        </div>
    );
};

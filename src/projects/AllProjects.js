//AllProjectsPage
import React from 'react';
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";

export const AllProjects = () => {

    return (
        <div className='flex'>
            {<Navbar/>}
            {<TableHeader />}
            {<TableBody />}
            {<Footer/>}
        </div>
    );
};

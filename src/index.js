import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/dashboard',
        element: <DashboardPage/>
    }
]);

root.render(
    <RouterProvider router={router}/>
);


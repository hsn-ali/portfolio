import './app/index.scss';
import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import Layout from "./app/components/Layout";
import {createHashRouter, RouterProvider} from "react-router-dom";
import Skill from "./app/components/Skill";
import NotFound from "./app/components/NotFound";

const appRouter = createHashRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <NotFound/>
    }, {
        path: '/skill',
        element: <Skill/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
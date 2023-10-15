import 'bootstrap/dist/css/bootstrap.css';
import './src/app/index.scss';
import ReactDOM from 'react-dom/client';
import React from 'react';
import Layout from "./src/app/components/Layout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Skill from "./src/app/components/Skill";
import NotFound from "./src/app/components/NotFound";

const appRouter = createBrowserRouter([
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
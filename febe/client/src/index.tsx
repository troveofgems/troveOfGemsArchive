import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './App.scss';

/* Import Fonts */
import './assets/fonts/myst/exile/stylesheet.css';
import './assets/fonts/myst/dni/stylesheet.css';
import './assets/fonts/myst/dnidings/stylesheet.css';

import SiteRoot from "./router/root";
import ErrorPage from "./components/Error404/Error404";
import Landing from "./components/Landing/Landing";
import DirectoryPage from "./components/DirectoryPage/DirectoryPage";

import reportWebVitals from './reportWebVitals';
import TopicPage from "./components/DirectoryPage/TopicPage/TopicPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SiteRoot />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Landing />
            },
            {
                path: "/site/:directory",
                element: <DirectoryPage/>,
            },
            {
                path: "/site/:directory/pages/:topic",
                element: <TopicPage/>,
            }
        ]
    }
]);

const rootAnchor: HTMLElement = document.getElementById('root') || process.exit(1);

ReactDOM
    .createRoot(rootAnchor)
    .render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

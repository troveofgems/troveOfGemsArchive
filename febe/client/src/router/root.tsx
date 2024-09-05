import React from "react";
import {createBrowserRouter, Outlet} from "react-router-dom";

import Landing from "../components/Landing/Landing";
import ErrorPage from "../components/Error404/Error404";
import DirectoryPage from "../components/DirectoryPage/DirectoryPage";
import TopicPage from "../components/DirectoryPage/TopicPage/TopicPage";

function SiteRoot() {
    return (
        <>
            <Outlet />
        </>
    )
}

export function mountRouter() {
    return createBrowserRouter([
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
}
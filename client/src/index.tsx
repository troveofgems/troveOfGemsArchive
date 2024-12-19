import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import './App.scss';

/* Import CSS Font Files */
import './assets/fonts/myst/exile/stylesheet.css';
import './assets/fonts/myst/dni/stylesheet.css';
import './assets/fonts/myst/dnidings/stylesheet.css';

// Router
import { mountRouter } from "./router/root";

import reportWebVitals from './reportWebVitals';

const
    rootAnchor: HTMLElement = document.getElementById('root') || process.exit(1),
    router = mountRouter();

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
reportWebVitals(console.log);

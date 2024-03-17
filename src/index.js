import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import Sort from './pages/Sort';
import Filter from './pages/Filter';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/Sort',
        element: <Sort />,
    },
    {
        path: '/Filter',
        element: <Filter />,
    },
]);

ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById('root')
);

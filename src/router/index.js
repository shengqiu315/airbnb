
import React from 'react';
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/views/home/index'))
const Detail = React.lazy(() => import('@/views/detail/index'))
const More = React.lazy(() => import('@/views/more/index'))
const routes = [
    { path: '/', element: <Navigate to="/home"></Navigate> },
    { path: '/home', element: <Home /> },
    { path: '/detail', element: <Detail /> },
    { path: '/more', element: <More /> },
]

export default routes
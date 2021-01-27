import { lazy } from 'react';

const mainRoutes = [
    {
        path: '/',
        name: 'Home',
        exact: true,
        component: lazy(() => import("../pages/homePage/HomePage" /* webpackChunkName: "HomePage"*/)
    )},
    {
        path: '/movies',
        name: 'Movies',
        exact: false,
        component: lazy(() => import("../pages/moviesPage/MoviesPage" /* webpackChunkName: "MoviePage"*/)
    )}
];

const secondaryRoutes = {
        path: '/movies/:movieId',
        name: '',
        exact: false,
        component: lazy(() => import("../pages/movieDetails/MovieDetailes" /* webpackChunkName: "MovieDetails"*/)
    ),
}


export default {mainRoutes, secondaryRoutes};
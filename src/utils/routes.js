import Gallery from "../page/Gallery";
import Home from "../page/Home";
import Login from "../page/Login";

const routes =  [
    {
        path: '/',
        exact: true,
        component: () => <Home/>
    },
    {
        path: '/login',
        exact: true,
        component: () => <Login/>
    },
    {
        path: '/gallery',
        exact: true,
        component: () => <Gallery/>
    }
]

export default routes;
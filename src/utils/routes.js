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
        component: () => <Login/>
    },
    {
        path: '/gallery',
        component: () => <Gallery/>
    }
]

export default routes;
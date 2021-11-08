import Gallery from "../../page/Gallery";
import Home from "../../page/Home";
import Login from "../../page/Login";
import SignUp from "../../page/SignUp";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
    protected: "",
  },
  {
    path: "/login",
    component: () => <Login />,
    protected: "guest",
  },
  {
    path: "/gallery",
    component: () => <Gallery />,
    protected: "auth",
  },
  {
    path: "/signup",
    component: () => <SignUp />,
    protected: "guest",
  },
];

export default routes;

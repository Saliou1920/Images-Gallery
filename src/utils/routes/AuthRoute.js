import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import Appcontext from "../../store/AppContext";

export default function AuthRoute(props) {
  const [isLoggedIn] = useContext(Appcontext);
  return isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
}

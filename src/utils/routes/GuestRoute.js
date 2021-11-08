import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import Appcontext from "../../store/AppContext";

export default function GuestRoute(props) {
  const [isLoggedIn] = useContext(Appcontext);
  return !isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
}

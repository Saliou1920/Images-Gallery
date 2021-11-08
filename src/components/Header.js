import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { auth } from "../config/firebase";
import Appcontext from "../store/AppContext";

export default function Header() {
  const history = useHistory();
  const [isLoggedIn] = useContext(Appcontext);
  function logout() {
    auth.signOut().then(() => {
      history.replace("/login");
    });
  }

  function signUp() {
    history.replace("/signup");
  }
  return (
    <div>
      <nav className="py-7 bg-gray-900 text-white flex justify-between">
        <ul className="flex text-2xl justify-between px-10">
          <li className="mx-5">
            <NavLink to="/" exact activeClassName="underline text-yellow-200">
              Home
            </NavLink>
          </li>
          <li className="mx-5">
            <NavLink
              to="/gallery"
              exact
              activeClassName="underline text-yellow-200"
            >
              Gallery
            </NavLink>
          </li>
        </ul>
        <ul className="px-10 text-2xl flex">
          <li>
            {isLoggedIn ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <NavLink
                to="/login"
                exact
                activeClassName="underline text-yellow-200"
              >
                Login
              </NavLink>
            )}
          </li>
          {!isLoggedIn && (
            <li className="ml-5">
              <NavLink
                to="/signup"
                exact
                activeClassName="underline text-yellow-200"
              >
                Signup
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

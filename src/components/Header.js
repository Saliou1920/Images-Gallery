import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { auth } from "../config/firebase";
import Appcontext from "../store/AppContext";

export default function Header() {
  const history = useHistory();
  const [isLoggedIn, user] = useContext(Appcontext);
  function logout() {
    auth.signOut().then(() => {
      history.replace("/login");
    });
  }
  return (
    <div>
      <nav className="py-7 bg-gray-900 text-white">
        <ul className="flex text-2xl justify-between px-10">
          <span className="flex">
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
          </span>
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
        </ul>
      </nav>
    </div>
  );
}

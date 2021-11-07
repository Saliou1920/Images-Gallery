import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../config/firebase";
import { useEffect } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  function logout() {
    auth.signOut().then(() => {
      history.replace("/login");
      setIsLoggedIn(false);
    });
  }
  return (
    <div>
      <nav className="py-7 bg-gray-900 text-white">
        <ul className="flex text-2xl justify-between px-10">
          <span className="flex">
            <li className="mx-5">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-5">
              <Link to="/gallery">Gallery</Link>
            </li>
          </span>
          <li>
            {isLoggedIn ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

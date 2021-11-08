import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase.js";
import Puff from "react-loading-icons/dist/components/puff";
import { useHistory } from "react-router";
import { useFormik } from "formik";

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      signUp(values);
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const signUp = (values) => {
    setIsLoading(true);
    setError(null);

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      });
    setIsLoading(false);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div
        className="m-auto w-1/3 text-white flex flex-wrap
                        justify-center shadow-lg bg-indigo-900"
      >
        <form className="m-5 w-10/12">
          <h1 className="w-full text-4xl text-center my-6 tracking-widest">
            Sign Up here
          </h1>
          <div className="my-6">
            <input
              type="email"
              className="p-2 rounded shadow w-full text-black"
              placeholder="Email or Username"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>

          <div className="my-6">
            <input
              type="password"
              className="p-2 rounded shadow w-full text-black"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div>
            <input
              type="password"
              className="p-2 rounded shadow w-full text-black"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
          </div>
          <div className="w-full my-10">
            <button
              type="submit"
              className="p-2 rounded shadow w-full bg-yellow-400 text-black"
            >
              {isLoading ? <Puff className="flex justify-center" /> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.js";
import Puff from "react-loading-icons/dist/components/puff";
import { useHistory } from "react-router";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const signUp = (values, formikBag) => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        formikBag.setFieldError("email", error.code);
        console.log(error.code);
      });
    setIsLoading(false);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values, formikBag) => {
        signUp(values, formikBag);
        console.log(values);
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          )
          .required("Required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Required"),
      })}
    >
      <div className="flex h-screen bg-gray-200">
        <div
          className="m-auto w-1/3 text-white flex flex-wrap
                        justify-center shadow-lg bg-indigo-900"
        >
          <Form className="m-5 w-10/12">
            <h1 className="w-full text-4xl text-center my-6 tracking-widest">
              Sign Up here
            </h1>
            <div className="my-6">
              <Field
                name="email"
                type="email"
                className="p-2 rounded shadow w-full text-black"
                placeholder="Email or Username"
              />
              <ErrorMessage name="email" />
            </div>

            <div className="my-6">
              <Field
                name="password"
                type="password"
                className="p-2 rounded shadow w-full text-black"
                placeholder="Password"
              />
              <ErrorMessage name="password" />
            </div>
            <div>
              <Field
                name="confirmPassword"
                type="password"
                className="p-2 rounded shadow w-full text-black"
                placeholder="Confirm Password"
              />
              <ErrorMessage name="confirmPassword" />
            </div>
            <div className="w-full my-10">
              <button
                type="submit"
                className="p-2 rounded shadow w-full bg-yellow-400 text-black"
              >
                {isLoading ? (
                  <Puff className="flex justify-center" />
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
}

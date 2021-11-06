import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.js";
import Puff from "react-loading-icons/dist/components/puff";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  function handleForm(e) {
    e.preventDefault();
    setIsLoading(true);
    // const auth = getAuth();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("success");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }
  return (
    <div className="flex h-screen bg-gray-200">
      <div
        className="m-auto w-1/3 text-white flex flex-wrap
                        justify-center shadow-lg bg-indigo-900"
      >
        <form className="m-5 w-10/12" onSubmit={handleForm}>
          <h1 className="w-full text-4xl text-center my-6 tracking-widest">
            Login
          </h1>
          <div className="w-full my-6">
            <input
              type="email"
              className="p-2 rounded shadow w-full text-black"
              placeholder="Email or Username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              className="p-2 rounded shadow w-full text-black"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full my-10">
            <button
              type="submit"
              className="p-2 rounded shadow w-full bg-yellow-400 text-black"
            >
              {isLoading ? <Puff className="flex justify-center" /> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

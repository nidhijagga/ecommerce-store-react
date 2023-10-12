import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../store/loginContext";

const Login = () => {
  const loginContext = useContext(LoginContext);
  const emailInputref = useRef();
  const passwordInputref = useRef();
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDi9tfltVJ12QrbxXThs2QYHJuii9TyVq4",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailInputref.current.value,
          password: passwordInputref.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
              throw new Error(errorMessage);
            }
          });
        }
      })
      .then((data) => {
        loginContext.isLoggedIn = true;
        loginContext.login(data.idToken);
        navigate("/store");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="bg-rose-300 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/4">
        <h2 className="text-2xl font-bold text-rose-500 mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-black text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full py-2 px-3 rounded-md border border-rose-300 focus:outline-none focus:border-rose-500"
              ref={emailInputref}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-black text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full py-2 px-3 rounded-md border border-rose-300 focus:outline-none focus:border-rose-500"
              ref={passwordInputref}
            />
          </div>
          <button
            type="submit"
            className="bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600 w-full"
            onClick={loginHandler}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

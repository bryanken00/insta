import React, { useEffect, useState } from "react";
import FirebaseLogin from "../config/firebase-functionsLogin";
import { useNavigate } from "react-router-dom";

function InstagramLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false); // State variable to control the visibility of the error message

  const { UserData } = FirebaseLogin();
  const navigate = useNavigate();
  const UID = localStorage.getItem("account.username");

  const handleForm = async (e) => {
    e.preventDefault();

    const userData = UserData.find(
      (data) =>
        (data.username === username || data.email) && data.password === password
    );

    if (userData === undefined) setShowErrorMessage(true);
    else {
      setShowErrorMessage(false);
      localStorage.setItem("account.username", userData.username);
      navigate("/newsfeed");
    }
  };

  useEffect(() => {
    if (UID !== null) navigate("/newsfeed");
    else return;
  }, [UID, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <img
          className="mx-auto h-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt="Instagram"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-instagram">
          Log in to your account
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleForm} method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <input
                id="email-address"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-full relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg mb-6"
                placeholder="Email address"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-full relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Error message */}
          {showErrorMessage && (
            <div className="error-message">Invalid username or password</div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-semibold rounded-full text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>

          <div className="mt-4 text-center">
            <span className="text-sm">Don't have an account? </span>
            <a
              href="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Create one
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InstagramLogin;

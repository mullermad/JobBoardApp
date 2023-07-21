import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/api/user/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        setEmail("");
        setPassword("");
        setLoginError("");
        setIsLoggedIn(true);
        localStorage.setItem("accessToken", response.data.token);
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError("Invalid email or password.");
      });
  }

 
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
            required
          />
        </div>
        {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
        >
          Submit
        </button>
        <div className="ml-28">
          <span>Don't have account?</span>
          <Link to="/signup" className="text-blue-500 ml-2">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default UserLogin;

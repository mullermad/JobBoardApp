import React from "react";
import { Link } from "react-router-dom";

const ChooseSignupType = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl text-blue-500 mb-8">Create your free account</h2>
      <Link
        to="/signUp"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg mb-4"
      >
        Create a user account
      </Link>
      <Link
        to="/employersignUp"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg"
      >
        Create an employer account
      </Link>
    </div>
  );
};

export default ChooseSignupType;

import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="mx-auto px-4">
          <div className="flex justify-between">
            <Link to="/" className="py-4 font-bold text-gray-800">
              JobBoard
            </Link>
            <div className="flex items-center">
              <Link to="/login" className="py-2 px-4 text-gray-800">
                Login
              </Link>
              <Link
                to="/choosesignuptype"
                className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header
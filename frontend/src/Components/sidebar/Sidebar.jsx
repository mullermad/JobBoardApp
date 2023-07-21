import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-64 bg-gray-800">
     
      <nav className="flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5">
            <a href="/" className="text-gray-400 hover:text-white">
              Home
            </a>
          </li>
          <li className="px-5">
            <a href="/dashboard" className="text-gray-400 hover:text-white">
              Dashboard
            </a>
          </li>
          <li className="px-5">
            <a href="/posts" className="text-gray-400 hover:text-white">
              Post Lists
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

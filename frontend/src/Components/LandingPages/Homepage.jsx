import React from "react";
import { Link, Navigate } from "react-router-dom";
import UserLogin from "../Authentication/UserLogin";
import UserSignup from "../Authentication/UserSignup";
import Sidebar from "../sidebar/Sidebar";
import Header from "./Header";

function Homepage() {
  const isLogging = false;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
     
      <div className="container mx-auto pt-8 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center mt-16">
          Welcome to Home Page
        </h1>
        
      </div>
    </div>
  );
}

export default Homepage;

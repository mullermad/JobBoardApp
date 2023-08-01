import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import EpmloyerSignup from "./Components/Authentication/EpmloyerSignup";
import UserLogin from "./Components/Authentication/UserLogin";
import UserSignup from "./Components/Authentication/UserSignup";
import ChooseSignupType from "./Components/LandingPages/ChooseSignupType";
import Dashboard from "./Components/LandingPages/Dashboard";
import Homepage from "./Components/LandingPages/Homepage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route exact={true} path="/signUp" element={<UserSignup />} />
          <Route
            exact={true}
            path="/employersignUp"
            element={<EpmloyerSignup />}
          />
          <Route exact={true} path="/login" element={<UserLogin />} />
          <Route exact={true} path="/dashboard" element={<Dashboard />} />
          <Route
            exact={true}
            path="/choosesignuptype"
            element={<ChooseSignupType />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

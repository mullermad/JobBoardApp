import React from 'react'
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import UserLogin from './Components/Authentication/UserLogin';
import UserSignup from './Components/Authentication/UserSignup';
import Dashboard from './Components/LandingPages/Dashboard';
import Homepage from './Components/LandingPages/Homepage';




const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route exact={true} path="/signUp" element={<UserSignup />} />
          <Route exact={true} path="/login" element={<UserLogin />} />
          <Route exact={true} path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

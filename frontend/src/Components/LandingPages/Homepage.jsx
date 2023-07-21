import React from 'react'
import Login from '../Authentication/Login';
import Sidebar from '../sidebar/Sidebar'

function Homepage() {
  const isLogin=false;
  return <div>{isLogin ? <Sidebar /> : <Login />}</div>;
}

export default Homepage
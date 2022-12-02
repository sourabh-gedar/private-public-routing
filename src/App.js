import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Registration from './components/Registration';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import DashBoards from './components/DashBoards';
import NavBarListing from './components/NavBarListing';
import PublicRoutes from './components/PublicRoutes';

function App() {

  const [userData, setUserData] = useState({ email: "", password: "" })
  const [authData, setAuthData] = useState({ authEmail: "", authPassword: "" })
  let [arr, setArr] = useState(['Register '])




  function HandleSetData(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value })

  }

  function HanleAuthData(e) {
    setAuthData({ ...authData, [e.target.name]: e.target.value })
  }
  console.log(userData, 'userData')
  console.log(authData, "authData")

  // useEffect(()=>{
  //   localStorage.removeItem('isAuthenticate')
  // },[])



  return (
    <div className="App">
      <NavBarListing arr={arr} setArr={setArr} />
      {/* <Routes>
        <Route path='/' element={<Registration HandleSetData={HandleSetData} setArr={setArr} arr={arr} />} />
        <Route path='/login' element={ < Login HanleAuthData={HanleAuthData} userData={userData} authData={authData}  />} />
        <Route path="/dashboard" element={<PrivateRoute Componenet={DashBoards} />} />
        <Route path='/logout' element={<Registration HandleSetData={HandleSetData} />}/>

      </Routes> */}

      <Routes>
        <Route path='/' element={< PublicRoutes Componenet={Registration} HandleSetData={HandleSetData} setArr={setArr} arr={arr} />} />
        <Route path='/login' element={< PublicRoutes Componenet={Login} HanleAuthData={HanleAuthData} userData={userData} authData={authData} />} />
        <Route path="/dashboard" element={<PrivateRoute Componenet={DashBoards} />} />
        <Route path='/logout' element={<Registration HandleSetData={HandleSetData} />} />

      </Routes>

    </div>
  );
}

export default App;

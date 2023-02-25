import React from 'react'
import ReactDOM from 'react-dom/client'
import { LandingPageUrl, RegisterPageUrl, LoginPageUrl } from "./constants/urls"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage"
import { RegisterPage } from "./pages/RegisterPage/RegisterPage"
import { LoginPage } from "./pages/LoginPage/LoginPage"
// import { firestore } from "./firebase/config"

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path={LandingPageUrl} element={<LandingPage/>} /> 
        <Route path={RegisterPageUrl} element={<RegisterPage/>} /> 
        <Route path={LoginPageUrl} element={<LoginPage/>} /> 

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

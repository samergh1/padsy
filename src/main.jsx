import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePageUrl, RegisterPageUrl, LoginPageUrl, RegisterDoctorUrl, RegisterPatientUrl } from "./constants/urls"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage"
import { RegisterPage } from "./pages/RegisterPage/RegisterPage"
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { storage } from "./firebase/config"
import './index.css'
import { DoctorRegister } from './pages/RegisterPage/DoctorRegister/DoctorRegister';
import { PatientRegister } from './pages/RegisterPage/PatientRegister/PatientRegister';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path={HomePageUrl} element={<HomePage/>} /> 
        <Route path={RegisterPageUrl} element={<RegisterPage/>} /> 
        <Route path={LoginPageUrl} element={<LoginPage/>} /> 
        <Route path={RegisterDoctorUrl} element={<DoctorRegister/>} /> 
        <Route path={RegisterPatientUrl} element={<PatientRegister/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

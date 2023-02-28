import React from 'react'
import ReactDOM from 'react-dom/client'
import { LandingPageUrl, RegisterPageUrl, LoginPageUrl, RegisterDoctorUrl, RegisterPatientUrl, ChatPageUrl } from "./constants/urls"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage"
import { RegisterPage } from "./pages/RegisterPage/RegisterPage"
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { storage } from "./firebase/config"
import './index.css'
import { DoctorRegister } from './pages/RegisterPage/DoctorRegister/DoctorRegister';
import { PatientRegister } from './pages/RegisterPage/PatientRegister/PatientRegister';
import {ChatPage} from './pages/ChatPage/ChatPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path={LandingPageUrl} element={<LandingPage/>} /> 
        <Route path={RegisterPageUrl} element={<RegisterPage/>} /> 
        <Route path={LoginPageUrl} element={<LoginPage/>} /> 
        <Route path={RegisterDoctorUrl} element={<DoctorRegister/>} /> 
        <Route path={RegisterPatientUrl} element={<PatientRegister/>} />
        <Route path={ChatPageUrl} element={<ChatPage/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

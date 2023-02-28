import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserContextProvider } from './context/userContext'
import { HomePageUrl, RegisterPageUrl, LoginPageUrl, ChatPageUrl, RegisterDoctorUrl, RegisterPatientUrl } from "./constants/urls"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ChatProvider } from "./context/chat";
import { HomePage } from "./pages/HomePage/HomePage"
import { RegisterPage } from "./pages/RegisterPage/RegisterPage"
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { ChatPage } from "./pages/Chat/Chat"
import './index.css'
import { DoctorRegister } from './pages/RegisterPage/DoctorRegister/DoctorRegister';
import { PatientRegister } from './pages/RegisterPage/PatientRegister/PatientRegister';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <UserContextProvider>
      <ChatProvider>
        <BrowserRouter>
          <Routes>

            {/* <Route path={HomePageUrl} element={<HomePage />} /> */}
            <Route path={RegisterPageUrl} element={<RegisterPage />} />
            <Route path={LoginPageUrl} element={<LoginPage />} />
            <Route path={RegisterDoctorUrl} element={<DoctorRegister />} />
            <Route path={RegisterPatientUrl} element={<PatientRegister />} />
            <Route path={HomePageUrl} element={<ChatPage />} />

          </Routes>
        </BrowserRouter>
      </ChatProvider>
    </UserContextProvider>
    {/* </AuthProvider> */}


  </React.StrictMode>,
)

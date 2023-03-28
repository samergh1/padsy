import React from "react";
import ReactDOM from "react-dom/client";
import {
  LandingPageUrl,
  RegisterPageUrl,
  LoginPageUrl,
  SearchPageurl,
  RegisterDoctorUrl,
  RegisterPatientUrl,
  ChatPageUrl,
} from "./constants/urls";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { UserContextProvider } from "./context/userContext";
import { ChatProvider } from "./context/chat";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ChatPage } from "./pages/Chat/Chat";
import "./index.css";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { DoctorRegister } from "./pages/RegisterPage/DoctorRegister/DoctorRegister";
import { PatientRegister } from "./pages/RegisterPage/PatientRegister/PatientRegister";
import { FilterContextProvider } from "./context/FilterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <UserContextProvider>
      <ChatProvider>
        <FilterContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path={LandingPageUrl} element={<LandingPage />} />
              <Route path={RegisterPageUrl} element={<RegisterPage />} />
              <Route path={LoginPageUrl} element={<LoginPage />} />
              <Route path={RegisterDoctorUrl} element={<DoctorRegister />} />
              <Route path={RegisterPatientUrl} element={<PatientRegister />} />
              <Route path={ChatPageUrl} element={<ChatPage />} />
              {/* <Route path={SearchPageurl} element={<SearchPage />} /> */}

              <Route path={SearchPageurl} element={<SearchPage />} />
            </Routes>
          </BrowserRouter>
        </FilterContextProvider>
      </ChatProvider>
    </UserContextProvider>
    {/* </AuthProvider> */}
  </React.StrictMode>
);

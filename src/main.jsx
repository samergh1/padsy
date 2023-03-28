import React from "react";
import ReactDOM from "react-dom/client";
import {
  LandingPageUrl,
  RegisterPageUrl,
  LoginPageUrl,
  SearchPageurl,
  DoctorProfileUrl,
  PatientProfileUrl,
  RegisterDoctorUrl,
  RegisterPatientUrl,
  ChatPageUrl,
  SchedulePageUrl,
  FeedbackUrl,
} from "./constants/urls";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { UserContextProvider } from "./context/userContext";
import { ChatsProvider } from "./context/chatsContext";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ChatPage } from "./pages/Chat/Chat";
import "./index.css";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { DoctorRegister } from "./pages/RegisterPage/DoctorRegister/DoctorRegister";
import { PatientRegister } from "./pages/RegisterPage/PatientRegister/PatientRegister";
import { DoctorProfile } from "./pages/ProfilePage/DoctorProfile";
import { PatientProfile } from "./pages/ProfilePage/PatientProfile";
import { SchedulePage } from "./pages/SchedulePage/SchedulePage";
import { FeedbackPage } from "./pages/FeedbackPage";
import { FilterContextProvider } from "./context/FilterContext";
import { FeedBackContextProvider } from "./context/FeedBackContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <UserContextProvider>
      <ChatsProvider>
        <FilterContextProvider>
          <FeedBackContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path={LandingPageUrl} element={<LandingPage />} />
                <Route path={RegisterPageUrl} element={<RegisterPage />} />
                <Route path={LoginPageUrl} element={<LoginPage />} />
                <Route path={RegisterDoctorUrl} element={<DoctorRegister />} />
                <Route
                  path={RegisterPatientUrl}
                  element={<PatientRegister />}
                />
                <Route path={ChatPageUrl} element={<ChatPage />} />
                <Route path={DoctorProfileUrl} element={<DoctorProfile />} />
                <Route path={PatientProfileUrl} element={<PatientProfile />} />
                <Route path={SearchPageurl} element={<SearchPage />} />
                <Route path={SchedulePageUrl} element={<SchedulePage />} />
                <Route path={FeedbackUrl} element={<FeedbackPage />} />
                {/* </Route> */}
              </Routes>
            </BrowserRouter>
          </FeedBackContextProvider>
        </FilterContextProvider>
      </ChatsProvider>
    </UserContextProvider>
    {/* </AuthProvider> */}
  </React.StrictMode>
);

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
  AppointmentsUrl,
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
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { Layout } from "./pages/Layout/Layout";
import MyAppointments from "./pages/MyAppointments/MyAppointments";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <UserContextProvider>
      <ChatsProvider>
        <FilterContextProvider>
          <FeedBackContextProvider>
            <BrowserRouter>
              <Routes>
                {/* <Route path={HomePageUrl} element={<HomePage />} /> */}
                <Route path={LandingPageUrl} element={<LandingPage />} />
                <Route path={RegisterPageUrl} element={<RegisterPage />} />
                <Route path={LoginPageUrl} element={<LoginPage />} />
                <Route path={RegisterDoctorUrl} element={<DoctorRegister />} />
                <Route
                  path={RegisterPatientUrl}
                  element={<PatientRegister />}
                />
                <Route path="*" element={<NotFoundPage />} />

                <Route
                  path={ChatPageUrl}
                  element={
                    <PrivateRoute>
                      <ChatPage />
                    </PrivateRoute>
                  }
                />

                <Route
                  path={DoctorProfileUrl()}
                  element={
                    <PrivateRoute>
                      <DoctorProfile />
                    </PrivateRoute>
                  }
                />

                <Route
                  path={PatientProfileUrl()}
                  element={<PatientProfile />}
                />
                <Route
                  path={SearchPageurl}
                  element={
                    <PrivateRoute>
                      <SearchPage />
                    </PrivateRoute>
                  }
                />

                <Route
                  path={SchedulePageUrl}
                  element={
                    <PrivateRoute>
                      <SchedulePage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={FeedbackUrl()}
                  element={
                    <PrivateRoute>
                      <FeedbackPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={AppointmentsUrl}
                  element={
                    <PrivateRoute>
                      <MyAppointments />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </BrowserRouter>
          </FeedBackContextProvider>
        </FilterContextProvider>
      </ChatsProvider>
    </UserContextProvider>
    {/* </AuthProvider> */}
  </React.StrictMode>
);

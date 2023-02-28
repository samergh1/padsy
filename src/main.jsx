import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePageUrl, RegisterPageUrl, LoginPageUrl, ChatPageUrl } from "./constants/urls"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { ChatProvider } from "./context/chat";
import { HomePage } from "./pages/HomePage/HomePage"
import { RegisterPage } from "./pages/RegisterPage/RegisterPage"
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { ChatPage } from "./pages/Chat/Chat"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <ChatProvider>
      <BrowserRouter>
        <Routes>

          <Route path={HomePageUrl} element={<HomePage />} />
          <Route path={RegisterPageUrl} element={<RegisterPage />} />
          <Route path={LoginPageUrl} element={<LoginPage />} />
          <Route path={ChatPageUrl} element={<ChatPage />} />

        </Routes>
      </BrowserRouter>
    </ChatProvider>
    {/* </AuthProvider> */}


  </React.StrictMode>,
)

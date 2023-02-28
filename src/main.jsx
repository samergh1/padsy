import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePageUrl, RegisterPageUrl, LoginPageUrl } from "./constants/urls"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage"
import { RegisterPage } from "./pages/RegisterPage/RegisterPage"
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { firestore } from "./firebase/config"
import './index.css'
import Chat from './pages/Chat/Chat'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>,
)

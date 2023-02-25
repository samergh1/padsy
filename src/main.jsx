import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePageUrl, RegisterPageUrl, LoginPageUrl, SearchPageurl } from "./constants/urls"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage"
import { RegisterPage } from "./pages/RegisterPage/RegisterPage"
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { firestore } from "./firebase/config"
import './index.css'
import { SearchPage } from './pages/SearchPage/SearchPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path={HomePageUrl} element={<HomePage/>} /> 
        <Route path={RegisterPageUrl} element={<RegisterPage/>} /> 
        <Route path={LoginPageUrl} element={<LoginPage/>} /> 
        <Route path={SearchPageurl} element={<SearchPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

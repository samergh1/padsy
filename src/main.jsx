import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<h1>Home Page</h1>} /> 
        <Route path='/register' element={<h1>Register Page</h1>} /> 

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPanel from './pages/AdminPanel';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>

    <Routes >
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />   
        <Route path='/admin-panel' element={<AdminPanel />}/>                 
    </Routes>

  </BrowserRouter>
);
